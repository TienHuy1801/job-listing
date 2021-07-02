import * as type from '../type/search';
import { SearchAction } from '../type/action';
import { Search } from '../../interface/search';

const initialState: Search = {
  loading: true,
  search: []
}

export const searchReducer = (state: Search = initialState, action: SearchAction) => {
  switch (action.type) {
    case type.ADD_SEARCH:
      let addSearch: string[] = [...state.search];
      if (!addSearch.includes(action.payload))
        addSearch.push(action.payload);
      return {
        loading: false,
        search: addSearch
      }
    case type.REMOVE_SEARCH:
      let removeSearch: string[] = [...state.search];
      removeSearch = removeSearch.filter((key: string) => {
        return key != action.payload;
      })
      if (removeSearch.length === 0) {
        return {
          loading: true,
          search: []
        }
      } else {
        return {
          loading: false,
          search: removeSearch
        }
      }
    case type.REMOVE_ALL:
      return {
        loading: true,
        search: []
      }
    default:  
      return state;
  }
}