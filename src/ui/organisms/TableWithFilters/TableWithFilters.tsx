import { ComponentProps } from "react";
import { FilterByTime } from "../../molecules/FilterByTime/FilterByTime";
import { Styles } from "../../uiStyles";
import { Flex } from "antd";
import styled from "styled-components";
import { Table } from "antd";
import type { TableProps } from "antd";
import { AnyObject } from "../../../domain/types/Types";

interface TableWithFiltersProps<T = any> extends ComponentProps<any> {
  label: string;
  data: TableProps<T>["dataSource"];
  columns: TableProps<T>["columns"];
  table?: React.ReactNode;
}

const TableWithFiltersStyled = styled.div.attrs({
  className: "TableWithFiltersStyled",
})`
  width: 100%;
`;

export function TableWithFilters<T = AnyObject>(
  props: TableWithFiltersProps<T>,
) {
  const { style, label, data, table, columns } = props;
  const onChange: TableProps<T>["onChange"] = (
    pagination,
    filters,
    sorter,
    extra,
  ) => {
    console.log("params", pagination, filters, sorter, extra);
  };

  return (
    <TableWithFiltersStyled style={{ ...style }}>
      <Flex
        justify="space-between"
        align="center"
        style={{ marginBottom: 20, padding: 14 }}
      >
        <div style={{ ...Styles.h2 }}>{label}</div>
        <FilterByTime />
      </Flex>

      {table ? (
        table
      ) : (
        <Table<T>
          columns={columns}
          dataSource={data}
          onChange={onChange}
          showSorterTooltip={{ target: "sorter-icon" }}
        />
      )}
    </TableWithFiltersStyled>
  );
}
