import React, { Component } from 'react';
import Layout from './components/Layout/Layout'
import CandidatesStatistic from './containers/CandidatesStatistic/CandidatesStatistic';
import InterviewersStatistic from './containers/InterviewersStatistic/InterviewersStatistic';
import { Route, Switch } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div>
        <Layout title="Overview">
            {/*<Switch>*/}
                <Route path="/" exact component={CandidatesStatistic}/>
                <Route path="/interviewers" component={InterviewersStatistic}/>
          {/*<InterviewersStatistic/>*/}
            {/*<CandidatesStatistic/>*/}
            {/*</Switch>*/}
        </Layout>
      </div>
    );
  }
}

export default App;
