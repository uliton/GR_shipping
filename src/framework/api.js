const URL_API = 'http://api.nbp.pl/api/exchangerates/rates/c/usd/today/';

export const getExchangeRate = async () => {
  const response = await fetch(`${URL_API}?format=json`);

  return response.json();
}


const COPART_API = 'www.copart.com/ru/lot/62947712/'

export const getCop = async () => {
  const responce = await fetch(`${COPART_API}`);

  return responce;
}