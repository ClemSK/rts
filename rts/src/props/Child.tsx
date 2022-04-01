interface ChildProps {
  color: string;
  onClick: () => void;
}

// FC = function components
// 2 ways of declaring props

export const Child = ({ color, onClick }: ChildProps) => {
  return (
    <div>
      {color}
      <button onClick={onClick}>Click Me!</button>
    </div>
  );
};

// telling ts that this is going to be a react component specifically
export const ChildAsFC: React.FC<ChildProps> = ({
  color,
  onClick,
  children,
}) => {
  return (
    <div>
      {color}
      {children}
      <button onClick={onClick}>Click Me!</button>
    </div>
  );
};
