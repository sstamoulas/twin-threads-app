import React from 'react';
import { connect } from 'react-redux';

import Row from './../row/row.component';

import './table.styles.scss';

const Table = ({ data, searchParam }) => {
  const columns = ['Asset Id', 'Name', 'Description', 'Status', 'Icon', 'Running', 'Utilization', 'Performance'];
  const filteredData = searchParam ? data.assets.filter((asset) => {
    const { assetId, name, description, status, icon, running, utilization, performance } = asset;
    return [assetId.toString(), name, description, status.toString(), icon, running, utilization, performance].includes(searchParam);
  }) : data.assets;

  return (
    <>
      <table className='table table-hover'>
        <thead>
          <tr>
            {
              columns.map((column) => <th scope='col' key={column}>{column}</th>)
            }
          </tr>
        </thead>
        <tbody>
          {
            filteredData.map((asset) => <Row key={asset.assetId} {...asset} />)
          }
        </tbody>
      </table>
    </>
  );
}

const mapStateToProps = (state) => ({
  data: state.root.data,
  searchParam: state.root.searchParam,
});

export default connect(mapStateToProps)(Table);
