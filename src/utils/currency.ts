export const amountFormat = (
  amount: number = 0,
  currency: string,
  signDisplay: Intl.NumberFormatOptions["signDisplay"] = "exceptZero",
  notation: "compact" | "standard" | "scientific" | "engineering" = "standard",
  format: string = "en-EN"
) => {
  return new Intl.NumberFormat(format, {
    style: "currency",
    currency,
    notation,
    signDisplay,
    maximumFractionDigits: 2,
    minimumFractionDigits: 2,
  }).format(amount);
};
