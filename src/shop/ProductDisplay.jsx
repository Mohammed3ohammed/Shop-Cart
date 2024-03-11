import React, { useState } from 'react'

const ProductDisplay = ({item}) => {
    const {name,  price, retingsCount} = item;   // id ,     seller, 
    // const [prequantity, setQuantity] = useState(0);
    // const [coupon , setCoupon] = useState("");
    const [size ] = useState("Select Size");   // , setSize
    // const [Color , setColor] = useState("Select Color");
    const des = "Energistia an deliver atactica metrcs after avisionary Apropria transition enterpris an sourcse applications emerging psd template."


  return (
    <div>
      <div>
        <h4>{name}</h4>
        <p className='rating'>
            <i className='icofont-start'></i>
            <i className='icofont-start'></i>
            <i className='icofont-start'></i>
            <i className='icofont-start'></i>
            <i className='icofont-start'></i>
            <span>{retingsCount} review</span>
        </p>
          <h4>${price}</h4>
          <h6>seller</h6>
          <p>{des}</p>
      </div>
      {/* Cart Components */}
      <div>
        <form>
            <div className='select-product size'></div>
            <select value={ size}>
                <option value="Select Size"></option>
                <option value="SM"></option>
                <option value="MD"></option>
                <option value="LG"></option>
                <option value="XL"></option>
                <option value="XX"></option>
            </select>
        </form>
      </div>
    </div>
  )
}

export default ProductDisplay;
