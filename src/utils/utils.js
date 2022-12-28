export const formatCurrency = currency => {
  return Number(currency.split('/')[0].split('$')[1]);
};
