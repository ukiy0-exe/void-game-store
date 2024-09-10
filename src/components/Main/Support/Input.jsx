import React from "react";

const Input = ({ type, name, onChange, value }) => {
  return (
    <div>
      <label htmlFor={name} className="mb-2 block font-medium">
        {name[0].toUpperCase() + name.slice(1)}
      </label>
      {type === "textarea" ? (
        <textarea
          type={type}
          name={name}
          id={name}
          onChange={onChange}
          value={value}
          className="mb-3 h-[150px] w-[400px] resize-none border-b-2 border-highlight bg-[#d5cef8] p-2 focus:border-0 focus:bg-[#cdc5f1] focus:outline-dashed focus:outline-2 focus:outline-highlight"
        />
      ) : (
        <input
          type={type}
          name={name}
          id={name}
          onChange={onChange}
          value={value}
          className="mb-3 w-[400px] resize-none border-b-2 border-highlight bg-[#d5cef8] p-2 focus:border-0 focus:bg-[#cdc5f1] focus:outline-dashed focus:outline-2 focus:outline-highlight"
        />
      )}
    </div>
  );
};

export default Input;
