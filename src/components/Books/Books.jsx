import s from './Books.module.css';
import Book from './Book/Book';

import { useState } from 'react';

function Books() {

    const [searchTerm, setSearchTerm] = useState('');

    return (
        <div className={s.parant_container}>
            <div className={s.main_container}>
                <div className={s.sub_main_container}>

                    <div className={s.headers}>
                        <h3>Книги</h3>
                    </div>

                    <div className={s.links_container}>
                        <input className={s.input} placeholder='Искать кннигу'

                            onChange={(e) => setSearchTerm(e.target.value)}

                        />
                    </div>

                    <Book searchTerm={searchTerm} />

                </div>
            </div>
        </div>
    )
}

export default Books;