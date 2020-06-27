import React, { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown/with-html";
import "./Markdown.css";

type Props = {
  id: string;
};

export function Markdown(props: Props) {
  const { id } = props;
  const [file, setFile] = useState("");

  useEffect(() => {
    fetch(`./articles/${id}.md`)
      .then((response) => response.text())
      .then((text) => setFile(text));
  });

  return (
    <div className="Markdown">
      <ReactMarkdown source={file} escapeHtml={false} />
    </div>
  );
}
