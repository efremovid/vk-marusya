import Registration from "./index";

export default {
  title: "Features/Reg",
};

export const Default = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        flexDirection: "column",
        gap: "20px",
      }}
    >
      <Registration />
    </div>
  );
};
