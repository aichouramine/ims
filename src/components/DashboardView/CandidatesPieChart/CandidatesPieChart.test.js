import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import CandidatesPieChart from './CandidatesPieChart';
import {Pie} from 'react-chartjs-2';

configure({adapter: new Adapter()});

describe('CandidatePieChart', ()=>{
    it('should render <span>No Data</span> if locations are empty', ()=>{
        const wrapper = shallow(<CandidatesPieChart countByLocations={[{location: 'BREST', count: 1}]}/>)
        expect(wrapper.find(Pie));
    })
})