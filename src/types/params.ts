import { CURRENCY_API_PARAMS } from '../enum/params';

export const ALLOWED_PARAMS = Object.values(CURRENCY_API_PARAMS);

export type AllowedParams = (typeof ALLOWED_PARAMS)[number];
