import Link from 'next/link'
import { GrLinkNext } from "react-icons/gr"

function Lista({ listaDatiFiltrati, style }) {
    const sliced = listaDatiFiltrati.slice(0, 15)
    return (
        <ul>
            {listaDatiFiltrati.map((item) => {
                const dataPubblicazione = new Date(item.pubblicationDate).toLocaleString('en', { day: 'numeric', month: 'long', year: 'numeric' })
                return (
                    <Link key={item._id} href={`magazine/${item.slug}`}><li className={style.evento}>
                        <div className={style.title}>{item.title}</div>
                        <div className={style.data}>
                            {dataPubblicazione} <span><GrLinkNext /> </span>
                        </div>
                    </li></Link>
                )
            })}

        </ul>
    )
}

export default Lista