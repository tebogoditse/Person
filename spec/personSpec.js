describe("Creating a Person", function() {

  it("Should get persons' info", function() {
    let person = new Person("Ryan", 30, "male", ["being a hardarse", "agile", "ssd hard drives"])
    let greeting = person.hello();
    expect(person.hello()).toBe("Hello, my name is Ryan and I am 30 years old. My interests are being a hardarse,agile,ssd hard drives.");
  });
  // it("Should be able to allocate a slot", function() {
  //   expect(calculator_instance.set_slot(1)).toBe(8);
  // });
  // it("Should be able to get allocated slot", function() {
  //   expect(calculator_instance.get_slot(1)).toBe(8);
  // });
  // it("Should be able to store memory of last calculation", function() {
  //   expect(calculator_instance.last()).toBe(8);
  // });

});
