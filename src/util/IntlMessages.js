import React from 'react';

const camelize = str => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

const InjectMassage = props => {
  return (
    <span>{camelize(props.id.substr(props.id.lastIndexOf('.') + 1))}</span>
  );
};

export default InjectMassage;
