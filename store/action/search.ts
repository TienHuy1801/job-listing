import { ADD_SEARCH, REMOVE_ALL, REMOVE_SEARCH } from "../type/search"

const addSearch = (search: string) => ({
  type: ADD_SEARCH,
  payload: search
})

const removeSearch = (search: string) => ({
  type: REMOVE_SEARCH,
  payload: search
})

const removeAll = () => ({
  type: REMOVE_ALL,
})

export const searchAction = {
  addSearch,
  removeSearch,
  removeAll
}