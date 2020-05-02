export const currencyFormat = num => {
  return 'R$' + num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, 'R$1,');
};
