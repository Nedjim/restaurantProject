import React from 'react';

export default class Slide extends React.Component {
    render() {
        return (
            <div id="slide">
                <ul id='carrousel'>
                    <li><img src="app/img/slide/restau.jpeg"/></li>
                    <li><img src="app/img/slide/interieur.jpeg"/></li>
                    <li><img src="app/img/slide/poulet.jpeg"/></li>
                </ul>
            </div>
        );
    }
}
