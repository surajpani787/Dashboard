import styles from "@/app/ui/login/login.module.css"
import { authenticate } from "../lib/action"
import Home from "../page"
const Loginpage = () => {
    return (
        <div>
            <Home />

            <div className={styles.container} >
                <form action={authenticate} className={styles.form}>
                    <h1>Log-In</h1>
                    <input type="text" name="username" placeholder="Enter User-Name" required />
                    <input type="password" name="password" placeholder="Enter Password" required />
                    <button>Login</button>
                </form>
            </div>
        </div>
    )
}

export default Loginpage