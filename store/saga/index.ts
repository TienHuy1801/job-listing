import { all } from "redux-saga/effects";
import { rootJobSaga } from "./job";
import { rootSearchSaga } from "./search";

export default function* rootSaga() {
  yield all([
    ...rootJobSaga,
    ...rootSearchSaga,
  ])
}