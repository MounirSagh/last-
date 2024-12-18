import { getaverageemployees, gettotalemployees } from "../models/analystics.model.js";
export const getaverageemployeescontroller = async (req,res)  => {
    try{
        const response = await getaverageemployees();
        return res.json({response})
    }catch(err){
        console.log(err)
    }
}

export const gettotalemployeescontroller = async (req,res)  => {
    try{
        const response = await gettotalemployees();
        return res.json({response})
    }catch(err){
        console.log(err)
    }
}