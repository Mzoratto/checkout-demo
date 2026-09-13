import assert from "node:assert/strict";
import test from "node:test";
import { checkoutTotal } from "../../services/checkout/total.js";

test("applies a coupon exactly once", () => {
  assert.equal(checkoutTotal({ subtotal: 100, couponPercent: 10 }), 90);
});

test("preserves a subtotal without a coupon", () => {
  assert.equal(checkoutTotal({ subtotal: 42.75 }), 42.75);
});

test("rejects invalid coupon percentages", () => {
  assert.throws(() => checkoutTotal({ subtotal: 100, couponPercent: 101 }), /between 0 and 100/);
});
