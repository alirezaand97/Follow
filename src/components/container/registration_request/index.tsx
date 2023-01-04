import { FormItem, IInput, ITable } from "@/components/general";

import DateFilterMenu from "@/components/menus/date_filter";
import ICard from "@/components/general/card";
import React from "react";
import { RegistrationRequestModel } from "@/models/registration_request.model";
import { SortOrder } from "antd/lib/table/interface";
import { parse } from "query-string";
import { useGetRegistrationRequestListQuery } from "@/store/service/registrationRequest";
import { useI18Next } from "@/i18n";
import { useLocation } from "react-router-dom";
import useTableConfig from "./table_config";

const App: React.FC = () => {
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
      <DateFilterMenu
        filterdDateOptions={[
          { label: t("general.CreationDate"), value: "CreationDate" },
          { label: t("general.LastUpdateDate"), value: "LastUpdateDate" },
        ]}
      />
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
