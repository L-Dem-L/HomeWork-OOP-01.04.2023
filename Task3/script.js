class Employee {
    constructor(id, firstName, lastName, position, salary) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.position = position;
        this.salary = salary;
    }
}

const employees = [
    new Employee(1, 'John', 'Doe', 'Manager', 5000),
    new Employee(2, 'Jane', 'Doe', 'Assistant Manager', 4000),
    new Employee(3, 'Bob', 'Smith', 'Teller', 3000),
    new Employee(4, 'Alice', 'Johnson', 'Teller', 3000),
];

class EmpTable {
    constructor(employees) {
        this.employees = employees;
    }

    getHtml() {
        let html = '<table>';
        html += `
        <tr>
            <th>
                ID
            </th>

            <th>
                First Name
            </th>

            <th>
                Last Name
            </th>

            <th>
                Position
            </th>

            <th>
                Salary
            </th>
        </tr>
        `;

        for (const employee of this.employees) {
            html += `<tr><td>${employee.id}</td><td>${employee.firstName}</td><td>${employee.lastName}</td><td>${employee.position}</td><td>${employee.salary}</td></tr>`;
        }

        html += '</table>';
        return html;
    }
}

const empTable = new EmpTable(employees);
document.write(empTable.getHtml());