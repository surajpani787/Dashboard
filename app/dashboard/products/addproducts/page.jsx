import React from 'react'
import styles from "@/app/ui/dashboard/products/addproducts/addproducts.module.css"
import { addProduct } from '@/app/lib/action'

const AddProductpage = () => {
    return (
        <div className={styles.container}>
            <form action={addProduct} className={styles.form}>
                <input type="text" placeholder='Enter Product name' name='title' required />
                <select name="category" id="category">
                    <option value="general">choose a category</option>
                    <option value="Mobiles">Mobiels</option>
                    <option value="Laptops">Laptops</option>
                    <option value="AirPods">Airpods</option>
                    <option value="Shoes">Shoes</option>
                    <option value="Kitchen">Kitchen</option>
                </select>
                <input type="number" name='price' placeholder='Enter price' required />
                <input type="number" name='stock' placeholder='Enter no of stock available' required />
                <input type="text" placeholder='color' name='color' required />
                <input type="text" name="size" id="size" placeholder='Enter Size' required />
                <textarea name="description" placeholder='Enter Product Desription' rows="5" required ></textarea>
                <button type="submit">Add-product</button>
            </form>
        </div>
    )
}

export default AddProductpage