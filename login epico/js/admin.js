const table = document.querySelector(".container #box-table");
const selectFilter = document.querySelector("#filter");
const boxValueFilter = document.querySelector("#box-value");

const students = [
    {
        code: "18200153",
        fullName: "Eddie Huancahuire",
        email: "ejhuancahuire@gmail.com",
        cycle: 7,
        age: 21,
        state: true
    },
    {
        code: "18200432",
        fullName: "Juan Perez",
        email: "jperez@gmail.com",
        cycle: 5,
        age: 20,
        state: false
    },
    {
        code: "18200003",
        fullName: "Erick Verde",
        email: "everde@gmail.com",
        cycle: 4,
        age: 20,
        state: true
    },
    {
        code: "18200100",
        fullName: "Luis Román",
        email: "lroman@gmail.com",
        cycle: 9,
        age: 24,
        state: false
    },
    {
        code: "18200054",
        fullName: "Julia Aguilar",
        email: "jaguilar@gmail.com",
        cycle: 7,
        age: 22,
        state: true
    },
    {
        code: "18200160",
        fullName: "Jorge Dávila",
        email: "jdavila@gmail.com",
        cycle: 5,
        age: 19,
        state: true
    },
    {
        code: "18200521",
        fullName: "Esther Rodriguez",
        email: "erodriguez@gmail.com",
        cycle: 9,
        age: 23,
        state: true
    },
    {
        code: "18200001",
        fullName: "David Mendoza",
        email: "dmendoza@gmail.com",
        cycle: 4,
        age: 19,
        state: true
    },
    {
        code: "18200021",
        fullName: "Franco Paz",
        email: "fpaz@gmail.com",
        cycle: 3,
        age: 18,
        state: true
    }
];

let arrayFilter = students;

selectFilter.addEventListener('change', (e) => {
    switch(e.target.value) {
        case '':
            arrayFilter = students;
            boxValueFilter.innerHTML = '';
            table.innerHTML = createContentTable(arrayFilter);
            break;
        case 'code':
            boxValueFilter.innerHTML = `<label class="form-label">Valor:</label>
            <input type="text" id="input-code" class="form-control" placeholder="Digite codigo">`;
            const inputCode = document.querySelector("#input-code");
            inputCode.addEventListener("input", (e) => {
                let val = e.target.value;
                arrayFilter = students.filter(student => student.code.startsWith(val));
                (arrayFilter.length > 0) ? table.innerHTML = createContentTable(arrayFilter): table.innerHTML = '<div class="alert alert-danger w-100 text-center">No se encontraron coincidencias</div>';
            });
            break;
        case 'state':
            boxValueFilter.innerHTML = `<label class="form-label">Valor:</label>
                                        <select id="filter-state" class="form-control">
                                            <option value="" selected>Seleccione una opcion</option>
                                            <option value="active">Activo</option>
                                            <option value="inactive">Inactivo</option>
                                        </select>`;
            const filterState = document.querySelector("#filter-state");
            filterState.addEventListener("change", (e) => {
                switch(e.target.value) {
                    case '':
                        arrayFilter = students;
                        table.innerHTML = createContentTable(arrayFilter);
                        break;
                    case 'active':
                        arrayFilter = students.filter(student => student.state);
                        (arrayFilter.length > 0) ? table.innerHTML = createContentTable(arrayFilter): table.innerHTML = '<div class="alert alert-danger w-100 text-center">No hay alumnos activos</div>';
                        break;
                    case 'inactive':
                        arrayFilter = students.filter(student => !student.state);
                        (arrayFilter.length > 0) ? table.innerHTML = createContentTable(arrayFilter): table.innerHTML = '<div class="alert alert-danger w-100 text-center">No hay alumnos inactivos</div>';
                        break;
                }
            });
            break;
        case 'cycle':
            boxValueFilter.innerHTML = `<label class="form-label">Valor:</label>
                                        <select id="filter-cycle" class="form-control">
                                            <option value="" selected>Seleccione una opcion</option>
                                            <option value="2">2</option>
                                            <option value="3">3</option>
                                            <option value="4">4</option>
                                            <option value="5">5</option>
                                            <option value="6">6</option>
                                            <option value="7">7</option>
                                            <option value="8">8</option>
                                            <option value="9">9</option>
                                            <option value="10">10</option>
                                        </select>`;
            const filterCycle = document.querySelector("#filter-cycle");
            filterCycle.addEventListener("change", (e) => {
                let val = e.target.value;
                if(val){
                    arrayFilter = students.filter(student => student.cycle == val);
                    (arrayFilter.length > 0) ? table.innerHTML = createContentTable(arrayFilter): table.innerHTML = `<div class="alert alert-danger w-100 text-center">No se encontraron alumnos en el ${val} ciclo</div>`;
                }else {
                    arrayFilter = students;
                    table.innerHTML = createContentTable(arrayFilter);
                }
            });
            break;
    }
});

const createContentTable = (data) => {
    let headTable = `<table class="table table-striped"><thead class="thead-dark">
                        <th>Codigo</th>
                        <th>Nombres</th>
                        <th>Email</th>
                        <th>Estado</th>
                        <th>Acciones</th>
                    </thead>`;
    let bodyTable = '<tbody>';
    for (let i = 0; i < data.length; i++) {
        let row = '';
        if (i == data.length - 1) {
            row = `<tr>
                    <td>${data[i].code}</td>
                    <td>${data[i].fullName}</td>
                    <td>${data[i].email}</td>
                    <td>${data[i].state ? '<span class="badge badge-secondary" style="font-size: 1.08rem">Activo</span>' : '<span class="badge badge-danger" style="font-size: 1.08rem">Inactivo</span>'}</td>
                    <td><button class="btn btn-warning">Ver detalles</button></td>
                   </tr></tbody></table>`;
        } else {
            row = `<tr>
                    <td>${data[i].code}</td>
                    <td>${data[i].fullName}</td>
                    <td>${data[i].email}</td>
                    <td>${data[i].state ? '<span class="badge badge-secondary" style="font-size: 1.08rem">Activo</span>' : '<span class="badge badge-danger" style="font-size: 1.08rem">Inactivo</span>'}</td>
                    <td><button class="btn btn-warning">Ver detalles</button></td>
                   </tr>`;
        }
        bodyTable += row;
    }
    return headTable + bodyTable;
};

table.innerHTML = createContentTable(arrayFilter);