const PerformanceCalculator = (runs, balls) => {
  if (balls <= 50 && runs >= 100) {
    return ((runs / balls) * 1.2).toFixed(2);
  } else if (balls <= 20 && runs >= 50) {
    return ((runs / balls) * 1.1).toFixed(2);
  } else if (balls <= 15 && runs >= 30) {
    return ((runs / balls) * 1.01).toFixed(2);
  }
  return (runs/balls).toFixed(2);
};

module.exports = { PerformanceCalculator };
