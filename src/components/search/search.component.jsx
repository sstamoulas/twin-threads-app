import React from 'react';
import { connect } from 'react-redux';

import { searchData } from './../../redux/data/data.actions';

import './search.styles.scss';

const Search = ({ searchParam: { searchText }, searchData }) => {
  const searchHandler = async ({ target }) => {
    const { value } = target;
    await searchData({ searchText: value });
  };

  return (
    <>
      <nav className='navbar navbar-expand-lg navbar-light bg-light'>
        <div className='container'>
          <input type='text' className='navbar-brand' placeholder='Search' value={searchText || ''} onChange={searchHandler} />
        </div>
      </nav>
    </>
  );
}

const mapStateToProps = (state) => ({
  searchParam: state.root.searchParam,
});

const mapDispatchToProps = (dispatch) => ({
  searchData: (searchParam) => dispatch(searchData(searchParam)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Search);
