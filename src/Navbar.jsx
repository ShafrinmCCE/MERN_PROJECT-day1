function Navbar(props) {
  return (
    <div>
      <img src={props.image} width="200" />
      <h2>{props.course}</h2>
    </div>
  )
}

export default Navbar