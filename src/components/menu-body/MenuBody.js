import "./MenuBody.css";

export default function MenuBody() {
  const dummyData = [
    {
      id: 1,
      nombloc: "Rechercher un client",
      desc: "Permet de vérifier s'il faut créer le client ou non.",
      img: require("../../assets/images/customer.png"),
    },
    {
      id: 2,
      nombloc: "Editer une facture",
      desc: "Imprimer une facture pour les clients.",
      img: require("../../assets/images/bill.png"),
    },
    {
        id: 3,
        nombloc: "Vérifier vos stocks",
        desc: "Vérifier un approvisionnement, faire son inventaire annuel.",
        img: require("../../assets/images/inventory.png"),
    },
    {
      id: 4,
      nombloc: "Analyse du Chiffre d'affaires",
      desc: "Vos recettes du mois.",
      img: require("../../assets/images/graph.png"),
    },
  ];

  return (
    <div className="menuBody">
      {dummyData.map((item) => {
        return (
          item.id &&
          item.img && (
            <div className="menuButtonBody">
              <img className="imgIcon" src={item.img} alt="logo button menu" />
              <p className="titleMenu">{item.nombloc}</p>
              <p>{item.desc}</p>
            </div>
          )
        );
      })}
    </div>
  );
}
