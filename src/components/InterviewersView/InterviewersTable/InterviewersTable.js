import React from 'react';
// import PropTypes from 'prop-types';
import classes from './InterviewersTable.module.css'

const interviewersTable = (props) => (
    <table className={`${classes.Table} table mb-0`}>
        <thead className="bg-light">
        <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Level</th>
            <th scope="col">Location</th>
            <th scope="col">Total # of i-views</th>
            <th scope="col">Last date of i-view</th>
        </tr>
        </thead>
        <tbody>
        <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
        </tr>
        <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
        </tr>
        <tr>
            <th scope="row">3</th>
            <td>Larry</td>
            <td>the Bird</td>
            <td>@twitter</td>
        </tr>
        </tbody>
    </table>
);

// candidatesTable.propTypes = {
//     name: PropTypes.string.isRequired
// };

export default interviewersTable;