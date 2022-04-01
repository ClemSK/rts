const EventComponent: React.FC = () => {
  const onChange = (event: React.InputHTMLAttributes<HTMLInputElement>) => {
    console.log(event);
  };

  const OnDragStart = (event: React.DragEvent<HTMLDivElement>) => {
    console.log(event);
  };

  return (
    <div>
      <input onChange={onChange} />
      <div draggable onDragStart={OnDragStart}>
        Drag Me!
      </div>
    </div>
  );
};

export default EventComponent;
