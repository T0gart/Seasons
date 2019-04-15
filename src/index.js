// eslint-disable-next-line no-unused-vars
import React from 'react';
import ReactDOM from 'react-dom'
import SeasonDisplay from './SeasonDisplay'


//teste



class App extends React.Component {

    state = { lat: null, errorMessage: '' };

   componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
        (position) => this.setState({ lat: position.coords.latitude }),
        (err) => this.setState({ errorMessage: err.message })
    );
   }

   
// teste de multicommit
    render() {
        if(this.state.errorMessage && !this.state.lat) {
            return <div>Error: {this.state.errorMessage}</div>
        }

        if (!this.state.err && this.state.lat) {
            return <SeasonDisplay lat={this.state.lat} />
        }

        return <div>Loading!</div>
    }
}
ReactDOM.render( <App /> , document.querySelector('#root'));