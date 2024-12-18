import React, { useState } from 'react';

function AddCompany() {
    const [company, setCompany] = useState({
        name: '',
        description: '',
        creationDate: '',
        numberOfEmployees: '',
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setCompany((prevCompany) => ({
            ...prevCompany,
            [name]: value,
        }));
    };

    const handleAdd = () => {
        console.log('Company details:', company);
        // Add logic to process the company details (e.g., API call)
    };

    return (
        <div>
            <label>
                Company Name:
                <input
                    type="text"
                    name="name"
                    value={company.name}
                    onChange={handleInputChange}
                    placeholder="Enter company name"
                />
            </label>
            <br />
            <label>
                Company Description:
                <input
                    type="text"
                    name="description"
                    value={company.description}
                    onChange={handleInputChange}
                    placeholder="Enter company description"
                />
            </label>
            <br />
            <label>
                Creation Date:
                <input
                    type="date"
                    name="creationDate"
                    value={company.creationDate}
                    onChange={handleInputChange}
                />
            </label>
            <br />
            <label>
                Number of Employees:
                <input
                    type="number"
                    name="numberOfEmployees"
                    value={company.numberOfEmployees}
                    onChange={handleInputChange}
                    placeholder="Enter number of employees"
                />
            </label>
            <br />
            <button onClick={handleAdd}>Add Company</button>
        </div>
    );
}

export default AddCompany;