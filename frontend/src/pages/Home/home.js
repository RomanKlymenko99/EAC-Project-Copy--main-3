import React, { Component } from 'react';
import './home.css';


export class Home extends Component {

  
  
  render() {
    return (
      <>
        <header>
          <a href="/account-settings" className='text'><img src='./img/UserPhotoS.png' alt='' className='profile-settings'/></a>
          <a href="/settings" className='text'><img src='./img/Menu.png' alt='' className='settings'/></a>
        </header>
        <div className='skill'>
          <div className='outer'>
            <div className='inner'>
            
                 
            </div>
            <div className="number">   65%
            </div>
          </div>

          <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="160px" height="160px">
         <defs>
            <linearGradient id="GradientColor">
               <stop offset="0%" stop-color="#e91e63" />
               <stop offset="100%" stop-color="#673ab7" />
            </linearGradient>
         </defs>
         <circle cx="80" cy="80" r="70" stroke-linecap="round" />
 </svg>


        </div>
   
        <div className='bg-of-elem'>
     
          <div className='cont-of-elem'>
         
             <a href="/battery" className='text'> 
               <div className='pizdaxui1'>
                 <img src='./img/Battery.png' alt='' className='icons'/>
                 <div className='textelem'>Electronic Waste</div>
               </div> 
             </a>
            
             <a href="/Organwaste" className='text'> 
               <div className='pizdaxui2'>
                 <img src='./img/Wastesorting.png' alt='' className='icons'/>
                 <div className='textelem'>Organic Waste</div>
               </div> 
             </a>
  
             <a href="/bottle-sorting" className='text'>   
               <div className='pizdaxui3'>
                 <img src='./img/Bottle.png' alt='' className='icons'/>
                 <div className='textelem'>Plastics</div>
               </div> 
             </a>
  
             <a href="/waste" className='text'>   
               <div className='pizdaxui4'>
                 <img src='./img/Waste.png' alt='' className='icons'/>
                 <div className='textelem'>Solid Waste</div>
               </div> 
             </a>
  
             <a href="/recycle" className='text'>   
               <div className='pizdaxui5'>
                 <img src='./img/Recycle.png' alt='' className='icons'/>
                 <div className='textelem'>Recyclable Waste</div>
               </div> 
             </a>
          </div>
        </div>
    
        <footer>
          <div className='contfoot'>
            <a href="/" className='text'><img src='./img/Home.png' alt=''/></a>
            <a href="/share" className='text'><img src='./img/Share.png' alt=''/></a>
            <a href="/community" className='text'><img src='./img/Community.png' alt=''/></a>
            <a href="/activity" className='text'><img src='./img/Activity.png' alt=''/></a>
          </div>
        </footer>
      </>
    );
  }
}

export default Home;
