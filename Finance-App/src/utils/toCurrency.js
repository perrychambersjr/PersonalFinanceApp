export const toCurrency = (amount) => {
    return `$ ${amount.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
}

export const toCurrencyNoDecimal = (amount) => {
    return `$${amount.toLocaleString()}`;
}