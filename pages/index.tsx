// eslint-disable-next-line react-hooks/exhaustive-deps
import {useEffect, useState} from 'react';
import fetchByName from '../resources/get';
import {getStore, setStore} from '../store/slice';
import { useAppDispatch, useAppSelector } from "../store/hooks";



const Home =() => {
  /*const {civilizations} = useAppSelector(selectCivilizations);
  const dispatch = useAppDispatch();
  const [useCivilizations, setUseCivilizations] = useState<Civilizations[]>(civilizations);
  const getCivilizations = async () => {
    if(civilizations?.length === 0){
      const res = await fetchByName('civilizations');
      dispatch(setCivilizations(res?.civilizations))
      setUseCivilizations(res?.civilizations);
    }
  }
  const filterData = (find: string) => {
    const result = civilizations.filter((data: Civilizations) => data.name.toLowerCase().includes(find))
    setUseCivilizations(result);
    console.log(result)
    if(result.length < 1) setUseCivilizations(civilizations);
  }
  useEffect(() => {
    getCivilizations();
  }, []);*/
  return (
    <>
    </>
  )
}
export default Home;
