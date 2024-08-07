import {connectToDB} from "@utils/database";
import User from "@models/user";

export const GET =async()=>{
    try{
        await connectToDB();
    }catch(err){
        console.log(err);
    }
}