import React, {Component} from 'react';
import Hoc from '../../hoc/Hoc'
import InterviewersView from '../../components/InterviewersView/InterviewersView';

class InterviewersStatistic extends Component{
    render(){
        return(
            <Hoc>
                <InterviewersView/>
            </Hoc>
        )
    }
}

export default InterviewersStatistic;