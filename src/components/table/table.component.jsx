import React from 'react';
import { connect } from 'react-redux';

import Row from './../row/row.component';

import './table.styles.scss';

const Table = ({ data: { assets, asset_status }, searchParam: { searchText } }) => {
  const columns = ['Asset Id', 'Name', 'Description', 'Status', 'Icon', 'Running', 'Utilization', 'Performance'];

  const searchString = (searchText, asset) => {
    let [searchTerm, searchCriteria] = searchText.split(':');
    searchCriteria = searchCriteria?.trim();
    searchTerm = searchTerm?.trim();

    if (searchCriteria?.includes('*')) {
      searchCriteria = searchCriteria?.replace('*', '');

      if (searchCriteria?.length > 0) {
        let val = asset[searchTerm]?.toString();

        if (val?.substring(0, searchCriteria.length) == searchCriteria) {
          return true;
        }
      }
    } else {
      if (searchCriteria?.length > 0) {
        let val = asset[searchTerm]?.toString();

        if (val == searchCriteria) {
          return true;
        }
      }
    }

    return false;
  };

  const searchStatus = (searchText, asset) => {
    let [searchTerm, searchCriteria] = searchText.split(':');
    searchCriteria = searchCriteria?.trim();
    searchTerm = searchTerm?.trim();

    if (searchTerm == 'status' && searchCriteria.length > 0) {
      let statusLookup = `${searchCriteria.charAt(0).toUpperCase()}${searchCriteria.slice(1)}`;
      if (statusLookup && asset[searchTerm] == asset_status[statusLookup]) {
        return true;
      }
    }

    return false;
  };

  const filteredData = searchText ? assets.filter((asset) => {
    if (searchText.includes(':')) {
      let joinQuery = (searchText.includes('&&') ? '&&' : (searchText.includes('||') ? '||' : ''));
      let isOr = searchText.includes('||');
      if (!!joinQuery) {
        let arrCriteria = searchText.split(joinQuery);
        let result = arrCriteria.map((criteria) => {
          if (criteria.includes('status:')) {
            return searchStatus(criteria, asset);
          }

          return searchString(criteria, asset);
        });

        if (searchText.includes('&&')) {
          return result.reduce((acc, next) => {
            return acc && next;
          });
        } else {
          return result.reduce((acc, next) => {
            return acc || next;
          });
        }
      }

      if (searchText.includes('status:')) {
        return searchStatus(searchText, asset);
      }

      return searchString(searchText, asset);
    }
  }) : assets;

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
