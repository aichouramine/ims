import React from 'react';
import classes from './CandidatesTable.module.css'
import TableActions from '../../shared_components/TableActions/TableActions'
import Remove from '../../shared_components/TableActions/Remove/Remove'
import Details from '../../shared_components/TableActions/Details/Details'
import {levels} from '../../../enums/levels'
import {locations} from '../../../enums/locations'
import {statuses} from "../../../enums/statuses";
import moment from "moment/moment";

const candidatesTable = (props) => {
    let candidates = (
        <tr>
            <td>None</td>
        </tr>
    )

    // function goToProfile(obj) {
    //     props.onInterviewerEdit(obj)
    // }

    function printStatus(status) {
        let attachedClass = `${classes.custom_badge} badge badge-secondary`;

        switch (status){
            case 'DONE': attachedClass = `${classes.custom_badge} badge badge-primary`
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
            <span className={attachedClass}>{statuses[status]}</span>
        )

    }

    function returnDate(date) {
        if(date===null){
            return "None";
        }

        return moment(date).format("DD-MMMM-YY")
    }

    if(props.list && props.list.length > 0){
        candidates = props.list.map((int, i) => {
            return(
                <tr key={`${i}`}>
                    <td className={classes.name} style={{justifyItems: 'space-between', alignItems: 'center'}}>
                        {`${int.firstname} ${int.lastname}`}
                    </td>
                    <td>{levels[int.level]}</td>
                    <td>{locations[int.location]}</td>
                    <td>{printStatus(int.status)}</td>
                    <td className={classes.date}>{returnDate(int.startDate)}</td>
                    <td >
                        <TableActions>
                            {/*<Update onEdit={() => goToProfile(int)}/>*/}
                            <Details/>
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