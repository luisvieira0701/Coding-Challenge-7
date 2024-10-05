    //Task1-Create a Department Structure
    const GruEvilCompany = {
        departments: [{
            departmentName: 'Fart Guns',
            employees: [
            {
            name: 'Bob the Minion',
            salary: 60000,
            subordinates: [
                { name: 'Kevin the Minion',
                salary: 45000,
                subordinates: [
                        {   name: 'Stuart the Minion',
                            salary: 30000,
                            subordinates: []
                        }
                        ] 
                    }
                ]
            },
            {
            name: 'Dave the Minion',
            salary: 70000,
            subordinates: []
            }
        ]

            },
            {      
            departmentName: 'Jelly Guns',
            employees: [
                {
                    name: 'Carl the Minion',
                    salary: 80000,
                    subordinates: [
                        {   
                            name: 'Jerry the Minion',
                            salary: 30000,
                            subordinates: []

                                }
                    ]
                }
                ,
                {
                    name: 'Cubby the Minion',
                    salary: 75000,
                    subordinates: [] 
                }
            ]
            },
            
        ]
    }

//Task 2- Create a Recursive Function to Calculate Total Salary For a Department
    function calculateDepartmentSalary(departmentEmployees) {
            //Set totalSubordinateSalary to 0
            let totalDepartmentSalary = 0

        //Loop through the employees to see if they got subordinates
        for (let employee of departmentEmployees) {
            totalDepartmentSalary += employee.salary

            if (employee.subordinates.length > 0)  {
                    totalDepartmentSalary += calculateDepartmentSalary(employee.subordinates)     
        }
    }
        return totalDepartmentSalary
}   

    let DepartmentSalary = calculateDepartmentSalary(GruEvilCompany.departments[0].employees)
    console.log(`Total Salary for the Fart Guns department: $${DepartmentSalary}`)

//Task 3- Create a Function to Calculate the Total Salary for all Departments
function calculateCompanySalary(company) {
    let totalCompanySalary = 0;

    company.departments.forEach(department => {
        totalCompanySalary += calculateDepartmentSalary(department.employees);
    });
    return totalCompanySalary;
}

console.log(`Total Salary for Gru's Evil Company: $${calculateCompanySalary(GruEvilCompany)}`);
