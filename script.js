var students = []; 

function addStudent(rowNum, name, location, cgpa) {
  var student = { rowNum: rowNum, name: name, location: location, cgpa: cgpa };
  students.push(student);
}

function removeStudent(rowNum) {
  for (var i = 0; i < students.length; i++) {
    if (students[i].rowNum === rowNum) {
      students.splice(i, 1);
      return;
    }
  }
}

function addRow() {
  var rowNum = students.length + 1;
  var name = ""; 
  var location = ""; 
  var cgpa = ""; 
  addStudent(rowNum, name, location, cgpa);

  
}

function deleteRow(rowNum) {
  removeStudent(rowNum);


}
