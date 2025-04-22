import s from "./Main.module.css";
import { NavLink } from "react-router-dom";



function Main() {
    return (
        <div className={s.parant_container}>
            <div className={s.main_container}>
                <div className={s.sub_main_container}>
                    <div className={s.headers}>
                        <h1>Ваша медиатека</h1>
                        <h2>Храню ваши желания</h2>
                    </div>
                    <div className={s.links_container}>

                        
                            <NavLink className={s.button} to="/movies">Фильмы</NavLink>
                        
                            <NavLink className={s.button} to="/books">Книги</NavLink>
                        

                    </div>
                </div>
            </div>
        </div>
    );
}

export default Main;