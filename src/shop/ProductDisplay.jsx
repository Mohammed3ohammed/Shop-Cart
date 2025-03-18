import React, { useState } from "react";

const des =
  "Energistia an deliver atactica metrcs after avisionary Apropria transition enterpris an sourcse applications emerging psd template.";

const ProductDisplay = ({ item }) => {
  const { name, seller, price, retingsCount } = item; // ✅ حذف `id` لأنه غير مستخدم
  const [prequantity, setQuantity] = useState(1); // ✅ تحديد قيمة افتراضية
  const [size, setSize] = useState("Select Size");
  const [color, setColor] = useState("Select Color");

  const handleSizeChange = (e) => {
    setSize(e.target.value);
  };

  const handleColorChange = (e) => {
    setColor(e.target.value);
  };

  const handleIncrease = () => {
    setQuantity((prev) => prev + 1); // ✅ زيادة الكمية
  };

  const handleDecrease = () => {
    if (prequantity > 1) {
      setQuantity((prev) => prev - 1); // ✅ تقليل الكمية مع التأكد أنها لا تقل عن 1
    }
  };

  return (
    <div>
      <div>
        <h4>{name}</h4>
        <p className="rating">
          <i className="icofont-star"></i>
          <i className="icofont-star"></i>
          <i className="icofont-star"></i>
          <i className="icofont-star"></i>
          <i className="icofont-star"></i>
          <span>{retingsCount} review</span>
        </p>
        <h4>${price}</h4>
        <h6>{seller}</h6>
        <p>{des}</p>
      </div>
      {/* Cart Components */}
      <div>
        <form>
          <div className="select-product size">
            <select value={size} onChange={handleSizeChange}>
              <option value="Select Size">Select Size</option>
              <option value="SM">SM</option>
              <option value="MD">MD</option>
              <option value="LG">LG</option>
              <option value="XL">XL</option>
              <option value="XXL">XXL</option>
            </select>
            <i className="iconfont-rounded-down"></i>
          </div>
          <div className="select-product size">
            <select value={color} onChange={handleColorChange}>
              <option value="Select Color">Select Color</option>
              <option value="Red">Red</option>
              <option value="Ash">Ash</option>
              <option value="White">White</option>
              <option value="Blue">Blue</option>
              <option value="Black">Black</option>
            </select>
            <i className="iconfont-rounded-down"></i>
          </div>
          {/* cart plus minus */}
          <div className="cart-plus-minus">
            <button type="button" className="dec qtybutton" onClick={handleDecrease}>
              -
            </button>
            <input type="text" name="gtybutton" id="gtybutton" value={prequantity} readOnly />
            <button type="button" className="inc qtybutton" onClick={handleIncrease}>
              +
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProductDisplay;
