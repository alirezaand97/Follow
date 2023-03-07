import React from "react";
import { parse } from "query-string";
import { useLocation } from "react-router-dom";

type Props = {
  index: number;
};

const RowNumber = ({ index }: Props) => {
  const { search } = useLocation();
  const { page = 1, pageSize = 10 } = parse(search) as {
    page: string;
    pageSize: string;
  };
  return (
    <span>{((page as number) - 1) * (pageSize as number) + index + 1}</span>
  );
};

export default RowNumber;
