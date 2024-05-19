import { HttpError } from "./httpError";

export interface UseCase<IRequest, IResponse>{
    execute(request?:IRequest):Promise<IResponse> | IResponse;
}

export class UseCaseError extends HttpError{
    constructor(message:string, code:number){
        super(code, message);
        console.log(message);
        this.name=this.constructor.name;
    }
}