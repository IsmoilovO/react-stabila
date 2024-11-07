
import './banner.scss'

import machine from '../../assets/img/hero-2.png'

export const Banner = () => {
    return (
        <section className="hero">
            <div className="container">
                <div className="hero__block">
                    <div className="hero__content">
                        <h1 className="hero__title">
                            Сильнее
                            Снегопада
                        </h1>
                        <p className="hero__text">
                            Большой выбор снегоуборочных
                            машин. Качественные устройства
                            для любого бюджета
                        </p>

                        <div className="hero__btn_blocks">
                            <a href="#" className="hero__btn">Подробнее</a>
                            <a href="#" className="hero__btn2"></a>
                        </div>
                        <div className="hero__imge">
                            <img className="hero__img" src={machine} alt="hero" />
                        </div>
                    </div>

                    <div className="hero__imgee">
                        <img className="hero__img" src={machine} alt="hero" />
                    </div>

                    <div className="hero__btn_block">
                        <a href="#" className="hero__btn">Подробнее</a>
                        <a href="#" className="hero__btn2"></a>
                    </div>
                </div>
            </div>
        </section>
    );
};
