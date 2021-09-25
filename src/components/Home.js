import react, { Component } from "react";
import "./cssStyle.css";

class HomePage extends Component {
  render() {
    const style = this.props.applyStyle ? "textStyle" : "";
    return <p className={"${style} textSize"}> Home Page </p>;
  }
}

export default HomePage;
