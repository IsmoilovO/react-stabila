
import './card.scss'


export const Card = (props) => {
    return (
        <li className="product__item">
            <div className="prodct__image">
                <img
                    src={props.image}
                    alt="product"
                    className="prodcut__img"
                />
            </div>
            <div className="product__insed_content">
                <p className="product__text">
                    {props.category}
                    {/* <span
                        className="product__hiden
                "
                    >
                        JRK-500/13.0L 630058
                    </span> */}
                </p>
                <h3 className="product__subtitle">
                    {props.name}
                </h3>
                <div className="product__price_block">
                    <ins className="product__pricee">
                        {props.price}
                    </ins>
                    <del className="product__sale">93 200</del>
                </div>
                <div className="product__end_block">
                    <a href="" className="product__btnn">
                        В корзину
                    </a>
                    <span className="product__statisc"></span>
                </div>
            </div>
        </li>
    )
}