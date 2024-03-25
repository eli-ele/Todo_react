import React from  "react"

const Input = ({
    type,
    placeholreder,
    width, height,
    borderRadius,
    border,
    onChange,
    onKeyDown,
    backgroundColor,
    value
}) => {
    return (
        <input
            className="inputt"
            type={type}
            placeholder={placeholreder}
            style={{
                border: border,
                borderRadius: borderRadius,
                backgroundColor: backgroundColor,
                width: width,
                height: height
            }}
            onChange={onChange}
            onKeyDown={onKeyDown}
            value={value}

    />
  );
}

export default Input;