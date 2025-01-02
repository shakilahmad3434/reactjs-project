import React, { useState } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import useHackerNewsArticles from "./components/useHackerNewsArticles";

const App = () => {
  const [nextScore, setNextScore] = useState(0);
  const { stories, loading, error } = useHackerNewsArticles(nextScore);

  const handleNextArticle = () => {
    setNextScore(nextScore + 10);
  };

  const handlePreviousArticle = () => {
    setNextScore(nextScore > 0 ? nextScore - 10 : 0);
  };

  return (
    <div className="container p-5">
      <h1>Top 10 Hacker News Stories</h1>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Error loading articles.</p>
      ) : (
        <div className="row">
          {stories.map((item, index) => (
            <div key={item.id || index} className="col-sm-6 mb-3 mb-sm-0">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">{item.title}</h5>
                  <p className="card-text">
                    <span>Author: {item.by}</span>
                    <br />
                    <span>Score: {item.score}</span>
                  </p>
                  <a href={item.url} className="btn btn-primary" target="_blank" rel="noreferrer">
                    Read More
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
      <nav aria-label="Page navigation example">
        <ul className="pagination">
          <li className="page-item">
            <button
              className="page-link"
              onClick={handlePreviousArticle}
              disabled={nextScore === 0}
            >
              Previous
            </button>
          </li>
          <li className="page-item">
            <button className="page-link" onClick={handleNextArticle}>
              Next
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default App;
