/**
 * Glide Design Gulp Configuration File
 */
module.exports = {
	// Project options.
	projectName: "BaseTheme Package",
	projectURL: "http://basetheme.local/",
	projectVersion: "1.0.0",

	// Browser Sync.
	browserAutoOpen: false,
	injectChanges: true,

	// Styles.
	styleSRC: "assets/css/bundle.scss",
	styleDestination: "assets/css/",
	outputStyle: "compact",
	errLogToConsole: true,
	precision: 10,
	cssVendorPath: "assets/css/vendor/",
	cssPath: "assets/css/",

	// Scripts.
	jsVendorSRC: "assets/js/vendor/**/*.js",
	jsVendorPath: "assets/js/vendor/",
	jsSRC: ["assets/js/vendor/**/*.js", "!assets/js/partials/", "assets/js/partials/site-scripts.js"],
	jsDestination: "assets/js/",
	jsFile: "bundle",

	// Watch file paths.
	watchStyles: "assets/css/partials/**/*",
	watchJs: "assets/js/**/*",
	watchPhp: "**/*.php",
	watchHtml: "**/*.html",

	// Auto Prefixer
	BROWSERS_LIST: ["last 10 version"],

};
