import React from 'react';
import classes from './InterviewersTable.module.css'
import TableActions from '../../shared_components/TableActions/TableActions'
import Remove from '../../shared_components/TableActions/Remove/Remove'
import Update from '../../shared_components/TableActions/Update/Update'
import Details from '../../shared_components/TableActions/Details/Details'

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
                    <th scope="row">{i+1}</th>
                    <td >{`${int.firstname} ${int.lastname}`}</td>
                    <td>{int.location}</td>
                    <td>{int.email}</td>
                    <td>{int.numberOfInterviews}</td>
                    <td >
                        <TableActions>
                            <Update onEdit={() => goToProfile(int)}/>
                            {/*<Details/>*/}
                            <Remove popoverHeader="Mark as non-active" confirmTitle="Yes" elementId={`${int.id}`}
                                    onConfirm={props.onInterviewerRemove} intId={int.id}>
                                You are going to send {`${int.firstname} ${int.lastname}`} to the bench. Are you sure?
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
            <tr role="row">
                <th scope="col"><span >ID</span></th>
                <th scope="col"><span >Name</span></th>
                <th scope="col"><span >Location</span></th>
                <th scope="col"><span >Email</span></th>
                <th scope="col"><span >Total # of i-views</span></th>
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