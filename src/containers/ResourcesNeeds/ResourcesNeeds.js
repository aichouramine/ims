import React, {Component} from 'react';
import Hoc from '../../hoc/Hoc';
import NeedsView from '../../components/NeedsView/NeedsView';

class ResourcesNeeds extends Component{
    render(){
        return(
            <Hoc>
                <NeedsView/>
            </Hoc>
        )
    }
}

export default ResourcesNeeds;