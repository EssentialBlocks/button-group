/**
 * WordPress dependencies
 */
import { __ } from "@wordpress/i18n";
import { useEffect } from "@wordpress/element";
import { InspectorControls, PanelColorSettings } from "@wordpress/block-editor";
import {
	PanelBody,
	SelectControl,
	ToggleControl,
	TextControl,
	Button,
	ButtonGroup,
	BaseControl,
	TabPanel,
} from "@wordpress/components";
import { select } from "@wordpress/data";

/**
 * External depencencies
 */
 import FontIconPicker from "@fonticonpicker/react-fonticonpicker";

/**
 * Internal depencencies
 */

import objAttributes from "./attributes";

import {
	//  BUTTON_STYLES,
	NORMAL_HOVER,
	UNIT_TYPES,
	BUTTON_ONE_BACKGROUND,
	BUTTON_TWO_BACKGROUND,
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
import { BUTTONS_TYPOGRAPHY, BUTTONS_CONNECTOR_TYPOGRAPHY } from "./constants/typographyPrefixConstants";

const {
	faIcons,
	ColorControl,
	ResponsiveDimensionsControl,
	TypographyDropdown,
	BorderShadowControl,
	ResponsiveRangeController,
	BackgroundControl,
} = window.EBButtonGroup;


const editorStoreForGettingPreivew =
	eb_style_handler.editor_type === "edit-site"
		? "core/edit-site"
		: "core/edit-post";

function Inspector(props) {
	const { attributes, setAttributes } = props;
	const {
		resOption,
		preset,
		contentPosition,
		textOneColor,
		hoverTextOneColor,
		textTwoColor,
		hoverTextTwoColor,
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
			resOption: select(editorStoreForGettingPreivew).__experimentalGetPreviewDeviceType(),
		});
	}, []);

	// // this useEffect is for mimmiking css for all the eb blocks on resOption changing
	// useEffect(() => {
	// 	mimmikCssForResBtns({
	// 		domObj: document,
	// 		resOption,
	// 	});
	// }, [resOption]);

	// // this useEffect is to mimmik css for responsive preview in the editor page when clicking the buttons in the 'Preview button of wordpress' located beside the 'update' button while any block is selected and it's inspector panel is mounted in the DOM
	// useEffect(() => {
	// 	const cleanUp = mimmikCssOnPreviewBtnClickWhileBlockSelected({
	// 		domObj: document,
	// 		select,
	// 		setAttributes,
	// 	});
	// 	return () => {
	// 		cleanUp();
	// 	};
	// }, []);

	const resRequiredProps = {
		setAttributes,
		resOption,
		attributes,
		objAttributes
	};

	const changePreset = (selected) => {
		setAttributes({ preset: selected });
		switch (selected) {
			case 'preset-1':
				setAttributes({
					showConnector: true,
					buttonOneBorderShadowRds_Top: "20",
					buttonOneBorderShadowRds_Bottom: "0",
					buttonOneBorderShadowRds_Left: "20",
					buttonOneBorderShadowRds_Right: "0",
					buttonTwoBorderShadowRds_Top: "0",
					buttonTwoBorderShadowRds_Bottom: "20",
					buttonTwoBorderShadowRds_Left: "0",
					buttonTwoBorderShadowRds_Right: "20",
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
					tabs={[
						{
							name: 'general',
							title: 'General',
							className: 'eb-tab general',
						},
						{
							name: 'styles',
							title: 'Style',
							className: 'eb-tab styles',
						},
						{
							name: 'advance',
							title: 'Advanced',
							className: 'eb-tab advance',
						},
					]}
				>
					{(tab) =>
						<div className={"eb-tab-controls" + tab.name}>
							{tab.name === "general" && (
								<>
									<PanelBody
										title={__("General", "essential-blocks")}
										initialOpen={true}
									>
										<SelectControl
											label={__("Preset Designs", "essential-blocks")}
											value={preset}
											options={PRESETS}
											onChange={(selected) => changePreset(selected)}
										/>

										<BaseControl label={__("Alignment", "essential-blocks")} id="eb-button-group-alignment">
											<ButtonGroup id="eb-button-group-alignment">
												{CONTENT_POSITION.map((item) => (
													<Button
														// isLarge
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
											label={__("Button One Text", "essential-blocks")}
											value={buttonTextOne}
											onChange={(text) => setAttributes({ buttonTextOne: text })}
										/>
										<TextControl
											label={__("Button One Link", "essential-blocks")}
											value={buttonURLOne}
											onChange={(link) => setAttributes({ buttonURLOne: link })}
										/>

										<TextControl
											label={__("Button Two Text", "essential-blocks")}
											value={buttonTextTwo}
											onChange={(text) => setAttributes({ buttonTextTwo: text })}
										/>
										<TextControl
											label={__("Button Two Link", "essential-blocks")}
											value={buttonURLTwo}
											onChange={(link) => setAttributes({ buttonURLTwo: link })}
										/>
									</PanelBody>
									<PanelBody title={__("Buttons", "essential-blocks")} initialOpen={true}>
										<ResponsiveRangeController
											baseLabel={__("Buttons Width", "essential-blocks")}
											controlName={BUTTONS_WIDTH}
											resRequiredProps={resRequiredProps}
											units={UNIT_TYPES}
											min={0}
											max={500}
											step={1}
										/>

										<ResponsiveRangeController
											baseLabel={__("Buttons Gap", "essential-blocks")}
											controlName={BUTTONS_GAP}
											resRequiredProps={resRequiredProps}
											units={UNIT_TYPES}
											min={0}
											max={100}
											step={1}
										/>

										<BaseControl label={__("Text Align", "essential-blocks")} id="eb-button-group-text-align">
											<ButtonGroup id="eb-button-group-text-align">
												{TEXT_ALIGN.map((item) => (
													<Button
														// isLarge
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
									<PanelBody title={__("Connector", "essential-blocks")} initialOpen={true}>
										<ToggleControl
											label={__("Show Connector?")}
											checked={showConnector}
											onChange={() => {
												setAttributes({ showConnector: !showConnector });
											}}
										/>
										{showConnector && (
											<>
												<BaseControl label={__("Connector Type", "essential-blocks")}>
													<ButtonGroup id="eb-button-group-connector-type">
														{CONNECTOR_TYPE.map((item) => (
															<Button
																// isLarge
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
													<PanelBody title={__("Icon Settings", "essential-blocks")} initialOpen={true}>
														<BaseControl label={__("Icon", "essential-blocks")}>
															<FontIconPicker
																icons={faIcons}
																value={innerButtonIcon}
																onChange={(icon) => setAttributes({ innerButtonIcon: icon })}
																appendTo="body"
															/>
														</BaseControl>

														<ResponsiveRangeController
															baseLabel={__("Icon Size", "essential-blocks")}
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
														label={__("Text", "essential-blocks")}
														value={innerButtonText}
														onChange={(text) => setAttributes({ innerButtonText: text })}
													/>
												)}

												<ResponsiveRangeController
													baseLabel={__("Connector Size", "essential-blocks")}
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
									<PanelBody title={__("Buttons", "essential-blocks")} initialOpen={true}>
										<TypographyDropdown
											baseLabel={__("Typography", "essential-blocks")}
											typographyPrefixConstant={BUTTONS_TYPOGRAPHY}
											resRequiredProps={resRequiredProps}
										/>

										<BaseControl>
											<h3 className="eb-control-title">
												{__("Button One Background", "essential-blocks")}
											</h3>
										</BaseControl>
										<BackgroundControl
											controlName={BUTTON_ONE_BACKGROUND}
											resRequiredProps={resRequiredProps}
											noOverlay={true}
											noMainBgi={true}
										/>

										<BaseControl>
											<h3 className="eb-control-title">
												{__("Button Two Background", "essential-blocks")}
											</h3>
										</BaseControl>
										<BackgroundControl
											controlName={BUTTON_TWO_BACKGROUND}
											resRequiredProps={resRequiredProps}
											noOverlay={true}
											noMainBgi={true}
										/>

										<BaseControl>
											<h3 className="eb-control-title">
												{__("Text Color", "essential-blocks")}
											</h3>
										</BaseControl>

										<ButtonGroup className="eb-inspector-btn-group">
											{NORMAL_HOVER.map((item) => (
												<Button
													// isLarge
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
												title={__("Normal Colors", "essential-blocks")}
												initialOpen={true}
												colorSettings={[
													{
														value: textOneColor,
														onChange: (newColor) => setAttributes({ textOneColor: newColor }),
														label: __("Button One", "essential-blocks"),
													},
													{
														value: textTwoColor,
														onChange: (newColor) =>
															setAttributes({
																textTwoColor: newColor,
															}),
														label: __("Button Two", "essential-blocks"),
													},
												]}
											/>
										)}

										{buttonsColorType === "hover" && (
											<PanelColorSettings
												className={"eb-subpanel"}
												title={__("Hover Colors", "essential-blocks")}
												initialOpen={true}
												colorSettings={[
													{
														value: hoverTextOneColor,
														onChange: (newColor) => setAttributes({ hoverTextOneColor: newColor }),
														label: __("Button One Hover", "essential-blocks"),
													},
													{
														value: hoverTextTwoColor,
														onChange: (newColor) =>
															setAttributes({
																hoverTextTwoColor: newColor,
															}),
														label: __("Button Two Hover", "essential-blocks"),
													},
												]}
											/>
										)}

										<PanelBody className={"eb-subpanel"} title={__("Button One Border", "essential-blocks")} initialOpen={true}>
											<BorderShadowControl
												controlName={BUTTON_ONE_BORDER_SHADOW}
												resRequiredProps={resRequiredProps}
												noShadow
											/>
										</PanelBody>

										<PanelBody className={"eb-subpanel"} title={__("Button Two Border", "essential-blocks")} initialOpen={true}>
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

									<PanelBody title={__("Connector", "essential-blocks")} initialOpen={false}>
										<TypographyDropdown
											baseLabel={__("Typography", "essential-blocks")}
											typographyPrefixConstant={BUTTONS_CONNECTOR_TYPOGRAPHY}
											resRequiredProps={resRequiredProps}
										/>

										<ColorControl
											label={__("Background Color", "essential-blocks")}
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