import React from 'react';
// import PropTypes from 'prop-types';
import classes from './CandidatesTable.module.css'
import TableActions from '../../shared_components/TableActions/TableActions'
import Remove from '../../shared_components/TableActions/Remove/Remove'


const candidatesTable = (props) => (
    <table className={`${classes.Table} table mb-0`}>
        <thead className="bg-light">
        <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Level</th>
            <th scope="col">Date & Time</th>
            <th scope="col">Interviewer(s)</th>
            <th scope="col">HR Interviewer(s)</th>
            <th scope="col">Status</th>
            <th scope="col">Start Date</th>
            <th scope="col">Actions</th>
        </tr>
        </thead>
        <tbody>
        <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
            <td>@mdo</td>
            <td>@mdo</td>
            <td>@mdo</td>
            <td>@mdo</td>
            <td>
                <TableActions>
                    <Remove/>
                </TableActions>
            </td>
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