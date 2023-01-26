// university,
// human,
// studet, teacher
// two arrays in university std n teacher
// section class
// no of sections in university
// timings
// who is teacher
// who is student
class University {
    students;
    teachers;
    sections;
    constructor(students, teachers, sections) {
        this.students = students;
        this.teachers = teachers;
        this.sections = sections;
    }
}
class Human {
    name;
    id;
    age;
    constructor(name, id, age) {
        this.name = name;
        this.id = id;
        this.age = age;
    }
}
class Student extends Human {
    section;
    constructor(name, id, age, section) {
        super(name, id, age);
        this.section = section;
    }
}
class Teacher extends Human {
    sections;
    constructor(name, id, age, sections) {
        super(name, id, age);
        this.sections = sections;
    }
}
class Section {
    timings;
    teachers;
    students;
    constructor(timings, teachers, students) {
        this.timings = timings;
        this.teachers = teachers;
        this.students = students;
    }
}
export {};
