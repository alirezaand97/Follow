import { FilterValue, SorterResult, TableCurrentDataSource, TablePaginationConfig } from "antd/es/table/interface";

import ICard from "@/components/general/card";
import { ITable } from "@/components/general";
import React from "react";
import { RegistrationRequestModel } from "@/models/registration_request.model";
import { SortOrder } from "antd/lib/table/interface";
import { parse } from "query-string";
import { useConvertTableFilterRoQuesyString } from "@/utils/convertTableFilterRoQuesyString";
import { useGetRegistrationRequestListQuery } from "@/store/service/registrationRequest";
import { useLocation } from "react-router-dom";
import useTableConfig from "./table_config";

const App: React.FC = () => {
  const { search } = useLocation();
  const searchPaeams = parse(search) as {
    sortOrder: SortOrder;
    sortField: string;
  };
  const { data, isLoading } = useGetRegistrationRequestListQuery();

  const { tableParamsToQsConvertor } = useConvertTableFilterRoQuesyString();

  const handleTableChange = () => {};

  const tableColumn = useTableConfig();

  console.log(tableColumn);
  const onChange = (
    pagination: TablePaginationConfig, filters: Record<string, FilterValue | null>, sorter: SorterResult<RegistrationRequestModel> | SorterResult<RegistrationRequestModel>[], extra: TableCurrentDataSource<RegistrationRequestModel>
  ) => {
    // tableParamsToQsConvertor(pagination, filters, sorter);
  };

  return (
    <ICard className="px-8">
      <ITable<RegistrationRequestModel>
        columns={tableColumn}
        dataSource={data}
        onChange={onChange}
        loading={isLoading}
        className="iresponsive-table"
      />
    </ICard>
  );
};

export default App;
