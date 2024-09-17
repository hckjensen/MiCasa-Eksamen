
//https://stackoverflow.com/questions/149055/how-to-format-numbers-as-currency-strings

const formatPrice = (price) => {
    return new Intl.NumberFormat('da-DK', { style: 'currency', currency: 'DKK' }).format(price);
}

export default formatPrice;