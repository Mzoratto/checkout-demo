export function checkoutTotal({ subtotal, couponPercent = 0 }) {
  if (!Number.isFinite(subtotal) || subtotal < 0) throw new Error("subtotal must be non-negative");
  if (!Number.isFinite(couponPercent) || couponPercent < 0 || couponPercent > 100) {
    throw new Error("couponPercent must be between 0 and 100");
  }
  const discount = subtotal * couponPercent / 100;
  return Math.round((subtotal - discount) * 100) / 100;
}
