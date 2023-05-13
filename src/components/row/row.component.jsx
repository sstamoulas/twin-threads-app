import React from 'react';

const Row = ({ assetId, name, description, status, icon, running, utilization, performance, location }) => (
  <tr>
    <th scope="row">{assetId}</th>
    <td>{name}</td>
    <td>{description}</td>
    <td>{status}</td>
    <td>{icon}</td>
    <td>{running || 'N/A'}</td>
    <td>{utilization || 'N/A'}</td>
    <td>{performance || 'N/A'}</td>
  </tr>
);

export default Row;
