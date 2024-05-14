import React from 'react';
import { StyleSheet, css } from 'aphrodite';

const courseListRowStyle = StyleSheet.create({
  row: {
    backgroundColor: '#f5f5f5ab',
  },

  header: {
    backgroundColor: '#deb5b545',
    borderBottom: '1px solid hsl(0, 0%, 78%)',
    borderBottomStyle: 'solid',
    textAlign: 'left',
  },

  spanHeader: {
    backgroundColor: '#deb5b545',
    borderBottom: '1px solid hsl(0, 0%, 78%)',
    borderBottomStyle: 'solid',
    textAlign: 'center',
  },
});

export default function CourseListRow({
  isHeader = false,
  textFirstCell,
  textSecondCell = null,
}) {
  return (
    <tr className={css(courseListRowStyle.row)}>
      {isHeader ? (
        textSecondCell ? (
          <>
            <th className={css(courseListRowStyle.header)}>{textFirstCell}</th>
            <th className={css(courseListRowStyle.header)}>{textSecondCell}</th>
          </>
        ) : (
          <th className={css(courseListRowStyle.spanHeader)} colSpan="2">{textFirstCell}</th>
        )
      ) : (
        <>
          <td>{textFirstCell}</td>
          <td>{textSecondCell}</td>
        </>
      )}
    </tr>
  );
}
