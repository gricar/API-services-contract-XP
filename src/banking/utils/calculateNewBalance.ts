const calculateNewBalance = (amount: number, actualBalance: number, isWithdraw: boolean) => {
  if (isWithdraw) return (actualBalance - amount);

  const depositMethod = actualBalance + amount;

  return depositMethod;
};

export default calculateNewBalance;
