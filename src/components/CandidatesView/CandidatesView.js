import React from 'react';
import classes from './CandidatesView.module.css';
import Hoc from '../../hoc/Hoc';
import PageHeader from '../Layout/PageHeader/PageHeader';
import CandidatesTable from './CandidatesTable/CandidatesTable'

const candidatesView = props => {

    return(
        <Hoc>
            <div className="page-header no-gutters py-4 row mb-5 d-flex justify-content-between align-items-center ">
                <PageHeader subtitle="People" title="Candidates"/>
                <div style={{width: '200px'}} className="d-flex justify-content-end">
                    <button className="btn btn-primary d-flex align-items-center" style={{width: '30px', fontSize: '14px'}}
                            onClick={props.addNewCandidate}>
                        <i className="material-icons" style={{fontSize: '14px', paddingRight: '5px'}}>add_circle_outline</i>
                        Add new
                    </button>
                </div>
            </div>
                <div className="row ">
                    <div className="col">
                        <div className={`${classes.card} card-small mb-4`}>
                            <div className={`${classes.card_header} card-header border-bottom`}>
                                <h6 className="m-0 pt-2 pb-2" >Candidates</h6>
                            </div>
                            <div className="card-body p-0 pb-3 text-center">
                                <CandidatesTable list={props.candidates}/>
                            </div>
                        </div>
                    </div>
                </div>
        </Hoc>
    )
}

export default candidatesView;