const calculateNewBalance = (amount: number, actualBalance: number, bankingMethod: string) => {
  if (bankingMethod.includes('saque')) return (actualBalance - amount);

  const depositMethod = actualBalance + amount;

  return depositMethod;
};

export default calculateNewBalance;
