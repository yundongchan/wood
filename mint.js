function User (firstName, lastName, age, gender){
	this.firstName = firstName;
	this.lastName = lastName;
	this.age = age;
	this.gender = gender;
}
User.emailDomain = "yundf12@naver.com";
var user1 = new User("seed", "smith", 27, "male");

var user200 = new User("mint", "robinson", 25, "female");
User.getEmailAddress = function(){
	return this.firstName + this.lastName + this.emailDomain;
}


console.log(user1);
console.log(User.emailDomain);
