import React from 'react';

export default class Slide extends React.Component {
    render() {
        return (
            <div id="slide">
                <ul id='carrousel'>
                    <li><img src="https://media-cdn.tripadvisor.com/media/photo-s/02/1b/9a/bf/le-grande-bouffe.jpg"/></li>
                    <li><img src="http://www.epicurien.be/img/recettes-cuisines/20130928_poulet_morilles-500.jpg"/></li>
                    <li><img src="https://i1.wp.com/cotesoleils.fr/wp-content/uploads/2015/06/tajine-agneau-et-pruneaux-algc3a9rie1.jpg"/></li>
                </ul>
            </div>
        );
    }
}
