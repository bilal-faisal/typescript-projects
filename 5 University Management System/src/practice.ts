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
  students: Student[];
  teachers: Teacher[];
  sections: Section[];

  constructor(students: Student[], teachers: Teacher[], sections: Section[]) {
    this.students = students;
    this.teachers = teachers;
    this.sections = sections;
  }
}

class Human {
  name: string;
  id: string;
  age: string;

  constructor(name: string, id: string, age: string) {
    this.name = name;
    this.id = id;
    this.age = age;
  }
}

class Student extends Human {
  section: Section;
  constructor(name: string, id: string, age: string, section: Section) {
    super(name, id, age);
    this.section = section;
  }
}

class Teacher extends Human {
  sections: Section[];
  constructor(name: string, id: string, age: string, sections: Section[]) {
    super(name, id, age);
    this.sections = sections;
  }
}

class Section {
  timings: string;
  teachers: Teacher[];
  students: Student[];

  constructor(timings: string, teachers: Teacher[], students: Student[]) {
    this.timings = timings;
    this.teachers = teachers;
    this.students = students;
  }
}
