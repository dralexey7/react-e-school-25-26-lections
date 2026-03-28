import cn from "classnames";
import styles from "./Category.module.css";

interface CategoryProps {
  name: string;
  isSelected: boolean;
  onClick: () => void;
}

export const Category: React.FC<CategoryProps> = ({
  name,
  isSelected,
  onClick,
}) => {
  return (
    <button
      type="button"
      className={cn(styles.button, isSelected && styles.buttonSelected)}
      onClick={onClick}
      aria-pressed={isSelected}
    >
      {name}
    </button>
  );
};
