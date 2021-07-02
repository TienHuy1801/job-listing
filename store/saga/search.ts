import { RootState } from './../index';
import { actions } from './../action/index';
import { put, select, takeEvery } from 'redux-saga/effects';
import { ADD_SEARCH, REMOVE_ALL, REMOVE_SEARCH } from '../type/search';

export const getItem = (state: RootState) => state.search.search;
function* fetchDataChange() {
  let item: string[] = yield select(getItem);
  yield put(actions.jobAction.changeData(item));  
}
function* fetchDataChangeRemove() {
  yield put(actions.jobAction.fetchDataRemove());  
}

function* fetchData() {
  try {
    yield put(actions.jobAction.fetchData());
  } catch (e) {
    console.log(e);
  }
}

export const rootSearchSaga = [
  takeEvery(REMOVE_SEARCH, fetchDataChangeRemove),
  takeEvery(ADD_SEARCH, fetchDataChange),
  takeEvery(REMOVE_ALL, fetchData)
]