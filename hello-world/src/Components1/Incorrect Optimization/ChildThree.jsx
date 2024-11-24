import React from 'react';

const ChildThree = ({childern, name}) => {
    console.log('ChildThree Render')
  return (
    <div>
      {childern} {name}
    </div>
  );
}

export const MemoizedChildThree = React.memo(ChildThree)

export default ChildThree;
