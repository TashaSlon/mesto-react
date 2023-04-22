import { Card } from "./Card.js";

export function Gallery({cards, onCardClick}) {
    return (
        <section className="gallery">
            <ul className="cards">
                {cards.map(card => {
                    return (<Card key={card._id} card={card} onCardClick={onCardClick}/>)
                })}
            </ul>
        </section>   
    );
}