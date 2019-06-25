import React, { Component } from 'react';
import Layout from './components/Layout/Layout'
import InterviewsContainer from './containers/InterviewsContainer/InterviewsContainer';
import InterviewersContainer from './containers/InterviewersContainer/InterviewersContainer';
import ResourcesNeeds from './containers/ResourcesNeeds/ResourcesNeeds';
import Dashboard from './containers/Dashboard/Dashboard';
import InterviewerProfileContainer from './containers/InterviewerProfileContainer/InterviewerProfileContainer';
import InterviewsCalendar from './containers/InterviewsCalendar/InterviewsCalendar';
import FollowUp from './containers/FollowUp/FollowUp';
import { Route, Switch } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div>
        <Layout title="Overview">
            <Route path="/" exact component={Dashboard}/>
            <Route path="/interviews" component={InterviewsContainer}/>
            <Route path="/interviewers" component={InterviewersContainer}/>
            <Route path="/profile" component={InterviewerProfileContainer}/>
            {/*<Route path="/needs" component={ResourcesNeeds}/>*/}
            {/*<Route path="/schedule" component={InterviewsCalendar}/>*/}
            {/*<Route path="/feedbacks" component={FollowUp}/>*/}
        </Layout>
      </div>
    );
  }
}

export default App;
