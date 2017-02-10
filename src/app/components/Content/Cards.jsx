import React from 'react';
import Request from 'superagent';

export default class Content extends React.Component {
    render() {
        return (
                   <div className="plat">
                        <h3>{this.props.name}</h3>
                        <img src={this.props.image}/>

                         <p className="text">{this.props.description}</p>
                    </div>
        );
    }
}