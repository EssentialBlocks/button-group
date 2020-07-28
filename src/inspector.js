/**
 * WordPress dependencies
 */
import { __ } from "@wordpress/i18n"
import { Component } from "@wordpress/element"
import {
	PanelBody,
	SelectControl,
	RangeControl,
	ToggleControl,
	TextControl,
	Button,
	ButtonGroup,
	BaseControl,
	Dropdown,
} from "@wordpress/components"
import { InspectorControls, PanelColorSettings } from "@wordpress/block-editor"

/**
 * Internal depencencies
 */
import {
	BORDER_STYLES,
	BUTTON_ONE_STYLES,
	BUTTON_TWO_STYLES,
	FONT_WEIGHTS,
	TEXT_TRANSFORM,
	BORDER_TYPES,
} from "./constants";
import FontIconPicker from "@fonticonpicker/react-fonticonpicker";
import iconList from "../util/faIcons";
import DimensionsControl from "../util/dimensions-control";
import UnitControl from "../util/unit-control";
import ColorControl from "../util/color-control";

class Inspector extends Component {
	handleButtonOneStyles = (style) => {
		switch (style) {
			case "fill":
				this.props.setAttributes({
					buttonOneColor: "#2196f3",
					textOneColor: "white",
					hoverButtonOneColor: "#1976d2",
					hoverTextOneColor: "white",
					borderOneColor: "#0f94f6",
					borderWidth: 2,
					borderStyle: "solid",
					borderRightWidth: "0px",
				});
				break;
			case "outline":
				this.props.setAttributes({
					buttonOneColor: "transparent",
					textOneColor: "#0f94f6",
					hoverButtonOneColor: "#e10050",
					hoverTextOneColor: "white",
					borderOneColor: "#0f94f6",
					borderWidth: 2,
					borderStyle: "solid",
				});
				break;

			case "text":
				this.props.setAttributes({
					buttonOneColor: "white",
					textOneColor: "#0f94f6",
					hoverButtonOneColor: "#4CAF50",
					hoverTextOneColor: "white",
					borderOneColor: "transparent",
					borderWidth: 0,
					borderStyle: "none",
				});
				break;
		}
		this.props.setAttributes({ selectButtonStyleOne: style });
	};
	handleButtonTwoStyles = (style) => {
		switch (style) {
			case "fill":
				this.props.setAttributes({
					buttonTwoColor: "#2196f3",
					textTwoColor: "white",
					hoverButtonTwoColor: "#1976d2",
					hoverTextTwoColor: "white",
					borderTwoColor: "#0f94f6",
					borderWidth: 2,
					borderStyle: "solid",
				});
				break;
			case "outline":
				this.props.setAttributes({
					buttonTwoColor: "transparent",
					textTwoColor: "#0f94f6",
					hoverButtonTwoColor: "#e10050",
					hoverTextTwoColor: "white",
					borderTwoColor: "#0f94f6",
					borderWidth: 2,
					borderStyle: "solid",
				});
				break;

			case "text":
				this.props.setAttributes({
					buttonTwoColor: "white",
					textTwoColor: "#0f94f6",
					hoverButtonTwoColor: "#4CAF50",
					hoverTextTwoColor: "white",
					borderTwoColor: "transparent",
					borderWidth: 0,
					borderStyle: "none",
				});
				break;
		}
		this.props.setAttributes({ selectButtonStyleTwo: style });
	};
	changeAllBorderRadius = (newValue) =>
		this.props.setAttributes({
			borderRadiusTopLeft: newValue,
			borderRadiusTopRight: newValue,
			borderRadiusBottomRight: newValue,
			borderRadiusBottomLeft: newValue,
		});

