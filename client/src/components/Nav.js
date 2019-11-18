import React, { Component } from "react";
import { connect } from "react-redux";
import { FaPlusSquare } from "react-icons/fa";
import { MdArrowBack } from "react-icons/md";

class Nav extends Component {
  renderContent = () => {
    switch (this.props.selectedView) {
      case "CREATE":
      case "VIEW":
        return (
          <span className="link" onClick={() => this.props.selectView("LIST")}>
            <MdArrowBack /> Back to List
          </span>
        );
      case "LIST":
        return (
          <span className="link" onClick={() => this.props.selectView("CREATE")}>
            <FaPlusSquare /> Create Note
          </span>
        );
      default:
        return <span />;
    }
  };

  render() {
    return (
      <div className="nav">
        <div className="nav-title">My Notes</div>
        <div className="nav-action">{this.renderContent()}</div>
      </div>
    );
  }
}

export default connect()(Nav);
