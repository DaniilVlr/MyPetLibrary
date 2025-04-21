
import s from "./Movie.module.css"

function MovieItem(props) {
    return (
        <div>
            <div className={s.movieBox}>
                <img className={s.Img} src={props.imageUrl} />
                <div className={s.movieText}>

                    <div className={s.movieTextHead}>
                        {props.name}
                    </div>

                    <div className={s.movieTextHead}>
                        {props.year}
                    </div>

                    <div className={s.movieDescription}>
                        {props.description}
                    </div>

                    <div className={s.movieTextRating}>
                        {props.rating}
                        <div className={s.outRating}>
                            из 10
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

function Movie({ searchTerm }) {

    // {
    //     id: , name: , rating: , year: ,
    //     description: ,
    //         imageUrl: ,
    // },


    let MoviesData = [
        {
            id: 1, name: 'Бойцовский клуб', rating: 10, year: 1999,
            description: 'Сотрудник страховой компании страдает хронической бессонницей и отчаянно пытается вырваться из мучительно скучной жизни.',
            imageUrl: 'https://avatars.mds.yandex.net/get-kinopoisk-image/4716873/85b585ea-410f-4d1c-aaa5-8d242756c2a4/300x450'
        },
        {
            id: 2, name: 'Гуммо', rating: '7', year: 1997,
            description: 'маленький провинциальный городок «одноэтажной Америки», в середине семидесятых накрытый мощным торнадо, да так и не оправившейся от него ни в экономическом, ни в любых других смыслах. ',
            imageUrl: 'https://kinopoisk-ru.clstorage.net/1zV4K6215/1c47a0aMWSh9/sL_3k0Yks6btC3qKe2Bp1wsTyrBrk_YSkqhz_CqUuOTeTZvZyDL57WMWpSJn_CwLVCRJbpL_DjhCq813bY3sXZGa4mfnQeZzDO-Kr_5AHdZuk8u0vxaSU0OdpknYZ7pn_Nq5ujqw-yt3cqFTwtn5j1AUmbr3G_pMJYhcYMkKWB1TPLZjU_aRtYhICtoqI5gAupFY1YpxhbbDK7AvueabR5_JmzlqEsqLZBGghkHJ-TyCZqp6tK4JvlQLKvJZ2kstIFyUwBGVUGV46brI-KD5QarQ6FfJsUeHAqpQL8tly0Tf6FvL-HLr2oVSwkQg-UpNEidLurVsO68kWcvwOQsKnbCvNxMypHKVmOq466pzGVLYwum1OOFH9wKYYW6JNtvXX9mZOjtxyIkHM-DnwSl570M0SmrXTyov13lo00qKKD1ynIWBEmdB1fm4q5goEJqjaJPbhLkD5hbBKqOsGsc55637eOhIY9jo9ECDRBEKeR7T51pIlpx5LySI-zL42Zmekt9GYQHVUnS5i4n4-ABqoPnhSefY4qVG8yowbklUmIT9qxgIi3HIuRbTkNeS-jjukDar-TWOms1UGLiwOwvInVHMxaNDVsE16xtKKhlyiELokPr2-oO29WJoQb5pxosmnippOijSKKtVIIM0cigZfOBmuKq1LdvfNLkLMrp5mJ1RjfZw4ubi5_qrS9vLgmvx2xNqhEsRZWSiiIMP-qTqtM5LauoIEdkY51MCt7P72f7hd_moZjwoPnfb-8BbiRl8I8ykIiO0sse5OMup2mIrA8pwGxbLwJWUAyrRPbk2WqffaQk5eUOpqAdioFUC6CndM2YZ-_d9yX01Wbjj-Yu4bVGedZDR1QPFW8qZibhiSjO4gBkWOvCURqDbQg7K5hv23csbCwkgOCj1c8DF4tjp7iKHenvXjJvPNUtYImq6OX9jn8QAkBYRNZmrqxgKsoszybLJljlAxsQSSsJMKBb59J2I2VvY4BqYFYMSxlEree9jRVvZhiwYzeb66EAriBlfwo2F8hDUAOcLS0sKiiBocwmRqGc7gvWnISnDvGt3GMa8GXvYiwBYmoeCsVUB6FkvcXVrOeSeiF72SojxODlbz1Es1_MTtEHFWOrLOhhiqJCLwtrGKdH3ZzL6IyxZNSrnjMsra2gT-hu3kSNEoer7PdCG6Li0n3msF2tYcXmpCX4Af4cgsfbTF8ib2tiLkKgSuqGrBctgBaUhOUKPS9UqZM7KGko7IhvKtkBA5iC4-u4iNSkZ9y4IHDVbyJPY-0kO4p9F4MH18EWqusrqGgF4gZlRqvWocSQWYYqDXdlXSLS-m4jZuNIL62YTcVVyG8ouwXVLm1bNah-0mSiyKTnrXqGPBGMSVcGF-Gg4SrnCyLOo0vskWUIGxCMLw92YhKhUf-vJy3ti6TjkERMkcks7LuOX6xiGLamd9CmakWoJq03DvzbSwvVAZosqSEkIAsjSyvOpNwmg9lYQy3Bs-SVpBOwLufp4AMg4NMMAFILaGv2AlihaR_14bjQ7-eLYWSm-IZy1MUJVQyfJKLuKKkKbY6vTa3Sp85eWoLjDLZunCtW-6DvZaEGLWvSBQyVQq4k-A2YKWVT-mC5GiKhCm-o6LMHO1zMRxEFFuXrIqDtTCDOpAWuHCJEl9hJo0C1btHnVvhuq64kQqyk0w5Bn4ht47sAlGxnUj7gtJPmI0AjaCw_RL8USE7dzJ6kr-vqp4UsCqaOpVvpDBjbgaGEvmXVo933qSeiLUjn7ZWFjB_M6Sc6D5yi595_rruZb6vDa6jkuwy5Go1CWcIaI2qoY-YEYcwhzqOcLAreHwVnSHann6daeall7K6LLGgTBEXfiC8ndwwbpySVteb3k2zgCGOgajoNOZoDwRXBmWGlLubqAqxN4kPnUKEPnhlA4Iz75xdnln9s5K9ugCrgEIsNH0QvpnuBnyUr1_Vj85Gk68GuLiQ3j3yRBQccjdRhqGkjL0xrCqVL5JFqhJBYBGjOMWvS6xT9pKmmoc_o7hpLDBIFLiC_iRLvLh5_JH4dYuJDbycvv00yVkXL0QVeLK3ipG4JIYKtACUR6kfd34ThybVvF6EVtezoZ-0KriLSRQBVRWklN8GX7WqUNigwGWctD2BmZDLPfFhFDVUOHm6rZ6Dqxu3N64plnidFGdqJ4EE2J5AkXbplZq1lzi5vGgfBV4glYzJA0mYmUnamfBDkYMrgLe2wCXKaB0DbitYjYi_rYMxlASpGLBNsiB2cgikFvusZ6pH35muobAGr7dZECtkNZui9ghKh7pt9JrFfa-CCo2LtdML3WAIIWo1SZG6gaqbLbEzriOnRJcpcFYppD3kj1GSe-GmuJOBMo2yTxcsURyktN8eTpqRTsmw52SXvgCJnZvPE9x6IRRSEW-sq5uCoxSyJrYdqFGSF3ZBF4UizKtIqWj9ha6wrjyPtlYpG2Mct5L4O1O9l0r0rNVNq7YgoJu37gXMaCwKQzpRsJ65vrAxlRuJFKtPqDl-bhCiFc-6b6hI_pGeuoQciJtJGwR0DryX6wNAh7hqwbrtQLCnLr-jleoZ5EMtAkg4T7yfu6yqDo0tpx2XTK40V3MGngXmgWixf-C7t4OwKbK8aBAnVgmEr_wgQ5ildtCM40OqjRCOprXsKfhkBiVyLnirppuEpzGJGLYOvlCWIGF8DL8bxKpFjGf4nr-TigaXlWwMNVMFlLLTGUe4kF3gvfxKsacriLWFwj3tbSkcRQlyjqScs5kHsAmYFqxnhDhhUQ-4OeGpYrdOyoKFk40MnZVOOzJULLiH8hVul7p9_qX9Y7CpPZ-Etsse8W09FncOaYefmaOgCLIJjjavU5sAY1YIgjrioUupbtm9hpK0B5GJQRsLYyWehssSRZWSYsS38le5ixOdkpbgJ9N-KwttBmuVq5uqnzKOM5U3ul6xAHpQF7wexZB8vUrKp5CrmjCJnFoeGHcomYfqG0mcn3XcnM4'
        },
        {
            id: 3, name: 'Матрица', rating: 9, year: 1999,
            description: 'Жизнь Томаса Андерсона разделена на две части: днём он — самый обычный офисный работник, получающий нагоняи от начальства, а ночью превращается в хакера по имени Нео, и нет места в сети, куда он бы не смог проникнуть. Но однажды всё меняется. Томас узнаёт ужасающую правду о реальности.',
            imageUrl: 'https://kinopoisk-ru.clstorage.net/1zV4K6215/1c47a0aMWSh9/sL_3k0Yks6btC3qKe2Bp1wsTyrBrk_YSkqhz_CqUuOTeTZvZyDL57WNGpVJnbAx7USQMPlLaG01CrpgHfS3sXfT_smJnwfazDMqKv85QDWP75uvB_xaSU0OdpknYZ7pn_Nq5ujqw-yt3cqFTwtn5j1AUmbr3G_pMJYhcYMkKWB1TPLZjU_aRtYhICtoqI5gAupFY1YpxhbbDK7AvueabR5_JmzlqEsqLZBGghkHJ-TyCZqp6tK4JvlQLKvJZ2kstIFyUwBGVUGV46brI-KD5QarQ6FfJsUeHAqpQL8tly0Tf6FvL-HLr2oVSwkQg-UpNEidLurVsO68kWcvwOQsKnbCvNxMypHKVmOq466pzGVLYwum1OOFH9wKYYW6JNtvXX9mZOjtxyIkHM-DnwSl570M0SmrXTyov13lo00qKKD1ynIWBEmdB1fm4q5goEJqjaJPbhLkD5hbBKqOsGsc55637eOhIY9jo9ECDRBEKeR7T51pIlpx5LySI-zL42Zmekt9GYQHVUnS5i4n4-ABqoPnhSefY4qVG8yowbklUmIT9qxgIi3HIuRbTkNeS-jjukDar-TWOms1UGLiwOwvInVHMxaNDVsE16xtKKhlyiELokPr2-oO29WJoQb5pxosmnippOijSKKtVIIM0cigZfOBmuKq1LdvfNLkLMrp5mJ1RjfZw4ubi5_qrS9vLgmvx2xNqhEsRZWSiiIMP-qTqtM5LauoIEdkY51MCt7P72f7hd_moZjwoPnfb-8BbiRl8I8ykIiO0sse5OMup2mIrA8pwGxbLwJWUAyrRPbk2WqffaQk5eUOpqAdioFUC6CndM2YZ-_d9yX01Wbjj-Yu4bVGedZDR1QPFW8qZibhiSjO4gBkWOvCURqDbQg7K5hv23csbCwkgOCj1c8DF4tjp7iKHenvXjJvPNUtYImq6OX9jn8QAkBYRNZmrqxgKsoszybLJljlAxsQSSsJMKBb59J2I2VvY4BqYFYMSxlEree9jRVvZhiwYzeb66EAriBlfwo2F8hDUAOcLS0sKiiBocwmRqGc7gvWnISnDvGt3GMa8GXvYiwBYmoeCsVUB6FkvcXVrOeSeiF72SojxODlbz1Es1_MTtEHFWOrLOhhiqJCLwtrGKdH3ZzL6IyxZNSrnjMsra2gT-hu3kSNEoer7PdCG6Li0n3msF2tYcXmpCX4Af4cgsfbTF8ib2tiLkKgSuqGrBctgBaUhOUKPS9UqZM7KGko7IhvKtkBA5iC4-u4iNSkZ9y4IHDVbyJPY-0kO4p9F4MH18EWqusrqGgF4gZlRqvWocSQWYYqDXdlXSLS-m4jZuNIL62YTcVVyG8ouwXVLm1bNah-0mSiyKTnrXqGPBGMSVcGF-Gg4SrnCyLOo0vskWUIGxCMLw92YhKhUf-vJy3ti6TjkERMkcks7LuOX6xiGLamd9CmakWoJq03DvzbSwvVAZosqSEkIAsjSyvOpNwmg9lYQy3Bs-SVpBOwLufp4AMg4NMMAFILaGv2AlihaR_14bjQ7-eLYWSm-IZy1MUJVQyfJKLuKKkKbY6vTa3Sp85eWoLjDLZunCtW-6DvZaEGLWvSBQyVQq4k-A2YKWVT-mC5GiKhCm-o6LMHO1zMRxEFFuXrIqDtTCDOpAWuHCJEl9hJo0C1btHnVvhuq64kQqyk0w5Bn4ht47sAlGxnUj7gtJPmI0AjaCw_RL8USE7dzJ6kr-vqp4UsCqaOpVvpDBjbgaGEvmXVo933qSeiLUjn7ZWFjB_M6Sc6D5yi595_rruZb6vDa6jkuwy5Go1CWcIaI2qoY-YEYcwhzqOcLAreHwVnSHann6daeall7K6LLGgTBEXfiC8ndwwbpySVteb3k2zgCGOgajoNOZoDwRXBmWGlLubqAqxN4kPnUKEPnhlA4Iz75xdnln9s5K9ugCrgEIsNH0QvpnuBnyUr1_Vj85Gk68GuLiQ3j3yRBQccjdRhqGkjL0xrCqVL5JFqhJBYBGjOMWvS6xT9pKmmoc_o7hpLDBIFLiC_iRLvLh5_JH4dYuJDbycvv00yVkXL0QVeLK3ipG4JIYKtACUR6kfd34ThybVvF6EVtezoZ-0KriLSRQBVRWklN8GX7WqUNigwGWctD2BmZDLPfFhFDVUOHm6rZ6Dqxu3N64plnidFGdqJ4EE2J5AkXbplZq1lzi5vGgfBV4glYzJA0mYmUnamfBDkYMrgLe2wCXKaB0DbitYjYi_rYMxlASpGLBNsiB2cgikFvusZ6pH35muobAGr7dZECtkNZui9ghKh7pt9JrFfa-CCo2LtdML3WAIIWo1SZG6gaqbLbEzriOnRJcpcFYppD3kj1GSe-GmuJOBMo2yTxcsURyktN8eTpqRTsmw52SXvgCJnZvPE9x6IRRSEW-sq5uCoxSyJrYdqFGSF3ZBF4UizKtIqWj9ha6wrjyPtlYpG2Mct5L4O1O9l0r0rNVNq7YgoJu37gXMaCwKQzpRsJ65vrAxlRuJFKtPqDl-bhCiFc-6b6hI_pGeuoQciJtJGwR0DryX6wNAh7hqwbrtQLCnLr-jleoZ5EMtAkg4T7yfu6yqDo0tpx2XTK40V3MGngXmgWixf-C7t4OwKbK8aBAnVgmEr_wgQ5ildtCM40OqjRCOprXsKfhkBiVyLnirppuEpzGJGLYOvlCWIGF8DL8bxKpFjGf4nr-TigaXlWwMNVMFlLLTGUe4kF3gvfxKsacriLWFwj3tbSkcRQlyjqScs5kHsAmYFqxnhDhhUQ-4OeGpYrdOyoKFk40MnZVOOzJULLiH8hVul7p9_qX9Y7CpPZ-Etsse8W09FncOaYefmaOgCLIJjjavU5sAY1YIgjrioUupbtm9hpK0B5GJQRsLYyWehssSRZWSYsS38le5ixOdkpbgJ9N-KwttBmuVq5uqnzKOM5U3ul6xAHpQF7wexZB8vUrKp5CrmjCJnFoeGHcomYfqG0mcn3XcnM4',
        },
    ]

    const filteredMovies = MoviesData.filter(movie =>
        movie.name.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase())
    );

    return (
        <div>
            {filteredMovies.map(movie => (
                <MovieItem name={movie.name} rating={movie.rating} year={movie.year}
                    description={movie.description} imageUrl={movie.imageUrl} />
            ))}
        </div>
    )
}

export default Movie;