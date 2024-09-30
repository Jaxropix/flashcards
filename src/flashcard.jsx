import { useState } from "react";
import './flashcard.css';


function FlashCards(){
    const questions = {
        "Which king turned everything he touched into gold?": "King Midas",
        "Which goddess is associated with the rainbow?": "Iris",
        "Which hero was known for his musical talents?": "Orpheus",
        "Which hero was known for his tragic love affair with Echo?": "Narcissus",
        "Which goddess is associated with wisdom and warfare?": "Athena",
        "Who is the god of the Sea?": "Posedion",
        "Who is the queen of the underworld?": "Persephone",
        "Which hero was known for his use of the trojan horse?": "Odysseus",
        "Who was the greek god of fire?": "Hephaestus",
        "What kind of work were written by Hesiod?": "Poetry"
    }
    const flashCardsArray = Object.entries(questions);

    const [currentCardIndex, setNewCardIndex] = useState(
        Math.floor(Math.random() * flashCardsArray.length)
    );
    const[flipped, setFlipped] = useState(true);

    const flip = () => {
        setFlipped(!flipped);
    }
    
    const nextCard = () => {
        let randomIndex;
        do{
            randomIndex = Math.floor(Math.random() * flashCardsArray.length);
        }while (randomIndex === currentCardIndex);
        setFlipped(false);
        setNewCardIndex(randomIndex);
    };

    const [currentQuestion, currentAnswer] = flashCardsArray[currentCardIndex];

    return(
        <div className="Card" onClick={flip}>
            {flipped ? <p>{currentAnswer}</p> : <p>{currentQuestion}</p>}
            <button onClick={nextCard}>Next Question</button>

        </div>
    );
    

}
export default FlashCards;