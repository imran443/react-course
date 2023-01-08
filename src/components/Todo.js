import React from "react";

export default function Todo(props) {
  const [modalIsOpen, setfirst] = useState(false);

  function deleteHandler() {
    console.log("Clicked!");
  }

  return (
    <div className="card">
      <h2>{props.text}</h2>
      <div className="actions">
        <button onClick={deleteHandler} className="btn">
          Delete t
        </button>
      </div>
    </div>
  );
}
