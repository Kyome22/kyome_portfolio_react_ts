import React, { useState } from "react";
import "./ArticlesList.css";

export type ArticleData = {
  id: string;
  title: string;
};

type Props = {
  showLimit: number;
  page: number;
  list: ArticleData[];
  total: number;
  isUnspecified: boolean;
};

export function ArticlesList(props: Props) {
  const { showLimit, page, list, total, isUnspecified } = props;
  const [currentPage, setPage] = useState(page);

  const items = list
    .filter((value, index) => {
      return (
        (currentPage - 1) * showLimit <= index &&
        index < currentPage * showLimit
      );
    })
    .map(({ id, title }, i) => (
      <li key={`article-${i}`}>
        <a href={`./articles.html?id=${id}&page=${currentPage}`}>{title}</a>
      </li>
    ));

  return (
    <div className={"ArticlesList" + (isUnspecified ? " unspecified" : "")}>
      <button
        className={currentPage === 1 ? "unvisible" : "normal"}
        onClick={() => setPage(Math.max(currentPage - 1, 1))}
      >
        {"◀︎"}
      </button>
      <span>
        {currentPage}/{total}
      </span>
      <button
        className={currentPage === total ? "unvisible" : "normal"}
        onClick={() => setPage(Math.min(currentPage + 1, total))}
      >
        {"▶︎"}
      </button>
      <ul>{items}</ul>
    </div>
  );
}
