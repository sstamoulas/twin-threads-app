import { takeLatest, call, put, all } from 'redux-saga/effects';
import DataActionTypes from './data.types';
import {
  fetchDataSuccess,
  fetchDataFailure,
} from './data.actions';
import jsonData from './../../data/data.json';

export function* fetchDataAsync() {
  const getData = () => {
    return new Promise((resolve, reject) => {
      resolve(jsonData)
    })
  }

  let data = yield call(getData);

  if (data) {
    yield put(fetchDataSuccess(data));
  }
  else {
    yield put(fetchDataFailure('There is no data'));
  }
}

export function* fetchDataStart() {
  yield takeLatest(
    DataActionTypes.FETCH_DATA_START,
    fetchDataAsync
  );
}

export function* expenseSagas() {
  yield all([
    call(fetchDataStart),
  ]);
}
