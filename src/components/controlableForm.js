import { useState } from "react";

const ControllableForm = () => {
  const [state, setState] = useState({
    Fname: "",
    Lname: "",
  });

  const changeHandler = (event) => {
   setState({
    ...state,
    [event.target.name] : event.target.value
   })

  }

  return (
    <div>
      <form>
        <label for="Fname">
          Add First Name:
          <input type="text" name="Fname" value={state.Fname} onChange={changeHandler}/>
        </label>
        <label for="Lname">
          Add Last Name:
          <input type="text" name="Lname" value={state.Lname} onChange={changeHandler}/>
        </label>
      </form>
      <p>Your first name : {state.Fname}</p>
      <p>Your Last name : {state.Lname}</p>
    </div>
   );
}

export default ControllableForm;