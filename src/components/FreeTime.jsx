const FreeTime = ({ otroProp2 }) => {
  const click = () => {
    alert("Free");
  }
  return (
    <div className="card" onClick={click} style={{ backgroundColor: "red" }}>
      <h3>{otroProp2}tiempo libre</h3>
      <ul>
        <li>Descansar</li>
        <li>Estudiar</li>
        <li>Salir a pasear</li>
      </ul>
    </div>
  );
};

export default FreeTime;