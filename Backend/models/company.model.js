import data from '../companies.json' assert { type: "json" };
import fs from 'fs';


export const getdescriptioncountmodel = (description) => {
    try{
        const array = description.split(" ")
        return array.length
    }catch(err){
        console.log(err)
    }
}

export const getcompaniesmodel = ({name, minemployees, maxemployees, creationdate}) => {
    try{
            const fltereddata =  data.filter((company) => 
                {
                    const namefilter = name ? company.name && company.name.toLowerCase().includes(name.toLowerCase()): true;
                    const employeeflter = minemployees || maxemployees ? company.num_of_emp >= (minemployees || 0) && company.num_of_emp <= (maxemployees || Infinity) : true;
                    const creationfilter = creationdate ? company.created_at && new Date(company.created_at) >= new Date(creationdate) : true;
                    return namefilter && employeeflter && creationfilter;
                }
            );

            return [fltereddata, fltereddata.length]
    }catch(err){
        console.log(err)
    }
}

export const addcompany = async (company) => {
    try {
        const currentData = JSON.parse(fs.readFileSync("companies.json", "utf-8"));
        currentData.push(company);
        await fs.promises.writeFile("companies.json", JSON.stringify(currentData, null, 2), "utf-8");
        console.log("New company added successfully");
    } catch (err) {
        console.error("Error adding company:", err);
    }
};

export const deletecompany = async (name) => {
    try {
        const currentData = JSON.parse(fs.readFileSync("companies.json", "utf-8"));
        const filteredData = currentData.filter(company => company.name.toLowerCase() !== name.toLowerCase());
        if (filteredData.length === currentData.length) {
            console.log(`No company found with the name: ${name}`);
            return;
        }
        await fs.promises.writeFile("companies.json", JSON.stringify(filteredData, null, 2), "utf-8");
        console.log(`Company with the name '${name}' has been deleted successfully.`);
    } catch (err) {
        console.error("Error deleting company:", err);
    }
};

export const updatecompany = async (company) => {
    try{
        await deletecompany(company.name);
        await addcompany(company);
    }catch(err){
        console.log(err)
    }
}