class Person{
  constructor(name, age, gender, interests){
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.interests = interests;
    this.getInfo = function() {
      let last = this.interests.pop();
      return `Hello, my name is ${this.name} and I am a ${this.age} year old ${this.gender}. My interests are ${this.interests} and `+last;
    };
  }

  hello(){
    return this.getInfo();
  }
}
