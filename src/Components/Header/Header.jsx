import './Header.sass';

const Header = () => {
    return (
        <div className='header'>
            <div className="header__first">
                <div className="header__left-line"></div>
                <a className="header__logo" href="/">

                </a>
                <div className="header__right-line"></div>
            </div>
            <div className="header__second">
                <nav className="header__menu">
                    <div className="header__menu__item"><a href="/">Футболки</a></div>
                    <div className="header__menu__item"><a href="/">Світшоти</a></div>
                    <div className="header__menu__item"><a href="/">Худі</a></div>
                    <div className="header__menu__item"><a href="/">Рюкзаки</a></div>
                    <div className="header__menu__item"><a href="/">Штани/шорти</a></div>
                    <div className="header__menu__item"><a href="/">Поло</a></div>
                    <div className="header__menu__item"><a href="/">Сорочки</a></div>
                    <div className="header__menu__item"><a href="/">Піжама</a></div>
                    <div className="header__menu__item"><a href="/">Шапки</a></div>
                    <div className="header__menu__item"><a href="/">Кепки</a></div>
                    <div className="header__menu__item"><a href="/">Труси</a></div>
                    <div className="header__menu__item"><a href="/">FAQ</a></div>
                    <div className="header__menu__item"><a href="/">Ваше замовлення</a></div>
                </nav>
            </div>
            
        </div>
    )
}

export default Header;