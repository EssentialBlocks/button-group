import {
  handleDesktopBtnClick,
  handleMobileBtnClick,
  handleTabBtnClick,
} from "./helpers";

export default function WithResBtns({
  children,
  resRequiredProps,
  label,
  controlName,
  onReset,
}) {
  const { setAttributes, attributes, resOption, objAttributes } =
    resRequiredProps;
  onReset = () => {
    resOption == "desktop"
      ? setAttributes({
          [`${controlName}Range`]: objAttributes[`${controlName}Range`].default,
        })
      : "";
    resOption == "tab"
      ? setAttributes({
          [`TAB${controlName}Range`]:
            objAttributes[`TAB${controlName}Range`].default,
        })
      : "";
    resOption == "mobile"
      ? setAttributes({
          [`MOB${controlName}Range`]:
            objAttributes[`MOB${controlName}Range`].default,
        })
      : "";
  };
  return (
    <div className={`responsive-btn-wrapper`}>
      <div className="responsive-btn">
        <span className="responsive-btn-label">{label}</span>
        <span
          onClick={() => handleDesktopBtnClick({ setAttributes })}
          class={`typoResButton dashicons dashicons-desktop ${
            resOption === "desktop" ? "active" : " "
          }`}
        ></span>
        <span
          onClick={() => handleTabBtnClick({ setAttributes })}
          class={`typoResButton dashicons dashicons-tablet ${
            resOption === "tab" ? "active" : " "
          }`}
        ></span>
        <span
          onClick={() => handleMobileBtnClick({ setAttributes })}
          class={`typoResButton dashicons dashicons-smartphone ${
            resOption === "mobile" ? "active" : " "
          }`}
        ></span>
      </div>
      <div className="eb-component-wrapper">
        {children}
        <button className="eb-range-reset-button" onClick={onReset}>
          <span className="dashicon dashicons dashicons-image-rotate"></span>
        </button>
      </div>
    </div>
  );
}
