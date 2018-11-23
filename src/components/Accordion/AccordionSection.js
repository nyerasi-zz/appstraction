import React, { Component } from "react";
import PropTypes from "prop-types";
import { FaChevronUp, FaChevronDown } from "react-icons/fa";

export default class AccordionSection extends Component {
  onClick = () => {
    this.props.onClick(this.props.label);
  };

  render() {
    const {
      onClick,
      props: { isOpen, label }
    } = this;

    return (
      <div
        style={{
          padding: "5px 10px"
        }}
      >
        <div onClick={onClick} style={{ cursor: "pointer" }}>
          {label}
          <div style={{ float: "right" }}>
            {!isOpen && <FaChevronDown />}
            {isOpen && <FaChevronUp />}
          </div>
        </div>
        {isOpen && (
          <div
            style={{
              marginTop: 10,
              padding: "10px 20px"
            }}
          >
            {this.props.children}
          </div>
        )}
      </div>
    );
  }
}

AccordionSection.propTypes = {
  children: PropTypes.instanceOf(Object).isRequired,
  isOpen: PropTypes.bool.isRequired,
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
};
