import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Carrousel from "../components/Carrousel/Carrousel";
import Collapse from "../components/Collapse/Collapse";
import Host from "../components/Host/Host";
import Rate from "../components/Rate/Rate";
import Tag from "../components/Tag/Tag";
import ErrorPage from "../components/ErrorPage/ErrorPage";
import axios from "axios";

export default function FicheLogement() {
  const params = useParams();
  

  const [pickedAppart, setPickedAppart] = useState();
  const [validUrl, setValidUrl] = useState(true);

  useEffect(() => {
    const getData = async () => {
      const res = await axios.get("/logements.json");
      const picked = res.data.find(({ id }) => id === params.id);
      if (picked === undefined) {
        setValidUrl(false);
      } else {
        setValidUrl(true);
        setPickedAppart(picked);
      }
    };
    getData();
    // eslint-disable-next-line
  }, []); // Le useEffect ne doit être exécuté qu'une seule fois (tableau de dépendances vide)

  const slidePics = pickedAppart && pickedAppart.pictures;
  const tags = pickedAppart && pickedAppart.tags;
  const equipments =
    pickedAppart && pickedAppart.equipments; // Récupération des équipements du logement sélectionné et création d'un élément <li> pour chaque équipement
  const equip =
    pickedAppart &&
    equipments.map((item, index) => (
      <li key={index} className="equipList">
        {item}
      </li>
    ));

  return (
    validUrl ? (
      pickedAppart && (
        <div key={params.id} className="fiche-container">
          <Carrousel slides={slidePics} />
          <section className="hostInfo-container">
            <div className="title-tags-container">
              <div className="title-container redFont">
                <h1>{pickedAppart.title}</h1>
                <h3>{pickedAppart.location}</h3>
              </div>
              <div className="tags-container">
                {tags.map((tag) => (
                  <Tag key={tag} tag={tag} />
                ))}
              </div>
            </div>
            <div className="rate-host-container">
              <div className="host-container redFont">
                <Host
                  hostName={pickedAppart.host.name}
                  hostPic={pickedAppart.host.picture}
                />
              </div>
              <div className="rate-container">
                <Rate score={pickedAppart.rating} />
              </div>
            </div>
          </section>
          <div className="collapse-fiche-container">
            <Collapse
              aboutTitle="Description"
              aboutText={pickedAppart.description}
            />
            <Collapse aboutTitle="Équipements" aboutText={equip} />
          </div>
        </div>
      )
    ) : (
      <div>
       <ErrorPage />
      </div>
    )
  );
}
