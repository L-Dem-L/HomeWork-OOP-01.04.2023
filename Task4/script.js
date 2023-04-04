class EmpTable {
    constructor(employees) {
        this.employees = employees;
    }

    getHtml() {
        let html = '<table>';
        html += '<thead><tr><th>ID</th><th>Name</th><th>Posiyion</th></tr></thead>';
        html += '<tbody>';

        for (let i = 0; i < this.employees.length; i++) {
            let employee = this.employees[i];
            html += `<tr><td>${employee.id}</td><td>${employee.name}</td><td>${employee.position}</td></tr>`;
        }

        html += '</tbody></table>';

        return html;
    }
}

class StyledEmpTable extends EmpTable {
    getStyles() {
        return '<style>table { border-collapse: collapse; } th, td { border: 1px solid black; padding: 5px; } th { background-color: #eee; }</style>';
    }

    getHtml() {
        return this.getStyles() + super.getHtml();
    }
}

let employees = [
    { id: 1, name: 'Ivan', position: 'Driver' },
    { id: 2, name: 'Petro', position: 'Pilot' },
    { id: 3, name: 'Maria', position: 'Operator' },
];

let table = new StyledEmpTable(employees);
document.body.innerHTML = table.getHtml();
