import mongoose from "mongoose";

export const connection = ()=>{

    mongoose.connect(process.env.MONGO_URL ,{
        dbName: "CampusConnect"
    }).then(()=>{
        console.log("Connected to Database");
    }).catch(err => {
        console.log(err);
    })

}