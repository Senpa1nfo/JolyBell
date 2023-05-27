import './Category.sass';

const Category = () => {

    return (
        <div className='category'>
            <div className="category__title">Футболки</div>
            <div className="category__list">
                <div className="category__item" 
                    onMouseEnter={() => {
                            document.querySelector('.category__blackout').classList.add('category__blackout_active');
                            document.querySelector('.category__btn').classList.add('category__btn_active');
                        }}
                    onMouseLeave={() => {
                        document.querySelector('.category__blackout').classList.remove('category__blackout_active');
                        document.querySelector('.category__btn').classList.remove('category__btn_active');
                    }}>
                    <div className="category__info">
                        <div className="category__price">950 UAH</div>
                        <img className="category__image" loading="lazy" src="https://cdn.jolybell.com/images/cGNahzAeoJFmDUy.png?width=387&amp;height=360&amp;quality=85" alt=""/>
                        <div className="category__blackout"></div>
                    </div>
                    <button className="category__btn">Ультра Чорна Футболка</button>
                </div>
                <div className="category__item">
                    <div className="category__info">
                        <div className="category__price">950 UAH</div>
                        <img className="category__image" loading="lazy" src="https://cdn.jolybell.com/images/cGNahzAeoJFmDUy.png?width=387&amp;height=360&amp;quality=85" alt=""/>
                    </div>
                    <button className="category__btn">Ультра Чорна Футболка</button>
                </div>
                <div className="category__item">
                    <div className="category__info">
                        <div className="category__price">950 UAH</div>
                        <img className="category__image" loading="lazy" src="https://cdn.jolybell.com/images/cGNahzAeoJFmDUy.png?width=387&amp;height=360&amp;quality=85" alt=""/>
                    </div>
                    <button className="category__btn">Ультра Чорна Футболка</button>
                </div>
                <div className="category__item">
                    <div className="category__info">
                        <div className="category__price">950 UAH</div>
                        <img className="category__image" loading="lazy" src="https://cdn.jolybell.com/images/cGNahzAeoJFmDUy.png?width=387&amp;height=360&amp;quality=85" alt=""/>
                    </div>
                    <button className="category__btn">Ультра Чорна Футболка</button>
                </div>
                <div className="category__item">
                    <div className="category__info">
                        <div className="category__price">950 UAH</div>
                        <img className="category__image" loading="lazy" src="https://cdn.jolybell.com/images/cGNahzAeoJFmDUy.png?width=387&amp;height=360&amp;quality=85" alt=""/>
                    </div>
                    <button className="category__btn">Ультра Чорна Футболка</button>
                </div>
            </div>
        </div>
    )
}

export default Category;