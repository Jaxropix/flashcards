import './App.css';
import FlashCards from './flashcard';

const App = () => {

  return(
    <div className="App">
      <div className='Header'>
      <h1>Greek Mythology Quiz</h1>
      <h2>Short quiz of Greek Mythology </h2>
      <p>Number of cards: 10</p>
      </div>
      <FlashCards />

    </div>
  )
}

export default App