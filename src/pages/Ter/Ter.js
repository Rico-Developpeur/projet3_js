import React from "react";
import "./Ter.css";
import { Header, Footer, Input, Button } from "../../components/index";
import { Geolocalisation } from "../../utils/Geolocalisation/Geolocalisation";

const Ter = () => {
  return (
    <div className="ter-container">
      <Header backCss="backTer" profileCss="profileTer" />

      <form className="ter_champ-container">
        <h1>TER</h1>
        <Input forId="cp" type="text" champ="Numéro de CP" />
        <Input forId="ter" type="text" champ="Numéro du TER" />
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

export default Ter;
