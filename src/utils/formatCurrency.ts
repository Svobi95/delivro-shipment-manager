export function formatCurrency(amount: number, currency: "CZK"): string {
  return new Intl.NumberFormat("cs-CZ", {
    style: "currency",
    currency
  }).format(amount);
}
