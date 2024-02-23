import axios from "axios";
import AllPosts from "./Components/AllPosts";
import Featured from "./Components/Featured";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import PopularContainer from "./Components/PopularContainer";
import RecentArticle from "./Components/RecentArticle";
import SearchResult from "./Components/SearchResult";
import { useState } from "react";
function App() {
  const [results, setResults] = useState([]);

  const search = async (query) => {
      try {
          const response = await axios.get('http://localhost:5000/search');
          setResults(response.data.articles);
      } catch (error) {
          console.error('Error fetching search results:', error);
      }
  };
  return (
    <div className="App">
      <Header search={search}/>
      <Featured/>
      <SearchResult results={results} />
      <PopularContainer/>
      <RecentArticle/>
      <AllPosts/>
      <Footer/>
    </div>
  );
}

export default App;
