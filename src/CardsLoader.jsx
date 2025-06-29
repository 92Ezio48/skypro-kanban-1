import React, { useState, useEffect } from "react";
import CardComponent from "./components/Card";
import { cardList } from "./data";

function CardsLoader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      style={{
        minHeight: 200,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {loading ? (
        <div className="loaderCards">Данные<br></br> загружаются...</div>
      ) : (
        cardList.map((card) => (
          <CardComponent
            key={card.id}
            title={card.title}
            theme={card.theme}
            date={card.date}
            status={card.status}
          />
        ))
      )}
    </div>
  );
}

export default CardsLoader;
