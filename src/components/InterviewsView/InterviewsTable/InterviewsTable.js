import React from 'react';
import classes from './InterviewsTable.module.css'
import TableActions from '../../shared_components/TableActions/TableActions'
import Remove from '../../shared_components/TableActions/Remove/Remove'
import FollowUp from "../../shared_components/TableActions/FollowUp/FollowUp";
import {levels} from "../../../enums/levels";
import {statuses} from "../../../enums/statuses";
import moment from 'moment';

const interviewsTable = (props) => {
    let interviews = (
            <tr>
                <td>None</td>
            </tr>
        )

    let interviewers = (
        <tr>
            <td>None</td>
        </tr>
    )

    function printInterviewers(arr) {
        if(arr && arr.length > 0){
            interviewers = arr.map((int, i) => {
                // console.log(int)
                return(
                    <div key={`${i}`}>
                        {`${int.firstname} ${int.lastname} `}
                    </div>
                )
            })
        }

        return interviewers;
    }

    if(props.list && props.list.length > 0){
        interviews = props.list.map((int, i) => {
            return(
                <tr key={`${i}`}>
                    <th scope="row">{int.id}</th>
                    <td>
                        {`${int.candidate.firstname} ${int.candidate.lastname}`}
                    </td>
                    <td>{levels[int.candidate.level]}</td>
                    <td>{int.candidate.location}</td>
                    <td>{moment(int.date).format("DD-MMMM-YY, hh:mm a")}</td>
                    {/*<td>@mdo</td>*/}
                    <td>
                    {printInterviewers(int.interviewers)}
                    </td>
                    <td>{statuses[int.status]}</td>
                    <td >
                        <TableActions>
                            {/*<Update/>*/}
                            <FollowUp/>
                            <Remove popoverHeader="Remove record" confirmTitle="Remove" elementId={`${int.id}`}
                                    onConfirm={props.onInterviewRemove} intId={int.id}>

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

// interviewsTable.propTypes = {
//     name: PropTypes.string.isRequired
// };

export default interviewsTable;