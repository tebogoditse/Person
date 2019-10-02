describe("Creating a Person", function() {

  it("Should get Ryan' info", function() {
    let person = new Person("Ryan", 30, "male", ["being a hardarse", " agile", "ssd hard drives"])
    let greeting = person.hello();
    expect(greeting).toBe(`Hello, my name is Ryan and I am a 30 year old male. My interests are being a hardarse, agile and ssd hard drives`);
  });

  it("Should get Sindi' info", function() {
    let person = new Person("Sindi", 25, "female", ["reading", " philosophy", " science", "politics"])
    let greeting = person.hello();
    expect(greeting).toBe(`Hello, my name is Sindi and I am a 25 year old female. My interests are reading, philosophy, science and politics`);
  });

  it("Should get Malaika' info", function() {
    let person = new Person("Malaika", 17, "female", ["song writing", " singing", " exercising", " fashion", "cooking"])
    let greeting = person.hello();
    expect(greeting).toBe(`Hello, my name is Malaika and I am a 17 year old female. My interests are song writing, singing, exercising, fashion and cooking`);
  });

  it("Should get Opolopo' info", function() {
    let person = new Person("Opolopo", 21, "male", ["soccer", "cricket"])
    let greeting = person.hello();
    expect(greeting).toBe(`Hello, my name is Opolopo and I am a 21 year old male. My interests are soccer and cricket`);
  });

});