	render() {
		const { attributes, setAttributes } = this.props;
		const {
			marginTop,
			marginRight,
			marginBottom,
			marginLeft,
			paddingTop,
			paddingRight,
			paddingBottom,
			paddingLeft,
			borderWidth,
			borderOneColor,
			hoverBorderOneColor,
			borderTwoColor,
			hoverBorderTwoColor,
			borderStyle,
			borderRadiusTopLeft,
			borderRadiusTopRight,
			borderRadiusBottomRight,
			borderRadiusBottomLeft,
			buttonOneColor,
			textOneColor,
			hoverButtonOneColor,
			hoverTextOneColor,
			buttonTwoColor,
			textTwoColor,
			hoverButtonTwoColor,
			hoverTextTwoColor,
			buttonFontSize,
			buttonAlign,
			selectButtonStyleOne,
			selectButtonStyleTwo,
			buttonStyleTwo,
			marginUnit,
			paddingUnit,
			buttonFontUnit,
			borderRadiusUnit,
			buttonWidth,
			widthUnit,
			seperateButtonsSpace,
			seperateButtonsSpaceUnit,
			buttonURLOne,
			buttonURLTwo,
			innerButtonText,
			innerButtonSize,
			innerButtonColor,
			innerButtonTextColor,
			innerButtonTextSize,
			isShowIcon,
			innerButtonIcon,
			buttonFontFamily,
			buttonFontWeight,
			buttonTextTransform,
			innerButtonTextTransform,
			buttonLetterSpacing,
			innerButtonLetterSpacing,
			isShowText,
			borderType,
		} = attributes;

		const hasConnector = isShowText || isShowIcon;

		return (
			<InspectorControls key="controls">
				<PanelBody title={__("Button Settings")} initialOpen={false}>
					<TextControl
						label={__("Button One Link")}
						value={buttonURLOne}
						onChange={(link) => setAttributes({ buttonURLOne: link })}
					/>

					<TextControl
						label={__("Button Two Link")}
						value={buttonURLTwo}
						onChange={(link) => setAttributes({ buttonURLTwo: link })}
					/>
				</PanelBody>

				<PanelBody title={__("Button Styles")} initialOpen={false}>
					<SelectControl
						label={__("Button One Styles")}
						value={selectButtonStyleOne}
						options={BUTTON_ONE_STYLES}
						onChange={(style) => this.handleButtonOneStyles(style)}
					/>

					<SelectControl
						label={__("Button Two Styles")}
						value={selectButtonStyleTwo}
						options={BUTTON_TWO_STYLES}
						onChange={(style) => this.handleButtonTwoStyles(style)}
					/>

					<UnitControl
						selectedUnit={widthUnit}
						unitTypes={[
							{ label: "px", value: "px" },
							{ label: "em", value: "em" },
						]}
						onClick={(widthUnit) => setAttributes({ widthUnit })}
					/>

					<RangeControl
						label={__("Buttons Width")}
						value={buttonWidth || 0}
						allowReset
						onChange={(newSize) => setAttributes({ buttonWidth: newSize })}
						min={0}
						max={400}
					/>

					<UnitControl
						selectedUnit={seperateButtonsSpaceUnit}
						unitTypes={[
							{ label: "px", value: "px" },
							{ label: "em", value: "em" },
						]}
						onClick={(unit) =>
							setAttributes({ seperateButtonsSpaceUnit: unit })
						}
					/>

					<RangeControl
						label={__("Seperator")}
						value={seperateButtonsSpace || 0}
						allowReset
						onChange={(newSize) =>
							setAttributes({
								seperateButtonsSpace: newSize,
							})
						}
					/>

					<BaseControl label={__("Typography")} className="eb-typography-base">
						<Dropdown
							className="eb-typography-dropdown"
							contentClassName="my-popover-content-classname"
							position="bottom right"
							renderToggle={({ isOpen, onToggle }) => (
								<Button
									isSmall
									onClick={onToggle}
									aria-expanded={isOpen}
									icon="edit"
								></Button>
							)}
							renderContent={() => (
								<div style={{ padding: "1rem" }}>
									<UnitControl
										selectedUnit={buttonFontUnit}
										unitTypes={[
											{ label: "px", value: "px" },
											{ label: "em", value: "em" },
											{ label: "%", value: "%" },
										]}
										onClick={(unit) => setAttributes({ buttonFontUnit: unit })}
									/>

									<RangeControl
										label={__("Text Size")}
										value={buttonFontSize || 18}
										allowReset
										onChange={(newSize) =>
											setAttributes({
												buttonFontSize: newSize,
											})
										}
									/>

									<SelectControl
										label={__("Font Weight")}
										value={buttonFontWeight}
										options={FONT_WEIGHTS}
										onChange={(buttonFontWeight) =>
											setAttributes({ buttonFontWeight })
										}
									/>

									<SelectControl
										label={__("Text Transform")}
										value={buttonTextTransform}
										options={TEXT_TRANSFORM}
										onChange={(buttonTextTransform) =>
											setAttributes({ buttonTextTransform })
										}
									/>

									<RangeControl
										label={__("Letter Spacing")}
										value={buttonLetterSpacing || 0}
										onChange={(buttonLetterSpacing) =>
											setAttributes({ buttonLetterSpacing })
										}
										allowReset
										min={0}
										max={10}
										step={0.1}
									/>
								</div>
							)}
						/>
					</BaseControl>
				</PanelBody>

				<PanelBody title={__("Button Connector")} initialOpen={false}>
					<ToggleControl
						label={__("Display Text")}
						checked={isShowText}
						onChange={() =>
							setAttributes({
								isShowText: !isShowText,
								isShowIcon: isShowText === true ? false : false,
							})
						}
					/>
					<ToggleControl
						label={__("Display Icon")}
						checked={isShowIcon}
						onChange={() =>
							setAttributes({
								isShowIcon: !isShowIcon,
								isShowText: isShowIcon === true ? false : false,
							})
						}
					/>

					{isShowIcon && (
						<PanelBody title={__("Icon Settings")} initialOpen={true}>
							<BaseControl label={__("Icon")}>
								<FontIconPicker
									icons={iconList}
									value={innerButtonIcon}
									onChange={(icon) => setAttributes({ innerButtonIcon: icon })}
									appendTo="body"
								/>
							</BaseControl>
						</PanelBody>
					)}

					{isShowText && (
						<TextControl
							label={__("Text")}
							value={innerButtonText}
							onChange={(text) => setAttributes({ innerButtonText: text })}
						/>
					)}

					{hasConnector && (
						<RangeControl
							label={__("Button Size")}
							value={innerButtonSize || 40}
							allowReset
							onChange={(newSize) =>
								setAttributes({
									innerButtonSize: newSize,
								})
							}
						/>
					)}

					{hasConnector && (
						<BaseControl
							label={__("Typography")}
							className="eb-typography-base"
						>
							<Dropdown
								className="eb-typography-dropdown"
								contentClassName="my-popover-content-classname"
								position="bottom right"
								renderToggle={({ isOpen, onToggle }) => (
									<Button
										isSmall
										onClick={onToggle}
										aria-expanded={isOpen}
										icon="edit"
									></Button>
								)}
								renderContent={() => (
									<div style={{ padding: "1rem" }}>
										<RangeControl
											label={__(`${isShowText ? "Text" : "Icon"} Size`)}
											value={innerButtonTextSize || 14}
											allowReset
											onChange={(newSize) =>
												setAttributes({
													innerButtonTextSize: newSize,
												})
											}
										/>

										{isShowText && (
											<SelectControl
												label={__("Text Transform")}
												value={innerButtonTextTransform}
												options={TEXT_TRANSFORM}
												onChange={(innerButtonTextTransform) =>
													setAttributes({ innerButtonTextTransform })
												}
											/>
										)}

										{isShowText && (
											<RangeControl
												label={__("Letter Spacing")}
												value={innerButtonLetterSpacing || 0}
												onChange={(innerButtonLetterSpacing) =>
													setAttributes({ innerButtonLetterSpacing })
												}
												allowReset
												min={0}
												max={5}
												step={0.1}
											/>
										)}
									</div>
								)}
							/>
						</BaseControl>
					)}

					{hasConnector && (
						<>
							<ColorControl
								label={__("Background Color")}
								color={innerButtonColor}
								onChange={(innerButtonColor) =>
									setAttributes({ innerButtonColor })
								}
							/>

							<ColorControl
								label={__("Text Color")}
								color={innerButtonTextColor}
								onChange={(innerButtonTextColor) =>
									setAttributes({ innerButtonTextColor })
								}
							/>
						</>
					)}
				</PanelBody>

				<PanelBody title={__("Margin & Padding")} initialOpen={false}>
					<UnitControl
						selectedUnit={marginUnit}
						unitTypes={[
							{ label: "px", value: "px" },
							{ label: "em", value: "em" },
							{ label: "%", value: "%" },
						]}
						onClick={(marginUnit) => setAttributes({ marginUnit })}
					/>

					<DimensionsControl
						label="Margin"
						top={marginTop}
						right={marginRight}
						bottom={marginBottom}
						left={marginLeft}
						onChange={({ top, right, bottom, left }) => {
							setAttributes({
								marginTop: top,
								marginRight: right,
								marginBottom: bottom,
								marginLeft: left,
							});
						}}
					/>

					<UnitControl
						selectedUnit={paddingUnit}
						unitTypes={[
							{ label: "px", value: "px" },
							{ label: "em", value: "em" },
							{ label: "%", value: "%" },
						]}
						onClick={(paddingUnit) => setAttributes({ paddingUnit })}
					/>

					<DimensionsControl
						label="Padding"
						top={paddingTop}
						right={paddingRight}
						bottom={paddingBottom}
						left={paddingLeft}
						onChange={({ top, right, bottom, left }) => {
							setAttributes({
								paddingTop: top,
								paddingRight: right,
								paddingBottom: bottom,
								paddingLeft: left,
							});
						}}
					/>
				</PanelBody>

				<PanelColorSettings
					title={__("Button One Colors")}
					initialOpen={false}
					colorSettings={[
						{
							value: buttonOneColor,
							onChange: (newColor) =>
								setAttributes({ buttonOneColor: newColor }),
							label: __("Button Color"),
						},
						{
							value: textOneColor,
							onChange: (newColor) => setAttributes({ textOneColor: newColor }),
							label: __("Text Color"),
						},
						{
							value: hoverButtonOneColor,
							onChange: (newColor) =>
								setAttributes({
									hoverButtonOneColor: newColor,
								}),
							label: __("Hover Button Color"),
						},
						{
							value: hoverTextOneColor,
							onChange: (newColor) =>
								setAttributes({
									hoverTextOneColor: newColor,
								}),
							label: __("Hover Text Color"),
						},
					]}
				/>

				<PanelColorSettings
					title={__("Button Two Colors")}
					initialOpen={false}
					colorSettings={[
						{
							value: buttonTwoColor,
							onChange: (newColor) =>
								setAttributes({ buttonTwoColor: newColor }),
							label: __("Button Color"),
						},
						{
							value: textTwoColor,
							onChange: (newColor) => setAttributes({ textTwoColor: newColor }),
							label: __("Text Color"),
						},
						{
							value: hoverButtonTwoColor,
							onChange: (newColor) =>
								setAttributes({
									hoverButtonTwoColor: newColor,
								}),
							label: __("Hover Button Color"),
						},
						{
							value: hoverTextTwoColor,
							onChange: (newColor) =>
								setAttributes({
									hoverTextTwoColor: newColor,
								}),
							label: __("Hover Text Color"),
						},
					]}
				/>

				<PanelBody title={__("Border Settings")} initialOpen={false}>
					<SelectControl
						label={__("Border Style")}
						value={borderStyle}
						options={BORDER_STYLES}
						onChange={(newStyle) => setAttributes({ borderStyle: newStyle })}
					/>

					<RangeControl
						label={__("Border Width")}
						value={borderWidth || 0}
						allowReset
						onChange={(newValue) => setAttributes({ borderWidth: newValue })}
						min={0}
						max={20}
					/>

					<ButtonGroup className="eb-inspector-btn-group">
						{BORDER_TYPES.map((item) => (
							<Button
								isLarge
								isPrimary={borderType === item.value}
								isSecondary={borderType !== item.value}
								onClick={() => setAttributes({ borderType: item.value })}
							>
								{item.label}
							</Button>
						))}
					</ButtonGroup>

					{borderType === "normal" && (
						<>
							<ColorControl
								label={__("Button One Border Color")}
								color={borderOneColor}
								onChange={(borderOneColor) => setAttributes({ borderOneColor })}
							/>

							<ColorControl
								label={__("Button Two Border Color ")}
								color={borderTwoColor}
								onChange={(borderTwoColor) => setAttributes({ borderTwoColor })}
							/>
						</>
					)}

					{borderType === "hover" && (
						<>
							<ColorControl
								label={__("Button One Hover Color")}
								color={hoverBorderOneColor}
								onChange={(hoverBorderOneColor) =>
									setAttributes({ hoverBorderOneColor })
								}
							/>

							<ColorControl
								label={__("Button Two Hover Color")}
								color={hoverBorderTwoColor}
								onChange={(hoverBorderTwoColor) =>
									setAttributes({ hoverBorderTwoColor })
								}
							/>
						</>
					)}

					<UnitControl
						selectedUnit={borderRadiusUnit}
						unitTypes={[
							{ label: "px", value: "px" },
							{ label: "em", value: "em" },
							{ label: "%", value: "%" },
						]}
						onClick={(borderRadiusUnit) => setAttributes({ borderRadiusUnit })}
					/>

					<DimensionsControl
						label={__("Border Radius")}
						top={borderRadiusTopLeft}
						right={borderRadiusTopRight}
						bottom={borderRadiusBottomRight}
						left={borderRadiusBottomLeft}
						onChange={({ top, right, bottom, left }) =>
							setAttributes({
								borderRadiusTopLeft: top,
								borderRadiusTopRight: right,
								borderRadiusBottomRight: bottom,
								borderRadiusBottomLeft: left,
							})
						}
					/>
				</PanelBody>
			</InspectorControls>
		);
	}
}

export default Inspector;
