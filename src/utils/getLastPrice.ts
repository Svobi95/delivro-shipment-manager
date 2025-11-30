export function getLastPrice(invoices: { invoicedPrice: number }[]): number {
  if (invoices.length === 0) {
    return 0;
  }

  const lastInvoice = invoices[invoices.length - 1];
  return lastInvoice?.invoicedPrice || 0;
}
