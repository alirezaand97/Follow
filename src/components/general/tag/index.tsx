interface Props {
  label: string;
  keyName: string;
  isSelected?: boolean;
  onClick?: (label: string) => void;
}

const Tag = ({ isSelected, keyName, label, onClick }: Props) => {
  const handleChange = () => {
    onClick && onClick(label);
  };

  return (
    <div onClick={handleChange}>
      <p
        className={`border border-green-1 rounded px-4 py-1 h-auto ${
          isSelected ? "bg-green-1 text-white" : " text-black"
        }`}>
        {label}
      </p>
    </div>
  );
};

export default Tag;
