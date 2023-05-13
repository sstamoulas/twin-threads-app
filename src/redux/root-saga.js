import { all, call } from 'redux-saga/effects';

import { expenseSagas } from './data/data.sagas';

export default function* rootSaga() {
  yield all([
    call(expenseSagas),
  ]);
}
