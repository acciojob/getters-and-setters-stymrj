//complete this code
class Person {
	constructor(n,a){
		this._name = n
		this._age = a
	}
	get name(){
		 return n
	 }
	set name(newName){
		this._name = newName
	}
	get age(){
		return a
	}
	set age(newAge){
		this._age = newAge
	}
}

class Student extends Person {
	constructor(){
		super(n,a)
		study(){
			console.log(`${this.n} is studying.`)
		}
	}
}

class Teacher extends Person {
	constructor(n,a){
		super(n,a)

		teach(){
			console.log(`${this.n} is teaching.`)
		}
	}
}

// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;
