import Transactions from "@/app/ui/transactions/transactions"
import styles from "@/app/ui/transactions/tranactions.module.css"
const Transactionspage = () => {
    return (
        <div>
            <div className={styles.main}>

                <Transactions />
            </div>
        </div>
    )
}

export default Transactionspage