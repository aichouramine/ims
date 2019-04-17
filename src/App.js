import React, { Component } from 'react';
import Layout from './components/Layout/Layout'
import CandidatesStatistic from './containers/CandidatesStatistic/CandidatesStatistic';
import InterviewersStatistic from './containers/InterviewersStatistic/InterviewersStatistic';
import ResourcesNeeds from './containers/ResourcesNeeds/ResourcesNeeds';
import Dashboard from './containers/Dashboard/Dashboard';
import InterviewsCalendar from './containers/InterviewsCalendar/InterviewsCalendar';
import { Route, Switch } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div>
        <Layout title="Overview">
            <Route path="/" exact component={Dashboard}/>
            <Route path="/candidates" component={CandidatesStatistic}/>
            <Route path="/interviewers" component={InterviewersStatistic}/>
            <Route path="/needs" component={ResourcesNeeds}/>
            <Route path="/calendar" component={InterviewsCalendar}/>
        </Layout>
      </div>
    );
  }
}

export default App;
