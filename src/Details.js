import React, { useState } from 'react';
import Header from './components/Header';
import './Details.css';
import shoppeIcon from './images/icons/shoppe.png'
import faceIcon from './images/icons/facebook-icon-white-png.png'
import tiktikIcon from './images/icons/tiktok.webp'
const Details = () => {

  const [selectedItem, setSelectedItem] = useState('100G');
  const handleItemClick = (itemName) => {
    setSelectedItem(itemName);
    localStorage.setItem('selectedItem', itemName); // Lưu trạng thái được chọn vào localStorage

  };
  return (
    <div className="container">
      <Header />
      <div className="left-panel">
        {/* Nội dung bên trái */}

        <h2 className='left-title'>WEIGH</h2>
        <div className='double-border-button-left'>

          <nav className="navigation">
            <ul className="ulMenu">
              <li className={`menu-item ${selectedItem === '100G' ? 'selected' : ''}`}>
                <a onClick={() => handleItemClick('100G')}>100G</a>
              </li>
              <li className={`menu-item ${selectedItem === '200G' ? 'selected' : ''}`}>
                <a onClick={() => handleItemClick('200G')}>200G</a>
              </li>
              <li className={`menu-item ${selectedItem === '500G' ? 'selected' : ''}`}>
                <a onClick={() => handleItemClick('500G')}>500G</a>
              </li>
            </ul>
          </nav>
        </div>
        <h2 className='left-title'>---------------------------</h2>
        <div className="double-border-left">
          <center style={{ color: 'yellow' }}>PRICE</center>
          <center>
            <div className='price'>1.4$</div>
          </center>

        </div>

        <div className='double-border-button-tranform'>
          <nav className="navigation">
            <ul className="ulMenu">
              <li >
                <a style={{ backgroundColor: 'green' }} >Mua Ngay</a>
              </li>
              <li className='icons'>
                <a><img src={shoppeIcon} alt="Shopee" /></a>
              </li>
              <li className='icons'>
                <a><img src={tiktikIcon} alt="Shopee" /></a>
              </li>
              <li className='icons'>
                <a><img src={faceIcon} alt="Shopee" /></a>
              </li>
            </ul>
          </nav>
        </div>
        <div className='left-title'>
          <center style={{ color: 'blue' }}> Expiry date:</center>
          <a className='title-cmt'>12 MONTHS</a>
          <a> from date of manufacture </a>
        </div>
      </div>




      <div className="right-panel">
        {/* Nội dung bên phải */}
        <h2>NUTRITION FACTS: <br />
          <a style={{ fontSize: '12px' }}>SERVING SIZE (100G)</a>
        </h2>
        <div className="double-border">
          <div className="nutrition-table">
            <div classNam e="right-column">
              <div>320</div>
              ------------ <br />
              <a style={{ marginTop: '10px' }}>1%</a> <br />
              2%<br />
              28%<br />
              22%<br />
              -<br />
              -<br />
              ----------<br />


            </div>


            <div className="left-column">
              <div style={{ fontSize: '10px' }}>AMOUNT PER SERVING <br />CALORIES</div>
              ------------ <br />
              Total Fat  0g <br />
              Sodium  40mg<br />
              Total Carbohydrate  78g<br />
              <a style={{ marginLeft: '30px' }}>Dietary Fibre  6g<br /></a>
              <a style={{ marginLeft: '30px' }}>Total Sugars  71g<br /></a>
              Protein 2g<br />
              ------------ <br />
              <a>Potassium </a>  <a style={{ marginLeft: '70px' }}>4% </a> <a style={{ marginLeft: '15px' }}>Iron </a>  <a style={{ marginLeft: '40px' }}>2% </a><br />
              <a> Vitamin D  </a>  <a style={{ marginLeft: '70px' }}>0% </a>  <a style={{ marginLeft: '15px' }}>Calcium </a>  <a style={{ marginLeft: '30px' }}>0% </a><br /> <br />

            </div>



          </div>

        </div>
        <div style={{ marginTop: "30px" }}>
          * The % Daily Value (DV) tells you how much a nutrient in a serving of food contributes to a daily diet. 2,000 calories a day is used for general nutrition advice.
        </div>
        <div>
          INGREDIENT: <br/>
          <li>Mango (95%) </li>

          <li>Sugar (4.5%)</li>

          <li>Citric acid (INS330) (0.42%)</li>

          <li>Sodium metabisulfite (INS223) (0.08%).</li>
        </div>
      </div>
    </div>
  );
};

export default Details;
