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
        ]

        },
        {
                 name: 'Cubby the Minion',
                 salary: 75000,
                 subordinates: [] 
            }
    ]
}


