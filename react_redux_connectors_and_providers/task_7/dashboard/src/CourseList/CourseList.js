import React, { useCallback, useEffect } from 'react';
import CourseListRow from './CourseListRow.js';
import { StyleSheet, css } from 'aphrodite';
import { useDispatch, useSelector } from 'react-redux';
import { getCourses } from '../selectors/courseSelector.js';
import * as CourseActionCreators from '../actions/courseActionCreators.js';

const courseListStyles = StyleSheet.create({
  courseList: {
    width: '90vw',
    border: '1px solid hsl(0, 0%, 78%)',
  },
});

const makeOnChangeRow = (dispatch) => {
  const selectCourse = useCallback(
    (index) => dispatch(CourseActionCreators.selectCourse(index)),
    [dispatch],
  );
  const unselectCourse = useCallback(
    (index) => dispatch(CourseActionCreators.unselectCourse(index)),
    [dispatch],
  );
  return (id, checked) => {
    if (!checked) {
      selectCourse(id);
    } else {
      unselectCourse(id);
    }
  }
}

function CourseList() {
  const dispatch = useDispatch();
  const fetchCourses = useCallback(
    () => dispatch(CourseActionCreators.fetchCourses()),
    [dispatch],
  );
  const onChangeRow = makeOnChangeRow(dispatch);
  const listCourses = useSelector(getCourses);

  useEffect(() => {
    fetchCourses();
  }, []);
  return (
    <table className={css(courseListStyles.courseList)}>
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
              return (
                <CourseListRow
                  isHeader={false}
                  textFirstCell={data.get('name')}
                  textSecondCell={data.get('credit')}
                  isChecked={data.get('isSelected')}
                  onCheck={() => onChangeRow(data.get('id'), data.get('isSelected'))}
                  key={data.get('id')}
                />
              );
            })}
          </tbody>
        </>
      )}
    </table>
  );
}

export default CourseList;
