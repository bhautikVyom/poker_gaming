import React from "react";
import CommonDialog from "../widget/CommonDialog";

// Define props interface
interface QRDialogProps {
  isOpen: boolean;
//   setIsOpen: (value: boolean) => void;
}

const QRDialog: React.FC<QRDialogProps> = ({ isOpen }) => {
  return (
    <div>
      <CommonDialog isOpen={isOpen} size="sm" />
    </div>
  );
};

export default QRDialog;
