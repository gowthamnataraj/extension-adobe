(function (thisObj) {

var config = {
  version: version,
  id: "com.adobe-xp.cep",
  displayName: "Adobe Xp",
  symlink: "local",
  port: 3000,
  servePort: 5000,
  startingDebugPort: 8860,
  extensionManifestVersion: 6.0,
  requiredRuntimeVersion: 9.0,
  hosts: [{
    name: "ILST",
    version: "[0.0,99.9]"
  }],
  type: "Panel",
  iconDarkNormal: "./src/assets/light-icon.png",
  iconNormal: "./src/assets/dark-icon.png",
  iconDarkNormalRollOver: "./src/assets/light-icon.png",
  iconNormalRollOver: "./src/assets/dark-icon.png",
  parameters: ["--v=0", "--enable-nodejs", "--mixed-context"],
  width: 500,
  height: 550,
  panels: [{
    mainPath: "./main/index.html",
    name: "main",
    panelDisplayName: "Adobe Xp",
    autoVisible: true,
    width: 600,
    height: 650
  }],
  build: {
    jsxBin: "off",
    sourceMap: true
  },
  zxp: {
    country: "US",
    province: "CA",
    org: "MyCompany",
    password: "mypassword",
    tsa: "http://timestamp.digicert.com/",
    sourceMap: false,
    jsxBin: "off"
  },
  installModules: [],
  copyAssets: [],
  copyZipAssets: []
};

var ns = config.id;

var example = function example() {};

var ilst = /*#__PURE__*/__objectFreeze({
  __proto__: null,
  example: example
});

var host = typeof $ !== "undefined" ? $ : window;
switch (BridgeTalk.appName) {
  case "illustrator":
  case "illustratorbeta":
    host[ns] = ilst;
    break;
}

// https://extendscript.docsforadobe.dev/interapplication-communication/bridgetalk-class.html?highlight=bridgetalk#appname
