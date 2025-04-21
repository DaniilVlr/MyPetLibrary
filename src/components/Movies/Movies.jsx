import s from './Movies.module.css';

import Movie from './Movie/Movie';

import { useState } from 'react';


function Movies() {

    const [searchTerm, setSearchTerm] = useState('');

    return (
        <div className={s.parant_container}>
            <div className={s.main_container}>
                <div className={s.sub_main_container}>

                    <div className={s.headers}>
                        <h3>Фильмы</h3>
                    </div>

                    <div className={s.links_container}>
                        <input className={s.input} placeholder='Искать фильм'

                            onChange={(e) => setSearchTerm(e.target.value)}

                        />
                    </div>

                    <Movie searchTerm={searchTerm} />

                </div>
            </div>
        </div>
    )
}

export default Movies;