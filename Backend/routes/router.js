import { Router } from "express";
import companyrouter from "./company.routes.js";
import analyticsrouter from "./analytics.routes.js";
const apirouter = Router()

apirouter.use('/company', companyrouter);
apirouter.use('/analytics', analyticsrouter);

export default apirouter;