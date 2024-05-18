import React from 'react';
import PropTypes from 'prop-types';
import BodySection from './BodySection.js';
import { StyleSheet, css } from 'aphrodite';


const bSWMBStyles = StyleSheet.create({
  bodySectionWithMargin: {
    marginBottom: '40px'
  }
});


function BodySectionWithMarginBottom(props) {
  return (
    <div className={css(bSWMBStyles.bodySectionWithMargin)}>
      <BodySection {...props} />
    </div>
  );
}

BodySectionWithMarginBottom.propTypes = {
  title: PropTypes.string,
  children: PropTypes.any
};

export default BodySectionWithMarginBottom;