import * as React from 'react';

const Button = ({OnClick}) => {
    function test1(){
        OnClick();
    }
  return (
    <div>
      <button onClick = {test1} type="button">Click Me</button>
    </div>
  );
};

export default Button;