import React, { Component } from 'react';
import Layout from './components/Layout/Layout'
import CandidatesStatistic from './containers/CandidatesStatistic/CandidatesStatistic';
import InterviewersStatistic from './containers/InterviewersStatistic/InterviewersStatistic';
import ResourcesNeeds from './containers/ResourcesNeeds/ResourcesNeeds';
import Dashboard from './containers/Dashboard/Dashboard';
import InterviewsCalendar from './containers/InterviewsCalendar/InterviewsCalendar';
import FollowUp from './containers/FollowUp/FollowUp';
import { Route, Switch } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div>
        <Layout title="Overview">
            <Route path="/" exact component={Dashboard}/>
            <Route path="/interviews" component={CandidatesStatistic}/>
            <Route path="/interviewers" component={InterviewersStatistic}/>
            <Route path="/needs" component={ResourcesNeeds}/>
            <Route path="/schedule" component={InterviewsCalendar}/>
            <Route path="/feedbacks" component={FollowUp}/>
        </Layout>
      </div>
    );
  }
}

export default App;
