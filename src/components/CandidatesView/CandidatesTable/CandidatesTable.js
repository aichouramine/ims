import React from 'react';
// import PropTypes from 'prop-types';
import classes from './CandidatesTable.module.css'
import TableActions from '../../shared_components/TableActions/TableActions'
import Remove from '../../shared_components/TableActions/Remove/Remove'
import Update from "../../shared_components/TableActions/Update/Update";
import FollowUp from "../../shared_components/TableActions/FollowUp/FollowUp";


const candidatesTable = (props) => (
    <table className={`${classes.Table} table mb-0`}>
        <thead className="bg-light">
        <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Level</th>
            <th scope="col">Date & Time</th>
            <th scope="col">Interviewer(s)</th>
            {/*<th scope="col">HR Interviewer(s)</th>*/}
            <th scope="col">Status</th>
            <th scope="col">Actions</th>
        </tr>
        </thead>
        <tbody>
        <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
            {/*<td>@mdo</td>*/}
            <td>@mdo</td>
            <td>@mdo</td>
            <td>
                <TableActions>
                    <Update/>
                    <FollowUp/>
                    <Remove popoverHeader="Remove record" confirmTitle="Remove" elementId="1">
                        You are going to remove record for Dzmitry Ihnatovich. Removed item CANNOT be restored!
                    </Remove>
                </TableActions>
            </td>
        </tr>
        <tr>
            <th scope="row">2</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
            {/*<td>@mdo</td>*/}
            <td>@mdo</td>
            <td>@mdo</td>
            <td>
                <TableActions>
                    <Update/>
                    <FollowUp/>
                    <Remove popoverHeader="Remove record" confirmTitle="Remove" elementId="2">
                        You are going to remove record for Dzmitry Ihnatovich. Removed item CANNOT be restored!
                    </Remove>
                </TableActions>
            </td>
        </tr>
        <tr>
            <th scope="row">3</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
            {/*<td>@mdo</td>*/}
            <td>@mdo</td>
            <td>@mdo</td>
            <td>
                <TableActions>
                    <Update/>
                    <FollowUp/>
                    <Remove popoverHeader="Remove record" confirmTitle="Remove" elementId="3">
                        You are going to remove record for Dzmitry Ihnatovich. Removed item CANNOT be restored!
                    </Remove>
                </TableActions>
            </td>
        </tr>
        </tbody>
    </table>
);

// candidatesTable.propTypes = {
//     name: PropTypes.string.isRequired
// };

export default candidatesTable;