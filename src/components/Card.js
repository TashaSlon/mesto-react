export function Card({card, onCardClick}) {
  function handleClick() {
    onCardClick(card);
  }  

  return (
    <li className="card__block">
      <button className="btn btn_type_delete" type="button"></button>
      <div className="card">
        <div className="card__image" style={{ backgroundImage: `url(${card.link})`}} onClick={handleClick}></div>
        <div className="card__description">
          <p className="card__name">{card.name}</p>
          <div>
            <button className="btn btn_type_like" type="button"></button>
            <p className="card__likes">{card.likes.length}</p>
          </div>
        </div>
      </div>
    </li>   
  );
}