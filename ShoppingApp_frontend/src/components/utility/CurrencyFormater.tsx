const CURRENCY = Intl.NumberFormat(undefined, {
    currency: "EUR", style: "currency"
})


export function CurrencyFormater(number: number) {
    return CURRENCY.format(number)
}
