/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const { InspectorControls, PanelColorSettings } = wp.blockEditor;
const { 
	PanelBody,
	SelectControl,
	ToggleControl,
	TextControl,
	Button,
	ButtonGroup,
	BaseControl,
	TabPanel,
} = wp.components;
const { useEffect, useState } = wp.element;
const { select } = wp.data;

/**
 * Internal depencencies
 */
import {
	BUTTON_STYLES,
	NORMAL_HOVER,
	UNIT_TYPES,
	BUTTON_ONE_BORDER_SHADOW,
	BUTTON_TWO_BORDER_SHADOW,
	WRAPPER_MARGIN,
	BUTTONS_PADDING,
	BUTTONS_WIDTH,
	BUTTONS_GAP,
	CONNECTOR_TYPE,
	PRESETS,
	BUTTONS_CONNECTOR_SIZE,
	TEXT_ALIGN,
	CONTENT_POSITION,
	BUTTONS_CONNECTOR_ICON_SIZE,
} from "./constants/constants";
import {
	mimmikCssForResBtns,
	mimmikCssOnPreviewBtnClickWhileBlockSelected,
} from "../util/helpers";
import {BUTTONS_TYPOGRAPHY, BUTTONS_CONNECTOR_TYPOGRAPHY} from "./constants/typographyPrefixConstants";
import FontIconPicker from "@fonticonpicker/react-fonticonpicker";
import '@fonticonpicker/react-fonticonpicker/dist/fonticonpicker.base-theme.react.css';
import '@fonticonpicker/react-fonticonpicker/dist/fonticonpicker.material-theme.react.css';
import faIcons from "../util/faIcons";
import ColorControl from "../util/color-control";
import ResponsiveDimensionsControl from "../util/dimensions-control-v2";
import TypographyDropdown from "../util/typography-control-v2";
import BorderShadowControl from "../util/border-shadow-control";
import ResponsiveRangeController from "../util/responsive-range-control";

