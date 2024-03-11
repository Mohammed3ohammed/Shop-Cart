import React, { useState } from 'react'
import PageHeader from '../components/PageHeader'
import Data from "../products.json"
import ProductCards from './ProductCards'
import Pgaination from './Pagination'
import Search from './Search'
import ShopCategory from './ShopCategory'
import PopularPost from './PopularPost'
import Tags from './Tags'
const showResults = "Showing 01 - 12 of 139 Results"
const Shop = () => {
const [GridList, setGridList] = useState(true);
const [products, setproducts] = useState(Data);

// pagination
const [currentPage, setCurrentPage] = useState(1);
const productsPerPage = 12;
const indexOfLastProduct = currentPage * productsPerPage;
const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
// eslint-disable-next-line
const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);


// function to changenthe current page 
const paginate = (pageNumber) => {
  setCurrentPage(pageNumber)
}

// filter products based on category
const [selectedCategory, setselectedCategory] = useState("All");
const menuItems  = [...new Set(Data.map((val) => val.category))];

const filterItems = (curcat) => {
  const newItem = Data.filter((newVal) => {
    return newVal.category === curcat;
  })
  setselectedCategory(curcat);
  setproducts(newItem)
}

  return (
    <div>
      <PageHeader title="Our Shop Page" curPage="Shop" />
      {/* shop page */}
      <div className="shop-page padding-tb">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 col-12">
              <article>
                {/* layout and title here */}
                <div className="shop-title d-flex flex-warp justify-content-between">
            <p>
              {showResults}
            </p>
            <div className={`product-view-mode ${GridList ? "gridActive" : "listActive"}`}>
            <button className={`grid ${GridList ? "gridActive" : ""}`} onClick={() => setGridList(!GridList)}>
            <i className='icofont-ghost'></i>
              </button>
            <button className={`list ${!GridList ? "listActive" : ""}`} onClick={() => setGridList(!GridList)}>
              <i className='icofont-listine-dots'></i>
            </button>

            </div>
                </div>
                {/* products card */}
                <div>
                <ProductCards GridList={GridList} products={products} />
                </div>

                <Pgaination
                productsPerPage = {productsPerPage}
                totalProducts = {products.length}
                paginate = {paginate}
                activePage = {currentPage}
                />
              </article>
            </div>
            <div className="col-lg-4 col-12">
              <aside>
                <Search 
                products = { products} 
                GridList = {GridList}
                />
                <ShopCategory 
                filterItems={filterItems}
                setItem={setproducts}
                menuItems={menuItems}
                setproducts={setproducts}
                selectedCategory={selectedCategory}
                />
                <PopularPost />
                <Tags />
              </aside>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Shop;
