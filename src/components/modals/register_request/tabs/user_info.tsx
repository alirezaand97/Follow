import { Col, Collapse, Form, Radio, Row } from "antd";
import { FormItem, IButton, IInput, ISelect } from "@/components/general";

import ConvertDateToJalali from "@/utils/convert_date_to_jalali";
import IJalaliDatePicker from "@/components/general/date_picker";
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

  const handleSaveRegistrationRequest = (values: Object) => {
    let newValues = { ...values, BirthDate: "", JobStartingDate: "" };
    console.log(newValues);
  };

  if (!requestData) return null;

  return (
    <>
      {/* <Form onFinish={handleSaveRegistrationRequest}>
        <div
          className="flex flex-col max-h-screen"
          style={{ maxHeight: "calc(100vh - 90px )" }}
        >
          <div className="flex-1 overflow-y-scroll iscroll">
            <Collapse
              bordered={false}
              defaultActiveKey={["1", "2", "3"]}
              expandIcon={({ isActive }) => (
                <MdChevronLeft
                  size={18}
                  className={isActive ? "rotate-90" : ""}
                />
              )}
              ghost
            >
              {registerationRequestConfig?.map((item, index) => {
                return (
                  <Panel
                    header={t(`general.${item.title}`)}
                    key={index + 1}
                    className="accordion-panel-header "
                  >
                    {item.list.map((info: DataType, i) => {
                      return (
                        <Row
                          className="border-b border-dashed pt-1.5 border-gray-100/80"
                          key={i}
                        >
                          <Col span={24} className="text-gray-400 ">
                            <span className="!text-sm">{info?.field}</span>
                          </Col>

                          <Col span={24} className="font-yekanBold">
                            {info?.type == "text" && (
                              <FormItem
                                name={info?.field}
                                label={info?.label}
                                initialValue={requestData[info?.field]}
                              >
                                <IInput />
                              </FormItem>
                            )}
                            {info?.type == "radio" && (
                              <FormItem
                                name={info?.field}
                                label={info?.label}
                                initialValue={requestData[0][info?.field]}
                              >
                                {
                                  <Radio.Group>
                                    {info?.options?.map((option: any) => (
                                      <Radio value={option.value}>
                                        {option.label}{" "}
                                      </Radio>
                                    ))}
                                  </Radio.Group>
                                }
                              </FormItem>
                            )}
                            {info?.type == "date" && (
                              <FormItem
                                name={info?.field}
                                label={info?.label}
                                initialValue={requestData[0][info?.field]}
                              >
                                <IJalaliDatePicker />
                              </FormItem>
                            )}
                            {info?.type == "select" && (
                              <FormItem
                                name={info?.field}
                                label={info?.label}
                                initialValue={requestData[0][info?.field]}
                              >
                                <ISelect options={info?.options} />
                              </FormItem>
                            )}
                          </Col>
                        </Row>
                      );
                    })}
                  </Panel>
                );
              })}
            </Collapse>
          </div>
          <div className="pt-4 w-full">
            <IButton
              className="w-full"
              size="large"
              htmlType="submit"
              type="primary"
            >
              ذخیره اطلاعات
            </IButton>
          </div>
        </div>
      </Form> */}
    </>
  );
};

export default UserInfo;
