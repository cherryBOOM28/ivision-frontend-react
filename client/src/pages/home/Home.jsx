import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/header/Header';
import cl from './Home.module.css';
import FileUploader from '../../components/fileuploader/FileUploader';
import matches from '../data/foundedMatches';
import Button from '../../components/UI/button/Button';

function Home() {

    const navigate = useNavigate();

    const handleSubmit = () => {
        navigate('/search');
    };

    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState([]);

    const handleSearch = () => {
        // Perform search logic here based on the searchTerm
        // Update searchResults with the filtered data

        // Example: Filtering data based on a name property
        const filteredResults = matches.filter((item) =>
            item.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setSearchResults(filteredResults);
    };

    return (
        <div className={cl.home__wrapper}>
            <Header />
            <div className={cl.container}>
                <div className={cl.search__line}>
                    <h2 className={cl.search__text}>Поиск по ИИН</h2>
                    <div className={cl.search}>
                        <input 
                            type='text' 
                            className={cl.search__input}
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                        <input 
                            type='submit' 
                            value='Запрос' 
                            className={cl.submit__btn} 
                            onClick={handleSubmit}
                        />
                    </div>
                </div>
                <h2 className={cl.or}>ИЛИ</h2>
                <div className={cl.file__selector}>
                    <FileUploader />
                    
                </div>
                
            </div>
        </div>
    );
}

export default Home;