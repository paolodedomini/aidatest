import Link from 'next/link'
import { GrLinkNext } from "react-icons/gr"
import{motion} from 'framer-motion'
function Lista({ listaDatiFiltrati, style }) {
    const sliced = listaDatiFiltrati.slice(0, 15)
    return (
        <motion.ul
        key="lista"
        initial={{ opacity: 0, top:'15px' }}
        animate={{ opacity: 1, top:0 }}
        exit={{ opacity: 0, top:'15px' }}
      >
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

        </motion.ul>
    )
}

export default Lista