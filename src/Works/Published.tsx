import React from "react";
import "./Published.css";

export type PublishedEnumValue = {
  name: string;
  url: string;
  image: string;
  description: string;
};

type Props = {
  title: string;
  values: PublishedEnumValue[];
};

export function Published(props: Props) {
  const { title, values } = props;

  const rows = values.reduce(
    (array, value) => {
      if (array[array.length - 1].length < 4) {
        array[array.length - 1].push(value);
      } else {
        array.push([value]);
      }
      return array;
    },
    [[]] as PublishedEnumValue[][]
  );

  const trs = (rows: PublishedEnumValue[][]) => {
    return rows.map((enumValues, i) => <tr key={i}>{tds(enumValues)}</tr>);
  };

  const tds = (row: PublishedEnumValue[]) => {
    return row.map((enumValue, i) => (
      <td key={i}>
        <a href={enumValue.url}>
          <img src={"images/" + enumValue.image} />
          <br />
          {enumValue.name}
        </a>
        <p dangerouslySetInnerHTML={{ __html: enumValue.description }} />
      </td>
    ));
  };

  return (
    <div className="published">
      <h3 className="subTitle">{title}</h3>
      <table>
        <tbody>{trs(rows)}</tbody>
      </table>
    </div>
  );
}
