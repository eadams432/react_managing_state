import React from 'react';

const NumberDisplay = (props) => {
  return(<p className="text">{`${props.value1} + ${props.value2} + ${props.value3} = ${props.proposedAnswer}`}</p>);
}

export default NumberDisplay;