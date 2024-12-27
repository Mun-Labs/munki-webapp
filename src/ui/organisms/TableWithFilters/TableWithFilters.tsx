import { ComponentProps, useMemo } from "react";
import { FilterByTime } from "../../molecules/FilterByTime/FilterByTime";
import { Styles } from "../../uiStyles";
import { Flex } from "antd";
import styled from "styled-components";
import { Table } from "antd";
import type { TableProps } from "antd";
import { AnyObject } from "../../../domain/types/Types";
import { useElementWidth } from "../../../domain/hooks/useElementWidth";

interface TableWithFiltersProps<T = any> extends ComponentProps<any> {
  label: string;
  data: TableProps<T>["dataSource"];
  columns: TableProps<T>["columns"];
  table?: React.ReactNode;
  tableStyles?: React.CSSProperties;
  defaultFilterWidth?: number;
  breakWidth?: number;
}

const TableWithFiltersStyled = styled.div.attrs({
  className: "TableWithFiltersStyled",
})`
  width: 100%;
`;

export function TableWithFilters<T = AnyObject>(
  props: TableWithFiltersProps<T>,
) {
  const { style, tableStyles, breakWidth, label, data, table, columns } = props;
  const onChange: TableProps<T>["onChange"] = (
    pagination,
    filters,
    sorter,
    extra,
  ) => {
    console.log("params", pagination, filters, sorter, extra);
  };
  const { width, elementRef } = useElementWidth();
  const isTwoRow = useMemo((): boolean => {
    if (!width || !breakWidth) return false;
    const isSmaller = width < breakWidth;
    return isSmaller;
  }, [width, breakWidth]);

  return (
    <TableWithFiltersStyled ref={elementRef} style={{ ...style }}>
      <Flex justify="space-between" align="center" style={{ padding: 14 }}>
        <div style={{ ...Styles.h2 }}>{label}</div>
        <FilterByTime isTwoRow={isTwoRow} />
      </Flex>

      {table ? (
        table
      ) : (
        <Table<T>
          className="TableWithFilters"
          columns={columns}
          dataSource={data}
          onChange={onChange}
          showSorterTooltip={{ target: "sorter-icon" }}
          style={{ ...tableStyles }}
        />
      )}
    </TableWithFiltersStyled>
  );
}
