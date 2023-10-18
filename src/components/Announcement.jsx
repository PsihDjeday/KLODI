function Announcement() {
  return (
    <div
      className="announcement"
      style={{ backgroundColor: "#000", color: "#fff", marginTop: 0 }}
    >
      <p style={{ textAlign: "center", margin: 0 }}>
        Бесплатная доставка при заказе от 3000р.{" "}
        <a href style={{ color: "#fff", textDecoration: "underline" }}>
          Подробнее
        </a>
      </p>
    </div>
  );
}

export default Announcement;
