import { NavLink } from 'react-router-dom';
import cls from './Navbar.module.scss'

const Navbar = () => {
    return (
        <nav className={cls.nav}>
            <header className={cls.header}>😈TRADER JOURNAL</header>
            <main className={cls.navbar}>
                <NavLink to='/' className={({ isActive }) => `${cls.navItem} ${isActive ? cls.active : ''}`}> 🎯Dashboards</NavLink>
                <NavLink to='/trades' className={({ isActive }) => `${cls.navItem} ${isActive ? cls.active : ''}`}> 💰Trades</NavLink>
                <NavLink to='/journal' className={({ isActive }) => `${cls.navItem} ${isActive ? cls.active : ''}`}> 📝Journal</NavLink>
                <NavLink to='/calendar' className={({ isActive }) => `${cls.navItem} ${isActive ? cls.active : ''}`}> 📅Calendar</NavLink>
                <NavLink to='/insights' className={({ isActive }) => `${cls.navItem} ${isActive ? cls.active : ''}`}> 🧠Insights</NavLink>
                <NavLink to='/settings' className={({ isActive }) => `${cls.navItem} ${isActive ? cls.active : ''}`}> ⚙️Settings</NavLink>
            </main>
            <footer className={cls.footer}>
                <section className={cls.avatar}>A</section>
                <section>Korben Dallas</section>
            </footer>
        </nav>
    )
}

export default Navbar;