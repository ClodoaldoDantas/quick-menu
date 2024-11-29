export function parseToCents(value: string) {
  const price = Number(value.replace('R$ ', '').replace(',', '.'))
  const priceInCents = Math.round(price * 100)

  return priceInCents
}
