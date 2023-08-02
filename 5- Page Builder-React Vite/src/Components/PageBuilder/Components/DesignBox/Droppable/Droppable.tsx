import {useDroppable} from '@dnd-kit/core';

type DroppableProps = {
  id: string;
  children: React.ReactNode;
};

const Droppable: React.FC<DroppableProps> = ({id, children}) => {
  const {isOver, setNodeRef} = useDroppable({
    id,
  });
  const style = {
    opacity: isOver ? 1 : 0.5,
  };

  return (
    <div ref={setNodeRef} style={style}>
      {children}
    </div>
  );
};

export default Droppable;
