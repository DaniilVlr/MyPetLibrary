import s from './Book.module.css'



function BookItem(props) {
    return (
        <div>
            <div className={s.BookBox}>
                <img className={s.Img} src={props.img} />
                <div className={s.BookText}>

                    <div className={s.BookTextHead}>
                        {props.name}
                    </div>

                    <div className={s.BookDescription}>
                        {props.description}
                    </div>

                    <div className={s.BookTextRating}>
                        {props.autor}

                    </div>

                </div>
            </div>
        </div>
    )
}

function Book({ searchTerm }) {

    // {
    // id: , name: '', autor: '',
    //  description: '',
    // imageUrl: '',
    // },


    let BookData = [
        {
            id: 1, name: 'Любовь к жизни', autor: 'Джек Лондон',
            description: 'Отчаянную храбрость смыло волной страха. Он так слаб — что будет, если медведь нападет на него? Он выпрямился во весь рост как можно внушительнее, выхватил нож и посмотрел медведю прямо в глаза. Зверь неуклюже шагнул вперед, поднялся на дыбы и зарычал. Если бы человек бросился бежать, медведь погнался бы за ним. Но человек не двинулся с места, осмелев от страха; он тоже зарычал...',
            imageUrl: 'https://api.bookmate.ru/assets/books-covers/36/b9/q5ybIJfF-ipad.jpeg?image_hash=72f1b2712886593535e829c7b00c1f9b'
        },
        {
            id: 2, name: 'Афоризмы житейской мудрости', autor: 'Артур Шопенгауэр',
            description: 'Одно из наиболее значительных и популярных этических произведений в новоевропейской философии. Опирающийся на основное сочинение Шопенгауэра «Мир как воля и представление», этот трактат дает яркую и целостную картину философского восприятия жизни, с его отношением к воспитанию, долгу, судьбе, одиночеству.',
            imageUrl: 'https://api.bookmate.ru/assets/books-covers/7d/0d/msJBBLGF-ipad.jpeg?image_hash=480bf6b53a6196548f223e3ce3a74cae'
        },
        {
            id: 3, name: 'Процесс', autor: 'Франц Кафка',
            description: 'Роман о последнем годе жизни Йозефа К., увязшего в жерновах тупой и безжалостной судебной машины, — нелицеприятный портрет бюрократии, знакомой читателям XXI века не хуже, чем современникам Франца Кафки, и метафора монотонной человеческой жизни.',
            imageUrl: 'https://api.bookmate.ru/assets/books-covers/ec/86/DF7F8Ygs-ipad.jpeg?image_hash=20946272582914230b58904436bfcbe4',
        },

    ]

    const filteredBooks = BookData.filter(book =>
        [book.name, book.autor].some(field =>
            field.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase())
        )
    );

    return (
        <div>
            {filteredBooks.map(book => (
                <BookItem key={book.id} name={book.name} autor={book.autor}
                    description={book.description} img={book.imageUrl} />
            ))}

        </div>
    )
}

export default Book;