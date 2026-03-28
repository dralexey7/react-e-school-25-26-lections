import { useState, useCallback, useEffect } from "react";

export const UseCallbackPage = () => {
  const [count, setCount] = useState(0);

  const handleIncrementUnstable = () => setCount((c) => c + 1);
  const handleIncrementStable = useCallback(
    () => setCount((c) => c + 1),
    []
  );

  return (
    <div>
      <h1>useCallback: с мемоизацией и без</h1>
      <p>Count: {count}</p>
      <button type="button" onClick={handleIncrementUnstable}>
        Re-render parent
      </button>
      <div style={{ display: "flex", gap: "24px", marginTop: "16px" }}>
        <TrackedChild
          onIncrement={handleIncrementUnstable}
          label="Без useCallback"
        />
        <TrackedChild
          onIncrement={handleIncrementStable}
          label="С useCallback"
        />
      </div>
    </div>
  );
};

interface TrackedChildProps {
  onIncrement: () => void;
  label?: string;
}

const TrackedChild: React.FC<TrackedChildProps> = ({
  onIncrement,
  label,
}) => {
  // Intentional: new value each render to show when this component re-renders
  // eslint-disable-next-line -- demo: render marker to illustrate re-renders
  const renderId = Math.random();
  const [effectRuns, setEffectRuns] = useState(0);

  useEffect(() => {
    setEffectRuns((r) => r + 1);
  }, [onIncrement]);

  return (
    <div
      style={{
        border: "1px solid var(--color-border-strong)",
        padding: "12px",
        minWidth: "200px",
      }}
    >
      <div>{label}</div>
      <div>Render id: {renderId}</div>
      <div>Effect runs: {effectRuns}</div>
      <button type="button" onClick={onIncrement}>
        +1
      </button>
    </div>
  );
};
