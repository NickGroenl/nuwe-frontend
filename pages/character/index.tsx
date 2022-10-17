import {useRouter} from 'next/router';
import React, { useEffect } from 'react';
import fetchByName from '../../resources/get';

const Character = () => {
    const router = useRouter();
    const {id} = router.query;
    const getCharactersPage = async (id: String) => {
        const res = await fetchByName('characters', {id});
        console.log(res);
    }
      
    useEffect(() => {
        getCharactersPage(String(id));
    }, []);
    return (
        <>
            <p>asdasd</p>
        </>
    )
}



export default Character;

