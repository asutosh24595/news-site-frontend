import { getMainNews, getNewsByQuery } from "../service/newsapi";
import { useEffect, useState } from "react";
import "./Content.css";

export default function Content({ query }) {
  const [news, setNews] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        let response;
        console.log(query);
        if (query) {
          response = await getNewsByQuery(query);
        } else {
          response = await getMainNews();
        }
        setNews(response.data.articles);
      } catch (error) {
        console.log("Error fetching news: ", error);
      }
    };

    fetchNews();
  }, [query]);

  return (
    <main className="content">
      <h1 className="main-h1 text-center mb-3">
        {query ? `News for "${query}"` : "News Today"}
      </h1>
      <article>
        {news.map((article, index) => (
          <div key={index}>
            <h2>{article.title}</h2>
            <p>{article.description}</p>
            <img src={article.urlToImage} alt={article.title} />
            <a href={article.url} target="_blank" rel="noopener noreferrer">
              Read more
            </a>
          </div>
        ))}
      </article>
    </main>
  );
}
