import React from 'react';
// import PropTypes from 'prop-types';
import classes from './InterviewersTable.module.css'
import TableActions from '../../shared_components/TableActions/TableActions'
import Remove from '../../shared_components/TableActions/Remove/Remove'
import Update from '../../shared_components/TableActions/Update/Update'
import Details from '../../shared_components/TableActions/Details/Details'

const interviewersTable = (props) => {
    let interviewers = props.list.map((int, i) => {
        return(
            <tr key={`${i}`}>
                <th scope="row">{int.id}</th>
                <td >{`${int.firstname} ${int.lastname}`}</td>
                <td>{int.location}</td>
                <td>{int.email}</td>
                <td>{int.numberOfInterviews}</td>
                <td>@fat</td>
                <td >
                    <TableActions>
                        <Update onEdit={props.onInterviewerEdit}/>
                        {/*<Details/>*/}
                        <Remove popoverHeader="Mark as non-active" confirmTitle="Yes" elementId="1">
                            You are going to send Dzmitry Ihnatovich to the bench. Are you sure?
                        </Remove>
                    </TableActions>
                </td>
            </tr>
        )
    })

    return(
        <table className={`${classes.Table} table mb-0`}>
            <thead className="bg-light">
            <tr role="row">
                <th scope="col"><span >ID</span></th>
                <th scope="col"><span >Name</span></th>
                <th scope="col"><span >Location</span></th>
                <th scope="col"><span >Email</span></th>
                <th scope="col"><span >Total # of i-views</span></th>
                <th scope="col"><span >Last i-view</span></th>
                <th scope="col">Actions</th>
            </tr>
            </thead>
            <tbody>
            {interviewers}
            </tbody>
        </table>
    )


}

// candidatesTable.propTypes = {
//     name: PropTypes.string.isRequired
// };

export default interviewersTable;