import { Router } from "express";
import { getaverageemployeescontroller, gettotalemployeescontroller} from "../controllers/analytcs.controller.js";

const analyticsrouter = Router();
analyticsrouter.get("/getaverageemployees", getaverageemployeescontroller)
analyticsrouter.get("/gettotalemployees", gettotalemployeescontroller)
export default analyticsrouter;
