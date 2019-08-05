import React, { Component } from 'react';
import Layout from './components/Layout/Layout'
import InterviewsContainer from './containers/InterviewsContainer/InterviewsContainer';
import InterviewersContainer from './containers/InterviewersContainer/InterviewersContainer';
import CandidatesContainer from './containers/CandidatesContainer/CandidatesContainer';
import CandidateDetailsContainer from './containers/CandidateDetailsContainer/CandidateDetailsContainer';
import CandidateCreationContainer from './containers/CandidateCreationContainer/CandidateCreationContainer';
import Dashboard from './containers/Dashboard/Dashboard';
import InterviewerProfileContainer from './containers/InterviewerProfileContainer/InterviewerProfileContainer';
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
            <Route exact path="/candidates" component={CandidatesContainer}/>
            <Route exact path="/candidates/addNewCandidate" component={CandidateCreationContainer}/>
            <Route exact path="/candidates/details/:id" component={CandidateDetailsContainer}/>
            {/*<Route path="/needs" component={ResourcesNeeds}/>*/}
            {/*<Route path="/schedule" component={InterviewsCalendar}/>*/}
            {/*<Route path="/feedbacks" component={FollowUp}/>*/}
        </Layout>
      </div>
    );
  }
}

export default App;
