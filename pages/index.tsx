// eslint-disable-next-line react-hooks/exhaustive-deps
import {useEffect, useState} from 'react';
import fetchByName from '../resources/get';
import {getStore, setStore} from '../store/slice';
import { useAppDispatch, useAppSelector } from "../store/hooks";
import Link from 'next/link';



const Home =() => {
  const {characters} = useAppSelector(getStore);
  const dispatch = useAppDispatch();
  const [usePage, setUsePage] = useState<String>("1");
  const [maxPage, setMaxPage] = useState<Number>(0);

  const getCharactersPage = async (page: String) => {
    const res = await fetchByName('pages', {page});
    dispatch(setStore(res?.data?.results))
    setMaxPage(res?.data?.info?.pages);    
  }
  
  useEffect(() => {
    getCharactersPage(usePage);
  }, []);

  const NextPage = () =>{
    if(Number(usePage) < maxPage){
      const number = Number(usePage) + 1;
      setUsePage(String(number));
      getCharactersPage(String(number));
    }
  }
  const PrevPage = () =>{
    if(Number(usePage) > 1){
      const number = Number(usePage) - 1;
      setUsePage(String(number));
      getCharactersPage(String(number));
    }
  }
  return (
    <>
      {characters?.map(function(array, index){
        return (
          <>
            <Link href={"/character/" + array.id} key={index}>
              {array.name}
            </Link>
            <br/>
          </>
        )
      })}
      <button onClick={() => PrevPage()}>Prev</button> 
        {usePage}       
      <button onClick={() => NextPage()}>Next</button>

    </>
  )
}
export default Home;
