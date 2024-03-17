import React from 'react'
import AddToCart from "@/app/components/AddToCart";
// import styles from './ProductCard.module.css'

const ProductCard = () => {
    return (
        <div className='p-5 my-5 bg-sky-400 text-white text-xl hover:bg-sky-900'>
            {/*<button onClick={() => console.log('click')}>Add to cart</button>*/}
            <AddToCart></AddToCart>
        </div>
    // <div className={styles.card}>
    //         {/*<button onClick={() => console.log('click')}>Add to cart</button>*/}
    //         <AddToCart></AddToCart>
    //     </div>
    )
}

export default  ProductCard