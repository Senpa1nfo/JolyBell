import './CategoryItem.sass';

const CategoryItem = () => {

    console.log(document.querySelector('.category__list'));

    return (
        <div className="category__item category__item_active">
            <div className="category__info">
                <div className="category__price">950 UAH</div>
                <img className="category__image" loading="lazy" src="https://cdn.jolybell.com/images/cGNahzAeoJFmDUy.png?width=387&amp;height=360&amp;quality=85" alt=""/>
            </div>
            <button className="category__btn">Ультра Чорна Футболка</button>
        </div>
    )
}

export default CategoryItem;