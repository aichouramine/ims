import React, {Component} from 'react';
import Hoc from '../../hoc/Hoc'
import CandidatesView from '../../components/CandidatesView/CandidatesView'

class CandidatesStatistic extends Component{
    render(){
        return (
            <Hoc>
                <CandidatesView/>
            </Hoc>
        )
    }
}

export default CandidatesStatistic;