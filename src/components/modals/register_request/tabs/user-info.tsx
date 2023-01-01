import { Collapse, Form, Radio } from "antd";
import { FormItem, IInput, ISelect } from "@/components/general";
import { MdArrowRight, MdChevronLeft } from "react-icons/md";

import React from "react";

type Props = {};

type Inps = {
  name: string;
  label: string;
  type: string;
  options?: { label: string; value: string | number }[];
};

const UserInfo = (props: Props) => {
  // const inps: Inps[] = [
  //   { name: "firstName", type: "text", label: "نام" },
  //   {
  //     name: "gender",
  //     type: "radio",
  //     label: "جنسیت",
  //     options: [
  //       { label: "male", value: 1 },
  //       { label: "female", value: 0 },
  //     ],
  //   },
  //   {
  //     name: "city",
  //     type: "select",
  //     label: "شهر",
  //     options: [
  //       { label: "رشت", value: "rasht" },
  //       { label: "تهران", value: "tehran" },
  //     ],
  //   },
  // ];

  // const data = {
  //   firstName: "alireza",
  //   gender: 1,
  //   city: "tehran",
  // };

  const { Panel } = Collapse;

  type Person = {
    [key: string]: any;
  };
  const data: Person = { name: "ali", createDate: "2022", city: "rasht" };

  const cols = [
    { field: "name", type: "text" },
    { field: "createDate", type: "date" },
  ];

  return (
    <Collapse
      bordered={false}
      defaultActiveKey={["1"]}
      expandIcon={({ isActive }) => (
        <MdChevronLeft size={18} className={isActive ? "rotate-90" : ""} />
      )}
      ghost
      className="mt-8 pl-4"
    >
      <Panel header="اطلاعات فردی" key="1" className="accordion-panel-header ">
        <div className="grid grid-cols-3 mb-3 pb-3 border-b border-dashed border-gray-100/80">
          <div className=" grid-cols-1 text-gray-400">نام</div>
          <div className=" grid-cols-2 font-yekanBold">علیرضا</div>
        </div>
        <div className="grid grid-cols-3 mb-3 pb-3 border-b border-dashed border-gray-100/80">
          <div className=" grid-cols-1 text-gray-400">شهر</div>
          <div className=" grid-cols-2 font-yekanBold">رشت</div>
        </div>
        <div className="grid grid-cols-3 mb-3 pb-3 border-b border-dashed border-gray-100/80">
          <div className=" grid-cols-1 text-gray-400">کد ملی</div>
          <div className=" grid-cols-2 font-yekanBold">5690072125</div>
        </div>
        <div className="grid grid-cols-3 mb-3 pb-3 border-b border-dashed border-gray-100/80">
          <div className=" grid-cols-1 text-gray-400">محل تولد</div>
          <div className=" grid-cols-2 font-yekanBold">فومن</div>
        </div>
        <div className="grid grid-cols-3 mb-3 pb-3 border-b border-dashed border-gray-100/80">
          <div className=" grid-cols-1 text-gray-400">استان</div>
          <div className=" grid-cols-2 font-yekanBold">گیلان</div>
        </div>
        <div className="grid grid-cols-3 mb-3 pb-3 border-b border-dashed border-gray-100/80">
          <div className=" grid-cols-1 text-gray-400">جنسیت</div>
          <div className=" grid-cols-2 font-yekanBold">مرد</div>
        </div>
      </Panel>
      <Panel
        header="اطلاعات ارتباطی"
        key="2"
        className="accordion-panel-header"
      ></Panel>
      <Panel
        header="اطلاعات بانکی"
        key="3"
        className="accordion-panel-header"
      ></Panel>
    </Collapse>
  );

  // return (
  //   <Form>
  //     <div className="p-8">
  //       {inps.map((inp: Inps) => (
  //         <div>
  //           {inp.type == "text" && (
  //             <FormItem name={inp.name} label={inp.label}>
  //               <IInput defaultValue={data[inp.name]} disabled={true} />
  //             </FormItem>
  //           )}
  //           {inp.type == "radio" && (
  //             <FormItem name={inp.name} label={inp.label}>
  //               {
  //                 <Radio.Group defaultValue={data[inp.name]} disabled>
  //                   {inp.options?.map((option) => (
  //                     <Radio value={option.value}>{option.label} </Radio>
  //                   ))}
  //                 </Radio.Group>
  //               }
  //             </FormItem>
  //           )}
  //           {inp.type == "select" && (
  //             <FormItem name={inp.name} label={inp.label}>
  //               <ISelect
  //                 defaultValue={data[inp.name]}
  //                 options={inp.options}
  //                 disabled
  //               />
  //             </FormItem>
  //           )}
  //         </div>
  //       ))}
  //     </div>
  //   </Form>
  // );
};

export default UserInfo;
