import './App.css'
import Card from './components/Card'

function App() {
  const title = "Sobre mi";
  
  return (
    <><div className='content'>
          <div className='card' style={{ backgroundColor: "red" }}>
        <Card 
          item="About Me"
          item1="Fernando"
          item2="31"
          item3="Encrucijada"
          item4="Rock" />
       </div>
      <div className='card' style={{ backgroundColor: "green" }}>
        <Card
          item="Food"
          item1="Hornado"
          item2="Churrasco"
          item3="Pizza"
          item4="Hamburguesa" />
      </div>
      <div className='card' style={{ backgroundColor: "aqua" }}>
      <Card
          item= "Technologies"
          item1= "Excel"
          item2= "React"
          item3= "JS"
          item4= "Css" />
      </div>
      <div className='card' style={{ backgroundColor: "lightblue" }}>
      <Card
         item= "FreTime"
         item1= "Bailar"
         item2= "Trotar"
         item3= "Ver tv"
         item4= "Escuhar Musica"/>
      </div>
      <div className='card'style={{ backgroundColor: "blueviolet" }}>
      <Card
         item= "Hobies"
         item1= "Musica"
         item2= "Guitarra"
         item3= "Caminar"
         item4= "Play"/>
      </div>
      </div>
    </>
  )
}

export default App
