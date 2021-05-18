import express from "express";
import routes from './routes/routes.js';

const app = express();
const port = process.env.PORT;

app.listen(port, () => {
  console.log(`listening on *:${port}`);
});

app.use(express.json());
app.use('/api/persons', routes.persons);