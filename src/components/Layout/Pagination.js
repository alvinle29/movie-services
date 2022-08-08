const Pagination = ({ currentPage, maxPage, navigatePageHandler }) => {
	return (
		<footer className={"footer"}>
			<button
				onClick={() => navigatePageHandler(false)}
				disabled={currentPage === 1}
			>
				-
			</button>
			<span className={"current__page"}>
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