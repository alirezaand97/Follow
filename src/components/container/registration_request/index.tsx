import ICard from "@/components/general/card";
import { ITable } from "@/components/general";
import React from "react";
import { RegistrationRequestModel } from "@/models/registration.model";
import { SortOrder } from "antd/lib/table/interface";
import { parse } from "query-string";
import { useGetRegistrationRequestListQuery } from "@/store/service/registrationRequest";
import { useI18Next } from "@/i18n";
import { useLocation } from "react-router-dom";
import useTableConfig from "./table_config";

const RegistrationRequestsTable: React.FC = () => {
  const { t } = useI18Next();

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
      <ITable<RegistrationRequestModel>
        columns={tableColumn}
        dataSource={requestsList}
        loading={isLoadingRequestList}
        className="iresponsive-table"
        pagination={{
          total: 70,
        }}
        scroll={{ x: true }}
      />
    </ICard>
  );
};

export default RegistrationRequestsTable;
