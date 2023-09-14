const FORMATER = new Intl.NumberFormat(undefined, {
  style: "currency",
  currency: "USD",
});

const formatCurrency = (value: number) => FORMATER.format(value);
export default formatCurrency;
