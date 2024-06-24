import React from 'react'
import styles from "@/app/ui/dashboard/products/products.module.css"
import Link from 'next/link'
import { fetchProducts } from '@/app/lib/data'
import { deleteProduct } from '@/app/lib/action'
import Image from 'next/image'

const Productspage = async () => {

    const products = await fetchProducts();
    return (
        <div className={styles.container}>
            <div className={styles.top}>
                <Link href="/dashboard/products/addproducts">
                    <button className={styles.addbutton}>Add New</button>
                </Link>
            </div>
            <table className={styles.table}>
                <thead>
                    <tr>
                        <td>Title</td>
                        <td>Description</td>
                        <td>Price</td>
                        <td>created At</td>
                        <td>stocks</td>
                        <td>color</td>
                        <td>Action</td>
                    </tr>
                </thead>
                <tbody>
                    {products.map((product) => (
                        <tr key={product.id}>
                            <td>
                                <div className={styles.products}>
                                    <Image src="data:image/png;base64,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" alt="img" width={40} height={40} className={styles.productsimg} />
                                    {product.title}
                                </div>
                            </td>
                            <td className={styles.description}> {product.description} </td>
                            <td>${product.price}</td>
                            <td>{product.createdAt?.toString().slice(4, 16)}</td>
                            <td>{product.stock}-left</td>
                            <td>{product.color}</td>
                            <td>
                                <Link href="/dashboard/products/productdetails">
                                    <button className={`${styles.btn} ${styles.view}`}>View</button>
                                </Link>

                                <form action={deleteProduct}>
                                    <input type="hidden" name="id" value={product.id} />
                                    <button className={`${styles.btn} ${styles.delete}`}>Delete</button>
                                </form>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default Productspage
