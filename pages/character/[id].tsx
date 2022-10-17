import {useRouter} from 'next/router';
import React, { useEffect, useState} from 'react';
import fetchByName from '../../resources/get';
import { Characters } from '../../resources/types';

const Character = () => {
    const router = useRouter();
    const {id} = router.query;
    const [characterData, setCharacerData] = useState<Characters>();
    const getCharactersPage = async (id: String) => {
        const {data} = await fetchByName('characters', {id});
        setCharacerData({
            id: data.id,
            name: data.name,
            status: data.status,
            species: data.species,
            gender: data.gender
        })
    }
      
    useEffect(() => {
        if(router.isReady){
            getCharactersPage(String(id));
        }
    }, [router.isReady]);
    return (
        <div style={{width: '100%', textAlign: 'center'}}>
            <p>Name: {characterData?.name}</p>
            <p>Status: {characterData?.status}</p>
            <p>Species: {characterData?.species}</p>
            <p>Gender: {characterData?.gender}</p>

        </div>
    )
}



export default Character;

