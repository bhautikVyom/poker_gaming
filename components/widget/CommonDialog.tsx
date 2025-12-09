import React, { ReactNode } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  VisuallyHidden,
} from "../../components/ui/dialog";
import { Button } from "../ui/button";

type DialogSize = "sm" | "default" | "lg" | "xl" | "full";

interface CommonDialogProps {
  isOpen: boolean;
  onClose: (open: boolean) => void;
  title?: string | ReactNode;
  description?: string | ReactNode;
  children?: ReactNode;
  footer?: ReactNode;
  size?: DialogSize;
  edit?: boolean;
  editClick?: () => void;
  deleteClick?: () => void;
  showClose?: boolean;
  className?: string;
}

const CommonDialog: React.FC<CommonDialogProps> = ({
  isOpen,
  onClose,
  title,
  description,
  children,
  footer,
  size = "default",
  edit,
  editClick,
  deleteClick,
  showClose = true,
  className,
}) => {
  const sizeClasses: Record<DialogSize, string> = {
    sm: "max-w-[calc(100vw-32px)] sm:max-w-[425px]",
    default: "max-w-[calc(100vw-32px)] sm:max-w-[600px]",
    lg: "max-w-[calc(100vw-32px)] sm:max-w-[800px] max-sm:px-2.5",
    xl: "max-w-[calc(100vw-32px)] sm:max-w-[1000px]",
    full: "h-screen! w-screen! max-w-screen!"
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className={`${sizeClasses[size]} ${className ?? ""} bg-transparent p-0!`}>
        <DialogHeader>
          <div className="flex flex-row justify-between relative">
            <div className="flex flex-row gap-3 place-items-center">
              <VisuallyHidden><DialogTitle>{title}</DialogTitle></VisuallyHidden>

              {editClick && (
                <>
                  {edit ? (
                    <button
                      className="border-0 text-red-500 underline"
                      onClick={editClick}
                    >
                      Cancel
                    </button>
                  ) : (
                    <button
                      className="border-0 text-blue-500 underline"
                      onClick={editClick}
                    >
                      Edit
                    </button>
                  )}
                </>
              )}
            </div>

            {deleteClick && (
              <button
                className="border-0 text-white bg-red-400 px-2 py-1 text-sm rounded"
                onClick={deleteClick}
              >
                Delete
              </button>
            )}
          </div>

          {description && (
            <DialogDescription>{description}</DialogDescription>
          )}
        </DialogHeader>

        <div className="py-4">{children}</div>

        {footer && (
          <DialogFooter className="max-sm:[&_button]:w-full">
            {footer}
          </DialogFooter>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default CommonDialog;
