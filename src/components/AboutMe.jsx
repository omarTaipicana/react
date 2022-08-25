const AboutMe = ({ title,myProp }) => {

  const user = {
    name: "Fernando",
    age: 31,
    movie: "Encrucijada",
    music: "Rock"
  };
  const click = () => alert("AboutMe")
  return (
    <>
      <div className="card" onClick={click}>
        <h3>{myProp}{title}</h3>
        <ul>
          <li> {user.name}</li>
          <li>Mi edad: {user.age}</li>
          <li>Mi película: {user.movie}</li>
          <li>La musica que me gusta: {user.music}</li>
        </ul>
      </div>
    </>
  )
}

export default AboutMe