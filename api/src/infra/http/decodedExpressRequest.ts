import {Request} from 'express';

export interface DecodedExpressRequest  extends Request{
    token:string;
    user:{
        pid:string;
        id:number;
        role:{
            id:number;
            name:string;
        };
        email:string;
    };
}