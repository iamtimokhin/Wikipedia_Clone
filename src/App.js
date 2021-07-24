import React, { useState, useEffect } from "react";
import Form from "./components/Form";
import Scroll from "./components/Scroll";

const App = () => {
  const [search, setSearch] = useState("");
  const [results, setResults] = useState([]);
  const [searchInfo, setSearchInfo] = useState({});
  const [scrollTop, setScrollTop] = useState(0);

  const onScroll = () => {
    const winScroll = document.documentElement.scrollTop;
    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;

    const scrolled = (winScroll / height) * 100;
    setScrollTop(scrolled);
  };

  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <div>
      <Scroll scrollTop={scrollTop} />
      <Form
        search={search}
        setSearch={setSearch}
        results={results}
        setResults={setResults}
        searchInfo={searchInfo}
        setSearchInfo={setSearchInfo}
      />
    </div>
  );
};

export default App;
