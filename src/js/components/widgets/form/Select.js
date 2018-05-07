import React from 'react';
import PropTypes from 'prop-types';

const Select = ({ value, name, onChange, options, placeholder }) => {
    const renderOptions = () => {
        let resultOptions = [];
        if (Array.isArray(options)) {
            resultOptions = options.map(el =>
                <option key={el} value={el}>{el}</option>
            );
        } else if (typeof options === 'object') {
            Object.keys(options).forEach(key =>
                resultOptions.push(
                    <option key={key} value={key}>{options[key]}</option>
                )
            );
        }
        return resultOptions;
    };

    return (
        <select value={value} name={name} onChange={onChange}>
            {
                placeholder &&
                    <option value="" disabled hidden>{placeholder}</option>
            }
            {
                [
                    ...renderOptions()
                ]
            }
        </select>
    )
};

Select.propTypes = {
    value: PropTypes.string,
    name: PropTypes.string,
    onChange: PropTypes.func,
    placeholder: PropTypes.string,
    options: PropTypes.oneOfType([PropTypes.array, PropTypes.object])
};

export default Select;