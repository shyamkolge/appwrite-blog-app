import React, { useId } from "react";

const Select = (
  {
    options,
    label,
    className = "",

    ...props
  },
  ref
) => {
  const id = useId();

  return (
    <div className="w-full">
      {label && <label htmlFor={id} className=""></label>}

      <select
        className={`px—3 py—2 rounded—lg bg—white text—black outline—none focus:bg—gray—50 w—full $
duration—200 border ${className}`}
        id={id}
        ref={ref}
        {...props}
      >
        {options?.map((option) => (
          <option value={option} key={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};
export default Select;
