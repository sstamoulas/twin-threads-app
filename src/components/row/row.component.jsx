import React from 'react';
import { connect } from 'react-redux';

const Row = ({ assets, assetId, name, description, status, icon, running, utilization, performance, location, parentId }) => {
  return (
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
  )
};

const mapStateToProps = (state) => ({
  assets: state.root.data.assets,
});

export default connect(mapStateToProps)(Row);
