export const sendToken = (user,statusCode,res,message)=>{
    const token = user.getJWTToken();

    const options = {
        expires: new Date(Date.now() + 30 * 24 * 60 * 60),
        httpOnly: true,
    };

    res.status(statusCode).cookie("token",token,options).json({
        success: true,
        user,
        message,
        token,
    })
}