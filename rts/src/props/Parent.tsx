import { ChildAsFC } from './Child';

const Parent = () => {
  return (
    <ChildAsFC color="red" onClick={() => console.log('Clicked')}>
      This is a message
    </ChildAsFC>
  );
};

export default Parent;
