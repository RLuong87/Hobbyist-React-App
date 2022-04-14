import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import Article from "./Article";
import { NewsContext } from "../Providers/NewsProvider";
import InlineInputContainer from "../common/InlineInputContainer";
import Form from "../common/Form";
import Input from "../common/Input";
import Button from "../common/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const Articles = () => {
  const { articles, loading, setQuery } = useContext(NewsContext);
  const [q, setQ] = useState("");

  const handleSubmit = (e) => {
    setQuery(q);
  };

  const displayArticles = () => {
    // [{article1}, {article2}, {article3}]
    // [<Article1 />, <Article2 /> <Article3 />]
    return articles.map((article, i) => (
      <Article article={article} key={article.url} />
    ));
  };

  return (
    <div style={{ width: "100%", justifyContent: "center"}}>
      <Form onSubmit={handleSubmit}>
        <InlineInputContainer>
          <Input
            id="query"
            placeHolder="Search"
            onChange={(e) => setQ(e.target.value)}
          />
          <FontAwesomeIcon icon={["fas", "search"]} />
          <Button>Search</Button>
        </InlineInputContainer>
      </Form>
      {loading ? <p>Loading...</p> : displayArticles()}
    </div>
  );
};

export default Articles;
