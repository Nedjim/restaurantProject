import React from 'react';

export default class Header extends React.Component {
    render() {
        return (

            <header>
              <div id="menu">
                  <ul id="nav">
                      <li><a href="Accueil">Acceuil</a></li>
                      <li><a href="Carte">Carte</a></li>
                      <li><a href="Contact">Contact</a></li>
                      <li><a href="Panier">Panier</a></li>
                  </ul>
                  <div id="logo">
                      <img src="app/img/header/laa.png" />
                  </div>
              </div>
            </header>


        );
    }
}
