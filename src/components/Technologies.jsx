const Technologies = () => {
  const click = () => {
    alert("Food");
  }
  return (
    <div className="card" onClick={click} style={{ background: "blueviolet" }}>
      <h3>Technologies</h3>
      <ul>
        <li>Power Bi</li>
      </ul>
    </div>
  );
};

export default Technologies;