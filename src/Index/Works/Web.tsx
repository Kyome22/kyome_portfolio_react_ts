import React from "react";
import i18n from "i18next";
import "./Published.css";

export type WebInfo = {
  name: string;
  url: string;
  image: string;
  ja_description: string;
  en_description: string;
};

type Props = {
  title: string;
  values: WebInfo[];
};

export function Web(props: Props) {
  const { title, values } = props;
  const lang = i18n.language;

  const rows = values.reduce(
    (array, value) => {
      if (array[array.length - 1].length < 4) {
        array[array.length - 1].push(value);
      } else {
        array.push([value]);
      }
      return array;
    },
    [[]] as WebInfo[][]
  );

  const trs = (rows: WebInfo[][]) => {
    return rows.map((values, i) => <tr key={`tr-${i}`}>{tds(values)}</tr>);
  };

  const tds = (row: WebInfo[]) => {
    return row.map((value, i) => {
      const description =
        lang == "en" ? value.en_description : value.ja_description;
      return (
        <td key={`td-${i}`}>
          <a href={value.url}>
            <img className="app" src={"images/" + value.image} />
            <br />
            {value.name}
          </a>
          <p>{description}</p>
        </td>
      );
    });
  };

  return (
    <div className="published">
      <h3 className="sub-title">{title}</h3>
      <table>
        <tbody>{trs(rows)}</tbody>
      </table>
    </div>
  );
}
