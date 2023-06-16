import { useRef } from "react";

const Form = () => {
  const ref = useRef();

  const formSubmit = (event) => {
    event.preventDefault();
   alert(ref.current.value)
  }
  return (
    <div className="input">
      <form onSubmit={formSubmit}>
        <input type="text" ref={ref} />
        <input type="submit" />
      </form>
    </div>
   );
}

export default Form;