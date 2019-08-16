import React from 'react';
import Select from 'react-select'
import classes from './MultipleDropdown.module.css';

const multipleDropdown = props => {

    const customStyles = {
        option: (provided, state) => ({
            ...provided,
            // color: state.isSelected ? 'red' : '#3d5170',
            fontSize: '11px'
        }),
        clearIndicator: () => ({
            display: 'none'
        }),
        dropdownIndicator: () => ({
            width: '0',
            height: '0',
            borderLeft: '3px solid transparent',
            borderRight: '3px solid transparent',
            borderTop: '6px solid #3d5170',
            color: 'transparent',
        }),
        indicatorsContainer: () => ({
            paddingRight: '7px'
        }),
        placeholder: () => ({
            // none of react-select's styles are passed to <Control />
            fontSize: '13px',
            paddingLeft: '9px'
        }),
        multiValueLabel: () => ({
            fontSize: '13px',
            paddingLeft: '10px',
            paddingBottom: '3px'
        }),
    }

    return(
        <Select
            defaultValue={[]}
            isMulti
            styles={customStyles}
            name="colors"
            options={props.list}
            className={classes["basic-multi-select"]}
            classNamePrefix={classes["react-select"]}
            isSearchable
            onChange={props.onChange}
        />
    )
}

export default multipleDropdown;