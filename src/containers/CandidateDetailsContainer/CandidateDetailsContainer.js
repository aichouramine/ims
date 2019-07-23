import React, { Component } from 'react';
import { connect } from 'react-redux';
import CandidateDetails from '../../components/CandidateDetails/CandidateDetails';
import * as candidatesActions from '../../store/actions/candidatesIndex';

class CandidateDetailsContainer extends Component{
    constructor(props) {
        super(props);

    }

    componentDidMount(){
        // this.props.onFetchCandidates(0, 30);
    }

    render(){
        return(
            <CandidateDetails

            />
        )
    }
}

const mapStateToProps = state => {

    return{

    }

}

const mapDispatchToProps = (dispatch) => {
    return{

    }
}

export default connect(mapStateToProps, mapDispatchToProps) (CandidateDetailsContainer);
