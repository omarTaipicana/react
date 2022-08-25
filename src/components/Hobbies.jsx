const Hobbies = ({otroProp}) => {
  const click = () => {
    alert("Hobbies");
  }
  return (
    <div className="card" onClick={click} style={{ backgroundColor: "lightcoral" }}>
      <h3>{otroProp} Hobbies</h3>
      <ul>
        <li>Tocar guitarra</li>
        <li>Mirar Películas</li>
        <li>Viajar</li>
      </ul>
    </div>
  );
};

export default Hobbies;