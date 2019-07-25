import React, {Component} from 'react';
import classes from './InterviewersView.module.css';
import Hoc from '../../hoc/Hoc';
import InterviewersTable from '../InterviewersView/InterviewersTable/InterviewersTable';
import PageHeader from '../Layout/PageHeader/PageHeader';
import InterviewerCard from './InterviewerCard/InterviewerCard';

class InterviewersView extends Component{
    constructor(props) {
        super(props);

        this.state = {
            cardView: this.getPageLayout()
        };
    }

    componentDidMount(){
        let activeClass = `${classes.active_view}`;
        if(this.state.cardView){
            document.getElementById("grid_1").classList.add(activeClass)
            document.getElementById("list_1").classList.remove(activeClass)
        }
    }

    toggleTableView = () => {
        let activeClass = `${classes.active_view}`;
        this.setState((prevState, props) =>{
            return {cardView: false}
        })

        const url = this.setPageLayout({ query: "table" });

        document.getElementById("list_1").classList.add(activeClass)
        document.getElementById("grid_1").classList.remove(activeClass)

        this.props.onUrlUpdate(url)
    }

    toggleCardView = () => {
        let activeClass = `${classes.active_view}`
        this.setState((prevState, props) =>{
            return {cardView: true}
        })

        const url = this.setPageLayout({ query: "card" });

        document.getElementById("grid_1").classList.add(activeClass)
        document.getElementById("list_1").classList.remove(activeClass)

        this.props.onUrlUpdate(url)

    }

    setPageLayout = ({query = "table"}) => {
        const searchParams = new URLSearchParams();
        searchParams.set("layout", query);
        return searchParams.toString();
    }

    getPageLayout = () => {
        if(this.props.history.location.search){
            const searchParams = new URLSearchParams(this.props.history.location.search);
            if(searchParams.get('layout') === "card"){
                return true;
            }
        }

        return false;
    }

    render(){
        let interviewers = [];
        if(this.props.interviewers){
            interviewers = this.props.interviewers.map((int, ind) => {
                return (
                    <InterviewerCard interviewer={int} key={ind}
                                     onInterviewerEdit={this.props.editInterviewer}
                                     onInterviewerRemove={this.props.onRemoving}/>
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
                                               onInterviewerRemove={this.props.onRemoving}
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
                <div className="d-flex align-items-center justify-content-between">
                    <div className={`${classes.number}`}>
                        Showing 1 to 10 of {this.props.interviewers.length} entries
                    </div>
                    <div className={`${classes.toggle_wrapper} ${classes.toggle_wrapper__view}`}>
                        <i className={`material-icons ${classes.toggle_wrapper__grid}`} id="grid_1" onClick={this.toggleCardView}>
                            grid_on
                        </i>
                        <i className={`material-icons ${classes.toggle_wrapper__list} ${classes.active_view}`}
                           id="list_1" onClick={this.toggleTableView}>
                            list
                        </i>
                    </div>
                </div>
                {currentView}
            </Hoc>
        )
    }

}

export default InterviewersView;
