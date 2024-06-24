import React from 'react'
import styles from "@/app/ui/dashboard/users/addusers/addUser.module.css"
import { addUser } from '@/app/lib/action'

const AddUserpage = () => {
    return (
        <div className={styles.container}>
            <form action={addUser} className={styles.form}>
                <input type="text" placeholder="Enter username" name="username" required />
                <input type="email" placeholder='Emter email id' name='email' required />
                <input type="password" name="password" placeholder='Enter password' required />
                <input type="phone" name='phone' placeholder='Enter Mobile number' required />

                <select name="isAdmin" id="isAdmin">
                    <option value={false}>Is Admin?</option>
                    <option value={true}>Yes</option>
                    <option value={false}>No</option>
                </select>
                <select name="isActive" id="isActive">
                    <option value={true}>
                        Is Active?
                    </option>
                    <option value={true}>True</option>
                    <option value={false}>No</option>
                </select>
                <textarea name="address" id="address" rows="8" placeholder='Enter Address'></textarea>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default AddUserpage