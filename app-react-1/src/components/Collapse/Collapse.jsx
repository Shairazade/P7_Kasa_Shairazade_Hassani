import React, { useState, useRef, useEffect } from "react"; // Import des hooks de base React
import Chevron from "../../assets/images/VectorDown.svg"; 

export default function Collapse(props) {
  const [toggle, setToggle] = useState(false); // Initialisation du state toggle à false avec le setter setToggle
  const [heightEl, setHeightEl] = useState(); // Initialisation du state heightEl avec le setter setHeightEl

  const toggleState = () => { // Définition d'une fonction toggleState qui change la valeur de toggle
    setToggle(!toggle); 
  };

  const refHeight = useRef(); 

  useEffect(() => { 
    setHeightEl(`${refHeight.current.scrollHeight}px`); // Modification de la hauteur de l'élément en fonction de sa hauteur réelle
  }, []);

  return (
    <div className={`collapse ${props.aboutStyle}`}> {/* Affichage conditionnel de la classe CSS "collapse" avec une classe additionnelle "aboutStyle" si elle est fournie dans les props */}
      <div onClick={toggleState} className="collapse__visible"> 
        <h2>{props.aboutTitle}</h2> 
        <img
          className={toggle ? "chevron rotated" : "chevron"} // Ajout de la classe "rotated" si la valeur de toggle est true pour afficher le chevron en position ouverte
          src={Chevron}
          alt="chevron"
        />
      </div>
      <div
        ref={refHeight} 
        className={toggle ? "collapse__toggle animated" : "collapse__toggle"} // Affichage conditionnel de la classe CSS "collapse__toggle" avec une classe additionnelle "animated" si la valeur de toggle est true
        style={{ height: toggle ? `${heightEl}` : "0px" }} 
      >
        <p aria-hidden={toggle ? "true" : "false"}>{props.aboutText}</p> {/* Affichage du texte du composant fourni dans les props */}
      </div>
    </div>
  );
}