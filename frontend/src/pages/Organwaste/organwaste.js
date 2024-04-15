import React, { Component } from 'react'
import "./organwaste.css"

export class OrganWaste extends Component {

  componentDidMount() {
    const batteryImages = document.querySelectorAll('.balls-1');
    batteryImages.forEach(image => {
      image.addEventListener('click', this.handleImageClick);
    });
  }

  componentWillUnmount() {
    const batteryImages = document.querySelectorAll('.balls-1');
    batteryImages.forEach(image => {
      image.removeEventListener('click', this.handleImageClick);
    });
  }

  handleImageClick = (event) => {
    const currentSrc = event.target.src;
    const isLowBattery = currentSrc.includes('Waste2.png');
    event.target.src = isLowBattery ? './img/Wastesorting.png' : './img/Waste2.png';
  }

    

  render() {
    return (
      <>
        <body>
        <header>
        <a href="/accaunt-settings" className='text'><img src='./img/UserPhotoS.png' alt='' className='profile-settings'/></a>
        <a href="/settings" className='text'><img src='./img/Menu.png' alt='' className='settings'/></a>
      </header>

        <p className='text-png'>Your amount of waste</p>
        <div className='penis'>
         <img src='./img/Wastesorting.png' alt='' className='balls'/>
          <div className='nuts'>Electronic Waste</div>
        </div>

        <div className='penis-1'>
         <img src='./img/Wastesorting.png' alt='' className='balls-1'/>
         <img src='./img/Wastesorting.png' alt='' className='balls-1'/>
         <img src='./img/Wastesorting.png' alt='' className='balls-1'/>
         <img src='./img/Waste2.png' alt='' className='balls-1'/>
         <img src='./img/Waste2.png' alt='' className='balls-1'/>
         <img src='./img/Waste2.png' alt='' className='balls-1'/>   
        </div>

        <div className='penis-2'>
        <img src='./img/Waste2.png' alt='' className='balls-1'/>
         <img src='./img/Waste2.png' alt='' className='balls-1'/>
         <img src='./img/Waste2.png' alt='' className='balls-1'/>  
         <img src='./img/Waste2.png' alt='' className='balls-1'/>
         <img src='./img/Waste2.png' alt='' className='balls-1'/>
         <img src='./img/Waste2.png' alt='' className='balls-1'/>   
        </div>

        <div className='penis-3'>
        <img src='./img/Waste2.png' alt='' className='balls-1'/>
         <img src='./img/Waste2.png' alt='' className='balls-1'/>
         <img src='./img/Waste2.png' alt='' className='balls-1'/>  
         <img src='./img/Waste2.png' alt='' className='balls-1'/>
         <img src='./img/Waste2.png' alt='' className='balls-1'/>
         <img src='./img/Waste2.png' alt='' className='balls-1'/>   
        </div>

       <div className='card'>
  <div className="item-wrapper">
    <div className="item-count">
      <img src="./img/Wastesorting.png" alt="Item 1 icon" className="item-icon" />
      <div className="item-quantity">X3</div>
    </div>
    <div className="item-details">
      <div className="item-name">Чепуха</div>
      <img src="./img/UserPhotoS.png" alt="Item 1 details" className="item-icon" />
    </div>
  </div>
  <div className="item-wrapper">
    <div className="item-count">
      <img src="./img/Wastesorting.png" alt="Item 2 icon" className="item-icon" />
      <div className="item-quantity">X4</div>
    </div>
    <div class="item-details">
      <div class="item-name">Чепуха1</div>
      <img src="./img/UserPhotoS.png" alt="Item 2 details" className="item-icon" />
    </div>
  </div>

  <div className="item-wrapper">
    <div className="item-count">
      <img src="./img/Wastesorting.png" alt="Item 3 icon" className="item-icon" />
      <div className="item-quantity">X11</div>
    </div>
    <div className="item-details">
      <div className="item-name">Чепуха2</div>
      <img src="./img/UserPhotoS.png" alt="Item 3 details" className="item-icon" />
    </div>
  </div>
  </div> 

      <footer>
        <div className='fooot'>
            <a href="/" className='text'><img src='./img/Home.png' alt=''/></a>
            <a href="/share" className='text'><img src='./img/Share.png' alt=''/></a>
            <a href="/community" className='text'><img src='./img/Community.png' alt=''/></a>
            <a href="/activity" className='text'><img src='./img/Activity.png' alt=''/></a>
        </div>
      </footer>
        </body>
        </>
    )
  }
}

export default OrganWaste