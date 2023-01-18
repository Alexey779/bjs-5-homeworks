
function Student(name, gender, age, ...marks) {
    this.name = name;
    this.gender = gender;
    this.age = age;
    this.marks = marks;
    this.marks = [];
}

Student.prototype.setSubject = function (subjectName) {
    this.subject = subjectName;
}

Student.prototype.addMarks = function (...marksToAdd) {
    
    if (this.marks) {
        this.marks.push(...marksToAdd)
    } 
}

Student.prototype.getAverage = function () {
    if (this.marks === undefined || (this.marks.length < 1)) {
        return 0
    } 
    let sum = 0;
    for (let i = 0; i < this.marks.length; i++) {
        sum += this.marks[i];
    }
    return sum / this.marks.length
}

Student.prototype.exclude = function (reason) {
    delete this.subject;
    delete this.marks;
    this.excluded = reason;
}
