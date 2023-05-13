import DataActionTypes from './data.types';

export const fetchDataStart = () => ({
  type: DataActionTypes.FETCH_DATA_START,
});

export const fetchDataSuccess = (data) => ({
  type: DataActionTypes.FETCH_DATA_SUCCESS,
  payload: data,
});

export const fetchDataFailure = () => ({
  type: DataActionTypes.FETCH_DATA_FAILURE,
});

export const searchData = (searchParam) => ({
  type: DataActionTypes.SEARCH_DATA,
  payload: searchParam,
});
