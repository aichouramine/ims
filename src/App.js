import React, { Component } from 'react';
import Layout from './components/Layout/Layout'
import InterviewsContainer from './containers/InterviewsContainer/InterviewsContainer';
import InterviewersContainer from './containers/InterviewersContainer/InterviewersContainer';
import CandidatesContainer from './containers/CandidatesContainer/CandidatesContainer';
import CandidateDetailsContainer from './containers/CandidateDetailsContainer/CandidateDetailsContainer';
import CandidateCreationContainer from './containers/CandidateCreationContainer/CandidateCreationContainer';
import ResourcesNeeds from './containers/ResourcesNeeds/ResourcesNeeds';
import Dashboard from './containers/Dashboard/Dashboard';
import FollowUp from './containers/FollowUp/FollowUp';
import InterviewerProfileContainer from './containers/InterviewerProfileContainer/InterviewerProfileContainer';
import {TransitionGroup, CSSTransition} from 'react-transition-group'
import { Route, Switch, withRouter } from 'react-router-dom';
import './index.css';
import Sidebar from './components/Navigation/Sidebar/Sidebar'
import Toolbar from './components/Navigation/Toolbar/Toolbar'

class App extends Component {
    constructor(props){
        super(props);
    }

  render() {

    return (
      <div>
          <Sidebar/>
          <Toolbar/>
          <Route render={({location}) => (
              <TransitionGroup>
                  <CSSTransition
                      // in={true}
                      // appear={false}
                      key={location.key}
                      classNames={"page-fade"}
                      timeout={350}
                      unmountOnExit
                  >
                      <Layout title="Overview">
                          <Switch location={location}>
                              <Route path="/" exact component={Dashboard}/>
                              <Route path="/interviews" component={InterviewsContainer}/>
                              <Route path="/interviewers" component={InterviewersContainer}/>
                              <Route path="/profile" component={InterviewerProfileContainer}/>
                              <Route exact path="/candidates" component={CandidatesContainer}/>
                              <Route exact path="/candidates/addNewCandidate" component={CandidateCreationContainer}/>
                              <Route exact path="/candidates/details/:id" component={CandidateDetailsContainer}/>
                              <Route path="/needs" component={ResourcesNeeds}/>
                              {/*<Route path="/schedule" component={InterviewsCalendar}/>*/}
                              <Route path="/candidates/followUp/:id" component={FollowUp}/>
                          </Switch>
                      </Layout>
                  </CSSTransition>
              </TransitionGroup>
          )}/>

      </div>
    );
  }
}

export default App;
