import { Circles } from "react-loader-spinner";

export const Loader = () => {
  return (
    <div
      style={{
        position: "absolute",
        top: "46%",
        left: "46%",
      }}
    >
      <Circles />
    </div>
  );
};
