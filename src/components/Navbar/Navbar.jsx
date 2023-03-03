import React from 'react';
import '../Navbar/navbar.css';
import Logo from '../../assets/images/dnc-logo.png';
import Cart from '../../assets/images/cart.png';
import Search  from '../../assets/images/search.png';


const Navbar = () => {
  return (
    <div className='navbar'>
        <div className="nav">
            <img className='logo' src={Logo} alt="" />
           
            <input className='input' type="search" name="search" id="" placeholder='O que você está procurando?'/>
            
            <a href=""><img className='cart' src={Cart} alt="" /></a>
        </div>

        <div className='list'>

                    <a href="">Novidades</a>
                    <a href="">Jogos</a>
                    <a href="">Video Games</a>
                    <a href="">Mesas Gamer</a>
                    <a href="">Promoções</a>
                    <a href="">Atendimento</a>

        </div>


    </div>
  )
}

export default Navbar