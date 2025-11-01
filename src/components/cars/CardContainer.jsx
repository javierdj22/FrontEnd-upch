import React from "react";

const CardContainer = ({ children, className = "", bodyClassName = "" }) => {
  return (
    <div className={`card ${className}`}>
      <div className={`card-body ${bodyClassName}`}>{children}</div>
    </div>
  );
};

export default CardContainer;
