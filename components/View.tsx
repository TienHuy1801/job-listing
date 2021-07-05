import React from 'react';
import { Spinner } from 'reactstrap';
import { DataLoading } from '../interface/job';
import { useAppSelector } from '../store/hook'
import Card from './Card';

export default function View() {
  const data: DataLoading = useAppSelector(state => state.job);
  if (data.loading) {
    return (
      <div style={{textAlign:"center", paddingTop:"50px"}}>
        <Spinner color="info" children=""/>
      </div>
    )
  } else {
    return (
      <div style={{backgroundColor: "#f0fafb", paddingTop: "40px", minHeight:"600px"}}>
      {
        data.data.map(cardData => {
          return(
            <div key={cardData.id}>
              <Card {...cardData}/>
            </div>
          );
        })
      }
      </div>
    );
  }
}
