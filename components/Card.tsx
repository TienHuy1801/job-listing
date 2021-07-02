import React from "react";
import { Col, Container, Row } from "reactstrap";
import { Data } from "../interface/job";
import { actions } from "../store/action";
import { useAppDispatch } from "../store/hook";
import style from '../styles/Card.module.css';

export default function Card(cardData: Data) {
  const dispatch = useAppDispatch();
  const addSearch = (item: string) => {
    dispatch(actions.searchAction.addSearch(item));
  }
  const data = cardData;
  return(
    <Container>
      <Row className={style.box}>
        <Col md={1}>
          <img src={data.logo} alt={data.company} />
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
  );
}