import { useState } from "react";

export const FibonacciPage = () => {
  const [showFibonacci, setShowFibonacci] = useState(false);

  const calculateFibonacci = (n: number): number => {
    if (n <= 1) return n;
    return calculateFibonacci(n - 1) + calculateFibonacci(n - 2);
  };

  const fibonacciValues = new Map<number, number>();

  const cachedCalculateFibonacci = (n: number): number => {
    if (n <= 1) return n;
    if (fibonacciValues.get(n)) return fibonacciValues.get(n)!;
    const value =
      cachedCalculateFibonacci(n - 1) + cachedCalculateFibonacci(n - 2);
    fibonacciValues.set(n, value);
    return value;
  };

  const handleClick = () => {
    setShowFibonacci(!showFibonacci);
  };
  const start = 25;
  const end = 38;

  return (
    <div>
      <h1>Memoization</h1>
      {showFibonacci && (
        <div style={{ display: "flex", gap: "48px" }}>
          <div>
            {Array.from(
              { length: end - start },
              (_, index) => index + start
            ).map((index) => (
              <FibonacciComponent
                calculateFibonacci={calculateFibonacci}
                n={index}
                key={index}
              />
            ))}
          </div>
          <div>
            {Array.from(
              { length: end - start },
              (_, index) => index + start
            ).map((index) => (
              <FibonacciComponent
                calculateFibonacci={cachedCalculateFibonacci}
                n={index}
                key={index}
              />
            ))}
          </div>
        </div>
      )}

      <button onClick={handleClick}>Click</button>
    </div>
  );
};

interface ChildComponentProps {
  calculateFibonacci: (n: number) => number;
  n: number;
}

const FibonacciComponent: React.FC<ChildComponentProps> = ({
  calculateFibonacci,
  n,
}) => {
  const before = new Date();
  const value = calculateFibonacci(n);
  const time = new Date().getTime() - before.getTime();

  return (
    <div>
      n: {n}, value: {value}, time: {time}ms
    </div>
  );
};
