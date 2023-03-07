import { MdVisibility, MdVisibilityOff } from "react-icons/md";
import React, { useState } from "react";

import { useLazyRegistrationRequestUserNameQuery } from "@/store/service/registrationRequest";

type Props = {
  ccmsCode: number;
};

const UserName = ({ ccmsCode }: Props) => {
  const [showUserName, setShowUserName] = useState(false);
  const [show, setShow] = useState(false);

  const [getUserName, { data: userName }] =
    useLazyRegistrationRequestUserNameQuery();

  const handleGetUserName = async (ccmsCode: number) => {
    !userName && (await getUserName({ CcmsCode: ccmsCode }).unwrap());
    setShowUserName((prev) => !prev);
  };

  return (
    <div
      className="flex group relative"
      onMouseEnter={() => setShow((prev) => !prev)}
      onMouseLeave={() => setShow((prev) => !prev)}
    >
      <div className=" flex justify-center w-10">
        {show && (
          <>
            <MdVisibilityOff
              size={20}
              onClick={() => setShowUserName((prev) => !prev)}
              className={`ml-1 fill-gray-500 cursor-pointer ${
                showUserName ? "block" : "hidden "
              }`}
            />
            <MdVisibility
              size={20}
              onClick={() => handleGetUserName(ccmsCode)}
              className={`ml-1 fill-gray-500 cursor-pointer ${
                showUserName ? "hidden" : "block "
              }`}
            />
          </>
        )}
      </div>

      <div className="flex-1">
        {showUserName && userName?.userName ? userName?.userName : "********"}
      </div>
    </div>
  );
};

export default UserName;
