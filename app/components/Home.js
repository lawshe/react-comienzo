import React from 'react';
import { connect } from 'react-redux';
import ReactGA from 'react-ga';
import PageHeader from 'prtls/PageHeader.js';
import glob from 'style';
/**
  *
  * Homepage
  *
  * User accessibility preferences set in state
  *
*/

const mapStateToProps = (state) => {
  return {
    parallax: state.accessibility.parallax
  }
}

class Home extends React.Component {

  componentDidMount() {
    ReactGA.set({ page: window.location.pathname });
    ReactGA.pageview(window.location.pathname);
  }

  render() {
    return (
      <div>
        <PageHeader parallax={this.props.parallax} header="Header" />
        <div className={`section ${glob.no_pad} green darken-4`}>
          <div className="container">
            <div className={`row ${glob.no_margin}`}>
              <div className="col s12">
                <h2 className="grey-text text-lighten-4">Subheader</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default connect(
  mapStateToProps
)(Home);
