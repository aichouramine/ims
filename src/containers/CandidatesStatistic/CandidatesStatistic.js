import React, {Component} from 'react';
import Hoc from '../../hoc/Hoc'
import CandidatesView from '../../components/CandidatesView/CandidatesView'
import InterviewDatesControls from '../../components/CandidatesView/InterviewDatesControls/InterviewDatesControls'

class CandidatesStatistic extends Component{
    render(){
        return (
            <Hoc>
                <InterviewDatesControls/>
                <CandidatesView/>
            </Hoc>
        )
    }
}

export default CandidatesStatistic;