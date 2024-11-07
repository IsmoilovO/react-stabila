import './midle.scss'
import logo from '../../../assets/img/logo.svg'
import logog from '../../../assets/img/logog.svg'
import instagram from '../../../assets/img/instagram.svg'
import header2 from '../../../assets/img/header-id.svg'

export const Midle = () => {
    return (
        <div className="container">
            <div className="main__center_blockk">
                <a href="#" className="main__center_logo">
                    <img src={logo} alt="logo" className="main__logo" />
                    <img src={logog} alt="logo" className="main_mobilee_logo" />
                </a>
                <a href="tel:+7 (499) 719-99-94" className="main__phone">+7 (499) 719-99-94</a>
                <form className="main__form" method="post">
                    <input
                        className="main__input_form"
                        id="search"
                        name="input"
                        placeholder="Что ищем?.."
                        aria-label="Что ищем?.."
                        type="text"
                    />
                    <button className="main__form__btn" type="submit">Поиск</button>
                </form>

                <div className="main__top_social">
                    <a href="#" className="main__social">
                        <img src={instagram} alt="#" className="main__social__image" />
                    </a>
                    <a href="#" className="main__social">
                        <img src={instagram} alt="#" className="main__social__image" />
                    </a>
                    <a href="#" className="main__social">
                        <img src={instagram} alt="#" className="main__social__image" />
                    </a>
                    <a href="#" className="main__social">
                        <img src={instagram} alt="#" className="main__social__image" />
                    </a>

                    <a href="#" className="main__btn_adres">Адреса магазинов</a>

                    <a href="#" className="main__social">
                        <img src={header2} alt="#" className="main__social__image" />
                    </a>
                </div>
            </div>
        </div>
    );
};
