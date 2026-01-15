import { Button } from "./index";

export default {
  title: "Shared/UI/Button",
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
      <Button children="Кнопка" theme="primary" widthVariant="default" />
      <Button children="Кнопка" theme="disabled" widthVariant="default" />
      <Button children="Кнопка" theme="primary" widthVariant="full" />
      <Button children="Кнопка" theme="disabled" widthVariant="full" />
    </div>
  );
};
