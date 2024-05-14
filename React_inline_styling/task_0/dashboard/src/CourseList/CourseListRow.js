import React from 'react';

const rowStyle = { backgroundColor: '#f5f5f5ab' };
const headerStyle = { backgroundColor: '#deb5b545' };
const spanHeaderStyle = { ...headerStyle, textAlign: 'center' };

export default function CourseListRow({
  isHeader = false,
  textFirstCell,
  textSecondCell = null,
}) {
  if (isHeader) {
    if (!textSecondCell) {
      return (
        <tr style={rowStyle}>
          <th
            colSpan="2"
            style={spanHeaderStyle}>
              {textFirstCell}
          </th>
        </tr>
      );
    }
    return (
      <tr style={rowStyle}>
        <th style={headerStyle}>{textFirstCell}</th>
        <th style={headerStyle}>{textSecondCell}</th>
      </tr>
    );
  }

  return (
    <tr style={rowStyle}>
      <td>{textFirstCell}</td>
      <td>{textSecondCell}</td>
    </tr>
  );
}
