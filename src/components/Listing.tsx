import { ListingType } from "../model";
import { makePrice, level, ellipsis } from "./utilites";
import './Listing.css';

const Listing = ({ item }: ListingType) => {
  return (
    <div className="item-list">
      {item.map(value => (
        <div className="item" key={value.listing_id}>
          <div className="item-image">
            <a href={value.url}>
              <img src={value.MainImage?.url_570xN} alt="" />
            </a>
          </div>
          <div className="item-details">
            <p className="item-title">
              {ellipsis(value.title)}
            </p>
            <p className="item-price">
               {makePrice(value.currency_code, value.price)}
            </p>
            <p className={`item-quantity level-${level(value.quantity)}`}>{ value.quantity }</p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Listing;