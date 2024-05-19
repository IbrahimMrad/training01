function test() {
    alert("Fatima");
}

function RenderStudents() {
    ddl_students = document.getElementById('ddl_students');
    fetch('https://training20240519.onrender.com/students')
      .then(response => response.json())
      .then(data => {
        data.forEach(student => {
            option = document.createElement('option');
            option.innerHTML = student.name;
            ddl_students.appendChild(option);
        });
      })
}

RenderStudents();