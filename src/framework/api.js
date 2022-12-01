const URL_API = 'http://api.nbp.pl/api/exchangerates/rates/c/usd/today/';

export const getExchangeRate = async () => {
  const response = await fetch(`${URL_API}?format=json`);

  return response.json();
}
