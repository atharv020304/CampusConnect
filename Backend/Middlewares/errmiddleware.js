class errHandler extends Error {
    constructor(statusCode , message){
        super(message);
        this.statusCode = statusCode;
    }
}

export const errMiddleware = (err,req,res,next) =>{

    err.statusCode = err.statusCode || 500;
    err.message = err.message || "Server error";

    if(err.name === "CastError"){
        const message = `Invalid ${err.path}`;
        err = new errHandler(400,message);
    }

    if(err.code === 11000){
        const message = `Duplicate entry ${Object.keys(err.keyValue)} entered`;
        err = new errHandler(400,message);
    }

    if(err.name === "JsonWebTokenError") {
        const message = "Your token is invalid. Please log in again";
        err = new errHandler(400,message);
    }

    if(err.name === "TokenExpiredError") {
        const message = "Your token has expired. Please log in again";
        err = new errHandler(400,message);
    }

    //err return kartoy apn
    return res.status(err.statusCode).json({
        success: false,
        message: err.message
    });
};

export { errHandler};