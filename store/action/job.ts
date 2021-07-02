import { Data } from "../../interface/job";
import { CHANGE_DATA_ADD, CHANGE_DATA_REMOVE, FETCH_DATA, FETCH_SUCCESS } from "../type/job";

const fetchData = () => ({
  type: FETCH_DATA,
  payload: []  
})

const fetchDataRemove = () => ({
  type: FETCH_DATA,
  payload: []
})

const fetchSuccess = (data: Data[]) => ({
  type: FETCH_SUCCESS,
  payload: data
})

const changeData = (item: string[]) => ({
  type: CHANGE_DATA_ADD,
  payload: item
})

const changeDataRemove = (item: string[]) => ({
  type: CHANGE_DATA_REMOVE,
  payload: item
})

export const jobAction = {
  fetchData,
  fetchDataRemove,
  fetchSuccess,
  changeData,
  changeDataRemove
}