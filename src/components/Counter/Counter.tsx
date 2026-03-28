import styles from "./Counter.module.css";

interface CounterProps {
  value: number;
  increase: () => void;
  decrease: () => void;
  min?: number;
  max?: number;
}

export const Counter: React.FC<CounterProps> = ({
  value,
  increase,
  decrease,
  min = 0,
  max = Number.MAX_SAFE_INTEGER,
}) => {
  return (
    <div className={styles.root} role="group" aria-label="Количество">
      <button
        type="button"
        className={styles.button}
        onClick={decrease}
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
        onClick={increase}
        disabled={value >= max}
        aria-label="Увеличить"
      >
        +
      </button>
    </div>
  );
};
