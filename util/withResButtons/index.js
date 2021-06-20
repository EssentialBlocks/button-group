const { dispatch } = wp.data;

import {
  handleDesktopBtnClick,
  handleMobileBtnClick,
  handleTabBtnClick,
} from "../helpers";

export default function WithResButtons({
  className,
  children,
  resRequiredProps,
}) {
  const { setAttributes, resOption } = resRequiredProps;

  return (
    <div className={`wrap_res ${className || " "}`}>
      <div className="resIcons">
        <span
          onClick={() =>
            handleDesktopBtnClick({
              setAttributes,
              setPreviewDeviceType: dispatch("core/edit-post")
                .__experimentalSetPreviewDeviceType,
            })
          }
          class={`typoResButton dashicons dashicons-desktop ${
            resOption === "Desktop" ? "active" : " "
          }`}
        ></span>
        <span
          onClick={() =>
            handleTabBtnClick({
              setAttributes,
              setPreviewDeviceType: dispatch("core/edit-post")
                .__experimentalSetPreviewDeviceType,
            })
          }
          class={`typoResButton dashicons dashicons-tablet ${
            resOption === "Tablet" ? "active" : " "
          }`}
        ></span>
        <span
          onClick={() =>
            handleMobileBtnClick({
              setAttributes,
              setPreviewDeviceType: dispatch("core/edit-post")
                .__experimentalSetPreviewDeviceType,
            })
          }
          class={`typoResButton dashicons dashicons-smartphone ${
            resOption === "Mobile" ? "active" : " "
          }`}
        ></span>
      </div>
      {children}
    </div>
  );
}
