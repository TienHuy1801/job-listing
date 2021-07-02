import React from 'react';
import { Container, Row } from 'reactstrap';
import { actions } from '../store/action';
import { useAppDispatch, useAppSelector } from '../store/hook';
import style from '../styles/Search.module.css';

export default function Search() {
  const data = useAppSelector(state => state.search);
  const dispatch = useAppDispatch();

  const removeItem = (search: string) => {
    dispatch(actions.searchAction.removeSearch(search));
  }
  const removeAll = () => {
    dispatch(actions.searchAction.removeAll());
  }
  if (data.loading) {
    return(
      <div></div>
    );
  } else {
    return(
      <div className={style.search}>
        <Container className={style.mid}>
          <div style={{display:"flex"}}>
          {
            data.search.map((search: string, id: number) => {
              return (
                <div key={id} className={style.item}>
                  <span className={style["item-text"]}>{search}</span>
                  <div onClick={() => removeItem(search)} className={style["item-remove"]}>
                    <img src="/images/icon-remove.svg" alt="remove" />
                  </div>
                </div>
              ); 
            })
          }</div>
          <span onClick={removeAll} className={style.clear}>Clear</span>
        </Container>
      </div>
    );
  }
}