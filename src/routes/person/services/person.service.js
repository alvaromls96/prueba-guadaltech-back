import { v4 as uuid } from 'uuid';
import db from '../../../core/services/database.js';
import Person from '../models/person.js';

class PersonService {

  /**
   * @async
   * @return {Promise<Person[]>}
   * @memberof PersonaService
   */
  async index() {
    // returned value is a two-length array, 0 contains rows and 1 informatino about the fields.
    return (await db.query('SELECT * FROM persons'))[0];
  }

  /**
   * @async
   * @param {string} id
   * @return {Promise<Person>} 
   * @memberof PersonService
   */
  async show(id) {
    return (await db.query(`SELECT * FROM persons where id='${id}'`))[0][0];
  }

  /**
   * @async
   * @param {PersonAPI} personAPI
   * @return {Promise<void>}
   * @memberof PersonService
   */
  async store(personAPI) {
    const person = new Person(uuid(), personAPI.name || '');
    await db.query(`INSERT INTO persons VALUES ('${person.id}', '${person.name}')`);
  }

  /**
   * @async
   * @param {string} id
   * @param {Person} person
   * @return {Promise<void>}
   * @memberof PersonService
   */
  async update(id, person) {
    person = {
      ...person,
      name: person.name || '',
    };
    await db.query(`UPDATE persons SET name='${person.name}' WHERE id='${id}'`);
  }

  /**
   * @async
   * @param {string} id
   * @return {Promise<void>}
   * @memberof PersonService
   */
  async destroy(id) {
    await db.query(`DELETE FROM persons WHERE id='${id}'`);
  }
}

export default new PersonService();