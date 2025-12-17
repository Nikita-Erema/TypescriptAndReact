import './Listing.css'

export interface ListingProps {
  listing_id: number,
  url: string,
  MainImage: {url_570xN: string},
  title: string,
  currency_code: string,
  price: string,
  quantity: number,
  [key: string]: any
}



export function Listing(props: { items : ListingProps[]}) {
    return (
        <>{ props.items.map((item : ListingProps) => {
            return (
                <div className="product-card" key={item.listing_id}>
                    <img src={item.MainImage.url_570xN || ''} alt="" className="product-image"/>
                    <div className="product-info">
                        <h3 className="product-title">{
                            item.title.length <= 50 
                            ?   item.title
                            :   item.title.substring(0, 50) + "..."
                        }</h3>
                        <div className="price-container">
                            {item.currency_code == 'USD' && <div className="product-price">${item.price}</div>}
                            {item.currency_code == 'EUR' && <div className="product-price">€{item.price}</div>}
                            {item.currency_code == 'GBP' && <div className="product-price">£{item.price}</div>}
                            {item.currency_code == 'CAD' && <div className="product-price">CAD{item.price}</div>}
                            { item.quantity <= 10 && <span className="stock-badge stock-low">{item.quantity}</span>}
                            { (item.quantity > 10 && item.quantity <= 20) && <span className="stock-badge stock-medium">{item.quantity}</span>}
                            { item.quantity >= 20 && <span className="stock-badge stock-high">{item.quantity}</span>}
                        </div>
                    </div>
                </div>
            )
        })}
        </>
    )
}
