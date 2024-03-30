import React from'react'
import './DescriptionBox.css'
const DescriptionBox= () => {
    return (
        <div className='descriptionbox'>
            <div className='descriptionbox-navigator'>
                <div className='descriptionbox-nav-box'>Description</div>
                <div className='descriptionbox-nav-box fade'>Reviews (122)</div>
            </div>
            <div className='descriptionbox-description'>
                <p>A e-commerce website is an online platform that facilitates buying and selling of products or services over the internet.It serves as a virtual marketplace where businesses and individuals showcaes their products , iteract with customers, and conduct transactions without the need for a physical presence.E-commerce websites have gained imense popularity due to their conventional accesibility, and the global reach they offer. </p>
                <p>
                E-commerce websites typically display products or services in a detailed decriptions, images , prices and any available varities (e.g. sizes, colors). Each product usually has its own description with relevent information.
                </p>     
            </div>
        </div>
    )
}

export default DescriptionBox