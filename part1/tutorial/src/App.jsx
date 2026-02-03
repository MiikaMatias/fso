const Hello = (props) => {
  return(
    <>
      <p>Hello, {props.name}!</p>
    </>
  )
}

const Footer = () => {
  return(
    <>
      Test App Created By 
      <a href="https://github.com/MiikaMatias"> MiikaMatias</a>
    </>
  )
}

const App = () => {
  return (
    <>
      <h1>Greetings</h1>
      <Hello name = "Maya"/>
      <Footer></Footer>
    </>
  )
}

export default App
