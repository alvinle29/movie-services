import { useState, useEffect } from "react";

import NavBar from "./components/Layout/NavBar";
import Pagination from "./components/Layout/Pagination";
import MoviesList from "./components/Movie/movieList";
import hook from "./hooks/hook";

function App() {

  const [movies, setMovies] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const [maxPage, setMaxPage] = useState(1)
  const [isSearching, setIsSearching] = useState(false)
  const [searchText, setSearchText] = useState('')
 
  const { isLoading, e, sendRequest } = hook()

  useEffect(() => {
    let url;
    let queryPage = '&page=' + currentPage.toString();

    const sendRequestHandler = async (url) => {
      let data = await sendRequest(url);
      setMovies(data.results);
      setMaxPage(data.total_pages);
    };

    if (isSearching) {
      let queryText = '&query=' + searchText;
      url = process.env.REACT_APP_SEARCH_API + queryText + queryPage;
    } else {
      url = process.env.REACT_APP_DISCOVER_API + queryPage;
    }

    sendRequestHandler(url);
  }, [currentPage, isSearching, searchText, sendRequest]);

  const navigatePageHandler = (increase) => {
    if (increase === true) {
      setCurrentPage((prev) => prev + 1);
    } else {
      setCurrentPage((prev) => prev - 1);
    }
  };

  const submitSearch = (text) => {
    if (text) {
      setIsSearching(true);
      setSearchText(text);
      setCurrentPage(1);
    }
  };

  const reloadHandler = () => {
    setIsSearching(false);
    setSearchText('');
    setCurrentPage(1);
  };

  let content = <p>Found no movies!</p>;

  if (movies.length > 0) {
    content = <MoviesList movies={movies} />;
  }

  if (e) {
    content = <p>{e}</p>;
  }

  if (isLoading) {
    content = <p>Loading...</p>;
  }

  return (
    <>
      <NavBar submitSearch={submitSearch} reloadHandler={reloadHandler} />
      {content}
      <Pagination
        currentPage={currentPage}
        maxPage={maxPage}
        navigatePageHandler={navigatePageHandler}
      />
    </>
  );
}

export default App;
