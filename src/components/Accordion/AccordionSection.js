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
          padding: "15px 20px"
        }}
      >
        <div onClick={onClick} style={{ cursor: "pointer", fontFamily: "Gotham Book, sans-serif" }}>
          {label}
          <div style={{ float: "right" }}>
            {!isOpen && <FaChevronDown />}
            {isOpen && <FaChevronUp />}
          </div>
        </div>
        {isOpen && (
          <div
            style={{
              fontFamily: "Gotham Book, sans-serif",
              marginTop: 10,
              padding: "20px 0"
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
  children: PropTypes.instanceOf(Object),
  isOpen: PropTypes.bool.isRequired,
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
};
