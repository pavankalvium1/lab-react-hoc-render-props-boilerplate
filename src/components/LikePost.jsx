import hoc from './Hoc'
 function Post(props) {
  let value=props.value;
  let increase=props.increase

  return (
    <div>
      <button onClick={increase}>Like Post {value}</button>
    </div>
  )
}

export default hoc(Post)
