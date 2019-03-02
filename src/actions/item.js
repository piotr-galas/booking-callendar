import {nextStep} from './stepper'
import { openSummary } from './summary'
const items = [
  {
     id: 1,
     name: 'Deuter',
     full_name: "Deuter Kid Comfort III",
     image: "https://wypozycz-nosidelko.pl/wp-content/themes/alizee/images/deuter-comfort-kid-3-nosidelko.jpg",
     description: 'Najlepsze nosidełko na rynku dla dzieci siedzących',
 },
 {
    id: 2,
    name: 'Tula Standard',
    full_name: "Nosidełko ergonomiczne Tula Standard",
    image: "https://wypozycz-nosidelko.pl/wp-content/themes/alizee/images/tula-nosidelko-dla-dzieci.jpg",
    description: 'Nosidełko ergonomiczne dla dzieci od 4-10kg',
 },
 {
    id: 3,
    name: 'Tula Toddler',
    full_name: "Nosidełko ergonomiczne Tula Toddler",
    image: "https://wypozycz-nosidelko.pl/wp-content/themes/alizee/images/chusta-tkana-do-noszenia.jpg",
    description: 'Nosidełko ergonomiczne dla troche starszych dzieci',
 },
]

export function fetchItems(){
  return {type: 'FETCH_ITEMS', payload: {items}}
}

export function selectItem(item){
  return (dispatch) => {
    dispatch({type: 'SELECT_ITEM', payload: {item_id: item.id}})
    dispatch(openSummary())
    setTimeout(() => {
      dispatch(nextStep(0))
    }, 400)

  }
}
