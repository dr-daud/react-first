import { Component } from 'react';

import './app-info.css';

class AppInfo extends Component {
    constructor (props) {
        super(props);
    }

    render () {
        return (
            <div className="app-info">
                <h1>Учёт сотрудников компании</h1>
                <h2>Общее число сотрудников: {this.props.employees}</h2>
                <h3>Премию получат:  {this.props.increased}</h3>
            </div>
        )
    }
}

export default AppInfo; 