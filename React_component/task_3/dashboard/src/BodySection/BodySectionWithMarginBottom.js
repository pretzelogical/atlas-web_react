import React from 'react';
import PropTypes from 'prop-types';
import BodySection from './BodySection.js';
import './BodySection.css'


function BodySectionWithMarginBottom(props) {
  return (
    <div className="bodySectionWithMargin">
      <BodySection {...props} />
    </div>
  );
}

BodySectionWithMarginBottom.propTypes = {
  title: PropTypes.string,
  children: PropTypes.any
};

export default BodySectionWithMarginBottom;