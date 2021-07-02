import { CHANGE_DATA_REMOVE, FETCH_DATA_REMOVE } from './../type/job';
import { actions } from './../action/index';
import { call, fork, put, select, takeEvery } from 'redux-saga/effects';
import axios from 'axios';
import { FETCH_DATA } from "../type/job";
import { Data } from '../../interface/job';
import { RootState } from '..';

export const getItem = (state: RootState) => state.search.search;

async function fetchDataSync() {
  const response = await axios.get("/data.json");
  return response.data;
}

function* fetchData() {
  try {
    const data: Data[] = yield call(fetchDataSync);  
    yield put(actions.jobAction.fetchSuccess(data));
  } catch (e) {
    console.log(e);
  }
}

function* fetchDataRemove() {
  try {
    const data: Data[] = yield call(fetchDataSync);  
    let item: string[] = yield select(getItem);
    yield put(actions.jobAction.fetchSuccess(data));
    yield put(actions.jobAction.changeDataRemove(item));
  } catch (e) {
    console.log(e);
  }
}

export const rootJobSaga = [
  takeEvery(FETCH_DATA, fetchData),
  takeEvery(FETCH_DATA_REMOVE, fetchDataRemove)
]