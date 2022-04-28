import { useState, useEffect } from 'react'
import style from './listEvents.module.scss'
import FiltersEvents from './filtersEvents'
import Lista from './lista'
import ViewSwitcher from './viewSwitcher'
import Cards from './cards'
import {motion, AnimatePresence} from 'framer-motion'
function ListEvents({ dati }) {
  const [currentFilter, setCurrrentFilter] = useState([])
  const [listaDatiFiltrati, setListadatiFiltrati] = useState(dati)
  const [switchCard, setSwitchCard] = useState(false)

  useEffect(() => {

    if (currentFilter.length > 0) {
      const filter = dati.filter((item) => currentFilter.includes(item.tags[0]?.name))
      console.log(filter);
      setListadatiFiltrati(filter)
    } else {
      setListadatiFiltrati(dati)
    }
  }, [currentFilter])



  return (
    <div className={style.wrapperLista}>
      <div className={style.listaheader}>
        <FiltersEvents dati={dati} currentFilter={currentFilter} setCurrrentFilter={setCurrrentFilter} />
        <ViewSwitcher switchCard={switchCard} setSwitchCard={setSwitchCard} />
      </div>
      <AnimatePresence>
        {switchCard ?
        <Cards listaDatiFiltrati={listaDatiFiltrati} style={style} />
        :
        <Lista listaDatiFiltrati={listaDatiFiltrati} style={style}/>
        }
      </AnimatePresence>   
      </div>
  )
}

export default ListEvents