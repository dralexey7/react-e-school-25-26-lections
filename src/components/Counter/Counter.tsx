import styles from "./Counter.module.css";

interface CounterProps {
  value: number;
  onChange: (value: number) => void;
  min?: number;
  max?: number;
}

export const Counter: React.FC<CounterProps> = ({
  value,
  onChange,
  min = 0,
  max = Number.MAX_SAFE_INTEGER,
}) => {
  const dec = () => {
    onChange(Math.max(min, value - 1));
  };

  const inc = () => {
    onChange(Math.min(max, value + 1));
  };

  return (
    <div className={styles.root} role="group" aria-label="Количество">
      <button
        type="button"
        className={styles.button}
        onClick={dec}
        disabled={value <= min}
        aria-label="Уменьшить"
      >
        -
      </button>
      <span className={styles.value} aria-live="polite">
        {value}
      </span>
      <button
        type="button"
        className={styles.button}
        onClick={inc}
        disabled={value >= max}
        aria-label="Увеличить"
      >
        +
      </button>
    </div>
  );
};
