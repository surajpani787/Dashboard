import React from 'react'
import styles from "@/app/ui/dashboard/users/singleuser/singleuser.module.css"
import Image from 'next/image'
import { fetchUser, fetchUsers } from '@/app/lib/data'
import { updateUser } from '@/app/lib/action'

const SingleUserpage = async ({ params }) => {

    const { id } = params;
    const user = await fetchUser(id);

    return (
        <div className={styles.container}>
            <div className={styles.infocontainer}>
                <div className={styles.imgcontainer}>
                    <Image src="/Avatar.png" alt="" fill />
                </div>
                {user.username}
            </div>
            <div className={styles.formcontainer}>
                <form action={updateUser} className={styles.form}>
                    <input type="hidden" name='id' value={user.id} />
                    <label>UserName</label>
                    <input type="text" name="username" placeholder={user.username} />
                    <label>Email</label>
                    <input type="email" name="email" placeholder={user.email} />
                    <label>Password</label>
                    <input type="password" name="password" placeholder="password" />
                    <label>Phone No</label>
                    <input type="phone" name='phone' placeholder={user.phone} />
                    <label>Address</label>
                    <textarea name="address" id="address" rows="8" placeholder={user.address}></textarea>
                    <label>is Admin</label>
                    <select name="isAdmin" id="isAdmin">
                        <option value={true} selected={user.isAdmin}>Yes</option>
                        <option value={false} selected={user.isAdmin}>No</option>
                    </select>
                    <label>is Active</label>
                    <select name="isActive" id="isActive">
                        <option value={true} selected={user.isActive}>True</option>
                        <option value={false} selected={user.isActive}>No</option>
                    </select>
                    <button type="submit">Update</button>
                </form>
            </div>
        </div>
    )
}

export default SingleUserpage