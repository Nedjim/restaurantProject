import React from 'react';

export default class Content extends React.Component {
    render() {
        return (
            <div>
                     <h1>Carte restaurant</h1>
                    <div id="container">
                        <div className="Description">
                            <h2>Description du plat</h2>
                            <h3>Poulet aux morilles :</h3>
                            <img src="http://www.epicurien.be/img/recettes-cuisines/20130928_poulet_morilles-500.jpg"/>

                            <p className="text">Un grand classique le poulet de Bresse aux morilles et à la crème.<br />
                             Si vous ne trouvez pas de volaille de Bresse, choisissez un bon poulet <br />
                              fermier, élevé aux grains et qui a vécu en liberté dans les champs</p>
                        </div>


                        <div className="Description2">
                            <h2>Description du plat</h2>
                            <h3>Tagine aux pruneaux :</h3>

                            <img src="https://i1.wp.com/cotesoleils.fr/wp-content/uploads/2015/06/tajine-agneau-et-pruneaux-algc3a9rie1.jpg"/>
                            <p className="text2">Un des plus célèbres Tajines Marocains, servi avec une délicieuse<br />
                             viande de veau et des pruneaux issus de l'agriculture biologique</p>
                        </div>

                        <div className="Description3">
                            <h2>Description du plat</h2>
                            <h3>Salade de saison :</h3>

                            <img src="http://scrat.hellocoton.fr/img/guide/recette-ma-salade-tiede-de-chou-kale-et-lentilles-patates-douces-et-saumon-fume-18911644.jpg"/>
                            <p className="text3">Toujours à l'heure, la salade de saison vous régalera avec ses légumes</p>
                        </div>
                  </div>

        </div>
            
        );
    }
}