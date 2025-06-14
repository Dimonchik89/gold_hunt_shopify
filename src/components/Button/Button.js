import React from 'react';

const Button = ({ text, value, objectKey, handleClick }) => {
  return (
    <button className="button" onClick={() => handleClick(objectKey, value)}>
      <span className="circle1"></span>
      <span className="circle2"></span>
      <span className="circle3"></span>
      <span className="circle4"></span>
      <span className="circle5"></span>
      <span className="text">{text}</span>
    </button>
  );
};

export default Button;
