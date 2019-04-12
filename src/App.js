import React, { Component } from 'react';
import Layout from './components/Layout/Layout'
import CandidatesStatistic from './containers/CandidatesStatistic/CandidatesStatistic'

class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <CandidatesStatistic/>
        </Layout>
      </div>
    );
  }
}

export default App;
