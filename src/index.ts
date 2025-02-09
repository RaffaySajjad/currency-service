import express, { Express } from 'express';
import dotenv from 'dotenv';
import routes from './routes';

dotenv.config();

const app: Express = express();
const port = process.env.PORT ?? 3000;

// Use routes
app.use('/', routes);

app.listen(port, () => {
  console.log(
    `[server]: Server is running at http://localhost:${port} in '${process.env.API_MODE}' mode`
  );
});
