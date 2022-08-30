import React from "react";
import "./Reseau.css";
import { Footer, Header, Input, Button } from "../../components/index";
import { Geolocalisation } from "../../utils/Geolocalisation/Geolocalisation";

const Reseau = () => {
  return (
    <div className="reseau-container">
      <Header backCss="backReseau" profileCss="profileReseau" />

      <form className="reseau_champ-container">
        <h1>RESEAU</h1>
        <Input forId="cp" type="text" champ="Numéro de CP" />
        <Input forId="ligne" type="text" champ="Numéro de ligne / Emprise" />
        <Input forId="anomalie" type="text" champ="Description de l'anomalie" />
        <Input forId="file" type="file" champ="Joindre une photographie" />
        <div>
          <h2>Coordonnées GPS</h2>
          <h3>{Geolocalisation()}</h3>
        </div>
        <Button
          classButton="envoyer"
          // onClick={(e) => e}
          champButton="ENVOYER"
          type="submit"
        />
      </form>

      <Footer />
    </div>
  );
};

export default Reseau;
