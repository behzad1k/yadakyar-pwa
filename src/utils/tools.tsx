const isEmpty = (obj: any) => {
  return Object.keys(obj).length === 0
}

const formatPrice = (price: number = 1, min = 0, max = 8) => {
  return price.toLocaleString('en-US', {
    minimumFractionDigits: min,
    maximumFractionDigits: max,
  });
};

export default {
  isEmpty,
  formatPrice,
};