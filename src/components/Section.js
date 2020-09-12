import React from "react";

function Section(props) {
  return (
    <div className="form-card">
      <form onChange={props.handleChange}>
        <div className="Q-card">
          <h3>Question {props.id + 1} :</h3>
          <p>{props.Question}</p>
        </div>
        <div className="options-card">
          <div className="options">
            <input
              type="radio"
              name={props.id}
              value={props.Options[0]}
              // onChange={props.handleChange}
            />

            <p>{props.Options[0]}</p>
          </div>
          <div className="options">
            <input
              type="radio"
              name={props.id}
              value={props.Options[1]}
              // onChange={props.handleChange}
            />
            <p>{props.Options[1]}</p>
          </div>
          <div className="options">
            <input
              type="radio"
              name={props.id}
              value={props.Options[2]}
              // onChange={props.handleChange}
            />
            <p>{props.Options[2]}</p>
          </div>
          <div className="options">
            <input
              type="radio"
              name={props.id}
              value={props.Options[3]}
              // onChange={props.handleChange}
            />
            <p>{props.Options[3]}</p>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Section;
