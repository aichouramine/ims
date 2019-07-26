import React from 'react';
import classes from './InterviewsTable.module.css'
import TableActions from '../../shared_components/TableActions/TableActions'
import Remove from '../../shared_components/TableActions/Remove/Remove'
import FollowUp from "../../shared_components/TableActions/FollowUp/FollowUp";
import {levels} from "../../../enums/levels";
import {interview_status} from "../../../enums/interview_status";
import {locations} from "../../../enums/locations";
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
                return(
                    <div key={`${i}`}>
                        {`${int.firstname} ${int.lastname} `}
                    </div>
                )
            })
        }

        return interviewers;
    }

    function printStatus(status) {
        let attachedClass = `${classes.custom_badge} badge badge-secondary`;

        switch (status){
            case 'DONE': attachedClass = `${classes.custom_badge} badge badge-primary`
                break;
            case 'IFU_SENT': attachedClass = `${classes.custom_badge} badge badge-success`
                break;
            case 'CANCELED': attachedClass = `${classes.custom_badge} badge badge-danger`
                break;
            case 'DECISION_MADE': attachedClass = `${classes.custom_badge} badge badge-info`
                break;
        }

        return(
            <span className={attachedClass}>{interview_status[status]}</span>
            )

    }

    if(props.list && props.list.length > 0){
        interviews = props.list.map((int, i) => {
            return(
                <tr key={`${i}`}>
                    <td className={classes.name}>
                        {`${int.candidate.firstname} ${int.candidate.lastname}`}
                    </td>
                    <td className={classes.level}>{levels[int.candidate.level]}</td>
                    <td>{locations[int.candidate.location]}</td>
                    <td>{moment(int.date).format("DD-MMMM-YY, HH:mm a")}</td>
                    <td>
                    {printInterviewers(int.interviewers)}
                    </td>
                    <td>
                        {printStatus(int.interviewStatus)}
                        </td>
                    <td >
                        <TableActions>
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
                {/*<th scope="col">#</th>*/}
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

export default interviewsTable;