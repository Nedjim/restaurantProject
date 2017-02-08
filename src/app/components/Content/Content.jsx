import React from 'react';
import Request from 'superagent';

export default class Content extends React.Component {

    search(){
        var url = "https://simplonco.github.io/js-css-3days-group-project/data/data.json";

        Request.get(url).then((data) => {
            console.log(data);
            //  this.setState({
            //      body: data.body
            //  });
        });
    }

    render() {
        this.search();
        return (
            <div id="content">
                <div id="container">
                    <h1>Carte restaurant</h1>
                    <div className="description">
                        <h2>Description du plat</h2>
                        <img src="http://www.clairemarais.fr/client/gfx/photos/produit/restaurant3_7.jpg"/>

                        <p className="text">Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression.<br/> Le Lorem Ipsum est le faux texte standard de l/'imprimerie depuis les années 1500<br />Le Lorem Ipsum est simplement du<br /> faux texte employé dans la composition et la mise en page avant impression.<br /> Le Lorem Ipsum est le faux texte standard de l/'imprimerie depuis les années 1500</p>
                    </div>

                    <div className="description">
                        <h2>Description du plat</h2>
                        <img src="http://www.clairemarais.fr/client/gfx/photos/produit/restaurant3_7.jpg"/>
                        <p className="text2">Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression.<br /> Le Lorem Ipsum est le faux texte standard de l/'imprimerie depuis les années 1500<br />Le Lorem Ipsum est simplement du<br /> faux texte employé dans la composition et la mise en page avant impression.<br /> Le Lorem Ipsum est le faux texte standard de l/'imprimerie depuis les années 1500</p>
                    </div>

                    <div className="description">
                        <h2>Description du plat</h2>
                        <img src="http://www.clairemarais.fr/client/gfx/photos/produit/restaurant3_7.jpg"/>
                        <p className="text3">Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression.<br /> Le Lorem Ipsum est le faux texte standard de l/'imprimerie depuis les années 1500<br />Le Lorem Ipsum est simplement du<br /> faux texte employé dans la composition et la mise en page avant impression.<br /> Le Lorem Ipsum est le faux texte standard de l/'imprimerie depuis les années 1500</p>
                    </div>
                </div>
            </div>
        );
    }
}