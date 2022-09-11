import React, { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { IProduct } from './App.models'
import { Product } from './Product'
import { PurchaseDisplay } from './PurchaseDisplay'
import { setPriority } from 'os'

const App = () => {
    const initialProducts: IProduct[] = [
        { name: 'keyboard', image: './images/image001.png', price: 200 },
        {
            name: 'headphones',
            image: './images/image002.png',
            price: 300
        },
        {
            name: 'mouse',
            image: './images/image003.png',
            price: 100
        }
    ]

    const [isProductBought, setIsProductBought] = useState(false)
    const [productBought, setProductBought] = useState({ name: '', image: '', price: 0 })

    const handlePurchase = (product: IProduct) => {
        setProductBought(product)
        setIsProductBought(true)
    }

    const handleUpdate = (product: IProduct, index: number) => {

        const productToUpdate = {name: 'CPU', 
                             image: './images/image008.png',
                              price: 350} as IProduct

        // *** This mutates the array of products so don't use it ****
        //  products[index] = productToUpdate
        //  setProducts(products)
        // *******************************

        // here is the correct way to do an update to products, by creating a 
        // new products array containing the update:'

       const newProducts = products.map((nextProduct, productIndex) => {
            if (productIndex === index)
             {
                return productToUpdate
             }

             return nextProduct
        })

        // set the products state to the newly referenced array
        setProducts(newProducts)
    }

    const handleRemove = (product: IProduct, index: number) => {
       const filteredProducts = products.filter(
            (nextProduct, productIndex) =>
                productIndex != index)

    setProducts(filteredProducts)
    }


    const [products, setProducts] = useState(initialProducts)

    return (
        <>
            <h1 className='Tiny-store'>Tiny Store</h1>
            {isProductBought ? (
                <PurchaseDisplay  productPurchased={productBought} />
            ) : (
                <div className={'App-container'}>
                    {products.map((product, index) => {
                        return <Product 
                        product={product} 
                        productIndex={index} 
                        onBuy={handlePurchase} 
                        onUpdate={handleUpdate}
                        onRemove={handleRemove}  />
                    })}
                </div>
            )}
        </>
    )
}

export default App
