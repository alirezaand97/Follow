import { MdClear, MdOutlineCheck } from "react-icons/md";

import React from "react";

type Props = {
  isChecked: boolean;
};

const IsChecked = ({ isChecked }: Props) => {
  return (
    <div className="flex justify-center">
      {isChecked ? (
        <MdOutlineCheck className="fill-green-500" size={18} />
      ) : (
        <MdClear size={18} className="fill-rose-300" />
      )}
    </div>
  );
};

export default IsChecked;
