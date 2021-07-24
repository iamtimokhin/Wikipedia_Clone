import React, { useState } from "react";

const Form = ({
  search,
  setSearch,
  results,
  setResults,
  searchInfo,
  setSearchInfo,
}) => {
  const [isLoading, setIsLoading] = useState(false);

  const searchInput = (e) => {
    setSearch(e.target.value);
  };
  //   API
  const handleToGetData = async (e) => {
    e.preventDefault();
    if (search === "") return;

    const API = `https://en.wikipedia.org/w/api.php?action=query&list=search&prop=info&inprop=url&utf8=&format=json&origin=*&srlimit=20&srsearch=${search}`;
    setIsLoading(true);
    const response = await fetch(API);
    console.log(response);
    const json = await response.json();
    console.log(json.query);
    setResults(json.query.search);
    setSearchInfo(json.query.searchinfo);
    setIsLoading(false);
  };

  return (
    <>
      <section className="form from--wrapper">
        <div className="media from__media">
          <h1 className="media__brandname">Wikipedia</h1>
        </div>
        <div>
          <form className="search search__form" onSubmit={handleToGetData}>
            <input
              value={search}
              onChange={searchInput}
              className="search__input"
              placeholder="Please enter your search term..."
            />
          </form>
        </div>
        {searchInfo.totalhits ? (
          <span className="quantity quantity--wrapper">
            Search Results:
            <span className="quantity__numbers">{searchInfo.totalhits}</span>
          </span>
        ) : (
          ""
        )}
        {isLoading ? (
          <div className="lds-facebook">
            <div></div>
            <div></div>
            <div></div>
          </div>
        ) : (
          <div className="result form__result">
            {results.map((result, index) => {
              const link = `https://en.wikipedia.org/?curid=${result.pageid}`;
              return (
                <div key={index} className="result__wrapper">
                  <h3 className="result__title">{result.title}</h3>
                  <span
                    className="result__content"
                    dangerouslySetInnerHTML={{ __html: result.snippet }}
                  ></span>
                  <a href={link} className="result__link" target="_blank">
                    Read More
                  </a>
                </div>
              );
            })}
          </div>
        )}
      </section>
    </>
  );
};

export default Form;
