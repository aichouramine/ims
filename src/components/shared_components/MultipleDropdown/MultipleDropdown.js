import React from 'react';
import Select from 'react-select'
import classes from './MultipleDropdown.module.css';
import Hoc from '../../../hoc/Hoc';
import Radium from 'radium';

const multipleDropdown = props => {

    let attachedColor = 'rgb(225, 229, 235);'
    let labelAttachedClass = classes.label
    if(props.error){
        labelAttachedClass = `${classes.label} ${classes.label__error}`
        attachedColor = '#c4183c'
    }

    const customStyles = {
        option: (provided, state) => ({
            ...provided,
            // color: state.isSelected ? 'red' : '#3d5170',
            fontSize: '11px',
            ':hover': {
                borderColor: attachedColor,
                boxShadow: 'none'
            },
        }),
        clearIndicator: () => ({
            display: 'none'
        }),
        control: (provided) => ({
            ...provided,
            borderColor: attachedColor,
            outline: 'none',
            ':hover': {
                borderColor: attachedColor,
                boxShadow: 'none'
            },
            ':focus': {
                borderColor: attachedColor,
                boxShadow: 'none'
            },
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
        <Hoc>
            <label className={labelAttachedClass}>Interviewers *</label>
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
            <div className={classes.invalidFeedback}>{props.error}</div>
        </Hoc>
    )
}

export default Radium(multipleDropdown);