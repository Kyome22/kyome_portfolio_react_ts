import React from "react";
import i18n from "i18next";
import { useTranslation } from "react-i18next";
import "./Published.css";

export type NativeInfo = {
  name: string;
  ja_url: string;
  en_url: string;
  image: string;
  ja_description: string;
  en_description: string;
};

type Props = {
  title: string;
  column: number;
  values: NativeInfo[];
};

export function Native(props: Props) {
  const { title, column, values } = props;
  const lang = i18n.language;
  const { t } = useTranslation();

  const rows = values.reduce(
    (array, value) => {
      if (array[array.length - 1].length < column) {
        array[array.length - 1].push(value);
      } else {
        array.push([value]);
      }
      return array;
    },
    [[]] as NativeInfo[][]
  );

  const trs = (rows: NativeInfo[][]) => {
    return rows.map((values, i) => <tr key={`tr-${i}`}>{tds(values)}</tr>);
  };

  const tds = (row: NativeInfo[]) => {
    return row.map((value, i) => {
      let url = value.ja_url;
      let description = value.ja_description;
      if (lang == "en") {
        url = value.en_url;
        description = value.en_description;
      }
      return (
        <td key={`td-${i}`}>
          <a href={url}>
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
