export function makePrice(currency: string | undefined, price: string | undefined) {
  if (currency === undefined) return null;
  if (price === undefined) return null;
  if (currency === "USD") return "$" + price;
  if (currency === "EUR") return "€" + price;
  return price + " GBP";
}

export function ellipsis(title: string | undefined) {
  if (title === undefined) return null;
  if (title.length > 50) return title.slice(0, 49) + "...";
}

export function level(quantity: number | undefined) {
  if (quantity === undefined) return null;
  if (quantity <= 10) return "low";
  if (quantity <= 20) return "medium";
  return "high";
}