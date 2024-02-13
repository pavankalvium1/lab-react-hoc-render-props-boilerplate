import hoc from './Hoc'

 function Image(props) {
  let value=props.value;
  let increase=props.increase

  return (
    <div>
      <button onClick={increase}>Like Image {value}</button>
    </div>
  )
}
export default hoc(Image)
