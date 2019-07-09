import React from "react";
import "./Button.css";

class Button extends React.Component {
  render() {
    return (
      <div onClick={() => this.props.onClick()} className="Button-container">
        <div className="Button-content">Play video</div>
      </div>
    );
  }
}

export default Button;
