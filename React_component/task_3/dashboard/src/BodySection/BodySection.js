import React from 'react';
import PropTypes from 'prop-types';


function BodySection({ title, children }) {
  return (
    <div className="bodysection">
      <h2>{title}</h2>
        {children}
    </div>
  );
}

BodySection.propTypes = {
  title: PropTypes.string,
  children: PropTypes.any
};

export default BodySection;
