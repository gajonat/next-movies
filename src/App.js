import { useState, useEffect } from 'react'
import PageContent from './components/PageContent';
import PageFooter from './components/PageFooter';
import PageHeader from './components/PageHeader';
import ContentItemBig from './components/ContentItemBig';
import Modal from 'react-modal';


require('dotenv').config()

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.75)"
  },
};

function App() {


  const [moviesData, setMoviesData] = useState([])
  const [moviesDataFiltered, setMoviesDataFiltered] = useState([])
  const [modalIsOpen, setIsOpen] = useState(false);
  const [selectedItemData, setSelectedItemData] = useState(null);


  useEffect(() => {
    updateMoviesData()
  }, [])
  
  
  function closeModal() {
    setSelectedItemData(null)
    setIsOpen(false);
  }

  const fetchMoviesData = async () => {
    try{
      const res = await fetch(`${process.env.REACT_APP_SERVER_ADDRESS}/movies`)
      const data = await res.json()

      return data ?? []
    }
    catch(e){
      console.error('failed to fetch movies:', e)
    }
    return [];
  }

  const readMoreClickedOnItem = (itemId) => {
    const itemData = moviesData?.find(x => x.id === itemId);
    if (!itemData){
      console.error(`Error - id ${itemId} not found in movie data`)
      return;
    }
    
    setSelectedItemData(itemData);
    setIsOpen(true);
  }

  const updateMoviesData = async () => {
    const data = await fetchMoviesData()
    setMoviesData(data)
    setMoviesDataFiltered(data)
  }

  const applyFilter = (term) => {
    if (!term || term.match(/^\s+$/)){
      setMoviesDataFiltered(moviesData);
      return;
    }
    const regex = new RegExp(term, "i");
    const filteredData = moviesData.filter(x => x.title.match(regex) || x.released.match(regex));
    setMoviesDataFiltered(filteredData);
  }

  return (
    <div className="App">
      <PageHeader searchTermChanged={applyFilter}/>
      <PageContent moviesData={moviesDataFiltered} readMoreClickedOnItem={readMoreClickedOnItem}/>
      <PageFooter />

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Example Modal"
        style={customStyles}
      >
        {selectedItemData && (
          <ContentItemBig data={selectedItemData} closeModalClicked={closeModal} />
        )}
      </Modal>      
    </div>
  );
}

export default App;
