import { ComponentProps, useMemo } from "react";
import { FilterByTime } from "../../molecules/FilterByTime/FilterByTime";
import { Styles } from "../../uiStyles";
import { Typography } from "antd";
import styled from "styled-components";
import { Table } from "antd";
import type { TableProps } from "antd";
import { AnyObject } from "../../../domain/types/Types";
import { useElementWidth } from "../../../domain/hooks/useElementWidth";

interface TableWithFiltersProps<T = any> extends ComponentProps<any> {
  label: React.ReactNode;
  description?: string;
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
  height: 100%;
`;

export function TableWithFilters<T = AnyObject>(
  props: TableWithFiltersProps<T>,
) {
  const {
    style,
    tableStyles,
    breakWidth,
    label,
    description,
    data,
    table,
    columns,
  } = props;
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
      <section style={{ padding: 14 }}>
        <HeadTableStyled>
          <div style={{ ...Styles.h2 }}>{label}</div>
          <FilterByTime isTwoRow={isTwoRow} />
        </HeadTableStyled>
        {description && (
          <Typography.Text style={{ fontFamily: "sans-serif" }}>
            {description}
          </Typography.Text>
        )}
      </section>

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

const HeadTableStyled = styled.div.attrs({ className: "HeadTableStyled" })`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 821px) {
    flex-direction: column;
    text-align: center;
  }
`;
