import React, {Component} from 'react';
import classes from './InterviewersView.module.css';
import InterviewersFilterControls from '../InterviewersView/InterviewersFilterControls/InterviewersFilterControls';
import Hoc from '../../hoc/Hoc';
import InterviewersTable from '../InterviewersView/InterviewersTable/InterviewersTable';
import TabButton from '../shared_components/TabButton/TabButton';
import Pagination from "../Navigation/Pagination/Pagination";
import EntriesDropdown from "../shared_components/EntriesDropdown/EntriesDropdown";
import PageHeader from '../Layout/PageHeader/PageHeader';
import InterviewerCard from './InterviewerCard/InterviewerCard';

class InterviewersView extends Component{
    constructor(props) {
        super(props);

        this.state = {
            cardView: false
        };

        // this.editHandler = this.editHandler.bind(this)
        // this.editCancelHandler = this.editCancelHandler.bind(this)
    }

    toggleTableView = (e) => {
        let activeClass = `${classes.active_view}`
        this.setState((prevState, props) =>{
            return {cardView: false}
        })

        document.getElementById("list_1").classList.add(activeClass)
        document.getElementById("grid_1").classList.remove(activeClass)
    }

    toggleCardView = (e) => {
        let activeClass = `${classes.active_view}`
        this.setState((prevState, props) =>{
            return {cardView: true}
        })

        document.getElementById("grid_1").classList.add(activeClass)
        document.getElementById("list_1").classList.remove(activeClass)
    }

    render(){
        let interviewers = [];
        if(this.props.interviewers){
            interviewers = this.props.interviewers.map((int, ind) => {
                return (
                    <InterviewerCard interviewer={int} key={ind} onInterviewerEdit={this.props.editInterviewer}/>
                )
            })
        }

        let currentView = (
            <div className="row ">
                <div className="col">
                    <div className={`${classes.Card} card-small mb-4`}>
                        <div className={`${classes.Card_header} card-header border-bottom`}>
                            <h6 className="m-0 pt-2 pb-2" >Interviewers</h6>
                        </div>
                        <div className="card-body p-0 pb-3 text-center">
                            <InterviewersTable list={this.props.interviewers}
                                               onInterviewerEdit={this.props.editInterviewer}
                                               onInterviewerRemove={this.props.removeInterviewer}
                            />
                        </div>
                    </div>
                </div>
            </div>

        )

        if(this.state.cardView){
            currentView = (
                <div className={`${classes.interviewers_view__body}`}>
                    <ul>
                        {interviewers}
                    </ul>
                </div>
            )
        }

        return(
            <Hoc>
                <div className="page-header no-gutters py-4 row mb-5 d-flex justify-content-between align-items-center ">
                    <PageHeader subtitle="People" title="Interviewers"/>
                </div>
                <div className="d-flex align-items-center justify-content-end">
                    <div className={`${classes.toggle_wrapper} ${classes.toggle_wrapper__view}`}>
                        <i className={`material-icons ${classes.toggle_wrapper__grid}`} id="grid_1" onClick={this.toggleCardView}>
                            grid_on
                        </i>
                        <i className={`material-icons ${classes.toggle_wrapper__list}`} id="list_1" onClick={this.toggleTableView}>
                            list
                        </i>
                    </div>
                </div>
                {currentView}
                {/*<div className={`${classes.interviewers_view__body}`}>*/}
                    {/*{currentView}*/}
                {/*</div>*/}
                {/*<div className="d-flex justify-content-between w-100">*/}
                {/*<InterviewersFilterControls/>*/}
                {/*</div>*/}
                {/*<div className="d-flex justify-content-between w-100">*/}
                {/*<EntriesDropdown label="interviewers per page"/>*/}
                {/*/!*<TabButton label="New"/>*!/*/}
                {/*</div>*/}





                {/*</div>*/}
                {/*<div className="d-flex justify-content-between w-100">*/}
                    {/*<div className={`${classes.Table_pagination_info}`}>*/}
                        {/*Showing 1 to {this.props.interviewers.length} of {this.props.interviewersNumber} entries*/}
                    {/*</div>*/}
                    {/*/!*<div className={`${classes.Table_pagination}`}>*!/*/}
                    {/*/!*<Pagination getList={props.getInterviewers} itemsNumber={props.interviewersNumber}/>*!/*/}
                    {/*/!*</div>*!/*/}
                {/*</div>*/}
            </Hoc>
        )
    }

}

export default InterviewersView;
