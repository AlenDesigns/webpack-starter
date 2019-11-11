import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
    render() {
        return (
            <div className="container">
                Hello, React!
                <img src='webpack-logo.jpg' />
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'));