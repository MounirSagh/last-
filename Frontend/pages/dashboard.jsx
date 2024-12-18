import axios from "axios";
import { useState, useEffect } from "react";


function dashboard() {
  const [companies, setCompanies] = useState([]);
  const [companiescount, setCompaniescount] = useState([]);
  

  useEffect(() => {
    const fetchCompanies = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/company/getcompanies'); 
        setCompanies(response.data.response[0]); 
        setCompaniescount(response.data.response[1]);
      } catch (error) {
        console.error("Error fetching companies:", error);
      }
    };

    

    fetchCompanies();
  }, []); 


  return (
    <main  className="h-screen w-screen bg-white">
      <h1 className="text-black font-bold text-2xl">Companies List</h1>
      <h1 className="text-black">Total Companies: {companiescount}</h1>
      <ul>
    {companies.map((company, index) => (
      <li
        key={index}
      >
        <div>
          Company Name: {company.name}
        </div>
        <div>
          Company Description: {company.description}
        </div>
        <div>
          Company Creation Date: {company.created_at}
        </div>
        <div>
          Company Number of Employees: {company.num_of_emp}
        </div>
      </li>
    ))}
  </ul>
    </main>
  );
}

export default dashboard;