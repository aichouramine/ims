import React, { Component } from 'react';
import Layout from './components/Layout/Layout'
import CandidatesStatistic from './containers/CandidatesStatistic/CandidatesStatistic'
import InterviewersStatistic from './containers/InterviewersStatistic/InterviewersStatistic'

class App extends Component {
  render() {
    return (
      <div>
        <Layout title="Overview">
          <InterviewersStatistic/>
          {/*<CandidatesStatistic/>*/}
        </Layout>
      </div>
    );
  }
}

export default App;
