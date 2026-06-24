import cls from './Navbar.module.scss'

const Navbar = () => {
    return (
        <nav className={cls.nav}>
            <header className={cls.header}>😈TRADER JOURNAL</header>
            <main className={cls.navbar}>
                <section>🎯Dashboards</section>
                <section>💰Trades</section>
                <section>📝Journal</section>
                <section>📅Calendar</section>
                <section>🧠Insights</section>
                <section>⚙️Settings</section>
            </main>
            <footer className={cls.footer}>
                <section className={cls.avatar}>A</section>
                <section>Korben Dallas</section>
            </footer>
        </nav>
    )
}

export default Navbar;