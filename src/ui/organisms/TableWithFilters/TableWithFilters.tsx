import { ComponentProps } from "react";
import { FilterByTime } from "../../molecules/FilterByTime/FilterByTime";
import { Styles } from "../../uiStyles";
import { Flex } from "antd";
import styled from "styled-components";
import { Table } from "antd";
import type { TableProps } from "antd";
import { AnyObject } from "../../../domain/types/Types";

interface TableWithFiltersProps<T = any> extends ComponentProps<any> {
  data: TableProps<T>["dataSource"];
  columns: TableProps<T>["columns"];
}

const TableWithFiltersStyled = styled.div.attrs({
  className: "TableWithFiltersStyled",
})`
  width: 100%;
`;

export function TableWithFilters<T = AnyObject>(
  props: TableWithFiltersProps<T>,
) {
  const { style, data, columns } = props;
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
      <Flex justify="space-between" align="center">
        <div style={{ ...Styles.h2 }}>Smart Wallet Inflow 🧠</div>
        <FilterByTime />
      </Flex>

      <Table<T>
        columns={columns}
        dataSource={data}
        onChange={onChange}
        showSorterTooltip={{ target: "sorter-icon" }}
      />
    </TableWithFiltersStyled>
  );
}
