import express, { Express } from 'express';
import dotenv from 'dotenv';
import routes from './routes';
import { LambdaEvent } from './types/lambda';
import { LAMBDA_EVENT_TYPE } from './enum/lambda';
import { fetchData } from './utils/fetch';
import { API } from './enum/api';

dotenv.config();

const app: Express = express();
const port = process.env.PORT ?? 3000;

// Use routes
app.use('/', routes);

// For local development capability
if (process.env.NODE_ENV !== 'production') {
  app.listen(port, () => {
    console.log(
      `[server]: Server is running at http://localhost:${port} in '${process.env.API_MODE}' mode`
    );
  });
}

export const handler = async (event: LambdaEvent, context: any) => {
  console.log('Event received:', event);
  const { pathParameters } = event;

  switch (pathParameters) {
    case LAMBDA_EVENT_TYPE.LATEST:
      return await fetchData(API.LATEST);
    case LAMBDA_EVENT_TYPE.CURRENCIES:
      return await fetchData(API.CURRENCIES, {
        base_currency: 'USD'
      });
    default:
      console.error(`Error processing event: ${JSON.stringify(event)}`);
      throw new Error(`Invalid event type: ${pathParameters}`);
  }
};
