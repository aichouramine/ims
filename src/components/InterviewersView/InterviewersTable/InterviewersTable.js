import React from 'react';
import classes from './InterviewersTable.module.css'
import TableActions from '../../shared_components/TableActions/TableActions'
import Remove from '../../shared_components/TableActions/Remove/Remove'
import Update from '../../shared_components/TableActions/Update/Update'
import {levels} from '../../../enums/levels'
import {locations} from '../../../enums/locations'
import moment from "moment/moment";

const interviewersTable = (props) => {
    let interviewers = (
        <tr>
            <td>None</td>
        </tr>
    )

    function goToProfile(obj) {
        props.onInterviewerEdit(obj)
    }

    if(props.list && props.list.length > 0){
        interviewers = props.list.map((int, i) => {
            return(
                <tr key={`${i}`}>
                    {/*<th scope="row" >{i+1}</th>*/}
                    <td className="d-flex" style={{justifyItems: 'space-between', alignItems: 'center'}}>
                        <div className={`${classes.small_avatar} user-avatar rounded-circle mr-2 pr-2`}
                             style={{backgroundImage: `url(${int.profilePhoto})`}}/>
                        {`${int.firstname} ${int.lastname}`}
                    </td>
                    <td>{levels[int.level]}</td>
                    <td>{locations[int.location]}</td>
                    <td>{int.email}</td>
                    <td style={{textAlign: 'center'}}>{int.totalInterviews}</td>
                    <td>{moment(int.lastInterviewDate).format("DD-MMMM-YY")}</td>
                    <td >
                        <TableActions>
                            <Update onEdit={() => goToProfile(int)}/>
                            {/*<Details/>*/}
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
                <th scope="col"><span >Title</span></th>
                <th scope="col"><span >Location</span></th>
                <th scope="col"><span >Email</span></th>
                <th scope="col"><span >Total # of i-views</span></th>
                <th scope="col"><span >Last i-view date</span></th>
                <th scope="col">Actions</th>
            </tr>
            </thead>
            <tbody>
            {interviewers}
            </tbody>
        </table>
    )


}

// interviewsTable.propTypes = {
//     name: PropTypes.string.isRequired
// };

export default interviewersTable;