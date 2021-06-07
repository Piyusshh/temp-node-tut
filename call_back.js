const students = [
    {name: "piyush", subject: "javascript"},
    {name: "harshal", subject: "Machine learning"}
]

function enrollStudents(student, callback){
    setTimeout(function(){
        students.push(student)
        console.log(`Student has been enrolled`);
        callback();
    }, 3000);
}

function getStudents(){

    setTimeout(function(){
        students.forEach(student => {
            console.log(student.name);
        });
        console.log(`Student has been fetched`);
    },1000)

}

let newStudent = {name: "Revin", subject: "data structer"};

enrollStudents(newStudent, getStudents);
getStudents();
