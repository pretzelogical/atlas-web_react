import React from 'react';

export default function CourseListRow({
  isHeader = false,
  textFirstCell,
  textSecondCell = null,
}) {
  if (isHeader) {
    if (!textSecondCell) {
      return (
        <tr>
          <th colSpan="2">{textFirstCell}</th>
        </tr>
      );
    }
    return (
      <tr>
        <th>{textFirstCell}</th>
        <th>{textSecondCell}</th>
      </tr>
    );
  }

  return (
    <tr>
      <td>{textFirstCell}</td>
      <td>{textSecondCell}</td>
    </tr>
  );
}
