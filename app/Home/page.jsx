import React from 'react'
import Home from '../page'
import styles from '@/app/ui/home/home.module.css'
import Image from 'next/image'

export default function Homepage() {
    return (
        <div>
            <Home></Home>
            <section className={styles.img}>
                <Image src="https://img.freepik.com/free-vector/big-isolated-employee-working-office-workplace-flat-illustration_1150-41780.jpg?size=626&ext=jpg&ga=GA1.1.630569867.1678761543&semt=sph" alt="Image" />
            </section>
        </div>
    )
}

