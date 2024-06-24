import React from 'react'
import styles from '@/app/ui/dashboard/dashboard.module.css'
import Sidebar from '../ui/sidebar/Sidebar'
import Navbar from '../ui/navbar/navbar'
const layout = ({ children }) => {
    return (
        <div className={styles.container}>

            <div className={styles.menu}>
                <Sidebar />
            </div>

            <div className={styles.content}>
                <Navbar />
                {children}
            </div>

        </div>
    )
}

export default layout