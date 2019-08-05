import React from 'react';
import classes from './CandidatesTable.module.css'
import TableActions from '../../shared_components/TableActions/TableActions'
import Remove from '../../shared_components/TableActions/Remove/Remove'
import Details from '../../shared_components/TableActions/Details/Details'
import {levels} from '../../../enums/levels'
import {locations} from '../../../enums/locations'
import {candidate_status} from "../../../enums/candidate_status";
import moment from "moment/moment";

const candidatesTable = (props) => {
    let candidates = (
        <tr>
            <td>None</td>
        </tr>
    )

    function goToProfile(obj) {
        props.onCandidateEdit(obj)
    }

    function printStatus(status) {
        let attachedClass = `${classes.custom_badge} badge badge-secondary`;

        switch (status){
            case 'STARTED': attachedClass = `${classes.custom_badge} badge badge-primary`
                break;
            case 'JO_ACCEPTED': attachedClass = `${classes.custom_badge} badge badge-success`
                break;
            case 'JO_REJECTED': attachedClass = `${classes.custom_badge} badge badge-warning`
                break;
            case 'REJECTED': attachedClass = `${classes.custom_badge} badge badge-danger`
                break;
            case 'JO_MADE': attachedClass = `${classes.custom_badge} badge badge-info`
                break;
        }

        return(
            <span className={attachedClass}>{candidate_status[status]}</span>
        )

    }

    function returnDate(date) {
        if(date===null){
            return "None";
        }

        return moment(date).format("DD-MMMM-YY")
    }

    if(props.list && props.list.length > 0){
        candidates = props.list.map((c, i) => {
            return(
                <tr key={`${i}`}>
                    <td className={classes.name} style={{justifyItems: 'space-between', alignItems: 'center'}}>
                        {`${c.firstname} ${c.lastname}`}
                    </td>
                    <td>{levels[c.level]}</td>
                    <td>{locations[c.location]}</td>
                    <td>{printStatus(c.candidateStatus)}</td>
                    <td className={classes.date}>{returnDate(c.startDate)}</td>
                    <td >
                        <TableActions>
                            <Details onClick={() => goToProfile(c)}/>
                            {/*<Remove popoverHeader="Mark as non-active" confirmTitle="Yes" elementId={`${int.id}`}*/}
                                    {/*onConfirm={props.onInterviewerRemove} intId={int.id}>*/}
                                {/*You are going to send {`${int.firstname} ${int.lastname}`} to the bench. Are you sure?*/}
                            {/*</Remove>*/}
                        </TableActions>
                    </td>
                </tr>
            )
        })
    }

    return(
        <table className={`${classes.Table} table mb-0`}>
            <thead className="bg-light">
            <tr role="row">
                {/*<th scope="col"><span >ID</span></th>*/}
                <th scope="col"><span >Name</span></th>
                <th scope="col"><span >Level</span></th>
                <th scope="col"><span >Location</span></th>
                <th scope="col"><span >Status</span></th>
                <th scope="col"><span >Start Date</span></th>
                <th scope="col">Actions</th>
            </tr>
            </thead>
            <tbody>
            {candidates}
            </tbody>
        </table>
    )


}

// interviewsTable.propTypes = {
//     name: PropTypes.string.isRequired
// };

export default candidatesTable;