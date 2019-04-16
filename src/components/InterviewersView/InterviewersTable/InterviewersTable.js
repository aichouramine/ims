import React from 'react';
// import PropTypes from 'prop-types';
import classes from './InterviewersTable.module.css'
import TableActions from '../../shared_components/TableActions/TableActions'
import Remove from '../../shared_components/TableActions/Remove/Remove'
import Update from '../../shared_components/TableActions/Update/Update'
import Details from '../../shared_components/TableActions/Details/Details'

const interviewersTable = (props) => (
    <table className={`${classes.Table} table mb-0`}>
        <thead className="bg-light">
        <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Location</th>
            <th scope="col">Total # of i-views</th>
            <th scope="col">Last i-view</th>
            <th scope="col">Actions</th>
        </tr>
        </thead>
        <tbody>
        <tr>
            <th scope="row">1</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>Minsk</td>
            <td>@fat</td>
            <td >
                <TableActions>
                    <Update/>
                    <Details/>
                    <Remove/>
                </TableActions>
            </td>
        </tr>
        <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>Minsk</td>
            <td>@fat</td>
            <td >
                <TableActions>
                    <Update/>
                    <Details/>
                    <Remove/>
                </TableActions>
            </td>
        </tr>
        <tr>
            <th scope="row">3</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>Minsk</td>
            <td>@fat</td>
            <td >
                <TableActions>
                    <Update/>
                    <Details/>
                    <Remove/>
                </TableActions>
            </td>
        </tr>
        </tbody>
    </table>
);

// candidatesTable.propTypes = {
//     name: PropTypes.string.isRequired
// };

export default interviewersTable;