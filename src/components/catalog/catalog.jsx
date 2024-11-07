
import './catalog.scss'
import stabil from '../../assets/img/stabil-mobi.png'
import stabil2 from '../../assets/img/stabil-mob-2.png'
import stabil1 from '../../assets/img/stabil-1.png'
import stabil3 from '../../assets/img/stabil-2.png'


export const Catalog = () => {
    return (
        <section className="stabil">
            <div className="container stabil__container">
                <div className="stabil__block">
                    <div className="stabil__img">
                        <img src={stabil} alt="product" className="stabil__image" />
                        <img src={stabil3} alt="product" className="stabil__images" />
                    </div>
                    <div className="stabil__content">
                        <h2 className="stabil__title">Стабилизаторы и Источники бесперебойного питания энергии</h2>
                        <span className="stabil__line"></span>
                        <a href="#" className="stabil__btn">Перейти в каталог</a>
                    </div>
                    <div className="stabil__picture">
                        <img src={stabil2} alt="product" className="stabil__picturee" />
                        <img src={stabil1} alt="product" className="stabil__picturees" />
                    </div>
                </div>
            </div>
        </section>
    );
};
