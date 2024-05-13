import React from 'react';
import CourseListRow from './CourseListRow.js';
import './CourseList.css';
import PropTypes from 'prop-types';
import CourseShape from './CourseShape.js';

function CourseList({ listCourses = [] }) {
  return (
    <table className="courselist">
      {listCourses.length === 0 ? (
        <thead>
          <CourseListRow
            isHeader={true}
            textFirstCell={'No course available yet'}
          />
        </thead>
      ) : (
        <>
          <thead>
            <CourseListRow
              isHeader={true}
              textFirstCell={'Available courses'}
            />
            <CourseListRow
              isHeader={true}
              textFirstCell={'Course name'}
              textSecondCell={'Credit'}
            />
          </thead>
          <tbody>
            {listCourses.map((data) => {
              return <CourseListRow
                isHeader={false}
                textFirstCell={data.name}
                textSecondCell={data.credit}
                key={data.id}
              />
            })}
          </tbody>
        </>
      )}
    </table>
  );
}

CourseList.propTypes = {
  listCourses: PropTypes.arrayOf(PropTypes.shape(CourseShape)),
};

export default CourseList;
