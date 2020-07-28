jQuery(document).ready(function ($) {
	$(".eb-dual-button-wrapper").each(function () {
		let _this = $(this),
			buttonOneColor = _this.attr("data-button-one-color"),
			buttonTwoColor = _this.attr("data-button-two-color"),
			textOneColor = _this.attr("data-text-one-color"),
			textTwoColor = _this.attr("data-text-two-color"),
			borderOneColor = _this.attr("data-border-one-color"),
			borderTwoColor = _this.attr("data-border-two-color"),
			hoverButtonOneColor = _this.attr("data-hover-button-one-color"),
			hoverButtonTwoColor = _this.attr("data-hover-button-two-color"),
			hoverTextOneColor = _this.attr("data-hover-text-one-color"),
			hoverTextTwoColor = _this.attr("data-hover-text-two-color"),
			hoverBorderOneColor = _this.attr("data-hover-border-one-color"),
			hoverBorderwoColor = _this.attr("data-hover-border-two-color");

		$(this)
			.find(".eb-dual-button-one")
			.hover(
				function () {
					$(this).stop(true, true).css({
						"background-color": hoverButtonOneColor,
						color: hoverTextOneColor,
						"border-color": hoverBorderOneColor,
					});
				},
				function () {
					$(this).css({
						"background-color": buttonOneColor,
						color: textOneColor,
						"border-color": borderOneColor,
					});
				}
			);

		$(this)
			.find(".eb-dual-button-two")
			.hover(
				function () {
					$(this).stop(true, true).css({
						"background-color": hoverButtonTwoColor,
						color: hoverTextTwoColor,
						"border-color": hoverBorderwoColor,
					});
				},
				function () {
					$(this).css({
						"background-color": buttonTwoColor,
						color: textTwoColor,
						"border-color": borderTwoColor,
					});
				}
			);
	});
});
