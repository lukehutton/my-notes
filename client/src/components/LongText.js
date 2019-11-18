import React, { Component } from "react";

class LongText extends Component {
  render() {
    const { content, limit } = this.props;
    if (content.length <= limit) {
      return <div>{content}</div>;
    }
    const toShow = content.substring(0, limit) + "...";
    return <div>{toShow}</div>;
  }
}

export default LongText;
