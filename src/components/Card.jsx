function CardComponent({ theme, title, date, status }) {
  const themeColors = {
    Research: "rgb(180, 253, 209)",
    Copywriting: "rgb(233, 212, 255)",
    "Web Design": "rgb(255, 228, 194)",
  };
  const themeTextColors = {
    Research: "rgb(6, 177, 110)",
    Copywriting: "rgb(154, 72, 241)",
    "Web Design": "rgb(255, 109, 0)",
  };
  const bgColor = themeColors[theme] || "#e0e0e0";
  const textColor = themeTextColors[theme] || "#000";
  const isDone = status === "Готово"; // или 'Готово'
  return (
    <div className="cards__item">
      <div className="cards__card card">
        <div className="card__group">
          <div
            className="card__theme"
            style={{
              backgroundColor: bgColor,
              color: textColor, // 👈 вот тут!
            }}
          >
            <p
              style={{
                color: "inherit",
              }}
            >
              {theme}
            </p>
          </div>
          <a href="#popBrowse" target="_self">
            <div className="card__btn">
              <div></div>
              <div></div>
              <div></div>
            </div>
          </a>
        </div>
        <div className="card__content">
          <a href="" target="_blank">
            <h3
              className="card__title"
              style={isDone ? { textDecoration: "line-through" } : {}}
            >
              {title}
            </h3>
          </a>
          <div className="card__date">
            <p>{date}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default CardComponent;
