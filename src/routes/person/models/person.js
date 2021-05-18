class Person {
  id;
  name;

  /**
   * Creates an instance of Person.
   * @param {string} id
   * @param {string} name
   * @memberof Person
   */
  constructor(id, name) {
    this.id = id;
    this.name = name;
  }
}

export default Person;