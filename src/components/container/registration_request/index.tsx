import DateFilterMenu from "@/components/menus/date_filter";
import ICard from "@/components/general/card";
import { ITable } from "@/components/general";
import React from "react";
import { RegistrationRequestModel } from "@/models/registration_request.model";
import { SortOrder } from "antd/lib/table/interface";
import { parse } from "query-string";
import { useGetRegistrationRequestListQuery } from "@/store/service/registrationRequest";
import { useLocation } from "react-router-dom";
import useTableConfig from "./table_config";

const App: React.FC = () => {
  const { search } = useLocation();
  const searchPaeams = parse(search) as {
    sortOrder: SortOrder;
    sortField: string;
  };

  const { data: requestsList, isFetching: isLoadingRequestList } =
    useGetRegistrationRequestListQuery({
      ...searchPaeams,
    });

  const tableColumn = useTableConfig();

  return (
    <ICard className="px-8">
      <DateFilterMenu />
      <ITable<RegistrationRequestModel>
        columns={tableColumn}
        dataSource={requestsList}
        loading={isLoadingRequestList}
        className="iresponsive-table"
        pagination={{
          total: 70,
        }}
      />
    </ICard>
  );
};

export default App;
