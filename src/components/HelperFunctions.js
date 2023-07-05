 export const formatter = new Intl.NumberFormat(undefined, {
    style: 'currency',
    currency: 'USD',

})

 export const formatPercentage = (amt) => {
    return amt.toLocaleString(undefined, {
        style: 'percent',
        minimumFractionDigits: 0,
    })
}