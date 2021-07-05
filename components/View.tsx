import React from 'react';
import { Col, Container, Row, Spinner } from 'reactstrap';
import Image from "next/image";
import { DataLoading } from '../interface/job';
import { actions } from '../store/action';
import { useAppSelector } from '../store/hook'
import { useAppDispatch } from "../store/hook";
import style from '../styles/Card.module.css';

export default function View() {
  const data: DataLoading = useAppSelector(state => state.job);
  const dispatch = useAppDispatch();
  const addSearch = (item: string) => {
    dispatch(actions.searchAction.addSearch(item));
  }
  if (data.loading) {
    return (
      <div style={{textAlign:"center", paddingTop:"50px"}}>
        <Spinner color="info"/>
      </div>
    )
  } else {
    return (
      <div style={{backgroundColor: "#f0fafb", paddingTop: "40px", minHeight:"600px"}}>
      {
        data.data.map(data => {
          return(
            <div key={data.id}>
              <Container>
                <Row className={style.box}>
                  <Col md={1}>
                    <Image src={data.logo} width={100} height={100} alt={data.company} />
                  </Col>
                  <Col md={4}>
                    <div className={style["box-company"]}>
                      <span className={style.company}>{data.company}</span>
                      <div className={data.new ? style.new : style.hidden}>NEW!</div>
                      <div className={data.featured ? style.featured : style.hidden}>FEATURED</div>
                    </div>
                    <p className={style.position}>{data.position}</p>
                    <div className={style["box-time"]}>
                      <span>{data.postedAt}</span> . 
                      <span> {data.contract}</span> . 
                      <span> {data.location}</span>
                    </div>
                  </Col>
                  <Col md={7}>
                    <div className={style["box-search"]}>
                      <div className={style.search} onClick={() => addSearch(data.role)}>{data.role}</div>
                      <div className={style.search} onClick={() => addSearch(data.level)}>{data.level}</div>
                      {
                        data.languages.map((language: string, id: number) => {
                          return <div key={id} onClick={() => addSearch(language)} className={style.search}>{language}</div>
                        })
                      }
                      {
                        data.tools.map((tool: string, id: number) => {
                          return <div key={id} onClick={() => addSearch(tool)} className={style.search}>{tool}</div>
                        })
                      }
                    </div>
                  </Col>
                </Row>
              </Container>
            </div>
          );
        })
      }
      </div>
    );
  }
}
