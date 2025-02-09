import { LAMBDA_EVENT_TYPE } from '../enum/lambda';

export type LambdaEvent = {
  pathParameters: LAMBDA_EVENT_TYPE;
};
