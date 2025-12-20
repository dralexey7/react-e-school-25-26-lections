interface CategoryProps {
  name: string;
  onClick: () => void;
}

export const Category: React.FC<CategoryProps> = ({ name, onClick }) => {
  return (
    <div>
      <button onClick={onClick}>{name}</button>
    </div>
  );
};
