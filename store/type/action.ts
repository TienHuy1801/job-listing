import { Action } from 'redux';
import { Data } from '../../interface/job';

export interface JobAction extends Action { 
  type: string,
  payload: Data[] | string[]
}

export interface SearchAction extends Action { 
  type: string,
  payload: string
}