import React,{useState} from 'react'
import styles from './Search.module.css'
import { ReactComponent as SearchIcon } from '../../assets/search-icon.svg'

function Search({placeholder , data}){
    const onSubmit = (e)=>{
        e.preventDefault();
    };

    return (
        <>
        <form className={styles.wrapper}>
        <input className={styles.search} placeholder={placeholder}/>
        <button className={styles.searchButton} type='submit'>
            <SearchIcon/>
        </button>
        </form>
        </>
    )
}


export default Search