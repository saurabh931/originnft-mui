import React from 'react'
import "./MyCollections.css"
import Navbarnft from "../Navbars/Navbarnft"
import Footer from "../Footer"


function MyCollections() {
  return (
    <>
    <Navbarnft/>
    <div className='container-fluid background-collections-img'>
    <div className='collection-section'>
      <h1>My Collections</h1>
      <p>Create, curate, and manage collections of unique NFT’s to share and sell</p>
      <button id='button-2' className='create-button'>Create Collection</button>
      </div>
    </div>
    <div className='container'>
    <div className='row setting-collect'>
        <p className='content-section11'>No item to display</p>
    </div>

    </div>
    <Footer/>
    </>
  )
}

export default MyCollections
