import React, { useEffect, useRef } from 'react';
import { batch, connect } from 'react-redux';

import Main from './components/main/main.component';

import { fetchDataStart } from './redux/data/data.actions';


const App = ({ isFetching, fetchDataStart }) => {
  const isMounted = useRef(false);

  useEffect(() => {
    if (!isMounted.current) {
      batch(async () => {
        await fetchDataStart();
      })
      isMounted.current = true;
    }
  }, [isFetching, fetchDataStart]);

  return isMounted.current && !isFetching ?
    (
      <div className='App'>
        <Main />
      </div>
    )
  :
    <div>Loading...</div>
}

const mapStateToProps = (state) => ({
  isFetching: state.root.isFetching,
});

const mapDispatchToProps = (dispatch) => ({
  fetchDataStart: () => dispatch(fetchDataStart()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
