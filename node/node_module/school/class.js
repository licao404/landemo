var student = require('./student'),
    teacher = require('./teacher');
//传建一个班级，有一个老师和若干学生组成
function add(teacherName,students) {
    teacher.add(teacherName);
    students.forEach(function(item,index){
        student.add(item);
    });
}

exports.add = add;