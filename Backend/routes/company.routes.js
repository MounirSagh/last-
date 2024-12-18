import { Router } from "express";
import { getdescriptioncountcontroller, getcompaniescontroller, addcompanycontroller, deletecompanycontroller, updatecompanycontroller} from "../controllers/company.controller.js";

const companyrouter = Router()

companyrouter.get('/getdescriptioncount', getdescriptioncountcontroller);
companyrouter.get('/getcompanies', getcompaniescontroller);
companyrouter.get('/addcompany', addcompanycontroller);
companyrouter.get('/deletecompany', deletecompanycontroller);
companyrouter.get('/updatecompany', updatecompanycontroller);


export default companyrouter;