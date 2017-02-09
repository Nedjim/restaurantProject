import React from 'react';
import Request from 'superagent';
import _ from 'lodash';

export default class Content extends React.Component {

    render() {
        //console.log(this.props);
        return (
                   <div className="plat">
                        <h3>{this.props.name}</h3>
                        <img src="http://www.clairemarais.fr/client/gfx/photos/produit/restaurant3_7.jpg"/>

                         <p className="text">{this.props.description}</p>
                    </div>
        );
    }
}