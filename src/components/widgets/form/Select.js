import React from 'react';

const Select = ({ value, name, onChange, options, placeholder }) => {
    const renderOptions = () => {
        let resultOptions = [];
        if (Array.isArray(options)) {
            resultOptions = options.map(el =>
                <option value={el}>{el}</option>
            );
        } else if (typeof options === 'object') {
            Object.keys(options).forEach(key =>
                resultOptions.push(
                    <option value={key}>{options[key]}</option>
                )
            );
        }
        return resultOptions;
    };

    return (
        <select value={value} name={name} onChange={onChange}>
            {
                placeholder &&
                    <option value="" disabled selected hidden>{placeholder}</option>
            }
            {
                [
                    ...renderOptions()
                ]
            }
        </select>
    )
};

export default Select;