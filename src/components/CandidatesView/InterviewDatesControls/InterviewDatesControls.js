import React from 'react';
import Hoc from '../../../hoc/Hoc';
import Datepicker from '../../shared_components/Datepicker/Datepicker';

const interviewDatesControls = () => (
    <Hoc>
        <Datepicker/>
        <Datepicker/>
    </Hoc>
);

export default interviewDatesControls;