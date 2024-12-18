import { getdescriptioncountmodel, getcompaniesmodel, addcompany, deletecompany, updatecompany } from "../models/company.model.js"

export const getdescriptioncountcontroller = async (req, res) => {
    try{
        const response = await getdescriptioncountmodel(req.body.description)
        return res.json({response})
    }catch(err){
        console.log(err)
    }
}

export const getcompaniescontroller = async (req, res) => {
    try{
        const response = await getcompaniesmodel(req.body)
        return res.json({response})
    }catch(err){
        console.log(err)
    }
}

export const addcompanycontroller = async (req, res) => {
    try{
        const response = await addcompany(req.body)
        return res.json({response})
    }catch(err){
        console.log(err)
    }
}

export const deletecompanycontroller = async (req, res) => {
    try{
        const response = await deletecompany(req.body)
        return res.json({response})
    }catch(err){
        console.log(err)
    }
}

export const updatecompanycontroller = async (req, res) => {
    try{
        const response = await updatecompany(req.body)
        return res.json({response})
    }catch(err){
        console.log(err)
    }
}
