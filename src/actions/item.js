const items = [
  {
     id: 1,
     name: 'Deuter',
     image: "https://wypozycz-nosidelko.pl/wp-content/themes/alizee/images/deuter-comfort-kid-3-nosidelko.jpg",
     desctiption: 'Najlepsze nosidełko na rynku',
 },
 {
    id: 2,
    name: 'Tula Standart',
    image: "https://wypozycz-nosidelko.pl/wp-content/themes/alizee/images/tula-nosidelko-dla-dzieci.jpg",
    desctiption: 'Nosidełko ergonomiczne dla dzieci od 4-10kg',
 },
 {
    id: 3,
    name: 'Tula Todler',
    image: "https://wypozycz-nosidelko.pl/wp-content/themes/alizee/images/chusta-tkana-do-noszenia.jpg",
    desctiption: 'Nosidełko ergonomiczne dla troche starszych dzieci',
 },
]

export function fetchItems(){
  return {type: 'FETCH_ITEMS', payload: {items}}
}
