import PostPage from "./components/PostPage"
import FilmContext from "./contexts/FilmContext"

const films = [
  {
    id: 1,
    titolo: "Inception",
    slug: "inception",
    descrizioneBreve: "Un thriller psicologico ambientato in mondi onirici.",
    descrizioneLunga: "Dom Cobb è un ladro esperto nel sottrarre segreti dal subconscio durante il sogno. Ingaggiato per una missione apparentemente impossibile, deve impiantare un'idea nella mente di un uomo.",
    genere: "Fantascienza, Thriller",
    img: "/inception.jpg",
  },
  {
    id: 2,
    titolo: "La Vita è Bella",
    slug: "la-vita-e-bella",
    descrizioneBreve: "Una storia toccante durante la Seconda Guerra Mondiale.",
    descrizioneLunga: "Guido, un uomo ottimista e pieno di spirito, utilizza la sua immaginazione per proteggere il figlio dagli orrori di un campo di concentramento nazista.",
    genere: "Drammatico, Commedia",
    img: "/lavitaebella.jpg"
  },
  {
    id: 3,
    titolo: "Interstellar",
    slug: "interstellar",
    descrizioneBreve: "Un viaggio attraverso lo spazio e il tempo.",
    descrizioneLunga: "Quando la Terra diventa inabitabile, un team di astronauti intraprende una missione per trovare un nuovo pianeta abitabile, affrontando dilemmi scientifici e morali.",
    genere: "Fantascienza, Drammatico",
    img: "/interstellar.jpg"
  },
  {
    id: 4,
    titolo: "Il Padrino",
    slug: "il-padrino",
    descrizioneBreve: "Il racconto epico di una famiglia mafiosa italo-americana.",
    descrizioneLunga: "La saga di Don Vito Corleone e della sua famiglia che navigano nel mondo della criminalità organizzata mentre affrontano temi di lealtà e tradimento.",
    genere: "Crime, Drammatico",
    img: "/ilpadrino.jpg"
  }
]

function App() {

  return (
    <>
      <FilmContext.Provider value={films}>
        <PostPage></PostPage>

      </FilmContext.Provider>
    </>
  )
}

export default App 
