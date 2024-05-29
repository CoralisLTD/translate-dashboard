import { styled } from "@mui/material/styles";
import { useEffect, useRef } from "react";

const StyledModal = styled("div")(() => ({
  position: "fixed",
  zIndex: 1102,
  right: 0,
  top: 0,
  left: 0,
  bottom: 0,
  width: "100%",
  height: "100%",
  overflow: "auto",
  display: "flex",
  backgroundColor: "rgba(0,85,164, 0.8)",
}));

const ModalContent = styled("div")(({ height, width }) => ({
  backgroundColor: "#ffffff",
  opacity: "1",
  margin: "auto",
  padding: "20px",
  borderRadius: "14px",
  textAlign: "center",
  display: "flex",
  alignItems: height ? "start" : "center",
  height,
  width,
}));

const Modal = ({ children, show, onClose, ...props }) => {
  const modalRef = useRef();

  useEffect(() => {
    const checkIfClickedOutside = (e) => {
      if (modalRef.current && !modalRef.current.contains(e.target)) {
        onClose();
      }
    };
    document.addEventListener("click", checkIfClickedOutside, true);
    return () => {
      document.removeEventListener("click", checkIfClickedOutside, true);
    };
  });

  return (
    <StyledModal style={{ display: "flex", ...props.style }}>
      <ModalContent
        ref={modalRef}
        width={props.style?.minWidth}
        height={props.style?.minHeight}
      >
        {children}
      </ModalContent>
    </StyledModal>
  );
};

export default Modal;
