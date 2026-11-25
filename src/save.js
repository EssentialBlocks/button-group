import { useBlockProps } from "@wordpress/block-editor";
const { EBDisplayIcon } = window.EBButtonGroup;
const Save = ({ attributes }) => {
    const {
        blockId,
        preset,
        buttonTextOne,
        buttonTextTwo,
        buttonURLOne,
        buttonURLTwo,
        innerButtonText,
        innerButtonIcon,
        showConnector,
        connectorType,
        classHook,
        buttonOneNewWindow,
        buttonTwoNewWindow,
        showButtonOneIcon,
        buttonOneIcon,
        buttonOneIconPosition,
        showButtonTwoIcon,
        buttonTwoIcon,
        buttonTwoIconPosition,
    } = attributes;

    // Icon markup only renders when the icon is on, so blocks saved before
    // this option existed keep producing the exact same HTML.
    const buttonIcon = (key, show, icon) =>
        show && icon ? (
            <span className={`eb-button-icon eb-button-${key}-icon`}>
                <EBDisplayIcon icon={icon} />
            </span>
        ) : null;

    return (
        <div {...useBlockProps.save()}>
            <div
                className={`eb-parent-wrapper eb-parent-${blockId} ${classHook}`}
            >
                <div
                    className={`eb-button-group-wrapper ${blockId} ${preset}`}
                    data-id={blockId}
                >
                    <a
                        className={`eb-button-parent eb-button-one${showButtonOneIcon && buttonOneIcon ? " eb-button-has-icon" : ""}`}
                        href={buttonURLOne === '#' ? '' : buttonURLOne}
                        {...(buttonOneNewWindow && { target: "_blank" })}
                        rel="noopener"
                    >
                        {buttonOneIconPosition === "before" &&
                            buttonIcon("one", showButtonOneIcon, buttonOneIcon)}
                        <div className="eb-button-text eb-button-one-text">
                            {buttonTextOne}
                        </div>
                        {buttonOneIconPosition !== "before" &&
                            buttonIcon("one", showButtonOneIcon, buttonOneIcon)}
                    </a>

                    {showConnector && (
                        <div className="eb-button-group__midldeInner">
                            {connectorType === "icon" && (
                                <span>
                                    <EBDisplayIcon icon={innerButtonIcon} />
                                </span>
                            )}

                            {connectorType === "text" && (
                                <span>{innerButtonText}</span>
                            )}
                        </div>
                    )}

                    <a
                        className={`eb-button-parent eb-button-two${showButtonTwoIcon && buttonTwoIcon ? " eb-button-has-icon" : ""}`}
                        href={buttonURLTwo === '#' ? '' : buttonURLTwo}
                        {...(buttonTwoNewWindow && { target: "_blank" })}
                        rel="noopener"
                    >
                        {buttonTwoIconPosition === "before" &&
                            buttonIcon("two", showButtonTwoIcon, buttonTwoIcon)}
                        <div className="eb-button-text eb-button-two-text">
                            {buttonTextTwo}
                        </div>
                        {buttonTwoIconPosition !== "before" &&
                            buttonIcon("two", showButtonTwoIcon, buttonTwoIcon)}
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Save;
