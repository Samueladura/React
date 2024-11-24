import React from 'react';

const ChildTwo = () => {
    console.log('ChildOne Render')
  return (
    <div>
      ChildTwo Component
    </div>
  );
}

export const MemoizedChildTwo = React.memo(ChildTwo)

export default ChildTwo;
