import { useRef } from 'react'
import styles from './NavBar.module.css'

const NavBar = ({ submitSearch, reloadHandler }) => {
	const searchRef = useRef('')

	const submitSearchHandler = (e) => {
		e.preventDefault()
		submitSearch(searchRef.current.value)
		searchRef.current.value = ''
	}

	return (
		<header className={styles.navBar}>
			<h2 className={styles.title} onClick={reloadHandler}>
				Movie Services
			</h2>
			<form onSubmit={submitSearchHandler}>
				<input placeholder='Enter movie name' ref={searchRef}/>
			</form>
		</header>
	)
}

export default NavBar