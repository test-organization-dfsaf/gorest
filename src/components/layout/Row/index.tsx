import React from 'react';

interface IRowProps {
  children: JSX.Element | JSX.Element[];
  className?: string;
}

const Row = ({ children, className }: IRowProps): JSX.Element => (
  <div className={`flex flex-row ${className}`}>{children}</div>
);

export default Row;
