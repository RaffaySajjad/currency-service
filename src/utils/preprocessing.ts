import { ALLOWED_PARAMS, AllowedParams } from '../types/params';

/**
 * Filters the params to avoid sending unexpected/ undesired params to the API
 */
export const filterParams = (
  params: Record<string, string> = {}
): Partial<Record<AllowedParams, string>> =>
  Object.fromEntries(
    Object.entries(params).filter(([key]) =>
      ALLOWED_PARAMS.includes(key as AllowedParams)
    )
  );
