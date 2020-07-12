import React from "react";
import i18n from "i18next";
import "./Published.css";

export type MinecraftInfo = {
  name: string;
  url: string;
  image: string;
};

type Props = {
  title: string;
  values: MinecraftInfo[];
};

export function Minecraft(props: Props) {
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
    [[]] as MinecraftInfo[][]
  );

  const trs = (rows: MinecraftInfo[][]) => {
    return rows.map((values, i) => <tr key={`tr-${i}`}>{tds(values)}</tr>);
  };

  const tds = (row: MinecraftInfo[]) => {
    return row.map((value, i) => {
      return (
        <td key={`td-${i}`}>
          <a href={value.url}>
            <img className="minecraft" src={"images/" + value.image} />
            <br />
            {value.name}
          </a>
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
