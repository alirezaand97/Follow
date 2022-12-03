import { Card, CardProps } from "antd";

import React from "react";

interface Props extends CardProps {}

const ICard = (props: Props) => {
  return <Card className="!shadow-card !border-none !px-3 !py-4" {...props} />;
};

export default ICard;
