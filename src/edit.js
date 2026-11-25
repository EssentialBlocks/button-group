/**
 * WordPress dependencies
 */
import { __ } from "@wordpress/i18n";
import { useBlockProps } from "@wordpress/block-editor";
import { useEffect } from "@wordpress/element";
import { select } from "@wordpress/data";

/**
 * Internal depencencies
 */
import classnames from "classnames";

import Inspector from "./inspector";

import Style from "./style";

const {
    duplicateBlockIdFix,
    DynamicInputValueHandler,
    EBDisplayIcon
} = window.EBButtonGroup;

export default function Edit(props) {
    const { attributes, setAttributes, className, clientId, isSelected, name } = props;
    const {
        blockId,
        preset,
        buttonTextOne,
        buttonTextTwo,
        innerButtonText,
        innerButtonIcon,
        showConnector,
        connectorType,
        classHook,
        showButtonOneIcon,
        buttonOneIcon,
        buttonOneIconPosition,
        showButtonTwoIcon,
        buttonTwoIcon,
        buttonTwoIconPosition,
    } = attributes;

    const buttonIcon = (key, show, icon) =>
        show && icon ? (
            <span className={`eb-button-icon eb-button-${key}-icon`}>
                <EBDisplayIcon icon={icon} />
            </span>
        ) : null;

    // this useEffect is for creating a unique id for each block's unique className by a random unique number
    useEffect(() => {
        const BLOCK_PREFIX = "eb-button-group";
        duplicateBlockIdFix({
            BLOCK_PREFIX,
            blockId,
            setAttributes,
            select,
            clientId,
        });
    }, []);

    const blockProps = useBlockProps({
        className: classnames(className, `eb-guten-block-main-parent-wrapper`),
    });

    return (
        <>
            {isSelected && <Inspector {...props} />}
            <div {...blockProps}>
                <Style {...props} />

                <div className={`eb-parent-wrapper eb-parent-${blockId} ${classHook}`}>
                    <div
                        className={`eb-button-group-wrapper ${blockId} ${preset}`}
                        data-id={blockId}
                    >
                        {/* Button One */}
                        <a
                            className={`eb-button-parent eb-button-one${showButtonOneIcon && buttonOneIcon ? " eb-button-has-icon" : ""}`}
                            // style={buttonStyleOne}
                            onMouseEnter={() => setAttributes({ isHoverOne: true })}
                            onMouseLeave={() => setAttributes({ isHoverOne: false })}
                        >
                            {buttonOneIconPosition === "before" &&
                                buttonIcon("one", showButtonOneIcon, buttonOneIcon)}
                            <DynamicInputValueHandler
                                // style={textStylesOne}
                                className={"eb-button-text eb-button-one-text"}
                                placeholder="Add Text.."
                                value={buttonTextOne}
                                onChange={(newText) =>
                                    setAttributes({ buttonTextOne: newText })
                                }
                                allowedFormats={[
                                    "core/bold",
                                    "core/italic",
                                    "core/link",
                                    "core/strikethrough",
                                    "core/underline",
                                    "core/text-color",
                                ]}
                            />
                            {buttonOneIconPosition !== "before" &&
                                buttonIcon("one", showButtonOneIcon, buttonOneIcon)}
                        </a>

                        {/* Connector */}

                        {showConnector && (
                            <div
                                className="eb-button-group__midldeInner"
                            // style={buttonMiddleInnerStyles}
                            >
                                {connectorType === "icon" && (
                                    <span>
                                        <EBDisplayIcon icon={innerButtonIcon} />
                                    </span>
                                )}
                                {connectorType === "text" && <span>{innerButtonText}</span>}
                            </div>
                        )}

                        {/* Button Two */}
                        <a
                            className={`eb-button-parent eb-button-two${showButtonTwoIcon && buttonTwoIcon ? " eb-button-has-icon" : ""}`}
                            // style={buttonStyleTwo}
                            onMouseEnter={() => setAttributes({ isHoverTwo: true })}
                            onMouseLeave={() => setAttributes({ isHoverTwo: false })}
                        >
                            {buttonTwoIconPosition === "before" &&
                                buttonIcon("two", showButtonTwoIcon, buttonTwoIcon)}
                            <DynamicInputValueHandler
                                // style={textStylesTwo}
                                className={"eb-button-text eb-button-two-text"}
                                placeholder="Add Text.."
                                value={buttonTextTwo}
                                onChange={(newText) =>
                                    setAttributes({ buttonTextTwo: newText })
                                }
                                allowedFormats={[
                                    "core/bold",
                                    "core/italic",
                                    "core/link",
                                    "core/strikethrough",
                                    "core/underline",
                                    "core/text-color",
                                ]}
                            />
                            {buttonTwoIconPosition !== "before" &&
                                buttonIcon("two", showButtonTwoIcon, buttonTwoIcon)}
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
}
