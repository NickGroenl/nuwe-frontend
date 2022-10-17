import Link from 'next/link';
import {useRouter} from 'next/router';
import React, {FunctionComponent} from 'react';
import {Civilizations } from '../resources/types';
import {useAppSelector} from '../store/hooks';
import {getStore} from '../store/slice';
//import styles from '../styles/Home.module.css';

const Civs:FunctionComponent<Civilizations> = () => {
    const router = useRouter();
    const {civilizations} = useAppSelector(getStore);
    return (
        <>
        </>
    )
}



export default Civs;
