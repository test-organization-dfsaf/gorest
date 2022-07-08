import React, { useCallback } from 'react';

interface IColProps {
  children?: JSX.Element | JSX.Element[];
  className?: string;
  sm?: number;
  md?: number;
  lg?: number;
  xl?: number;
  xxl?: number;
}

const Col = ({
  children,
  className,
  sm,
  md,
  lg,
  xl,
  xxl,
}: IColProps): JSX.Element => {
  const responsiveClasses = useCallback(() => {
    const classes = [];
    if (sm) {
      classes.push(`sm:w-${sm}/12`);
    }
    if (md) {
      classes.push(`md:w-${md}/12`);
    }
    if (lg) {
      classes.push(`lg:w-${lg}/12`);
    }
    if (xl) {
      classes.push(`xl:w-${xl}/12`);
    }
    if (xxl) {
      classes.push(`xxl:w-${xxl}/12`);
    }
    return classes.join(' ');
  }, [sm, md, lg, xl, xxl]);

  return (
    <div
      className={`flex flex-col 
                    ${className}
                    ${responsiveClasses()}`}
    >
      {children}
    </div>
  );
};

export default Col;
