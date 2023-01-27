import Student from "./Student.js";
import Instructor from "./Instructor.js";
import Course from "./Course.js";
import Department from "./Department.js";


let student1 = new Student("Bilal", 21, "BITF19A516");
let student2 = new Student("Junaid", 21, "BITF19A512");
let student3 = new Student("Saba", 23, "BITF19A518");

let instructor1 = new Instructor("Zia", 60, 500000);
let instructor2 = new Instructor("Ali", 30, 100000);
let instructor3 = new Instructor("Adil", 35, 300000);

let course1 = new Course("web3.0");
let course2 = new Course("metaverse");
let course3 = new Course("TS");

let departmenet1 = new Department("Computer Science");
let departmenet2 = new Department("Software Engineering");
let departmenet3 = new Department("Information Technology");


student1.registerForCourses(course1,course2);

instructor1.assignCourses(course1)

departmenet1.addCourses(course1);

departmenet1.addCourses(course3);
departmenet1.addCourses(course3);
