import { Data, DataLoading } from './../../interface/job';
import * as type from '../type/job';
import { JobAction } from '../type/action';

const initialState: DataLoading = {
  loading: false,
  data: []
}

export const jobReducer = (state: DataLoading = initialState, action: JobAction) => {
  switch (action.type) {
    case type.FETCH_DATA:
      return {
        ...state,
        loading: true
      }
    case type.FETCH_DATA_REMOVE:
      return {
        ...state,
        loading: true
      }
    case type.FETCH_SUCCESS:
      return {
        data: action.payload,
        loading: false
      }
    case type.CHANGE_DATA_ADD:
      let curData: Data[] = [...state.data];
      let checks = [...action.payload];
      let check = checks[checks.length - 1];
      curData = curData.filter((curItem: Data) => {
        let checkItem = true;
        let checkSearch: boolean = false;
        if (check == curItem.role) checkSearch = true;
        if (check == curItem.level) checkSearch = true;
        curItem.languages.map((language: string) => {
          if (check == language) checkSearch = true;
        })
        curItem.tools.map((tool: string) => {
          if (check == tool) checkSearch = true;
        })
        if (!checkSearch) checkItem = false;
        return checkItem;
      })
      return {
        data: curData,
        loading: false
      }
    case type.CHANGE_DATA_REMOVE:
      let dataRemove: Data[] = [...state.data];      
      let checksRemove = [...action.payload];
      dataRemove = dataRemove.filter((curItem: Data) => {
        let checkItem = true;
        checksRemove.map((check) => {
          let checkSearch: boolean = false;
          if (check == curItem.role) checkSearch = true;
          if (check == curItem.level) checkSearch = true;
          curItem.languages.map((language: string) => {
            if (check == language) checkSearch = true;
          })
          curItem.tools.map((tool: string) => {
            if (check == tool) checkSearch = true;
          })
          if (!checkSearch) checkItem = false;
        })
        return checkItem;
      })
      return {
        data: dataRemove,
        loading: false
      }
    default:  
      return state;
  }
}