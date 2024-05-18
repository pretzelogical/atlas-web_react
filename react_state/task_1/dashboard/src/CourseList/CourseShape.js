import PropTypes from 'prop-types';

const CourseShape = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  credit: PropTypes.number.isRequired
};

export default CourseShape;
