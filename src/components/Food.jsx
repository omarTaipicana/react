const Food = () => {
  const click = () => {
    alert("Food");
  }
  return (
    <div className="card" onClick={click} style={{ background: "lightblue" }}>
      <h3>Mi comida favorita</h3>
      <ul>
        <li>Hamburguesa</li>
        <li>Hornado</li>
        <li>Fritada</li>
      </ul>
    </div>
  );
};

export default Food;