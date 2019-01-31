import React, { Component } from "react";
import PropTypes from "prop-types";

import AccordionSection from "./AccordionSection";

/**
 * https://alligator.io/react/react-accordion-component/
 */

export default class Accordion extends Component {
  constructor(props) {
    super(props);

    const openSections = {};

    if (this.props.children){
        this.props.children.forEach(child => {
            if (typeof child === 'object' && child !== null && child.props.isOpen) {
                openSections[child.props.label] = true;
            }
        });
    }

    this.state = { openSections };
  }

  onClick = label => {
    const {
      props: { allowMultipleOpen },
      state: { openSections }
    } = this;

    const isOpen = !!openSections[label];
    if (allowMultipleOpen) {
      this.setState({
        openSections: {
          ...openSections,
          [label]: !isOpen
        }
      });
    } else {
      this.setState({
        openSections: {
          [label]: !isOpen
        }
      });
    }
  };

  render() {
    const {
      onClick,
      props: { children },
      state: { openSections }
    } = this;

    // filter out non-object children
    let objectChildren = children.filter(child => child instanceof Object);

    return (
      <div style={{ margin: "10px 0"}}>
        {this.props.children && objectChildren.map((child, i) => (
          <AccordionSection
            isOpen={child && !!openSections[child.props.label]}
            label={child ? child.props.label : ""}
            onClick={onClick}
            key={i}
          >
            {child.props.children}
          </AccordionSection>
        ))}
      </div>
    );
  }
}

Accordion.propTypes = {
  allowMultipleOpen: PropTypes.bool
};
