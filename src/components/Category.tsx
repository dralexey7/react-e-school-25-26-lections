interface CategoryProps {
  name: string;
  onClick: () => void;
}

export const Category: React.FC<CategoryProps> = ({ name, onClick }) => {
  return <button onClick={onClick}>{name}</button>;
};
