import React from 'react'
import Styles from '@/app/ui/sidebar/sidebar.module.css'
import {
    MdDashboard,
    MdSupervisedUserCircle,
    MdOutlineShoppingBag,
    MdAttachMoney
} from "react-icons/md"
import MenuLink from './menuLink/menuLink'
import { signOut } from '@/auth'
import { fetchUser } from '@/app/lib/data'
import Image from 'next/image'




const menuItems = [
    {
        title: "Users",
        list: [
            {
                title: "Dashboard",
                path: "/dashboard",
                icon: <MdDashboard />
            },
            {
                title: "Users",
                path: "/dashboard/users",
                icon: <MdSupervisedUserCircle />
            },
            {
                title: "Products",
                path: "/dashboard/products",
                icon: <MdOutlineShoppingBag />
            },
            {
                title: "Transactions",
                path: "/dashboard/transactions",
                icon: <MdAttachMoney />
            }
        ],
    }

]


const Sidebar = async () => {
    const users = await fetchUser();
    const userName = users?.name || "World";

    return (

        <div className={Styles.container}>
            <div className={Styles.user}>
                <Image src="https://adware-technologies.s3.amazonaws.com/uploads/technology/thumbnail/29/Rlogical-Blog-Images-thumbnail.png" alt="logo" className={Styles.userimg} width="50" height="50" />
                <div className={Styles.userDetails}>
                    <span className={Styles.username}>Hello</span>
                    <span className={Styles.usertitle}>{userName}</span>
                </div>
            </div>

            <ul className={Styles.list}>
                {menuItems.map((item) => (
                    <li key={item.title}>
                        <span className={Styles.item}>{item.title}</span>
                        {
                            item.list.map((i) => (
                                <MenuLink item={i} key={i.title} />
                            ))
                        }
                    </li>
                ))}
            </ul>

            <form
                action={async () => {
                    'use server';
                    await signOut();
                }}
            >
                <button className="btn">
                    Sign-Out
                </button>
            </form>
        </div>
    )
}

export default Sidebar