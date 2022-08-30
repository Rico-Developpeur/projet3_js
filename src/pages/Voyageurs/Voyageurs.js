import React from "react";
import "./Voyageurs.css";
import { Header, Footer, Input, Button } from "../../components/index";

import { Geolocalisation } from "../../utils/Geolocalisation/Geolocalisation";

const Voyageurs = () => {
  return (
    <div className="voyageurs-container">
      <Header backCss="backVoyageurs" profileCss="profileVoyageurs" />

      <form className="voyageurs_champ-container">
        <h1>VOYAGEURS</h1>
        <Input forId="cp" type="text" champ="Numéro de CP" />
        <Input forId="tgv" type="text" champ="Numéro du train" />
        <Input forId="anomalie" type="text" champ="Description de l'anomalie" />
        <Input forId="file" type="file" champ="Joindre une photographie" />
        <div>
          <h2>Coordonnées GPS</h2>
          <h3>{Geolocalisation()}</h3>
        </div>
        <Button
          classButton="envoyer"
          onClick={(e) => e}
          champButton="ENVOYER"
          type="submit"
        />
      </form>

      <Footer />
    </div>
  );
};

export default Voyageurs;
