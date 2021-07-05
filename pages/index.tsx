import React, { useEffect } from 'react'
import Header from '../components/Header';
import Search from '../components/Search';
import View from '../components/View';
import { actions } from '../store/action'
import { useAppDispatch } from '../store/hook'

export default function Home() {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(actions.jobAction.fetchData());
  }, []);
  
  return (
    <>
      <Search/>
      <View/>
    </>
  );
}
