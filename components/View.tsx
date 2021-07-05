import React from 'react';
import { Col, Container, Row, Spinner } from 'reactstrap';
import Image from "next/image";
import { DataLoading } from '../interface/job';
import { actions } from '../store/action';
import { useAppSelector } from '../store/hook'
import { useAppDispatch } from "../store/hook";
import style from '../styles/View.module.css';
import Card from './Card';

export default function View() {
  const data: DataLoading = useAppSelector(state => state.job);
  const dispatch = useAppDispatch();
  const addSearch = (item: string) => {
    dispatch(actions.searchAction.addSearch(item));
  }
  if (data.loading) {
    return (
      <div style={{textAlign:"center", paddingTop:"50px"}}>
        <div className={style.loader}></div>
      </div>
    )
  } else {
    return (
      <div style={{backgroundColor: "#f0fafb", paddingTop: "40px", minHeight:"600px"}}>
      {
        data.data.map(data => {
          return(
            <div key={data.id}>
              <Card {...data}/>
            </div>
          );
        })
      }
      </div>
    );
  }
}
