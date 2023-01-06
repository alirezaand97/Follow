import { Modal, Upload, UploadFile } from "antd";
import React, { useState } from "react";

import { RcFile } from "antd/es/upload";

type Props = {};

const Documents = (props: Props) => {
  const [previewOpen, setPreviewOpen] = useState(false);
  const [previewImage, setPreviewImage] = useState("");
  const [previewTitle, setPreviewTitle] = useState("");

  const handleCancel = () => setPreviewOpen(false);

  const getBase64 = (file: RcFile): Promise<string> =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result as string);
      reader.onerror = (error) => reject(error);
    });

  const handlePreview = async (file: UploadFile) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj as RcFile);
    }

    setPreviewImage(file.url || (file.preview as string));
    setPreviewOpen(true);
    setPreviewTitle(
      file.name || file.url!.substring(file.url!.lastIndexOf("/") + 1)
    );
  };
  const [fileList, setFileList] = useState<UploadFile[]>([
    {
      uid: "-1",
      name: "image.png",
      status: "done",
      url: "https://www.seiu1000.org/sites/main/files/main-images/camera_lense_0.jpeg",
    },
    {
      uid: "-2",
      name: "image.png",
      status: "done",
      url: "https://www.seiu1000.org/sites/main/files/main-images/camera_lense_0.jpeg",
    },
    {
      uid: "-3",
      name: "image.png",
      status: "done",
      url: "https://www.seiu1000.org/sites/main/files/main-images/camera_lense_0.jpeg",
    },
  ]);
  return (
    <div className="mt-4">
      <Upload
        action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
        listType="picture-card"
        fileList={fileList}
        disabled
        onPreview={handlePreview}
      >
        {/* {fileList.length >= 8 ? null : uploadButton} */}
      </Upload>
      <Modal
        open={previewOpen}
        title={previewTitle}
        footer={null}
        onCancel={handleCancel}
      >
        <img alt="example" style={{ width: "100%" }} src={previewImage} />
      </Modal>
    </div>
  );
};

export default Documents;
