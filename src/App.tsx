import React, { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { IProduct } from './App.models'
import { Product } from './Product'
import { PurchaseDisplay } from './PurchaseDisplay'

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

    const [products, setProducts] = useState(initialProducts)

    return (
        <>
            <h1 className='Tiny-store'>Tiny Store</h1>
            {isProductBought ? (
                <PurchaseDisplay  productPurchased={productBought} />
            ) : (
                <div className={'App-container'}>
                    {products.map((product) => {
                        return <Product product={product} onBuy={handlePurchase} />
                    })}
                </div>
            )}
        </>
    )
}

export default App
