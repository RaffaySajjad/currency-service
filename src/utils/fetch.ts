import { CURRENCY_API } from '../constants/config';
import { API, API_MODE } from '../enum/api';
import { filterParams } from './preprocessing';

export const fetchData = async (
  endpoint: API,
  params?: Record<string, string>
) => {
  const apiKey = process.env.CURRENCY_API_KEY;
  const apiMode = (process.env.API_MODE as API_MODE) ?? API_MODE.MOCK;

  try {
    if (apiMode === API_MODE.MOCK) {
      return require(`../mock/${endpoint.toLowerCase()}.json`);
    }

    if (!apiKey) {
      throw new Error('API key is not set');
    }

    const whitelist = filterParams(params);
    const response = await fetch(
      `${CURRENCY_API.BASE_URL}/${endpoint}?${new URLSearchParams(whitelist)}`,
      {
        headers: {
          apikey: apiKey
        }
      }
    );
    return response.json();
  } catch (error) {
    console.error(error);
    throw error;
  }
};
