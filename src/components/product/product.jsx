import "./product.scss";
import { Card } from "../card/car";
import { mockData } from "../../constants/mock-data";

export const Product = () => {
    const renderProduct = mockData.map((item) => (
        <Card
            image={item.img}
            name={item.name}
            category={item.discr}
            price={item.price}
            key={item.id}
        />
    ));
    return (
        <section className="product">
            <div className="container">
                <div className="product__block">
                    <div className="product__content">
                        <h2 className="product__title">Товары месяца</h2>
                        <a href="#" className="product__btn"></a>
                    </div>
                    <ul className="product__list">{renderProduct}</ul>
                </div>

                <div className="product__block">
                    <div className="product__content">
                        <h2 className="product__title">Товары месяца</h2>
                        <a href="#" className="product__btn"></a>
                    </div>
                    <ul className="product__list">{renderProduct}</ul>
                </div>
            </div>
        </section>
    );
};
