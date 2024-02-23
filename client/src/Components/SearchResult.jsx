import './searchresult.css';

const SearchResult = ({ results }) => {
    return (
        <div>
            {/* <h1 className='search-heading'>Search Result</h1> */}
            <div className='search-result-wrapper'>
            {/* <h2>Search Results</h2> */}
           {
            results.map((result,index)=>(
                <div key={index} className='search-result'>
                    <img src={result.urlToImage} alt="" />
                    <h5>{result.title}</h5>
                </div>
            ))
           }
            {/* <ul>
                {results.map((result, index) => (
                    <li key={index}>{result.title}</li>
                ))}
            </ul> */}
        </div>
        </div>
        
    );
};
export default SearchResult