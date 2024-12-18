import data from '../companies.json' assert { type: "json" };

export const getaverageemployees = async ()  => {
    try{
       let total = 0
       data.map((company) => {
        console.log(total)
        total += parseInt(company.num_of_emp, 10);
       })
       return total/data.length;
    }catch(err){
        console.log(err)
    }
}

export const gettotalemployees = async ()  => {
    try{
        let total = 0
       data.map((company) => {
        total += parseInt(company.num_of_emp, 10);
       })
       return total
    }catch(err){
        console.log(err)
    }
}