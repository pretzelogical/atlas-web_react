import React from 'react';
import PropTypes from 'prop-types';
import BodySection from './BodySection.js';
import './BodySectionWithMargin.css'


function BodySectionWithMarginBottom(props) {
  return (
    <div className="bodySectionWithMargin">
      <BodySection {...props} />
    </div>
  );
}

BodySectionWithMarginBottom.propTypes = {
  title: PropTypes.string,
  children: PropTypes.element
};

export default BodySectionWithMarginBottom;