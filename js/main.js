class Clase {
    constructor() {
        this.alumnos = []
    }

    agregarAlumno(alumno) {
        this.alumnos.push(alumno)
    }

    calcularPromedio() {
        let notas = 0;
        let alumnos = this.alumnos.length

        for(const alumno of this.alumnos) {
            notas += alumno.nota 
        }

        if(alumnos > 0) {
            return (notas / alumnos)
        } else {
            return 0
        }
    }
}

class Alumno {
    constructor(nombre, nota) {
        id++
        this.id = id
        this.nombre = nombre
        this.nota = nota
    }
}

let clase = new Clase();
let id = 0;

function cargarAlumno(nombre,nota) {

    const alumno = new Alumno(nombre, nota)
    let students;
    clase.agregarAlumno(alumno);

    let studentsLS = JSON.parse(localStorage.getItem("students"))
    if(studentsLS){
        students = studentsLS
    } else {
        students = []
    }

    students.push(alumno);

    let studentsList = document.querySelector("#students tbody")

    let newStudent = document.createElement("tr")
    newStudent.innerHTML = `
    <tr>
        <th scope="row">${alumno.id}</th>
        <td>${alumno.nombre}</td>
        <td>${alumno.nota}</td>
    </tr>
    `
    studentsList.appendChild(newStudent)

    localStorage.setItem("students",JSON.stringify(students))
}

function simulador() {
    localStorage.removeItem("students")

    let addButton = document.getElementById("addBtn");
    addButton.addEventListener("click",()=>{
        const name = document.getElementById("name").value
        const rating = parseFloat(document.getElementById("rating").value)

        cargarAlumno(name,rating);
    })

    let averageBtn = document.getElementById("averageBtn");
    averageBtn.addEventListener("click",()=>{
        let promedio = clase.calcularPromedio()
        let average = document.createElement("p")
        average.innerHTML = `El promedio es ${promedio}`
        document.body.appendChild(average)
    })
}

simulador()