import React from 'react';
// import PropTypes from 'prop-types';
import classes from './BenchTable.module.css'
import TableActions from '../../shared_components/TableActions/TableActions'
import Update from '../../shared_components/TableActions/Update/Update'

const benchTable = (props) => (
    <table className={`${classes.Table} table mb-0`}>
        <thead className="bg-light">
        <tr>
            <th scope="col">Location</th>
            <th scope="col">Needs</th>
            <th scope="col">Now</th>
            <th scope="col">Comment</th>
            <th scope="col"></th>
        </tr>
        </thead>
        <tbody>
        <tr>
            <th scope="row">Minsk</th>
            <td>5</td>
            <td>3</td>
            <td>L, S, M</td>
            <td >
                <TableActions>
                    <Update/>
                </TableActions>
            </td>
        </tr>
        <tr>
            <th scope="row">Brest</th>
            <td>2</td>
            <td>0</td>
            <td>Mastery x2</td>
            <td >
                <TableActions>
                    <Update/>
                </TableActions>
            </td>
        </tr>
        <tr>
            <th scope="row">Gomel</th>
            <td>3</td>
            <td>1</td>
            <td>L x2</td>
            <td >
                <TableActions>
                    <Update/>
                </TableActions>
            </td>
        </tr>
        <tr>
            <th scope="row">Grodno</th>
            <td>1</td>
            <td>1</td>
            <td></td>
            <td >
                <TableActions>
                    <Update/>
                </TableActions>
            </td>
        </tr>
        <tr>
            <th scope="row">Mogilev</th>
            <td>2</td>
            <td>0</td>
            <td>L</td>
            <td >
                <TableActions>
                    <Update/>
                </TableActions>
            </td>
        </tr>
        </tbody>
    </table>
);

// interviewsTable.propTypes = {
//     name: PropTypes.string.isRequired
// };

export default benchTable;