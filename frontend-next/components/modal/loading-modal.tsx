"use client";
import React, { useEffect, useState } from "react";
import { Modal } from "@/components/ui/modal";
import dynamic from "next/dynamic";
const BeatLoader = dynamic(
  () => import("react-spinners").then((mod) => mod.BeatLoader),
  { ssr: false }
);

interface LoadingModalProps {
  isOpen: boolean;
  onClose: () => void;
  loading: boolean;
}

export const LoadingModal: React.FC<LoadingModalProps> = ({
  isOpen,
  loading,
  onClose,
}) => {
  const [isMounted, setIsMounted] = useState<boolean>(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <Modal
      title=""
      description="Loading..."
      isOpen={isOpen}
      onClose={onClose}
    >
      <div className="pt-6 space-x-2 flex items-center justify-center w-full">
        <BeatLoader
          className="flex justify-center items-center"
          color="#000"
          size={40}
        />
      </div>
      <div className="pt-6 space-x-2 flex items-center justify-end w-full"></div>
    </Modal>
  );
};
