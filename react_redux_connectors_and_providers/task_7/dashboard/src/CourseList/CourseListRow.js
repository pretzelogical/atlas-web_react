import React, { useState } from "react";
import { StyleSheet, css } from "aphrodite";
import PropTypes from "prop-types";

const courseListRowStyle = StyleSheet.create({
  row: {
    backgroundColor: "#f5f5f5ab",
  },

  header: {
    backgroundColor: "#deb5b545",
    borderBottom: "1px solid hsl(0, 0%, 78%)",
    borderBottomStyle: "solid",
    textAlign: "left",
  },

  spanHeader: {
    backgroundColor: "#deb5b545",
    borderBottom: "1px solid hsl(0, 0%, 78%)",
    borderBottomStyle: "solid",
    textAlign: "center",
  },

  rowChecked: {
    backgroundColor: "#e6e4e4",
  },
});

function CourseListRow({
  isHeader = false,
  textFirstCell,
  textSecondCell = null,
  isChecked = false,
  onCheck = () => void 0
}) {
  return (
    <tr
      className={
        isChecked
          ? css(courseListRowStyle.row, courseListRowStyle.rowChecked)
          : css(courseListRowStyle.row)
      }
    >
      {isHeader ? (
        textSecondCell ? (
          <>
            <th className={css(courseListRowStyle.header)}>{textFirstCell}</th>
            <th className={css(courseListRowStyle.header)}>{textSecondCell}</th>
          </>
        ) : (
          <th className={css(courseListRowStyle.spanHeader)} colSpan="2">
            {textFirstCell}
          </th>
        )
      ) : (
        <>
          <td>
            <input
              type="checkbox"
              name={`${textFirstCell}-checkbox`}
              id={`${textFirstCell}-checkbox`}
              onClick={() => onCheck()}
            />
            {textFirstCell}
          </td>
          <td>{textSecondCell}</td>
        </>
      )}
    </tr>
  );
}

CourseListRow.propTypes = {
  isHeader: PropTypes.bool,
  textFirstCell: PropTypes.string.isRequired,
  textSecondCell: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  isChecked: PropTypes.bool,
  onChangeRow: PropTypes.func
}

export default CourseListRow;