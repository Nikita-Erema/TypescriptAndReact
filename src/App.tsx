import './App.css'
import { Listing  } from './components/Listing'
import data from './list/list.json'

function App() {

  const items = data
  .filter(item => item.title && item.listing_id)
  .map(item => ({
    listing_id: item.listing_id,
    url: item.url || "",
    MainImage: { url_570xN: item.MainImage?.url_570xN || "" },
    title: item.title || "Без названия",
    currency_code: item.currency_code || "",
    price: item.price || "0",
    quantity: item.quantity || 0
  }))

  return (
    <>
      <div className='container'>
        <div className='product-grid'>
          <Listing items={items ? items : []}></Listing>
        </div>
      </div>
    </>
  )
}

export default App
