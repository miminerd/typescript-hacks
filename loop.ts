
  const orders = [500, 30, 99, 15, 223];

  // 'Good Loop Code 🌒'
  let total = 0;
  let withTax = [];
  let highValue = [];
    // tslint:disable-next-line:prefer-for-of
  for (let i = 0; i < orders.length; i++) {
        // Reduce
        total += orders[i];
        // Map
        withTax.push(orders[i] * 1.1);
        // Filter
        if (orders[i] > 100) {
            highValue.push(orders[i]);
        }
  }

  // 'Good Loop Code ✅';

    // Reduce
  total = orders.reduce((acc, cur) => acc + cur);
    // Map
  withTax = orders.map(v => v * 1.1);
    // Filter
  highValue = orders.filter(v => v > 100);