function Inspector(props) {
	const { attributes, setAttributes } = props;
	const {
		resOption,
		preset,
		contentPosition,
		buttonOneColor,
		textOneColor,
		hoverButtonOneColor,
		hoverTextOneColor,
		buttonTwoColor,
		textTwoColor,
		hoverButtonTwoColor,
		hoverTextTwoColor,
		selectButtonStyleOne,
		selectButtonStyleTwo,
		buttonTextOne,
		buttonURLOne,
		buttonTextTwo,
		buttonURLTwo,
		innerButtonText,
		innerButtonColor,
		innerButtonTextColor,
		innerButtonIcon,
		showConnector,
		connectorType,
		buttonsColorType,
		buttonTextAlign,
	} = attributes;

	// this useEffect is for setting the resOption attribute to desktop/tab/mobile depending on the added 'eb-res-option-' class only the first time once
	useEffect(() => {
		setAttributes({
			resOption: select("core/edit-post").__experimentalGetPreviewDeviceType(),
		});
	}, []);

	// this useEffect is for mimmiking css for all the eb blocks on resOption changing
	useEffect(() => {
		mimmikCssForResBtns({
			domObj: document,
			resOption,
		});
	}, [resOption]);

	// this useEffect is to mimmik css for responsive preview in the editor page when clicking the buttons in the 'Preview button of wordpress' located beside the 'update' button while any block is selected and it's inspector panel is mounted in the DOM
	useEffect(() => {
		const cleanUp = mimmikCssOnPreviewBtnClickWhileBlockSelected({
			domObj: document,
			select,
			setAttributes,
		});
		return () => {
			cleanUp();
		};
	}, []);

	const resRequiredProps = {
		setAttributes,
		resOption,
		attributes,
	};

	const changePreset = (selected) => {
		setAttributes({ preset: selected });
		switch(selected) {
			case 'preset-1':
				setAttributes({
					showConnector: "true",
					buttonOneBorderShadowRds_Top: 20,
					buttonOneBorderShadowRds_Bottom: 0,
					buttonOneBorderShadowRds_Left: 20,
					buttonOneBorderShadowRds_Right: 0,
					buttonTwoBorderShadowRds_Top: 0,
					buttonTwoBorderShadowRds_Bottom: 20,
					buttonTwoBorderShadowRds_Left: 0,
					buttonTwoBorderShadowRds_Right: 20,
					buttonsGapRange: 0,
				});
				break;
			case 'preset-2':
				setAttributes({
					showConnector: false,
					buttonOneBorderShadowRds_Top: "30",
					buttonOneBorderShadowRds_Bottom: "30",
					buttonOneBorderShadowRds_Left: "30",
					buttonOneBorderShadowRds_Right: "30",
					buttonTwoBorderShadowRds_Top: "30",
					buttonTwoBorderShadowRds_Bottom: "30",
					buttonTwoBorderShadowRds_Left: "30",
					buttonTwoBorderShadowRds_Right: "30",
					buttonsGapRange: 20,
				});
				break;
			case 'preset-3':
				setAttributes({
					showConnector: false,
					buttonOneBorderShadowRds_Top: "0",
					buttonOneBorderShadowRds_Bottom: "0",
					buttonOneBorderShadowRds_Left: "15",
					buttonOneBorderShadowRds_Right: "15",
					buttonTwoBorderShadowRds_Top: "15",
					buttonTwoBorderShadowRds_Bottom: "15",
					buttonTwoBorderShadowRds_Left: "0",
					buttonTwoBorderShadowRds_Right: "0",
					buttonsGapRange: 20,
				});
				break;
			case 'preset-4':
				setAttributes({
					showConnector: false,
					buttonOneBorderShadowRds_Top: "30",
					buttonOneBorderShadowRds_Bottom: "30",
					buttonOneBorderShadowRds_Left: "30",
					buttonOneBorderShadowRds_Right: "30",
					buttonTwoBorderShadowRds_Top: "30",
					buttonTwoBorderShadowRds_Bottom: "30",
					buttonTwoBorderShadowRds_Left: "30",
					buttonTwoBorderShadowRds_Right: "30",
					buttonsGapRange: 10,
				});
				break;
			default:
			  return false;
		}
	};

	return (
		<InspectorControls key="controls">
			<div className="eb-panel-control">
			
				<TabPanel
					className="eb-parent-tab-panel"
					activeClass="active-tab"
					// onSelect={onSelect}
					tabs={ [
						{
							name: 'general',
							title: 'General',
							className: 'eb-tab general',
						},
						{
							name: 'styles',
							title: 'Styles',
							className: 'eb-tab styles',
						},
						{
							name: 'advance',
							title: 'Advance',
							className: 'eb-tab advance',
						},
					] }
				>
					{(tab) =>
						<div className={"eb-tab-controls" + tab.name}>
							{tab.name === "general" && (
								<>
									<PanelBody 
										title={__("General")} 
										initialOpen={true}
									>
										<SelectControl
											label={__("Preset Designs")}
											value={preset}
											options={PRESETS}
											onChange={(selected) => changePreset(selected)}
										/>
										<BaseControl label={__("Alignment")} id="eb-button-group-alignment">
											<ButtonGroup id="eb-button-group-alignment">
												{CONTENT_POSITION.map((item) => (
													<Button
														isLarge
														isPrimary={contentPosition === item.value}
														isSecondary={contentPosition !== item.value}
														onClick={() =>
															setAttributes({
																contentPosition: item.value,
															})
														}
													>
														{item.label}
													</Button>
												))}
											</ButtonGroup>
										</BaseControl>
										<TextControl
											label={__("Button One Text")}
											value={buttonTextOne}
											onChange={(text) => setAttributes({ buttonTextOne: text })}
										/>
										<TextControl
											label={__("Button One Link")}
											value={buttonURLOne}
											onChange={(link) => setAttributes({ buttonURLOne: link })}
										/>

										<TextControl
											label={__("Button Two Text")}
											value={buttonTextTwo}
											onChange={(text) => setAttributes({ buttonTextTwo: text })}
										/>
										<TextControl
											label={__("Button Two Link")}
											value={buttonURLTwo}
											onChange={(link) => setAttributes({ buttonURLTwo: link })}
										/>
									</PanelBody>
									<PanelBody title={__("Buttons")} initialOpen={true}>
										<ResponsiveRangeController
											baseLabel={__("Buttons Width", "button-group")}
											controlName={BUTTONS_WIDTH}
											resRequiredProps={resRequiredProps}
											units={UNIT_TYPES}
											min={0}
											max={500}
											step={1}
										/>

										<ResponsiveRangeController
											baseLabel={__("Buttons Gap", "button-group")}
											controlName={BUTTONS_GAP}
											resRequiredProps={resRequiredProps}
											units={UNIT_TYPES}
											min={0}
											max={100}
											step={1}
										/>

										<BaseControl label={__("Text Align")} id="eb-button-group-text-align">
											<ButtonGroup id="eb-button-group-text-align">
												{TEXT_ALIGN.map((item) => (
													<Button
														isLarge
														isPrimary={buttonTextAlign === item.value}
														isSecondary={buttonTextAlign !== item.value}
														onClick={() =>
															setAttributes({
																buttonTextAlign: item.value,
															})
														}
													>
													{item.label}
													</Button>
												))}
											</ButtonGroup>
										</BaseControl>
									</PanelBody>
									<PanelBody title={__("Connector")} initialOpen={true}>
										<ToggleControl
											label={__("Show Connector?")}
											checked={showConnector}
											onChange={() => {
												setAttributes({ showConnector: !showConnector });
											}}
										/>
										{showConnector && (
											<>
												<BaseControl label={__("Connector Type")}>
													<ButtonGroup id="eb-button-group-connector-type">
														{CONNECTOR_TYPE.map((item) => (
															<Button
																isLarge
																isPrimary={connectorType === item.value}
																isSecondary={connectorType !== item.value}
																onClick={() =>
																	setAttributes({
																		connectorType: item.value,
																	})
																}
															>
																{item.label}
															</Button>
														))}
													</ButtonGroup>
												</BaseControl>

												{connectorType === "icon" && (
													<PanelBody title={__("Icon Settings")} initialOpen={true}>
														<BaseControl label={__("Icon")}>
															<FontIconPicker
																icons={faIcons}
																value={innerButtonIcon}
																onChange={(icon) => setAttributes({ innerButtonIcon: icon })}
																appendTo="body"
															/>
														</BaseControl>

														<ResponsiveRangeController
															baseLabel={__("Icon Size", "button-group")}
															controlName={BUTTONS_CONNECTOR_ICON_SIZE}
															resRequiredProps={resRequiredProps}
															units={UNIT_TYPES}
															min={0}
															max={100}
															step={1}
														/>
													</PanelBody>
												)}

												{connectorType === "text" && (
													<TextControl
														label={__("Text")}
														value={innerButtonText}
														onChange={(text) => setAttributes({ innerButtonText: text })}
													/>
												)}

												<ResponsiveRangeController
														baseLabel={__("Connector Size", "button-group")}
														controlName={BUTTONS_CONNECTOR_SIZE}
														resRequiredProps={resRequiredProps}
														units={UNIT_TYPES}
														min={0}
														max={100}
														step={1}
												/>
											</>
										)}
									</PanelBody>
								</>
							)}

							{tab.name === "styles" && (
								<>
									<PanelBody title={__("Buttons")} initialOpen={true}>
										<TypographyDropdown
											baseLabel={__("Typography", "button-group")}
											typographyPrefixConstant={BUTTONS_TYPOGRAPHY}
											resRequiredProps={resRequiredProps}
										/>

										<ButtonGroup className="eb-inspector-btn-group">
											{NORMAL_HOVER.map((item) => (
												<Button
													isLarge
													isPrimary={buttonsColorType === item.value}
													isSecondary={buttonsColorType !== item.value}
													onClick={() => setAttributes({ buttonsColorType: item.value })}
												>
													{item.label}
												</Button>
											))}
										</ButtonGroup>

										{buttonsColorType === "normal" && (
											<PanelColorSettings
												className={"eb-subpanel"}
												title={__("Normal Colors")}
												initialOpen={true}
												colorSettings={[
													{
														value: buttonOneColor,
														onChange: (newColor) =>
															setAttributes({ buttonOneColor: newColor }),
														label: __("Button One Color"),
													},
													{
														value: textOneColor,
														onChange: (newColor) => setAttributes({ textOneColor: newColor }),
														label: __("Button One Text Color"),
													},
													{
														value: buttonTwoColor,
														onChange: (newColor) =>
															setAttributes({
																buttonTwoColor: newColor,
															}),
														label: __("Button Two Color"),
													},
													{
														value: textTwoColor,
														onChange: (newColor) =>
															setAttributes({
																textTwoColor: newColor,
															}),
														label: __("Button Two Text Color"),
													},
												]}
											/>
										)}

										{buttonsColorType === "hover" && (
											<PanelColorSettings
												className={"eb-subpanel"}
												title={__("Hover Colors")}
												initialOpen={true}
												colorSettings={[
													{
														value: hoverButtonOneColor,
														onChange: (newColor) =>
															setAttributes({ hoverButtonOneColor: newColor }),
														label: __("Button One Color"),
													},
													{
														value: hoverTextOneColor,
														onChange: (newColor) => setAttributes({ hoverTextOneColor: newColor }),
														label: __("Button One Text Color"),
													},
													{
														value: hoverButtonTwoColor,
														onChange: (newColor) =>
															setAttributes({
																hoverButtonTwoColor: newColor,
															}),
														label: __("Button Two Color"),
													},
													{
														value: hoverTextTwoColor,
														onChange: (newColor) =>
															setAttributes({
																hoverTextTwoColor: newColor,
															}),
														label: __("Button Two Text Color"),
													},
												]}
											/>
										)}

										<PanelBody className={"eb-subpanel"} title={__("Button One Border")} initialOpen={true}>
											<BorderShadowControl
												controlName={BUTTON_ONE_BORDER_SHADOW}
												resRequiredProps={resRequiredProps}
												noShadow
											/>
										</PanelBody>

										<PanelBody className={"eb-subpanel"} title={__("Button Two Border")} initialOpen={true}>
											<BorderShadowControl
												controlName={BUTTON_TWO_BORDER_SHADOW}
												resRequiredProps={resRequiredProps}
												noShadow
											/>
										</PanelBody>

										<ResponsiveDimensionsControl
											resRequiredProps={resRequiredProps}
											controlName={BUTTONS_PADDING}
											baseLabel="Padding"
										/>
										
									</PanelBody>

									<PanelBody title={__("Connector")} initialOpen={false}>
										<TypographyDropdown
												baseLabel={__("Typography", "button-group")}
												typographyPrefixConstant={BUTTONS_CONNECTOR_TYPOGRAPHY}
												resRequiredProps={resRequiredProps}
										/>

										<ColorControl
											label={__("Background Color")}
											color={innerButtonColor}
											onChange={(innerButtonColor) =>
												setAttributes({ innerButtonColor })
											}
										/>

										<ColorControl
											label={__("Text/ Icon Color")}
											color={innerButtonTextColor}
											onChange={(innerButtonTextColor) =>
												setAttributes({ innerButtonTextColor })
											}
										/>
									</PanelBody>
								</>
							)}

							{tab.name === "advance" && (
								<>
									<PanelBody>
										<ResponsiveDimensionsControl
											resRequiredProps={resRequiredProps}
											controlName={WRAPPER_MARGIN}
											baseLabel="Margin"
										/>
									</PanelBody>
								</>
							)}
							
						</div>
					}


				</TabPanel>
			</div>
		</InspectorControls>
	);
}

export default Inspector;
