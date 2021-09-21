import React from 'react';

const Error = ({ mensaje }) => {
  return (
    <div className="mt-3">
      <p className="alert alert-danger">{mensaje}</p>
    </div>
  );
};

export default Error;
