import React from 'react';
import Request from 'superagent';
import _ from 'lodash';
import Cards from './Cards.jsx';
import Cart from './Cart.jsx';

export default class Content extends React.Component {
 constructor(){
        super();
        this.state = {}
    }

     search(){
         var url = "https://simplonco.github.io/js-css-3days-group-project/data/data.json";

         Request.get(url).then((data) => {
             console.log(data);
             this.setState({
                 cards: data.body.carte
             });
         });
     }

    render() {
        this.search();
        var contents = _.map(this.state.cards, (element, index)=>{

            //this.setState({list : {name: element, qte: 0}});

            return (
                   <Cards key={index} name={element.name} description={element.description} image={element.image}/>
                );
        });
        return (
                <div id="content">
                   <h1 className="title">Carte du restaurant</h1>
                   {contents}
                    <Cart />

                </div>
        );
    }
}