import React, { useState, useEffect } from 'react'
import ProductItem from '../ProductItem'
import './index.css'


const Products = () => {
    const [api,apiData] = useState({
        productsList:[],
    })

    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await fetch('https://fakestoreapi.com/products');
            if (response.ok) {
              const fetchData = await response.json()

              const proData = fetchData.map((product)=>({
                title:product.title,
                price:product.price,
                description:product.description,
                category:product.category,
                imageUrl:product.image,
                rating:product.rating,
              }))
              apiData ({
                productsList:proData,

              })
              console.log("Success")
            } 
          } catch (error) {
            console.log("Failed to fetch products:",error);
          } 
        };
        fetchData();
    }, []);



    

    const renderProductsList = () =>{
        const {productsList} = api

        return(
            <div>
                <ul className='products-list-container'>
                    {productsList.map((each)=>(
                        <ProductItem
                            productsData={each}
                            key={each.id}
                        />
                    ))}
                </ul>
            </div>
        )
    }

    /*const renderCategoryList = () => {

      return(
        <ul>
          <li className='category-item'>
            <select  className='category-drop-down-container'  name="IDEAL FOR" id="metta">
                    <option value="Stories">IDEAL FOR</option>
                    <option value="mettā muse"><input type="checkbox" id="men"/><label for="men">Men</label></option>
                    <option value="About Us">Women</option>
                    <option value="Stories">Baby & Kids</option>
                </select>
            <p>All</p>
          </li>
        </ul>
      )
    }*/
    

    return(
      <div>
        <div className='description-container'>
          <section>
            <h1 className='description-container-heading'>DISCOVER OUR PRODUCTS</h1>
            <h2  className='description-container-section'>
            Lorem ipsum dolor sit amet consectetur. Amet est posuere rhoncus scelerisque. Dolor integer scelerisque nibh amet mi ut elementum dolor.
            </h2>
          </section>
        </div>
        <div className='products-categories-container'>
            {renderProductsList()}
        </div>
      </div>
    )
}


export default Products