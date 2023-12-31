import React, { useState } from 'react'
import PageHeader from '../components/PageHeader'
import Data from "../products.json"
const showResults = "Showing 01 - 12 of 139 Results"


const Shop = () => {
const [GridList, setGridList] = useState(true);
const [products, setproducts] = useState(Data);
console.log(products)

  return (
    <div>
      <PageHeader title="Our Shop Page" curPage="Shop" />
      {/* shop page */}
      <div className="shop-page paddig-tb">
        <div className="container">
          <div className="row-justify-content-center">
            <div className="col-lg-8 col-12">
              <article>
                {/* layout and title here */}
                <div className="shop-title d-flex flex-warp justify-content-between">
            <p>
              {showResults}
            </p>
            <div className={`product-view-mode ${GridList ? "gridActive" : "listActive"}`}>
            <a className="grid" onClick={() => setGridList(!GridList)}>
              <i className='icofont-ghost'></i>
            </a>
            <a className="list" onClick={() => setGridList(!GridList)}>
              <i className='icofont-listine-dots'></i>
            </a>
            </div>
                </div>
                <div className=''>

                </div>
              </article>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Shop
