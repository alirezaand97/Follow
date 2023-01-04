import { Col, Collapse, Row } from "antd";

import { MdChevronLeft } from "react-icons/md";
import { registerationRequestConfig } from "@/constant/register_request_config";
import { t } from "i18next";
import { useAppSelector } from "@/store";
import { useGetRegistrationRequestItemQuery } from "@/store/service/registrationRequest";

type Props = {};

type DataType = {
  [key: string]: any;
};

const UserInfo = (props: Props) => {
  const { Panel } = Collapse;

  const customerId = useAppSelector(
    (s) => s.drawers.toggleRegisterRequestDetail.customerId
  );

  const { data: requestData } = useGetRegistrationRequestItemQuery({
    CustomerId: customerId || 1,
  });

  if (!requestData) return null;
  return (
    <div className="max-h-full overflow-auto">
      <Collapse
        destroyInactivePanel={true}
        accordion
        bordered={false}
        defaultActiveKey={["1"]}
        expandIcon={({ isActive }) => (
          <MdChevronLeft size={18} className={isActive ? "rotate-90" : ""} />
        )}
        ghost
        className="mt-8 pl-4"
      >
        {registerationRequestConfig?.map((item, index) => (
          <Panel
            header={t(`general.${item.title}`)}
            key={index + 1}
            className="accordion-panel-header "
          >
            {item.list.map((info: DataType, i) => (
              <Row
                className="mb-3 pb-3 border-b border-dashed border-gray-100/80"
                key={i}
              >
                <Col span={10} className="text-gray-400 ">
                  <span className="!text-sm">
                    {/* {t(`general.${info?.field}`)} */}
                    {info?.field}
                  </span>
                </Col>
                <Col span={14} className="font-yekanBold">
                  {requestData[0] && (requestData[0][info?.field] || "-")}
                </Col>
              </Row>
            ))}
          </Panel>
        ))}
      </Collapse>
    </div>
  );
};

export default UserInfo;
