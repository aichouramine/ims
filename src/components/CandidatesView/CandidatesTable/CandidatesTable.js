import React from 'react';
// import PropTypes from 'prop-types';

const candidatesTable = (props) => (
    <table className="table">
        <thead>
        <tr>
            <th scope="col">#</th>
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col">Level</th>
            <th scope="col">Date & Time of Interview</th>
            <th scope="col">Interviewer(s)</th>
            <th scope="col">HR Interviewer(s)</th>
            <th scope="col">Status</th>
            <th scope="col">Start Date</th>
            <th scope="col">Comment</th>
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

export default candidatesTable;