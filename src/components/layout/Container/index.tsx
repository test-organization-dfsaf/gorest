import React from 'react';

interface IContainerProps {
  children: JSX.Element | JSX.Element[];
  className?: string;
}

const Container = ({ children, className }: IContainerProps): JSX.Element => (
  <div className={`container ${className}`}>{children}</div>
);

export default Container;
