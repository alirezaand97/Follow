import {
  BranchesSettingModel,
  RegistrationRequestModel,
} from "@/models/registration.model";

import ICard from "@/components/general/card";
import { ITable } from "@/components/general";
import React from "react";
import { SortOrder } from "antd/lib/table/interface";
import { parse } from "query-string";
import { useGetBranchesSettingListQuery } from "@/store/service/branchesSetting";
import { useGetRegistrationRequestListQuery } from "@/store/service/registrationRequest";
import { useI18Next } from "@/i18n";
import { useLocation } from "react-router-dom";
import useTableConfig from "./table_config";

const BranchesSettingTable: React.FC = () => {
  const { t } = useI18Next();

  const { search } = useLocation();
  const searchPaeams = parse(search) as {
    sortOrder: SortOrder;
    sortField: string;
  };

  const { data: branchesSettingList, isFetching: isLoading } =
    useGetBranchesSettingListQuery({
      ...searchPaeams,
    });

  const tableColumn = useTableConfig();

  return (
    <ICard className="px-8">
      <ITable<BranchesSettingModel>
        columns={tableColumn}
        dataSource={branchesSettingList?.data}
        loading={isLoading}
        className="iresponsive-table"
        pagination={{
          total: branchesSettingList?.totalCount,
        }}
        scroll={{ x: true }}
      />
    </ICard>
  );
};

export default BranchesSettingTable;
