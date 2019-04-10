import React, {Component} from 'react';
import Hoc from '../../hoc/Hoc'
import CandidatesView from '../../components/CandidatesView/CandidatesView'
import CandidatesFilterControls from '../../components/CandidatesView/CandidatesFilterControls/CandidatesFilterControls'

class CandidatesStatistic extends Component{
    render(){
        return (
            <Hoc>
                <CandidatesFilterControls/>
                <CandidatesView/>
            </Hoc>
        )
    }
}

export default CandidatesStatistic;