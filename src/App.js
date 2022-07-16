import { useState } from "react";
import NavBar from "./components/Layout/NavBar";
import Pagination from "./components/Layout/Pagination";
import hook from "./hooks/hook";

function App() {

  const [movies, setMovies] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const [maxPage, setMaxPage] = useState(1)
  const [isSearching, setIsSearching] = useState(false)
  const [searchText, setSearchText] = useState('')

  const { isLoading, error, sendRequest } = hook()

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

  


  return (
    <>
      <NavBar/>
      <Pagination/>
    </>
  );
}

export default App;
