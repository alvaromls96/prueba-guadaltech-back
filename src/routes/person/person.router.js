import express from 'express';
import personService from './services/person.service.js';

const router = express.Router();

router.get('/', async (req, res) => {
  return res.send(await personService.index());
});

router.get('/:id', async (req, res) => {
  const person = await personService.show(req.params.id);
  if (!person) {
    return res.sendStatus(404);
  }

  return res.send(person);
});

router.post('/', async (req, res) => {
  await personService.store(req.body);

  res.sendStatus(201);
})

router.put('/:id', async (req, res) => {
  await personService.update(req.params.id, req.body);
  res.sendStatus(204);
});

router.delete('/:id', async (req, res) => {
  await personService.destroy(req.params.id);
  res.sendStatus(204);
});

export default router;