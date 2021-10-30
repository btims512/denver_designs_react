"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SkyLineStyles = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  .parallax {\n    perspective: 1px;\n    perspective-origin: center;\n    overflow-y: auto;\n    overflow-x: hidden;\n    margin-top: 0;\n    height: 100vh;\n  }\n\n  .parallax .group {\n    position: relative;\n    height: 100vh;\n    transform-style: preserve-3d;\n  }\n\n  .parallax .layer {\n    position: absolute;\n    width: 100%;\n    overflow: hidden;\n  }\n\n  #city1 {\n    fill: #111115;\n    transform: translateZ(0.25px) scale(0.75) translateY(-1vh);\n  }\n\n  #city2 {\n    fill: #12161e;\n    transform: translateZ(0px) scale(1) translateY(-1vh);\n  }\n\n  #city3 {\n    fill: #19202f;\n    transform: translateZ(-0.25px) scale(1.25) translateY(-1vh);\n  }\n\n  #city4 {\n    fill: #222032;\n    transform: translateZ(-0.5px) scale(1.5) translateY(-1vh);\n  }\n\n  #city5 {\n    fill: #15172a;\n    transform: translateZ(-0.75px) scale(1.75) translateY(-1vh);\n  }\n\n  #mountain1 {\n    fill: #202a5c;\n    transform: translateZ(-2.25px) scale(3.25) translateY(-1vh);\n  }\n\n  #mountain2 {\n    fill: #4a4d82;\n    transform: translateZ(-2.5px) scale(3.5) translateY(-1vh);\n  }\n\n  #mountain3 {\n    fill: #5f5d99;\n    transform: translateZ(-3px) scale(4) translateY(-10vh);\n    height: 50vh;\n  }\n\n  #mountain4 {\n    fill: #8a7d9e;\n    transform: translateZ(-3.5px) scale(4.5) translateY(-20vh);\n    height: 30vh;\n  }\n\n  #sun {\n    fill: #ff7e00;\n    transform: translateZ(-6px) scale(7) translateY(-25vh);\n    height: 25vh;\n  }\n\n  .city2-front {\n    background: #12161e;\n    width: 100vw;\n    height: 30vh;\n    position: relative;\n    margin-top: -5px;\n  }\n\n  .city-front {\n    position: relative;\n    margin-top: -5px;\n    background-color: #111115;\n    width: 100vw;\n    height: 125vh;\n  }\n\n  .site_name {\n    color: #fff;\n    display: inline-block;\n    margin: 0 0 0 20px;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var SkyLineStyles = _styledComponents["default"].div(_templateObject());

exports.SkyLineStyles = SkyLineStyles;