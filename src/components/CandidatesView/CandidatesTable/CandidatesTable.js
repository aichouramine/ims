import React from 'react';
// import PropTypes from 'prop-types';
import classes from './CandidatesTable.module.css'
import TableActions from '../../shared_components/TableActions/TableActions'
import Remove from '../../shared_components/TableActions/Remove/Remove'
import Update from "../../shared_components/TableActions/Update/Update";
import FollowUp from "../../shared_components/TableActions/FollowUp/FollowUp";


const candidatesTable = (props) => {
    let interviews = (
            <tr>
                <td>None</td>
            </tr>
        )

    if(props.list && props.list.length > 0){
        interviews = props.list.map((int, i) => {
            return(
                <tr key={`${i}`}>
                    <th scope="row">{int.id}</th>
                    <td>{`${int.candidate.firstname} ${int.candidate.lastname}`}</td>
                    <td>{int.candidate.level}</td>
                    <td>{int.candidate.location}</td>
                    <td>{int.date}</td>
                    {/*<td>@mdo</td>*/}
                    <td>@mdo</td>
                    <td>{int.status}</td>
                    <td>
                        <TableActions>
                            {/*<Update/>*/}
                            <FollowUp/>
                            <Remove popoverHeader="Remove record" confirmTitle="Remove" elementId={`${int.id}`}>
                                You are going to remove record for {`${int.candidate.firstname} ${int.candidate.lastname}`}.
                                Removed item CANNOT be restored!
                            </Remove>
                        </TableActions>
                    </td>
                </tr>
            )
        })
    }

    return(
        <table className={`${classes.Table} table mb-0`}>
            <thead className="bg-light">
            <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Level</th>
                <th scope="col">Location</th>
                <th scope="col">Date & Time</th>
                <th scope="col">Interviewer(s)</th>
                {/*<th scope="col">HR Interviewer(s)</th>*/}
                <th scope="col">Status</th>
                <th scope="col">Actions</th>
            </tr>
            </thead>
            <tbody>
            {interviews}
            </tbody>
        </table>
    )
};

// candidatesTable.propTypes = {
//     name: PropTypes.string.isRequired
// };

export default candidatesTable;