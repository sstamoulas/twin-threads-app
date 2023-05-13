import React from 'react';
import { connect } from 'react-redux';

import Search from './../search/search.component';
import Table from './../table/table.component';

const Main = ({ data }) => {
  return (
    <>
      <Search />
      <Table />
    </>
  );
}

const mapStateToProps = (state) => ({
  data: state.root.data,
});

export default connect(mapStateToProps)(Main);
