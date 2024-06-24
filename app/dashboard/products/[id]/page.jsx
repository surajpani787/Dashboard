import styles from "@/app/ui/dashboard/products/singleproduct/singleproduct.module.css"
import Image from 'next/image'

const singleProduct = () => {
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.imgContainer}>
          <Image src="/avatar.png" alt="" fill />
        </div>
        Laptop
      </div>
      <div className={styles.formContainer}>
        <form className={styles.form}>
          <label>Title</label>
          <input type='text' name='title' placeholder='John Cena' />
          <label>Price</label>
          <input type='number' name='price' placeholder='$999' />
          <label>Stock</label>
          <input type='number' name='stock' placeholder='99' />
          <label>Color</label>
          <input type='text' name='color' placeholder='Black' />
          <label>Size</label>
          <input type='text' name='size' placeholder='14' />
          <label>Category</label>
          <select name='category' id='category'>
            <option value="Mobiles">Mobiels</option>
            <option value="Laptops">Laptops</option>
            <option value="AirPods">Airpods</option>
            <option value="Shoes">Shoes</option>
            <option value="Kitchen">Kitchen</option>
          </select>
          <label> Description </label>
          <textarea name='description' id='description'></textarea>
          <button>Update</button>
        </form>
      </div>
    </div>
  )
}

export default singleProduct
