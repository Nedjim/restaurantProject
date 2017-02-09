import React from 'react';

export default class Slide extends React.Component {
    render() {
        return (
            <div id="slide">
                <ul id='carrousel'>
                    <li><img src="restau.jpeg"/></li>
                    <li><img src="interieur.jpeg"/></li>
                    <li><img src="poulet.jpeg"/></li>
                </ul>
            </div>
        );
    }
}
