class ErorrHandler extends Error{
    constructor(message,statuCode){
        super(message);
        this.statuCode=statuCode
        Error.captureStackTrace(this,this.constructor);
    }
}

module.exports=ErorrHandler;