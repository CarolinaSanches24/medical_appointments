import { NextFunction, Response } from "express";
import { DecodedExpressRequest } from "../../../../infra/http/decodedExpressRequest";
import jwt from 'jsonwebtoken';
import { env } from "../../../../utils/dotenv/env";
import { PublicJwtPayload } from "../../domain/core/jwtPayload";
import { redisClient } from "../../../../services";

export class UserMiddleware{
   
    public ensureAutheticated(callNext: boolean  = true){
        return async (req:DecodedExpressRequest, res:Response, next:NextFunction)=>{
            const token = req.headers.authorization;

            if (!token) return res.status(401).json({error: 'Missing authorization header'});

            const tokenValue = token.split(' ')[1];

            
            let publicDecoded: PublicJwtPayload ;

            try{
                publicDecoded = jwt.verify(tokenValue, env.variables.JWT_SECRET) as PublicJwtPayload;
                const privateToken = await redisClient.get(publicDecoded.userId);
                if (!privateToken) return res.status(401).json({message: 'User not authenticated'});
                
            }catch (err) {
                if (err instanceof Error) {
				return res.status(401).json({message: 'Invalid token', details: err.message});
                }
            }
           
           
        }
    }
}
