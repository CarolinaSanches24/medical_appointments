export class HttpError extends Error{
    public code: number;
    public body?:object;

    constructor(code:number, message?:string, body?:object){
        super(message);
        this.name = 'HttpError';
        this.code= code;
        this.body=body;
    }
}