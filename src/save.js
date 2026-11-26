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
        buttonOneNofollow,
        buttonOneSponsored,
        buttonTwoNofollow,
        buttonTwoSponsored,
        buttonOneAriaLabel,
        buttonTwoAriaLabel,
    } = attributes;

    // "noopener" stays first and always present, so blocks with both toggles
    // off save the same rel value as before.
    const linkRel = (nofollow, sponsored) =>
        ["noopener", nofollow && "nofollow", sponsored && "sponsored"]
            .filter(Boolean)
            .join(" ");

    // An empty or "#" link used to save as href="", which reloads the page on
    // click and is announced as a link. Leave href (and target/rel) off instead,
    // so the button does nothing when it has no real destination.
    // aria-label is only valid on an element with a role, so it is output only
    // together with a real link (an <a> without href has no role).
    const linkProps = (url, newWindow, nofollow, sponsored, ariaLabel) =>
        url && url !== "#"
            ? {
                href: url,
                ...(newWindow && { target: "_blank" }),
                rel: linkRel(nofollow, sponsored),
                ...(ariaLabel && { "aria-label": ariaLabel }),
            }
            : {};

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
                        {...linkProps(buttonURLOne, buttonOneNewWindow, buttonOneNofollow, buttonOneSponsored, buttonOneAriaLabel)}
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
                        {...linkProps(buttonURLTwo, buttonTwoNewWindow, buttonTwoNofollow, buttonTwoSponsored, buttonTwoAriaLabel)}
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
