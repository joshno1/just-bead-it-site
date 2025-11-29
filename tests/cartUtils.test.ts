import { calculateSubtotal } from '../lib/cartUtils';

describe('calculateSubtotal', () => {
  it('returns 0 for empty list', () => {
    expect(calculateSubtotal([])).toBe(0);
  });

  it('calculates subtotal for multiple items', () => {
    const items = [
      { price: 10, quantity: 2 },
      { price: 5.5, quantity: 3 },
    ];
    expect(calculateSubtotal(items)).toBeCloseTo(10 * 2 + 5.5 * 3);
  });
});
