import styles from './Pagination.module.css'

const Pagination = ({ currentPage, maxPage, navigatePageHandler }) => {
	return (
		<footer className={styles.footer}>
			<button
				onClick={() => navigatePageHandler(false)}
				disabled={currentPage === 1}
			>
				-
			</button>
			<span className={styles.current__page}>
				{currentPage} / {maxPage}
			</span>
			<button
				onClick={() => navigatePageHandler(true)}
				disabled={currentPage === maxPage}
			>
				+
			</button>
		</footer>
	);
};

export default Pagination;