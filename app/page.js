import Link from "next/link";
import styles from "@/app/ui/nav/nav.module.css"

export default function Home() {
  return (
    <div>
      <header className={styles.header}>
        <div className={styles.nav}>
          <div className="logo">
            <Link href="/Home">Admin-Dash</Link>
          </div>
          <div>
            <ul>
              <li>
                <Link href="/Home">Home</Link>
              </li>
              <li>
                <Link href="/About">About</Link>
              </li>
              <li>
                <Link href="/login">Login</Link>
              </li>


            </ul>
          </div>
        </div>
      </header>
    </div>
  );
}
