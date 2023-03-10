import React from "react";

export default function Modal() {
  return (
    <div className="modal">
      <p>Are you sure?</p>
      <button className="btn btn--alt">Cancel</button>
      <button className="btn">Confirm</button>
    </div>
  );
}
