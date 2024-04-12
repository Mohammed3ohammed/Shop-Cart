import React, { useState } from 'react';

const des = "Energistia an deliver atactica metrcs after avisionary Apropria transition enterpris an sourcse applications emerging psd template."

const ProductDisplay = ({item}) => {
    const {name,  id ,     seller,  price, retingsCount} = item;   
    const [prequantity , setQuantity] = useState(); //quantity
    const [coupon , setCoupon] = useState("");
    const [size ,setSize ] = useState("Select Size");   
    const [color , setColor] = useState("Select Color");

    const handelSizeChange = (e) => {
      setSize(e.target.value);
    }
    const handelColorChange = (e) => {
      setColor(e.target.value);
    }

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
          <h6>{seller}</h6>
          <p>{des}</p>
      </div>
      {/* Cart Components */}
      <div>
        <form>
            <div className='select-product size'>
            <select value={ size} onChange={handelSizeChange}>
                <option value="Select Size"></option>
                <option value="SM"></option>
                <option value="MD"></option>
                <option value="LG"></option>
                <option value="XL"></option>
                <option value="XXL"></option>
            </select>
            <i className='iconfont-rounded-down'></i> 
            </div>
            <div className='select-product size'>
            <select value={ color} onChange={handelColorChange}>
                <option value="Select Color"></option>
                <option value="Red"></option>
                <option value="Ash"></option>
                <option value="White"></option>
                <option value="Blue"></option>
                <option value="Black"></option>
            </select>
            <i className='iconfont-rounded-down'></i> 
            </div>
            {/* cart plus minus */}
            <div className='cart-plus-minus'>
              <div className='dec qtybutton'>-</div>
              <input type='text' name='gtybutton' id='gtybutton' value={prequantity} />
              <div className='inc qtybutton'>+</div>
            </div>
        </form>
        </div>
        </div>
  )
}

export default ProductDisplay;
