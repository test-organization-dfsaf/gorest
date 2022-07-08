import React from 'react';

interface IProps {
  children: any;
  className?: string;
  disabled?: boolean;
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  type?: 'button' | 'submit' | 'reset';
}

const Button = (props: IProps): JSX.Element => {
  const {
    children, className, disabled, onClick, type,
  } = props;

  const classes = ['button'];

  if (className) {
    classes.push(className);
  }

  return (
    <button
      className={`w-fit rounded-lg bg-primary-400 px-10 py-2 font-semibold text-white shadow-lg transition duration-300 hover:translate-y-0.5 active:translate-y-1 
                  ${classes.join(' ')}`}
      disabled={disabled}
      onClick={onClick}
      type={type || 'button'}
    >
      {children}
    </button>
  );
};

export default Button;
