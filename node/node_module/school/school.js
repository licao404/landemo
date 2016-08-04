var klass = require('./class');
//创建一个学校school.js，包含很多班级
exports.add = function name(classes) {
    classes.forEach(function(item,index) {
        var _klass = item;
        var teacherName = item.teacherName;
        var students = item.students;

        klass.add(teacherName,students);
    });
}