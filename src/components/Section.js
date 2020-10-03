import React from "react";
import '../styles/styles.css'

function Section(props) {



  return (

    <form onChange={props.handleChange}>
      <div className="form-card">

        <div className="Q-card">
          <h3>Question {props.id + 1} :</h3>
          <p>{props.Question}</p>
        </div>
        <div className="options-card">


          <label htmlFor={props.Options[0]} className="options">
            <input
              type="radio"
              name={props.id}
              value={props.Options[0]}
              id={props.Options[0]}
            />
            <p>{props.Options[0]}</p>
          </label>


          <label htmlFor={props.Options[1]} className="options">
            <input
              type="radio"
              name={props.id}
              value={props.Options[1]}
              id={props.Options[1]}
            />
            <p>{props.Options[1]}</p>
          </label>
          <label htmlFor={props.Options[2]} className="options">
            <input
              type="radio"
              name={props.id}
              value={props.Options[2]}
              id={props.Options[2]}
            />
            <p>{props.Options[2]}</p>
          </label>
          <label htmlFor={props.Options[3]} className="options">
            <input
              type="radio"
              name={props.id}
              value={props.Options[3]}
              id={props.Options[3]}
            />
            <p>{props.Options[3]}</p>
          </label>
        </div>

      </div>
    </form>
  );
}

export default Section;
