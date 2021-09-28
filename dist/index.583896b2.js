// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function(modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x) {
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function(id, exports) {
    modules[id] = [
      function(require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function() {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function() {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"9iToV":[function(require,module,exports) {
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "69f74e7f31319ffd";
module.bundle.HMR_BUNDLE_ID = "4f86295c583896b2";
"use strict";
function _createForOfIteratorHelper(o, allowArrayLike) {
    var it;
    if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) {
        if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
            if (it) o = it;
            var i = 0;
            var F = function F1() {
            };
            return {
                s: F,
                n: function n() {
                    if (i >= o.length) return {
                        done: true
                    };
                    return {
                        done: false,
                        value: o[i++]
                    };
                },
                e: function e(_e) {
                    throw _e;
                },
                f: F
            };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var normalCompletion = true, didErr = false, err;
    return {
        s: function s() {
            it = o[Symbol.iterator]();
        },
        n: function n() {
            var step = it.next();
            normalCompletion = step.done;
            return step;
        },
        e: function e(_e2) {
            didErr = true;
            err = _e2;
        },
        f: function f() {
            try {
                if (!normalCompletion && it.return != null) it.return();
            } finally{
                if (didErr) throw err;
            }
        }
    };
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function accept(fn) {
            this._acceptCallbacks.push(fn || function() {
            });
        },
        dispose: function dispose(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == 'https:' && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? 'wss' : 'ws';
    var ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/'); // $FlowFixMe
    ws.onmessage = function(event) {
        checkedAssets = {
        };
        acceptedAssets = {
        };
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === 'update') {
            // Remove error overlay if there is one
            removeErrorOverlay();
            var assets = data.assets.filter(function(asset) {
                return asset.envHash === HMR_ENV_HASH;
            }); // Handle HMR Update
            var handled = assets.every(function(asset) {
                return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                assets.forEach(function(asset) {
                    hmrApply(module.bundle.root, asset);
                });
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else window.location.reload();
        }
        if (data.type === 'error') {
            // Log parcel errors to console
            var _iterator = _createForOfIteratorHelper(data.diagnostics.ansi), _step;
            try {
                for(_iterator.s(); !(_step = _iterator.n()).done;){
                    var ansiDiagnostic = _step.value;
                    var stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                    console.error('🚨 [parcel]: ' + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
                } // Render the fancy html overlay
            } catch (err) {
                _iterator.e(err);
            } finally{
                _iterator.f();
            }
            removeErrorOverlay();
            var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
            document.body.appendChild(overlay);
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn('[parcel] 🚨 Connection to the HMR server was lost');
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log('[parcel] ✨ Error resolved');
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    var errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    var _iterator2 = _createForOfIteratorHelper(diagnostics), _step2;
    try {
        for(_iterator2.s(); !(_step2 = _iterator2.n()).done;){
            var diagnostic = _step2.value;
            var stack = diagnostic.codeframe ? diagnostic.codeframe : diagnostic.stack;
            errorHTML += "\n      <div>\n        <div style=\"font-size: 18px; font-weight: bold; margin-top: 20px;\">\n          \uD83D\uDEA8 ".concat(diagnostic.message, "\n        </div>\n        <pre>\n          ").concat(stack, "\n        </pre>\n        <div>\n          ").concat(diagnostic.hints.map(function(hint) {
                return '<div>' + hint + '</div>';
            }).join(''), "\n        </div>\n      </div>\n    ");
        }
    } catch (err) {
        _iterator2.e(err);
    } finally{
        _iterator2.f();
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', link.getAttribute('href').split('?')[0] + '?' + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(window.location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') {
        reloadCSS();
        return;
    }
    var deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
    if (deps) {
        var fn = new Function('require', 'module', 'exports', asset.output);
        modules[asset.id] = [
            fn,
            deps
        ];
    } else if (bundle.parent) hmrApply(bundle.parent, asset);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) return true;
    return getParents(module.bundle.root, id).some(function(v) {
        return hmrAcceptCheck(v[0], v[1], null);
    });
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {
    };
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"6LlLp":[function(require,module,exports) {
var _drawScene = require("./draw-scene");
var _loadMap = require("./load-map");
var _visibility = require("./visibility");
var _rectangle = require("./rectangle");
var _segment = require("./segment");
var _point = require("./point");
// Prepare canvas
const canvas = document.getElementById('scene');
if (!canvas) throw new Error('Could not get element');
const ctx = canvas.getContext('2d');
if (!ctx) throw new Error('Could not get context');
const xOffset = 0.5;
const yOffset = 0.5;
ctx.translate(xOffset, yOffset);
// Setup scene
const room = new _rectangle.Rectangle(0, 0, 700, 500);
const walls = [
    new _segment.Segment(20, 20, 20, 120),
    new _segment.Segment(20, 20, 100, 20),
    new _segment.Segment(100, 20, 150, 100),
    new _segment.Segment(150, 100, 50, 100), 
];
const blocks = [
    new _rectangle.Rectangle(50, 150, 20, 20),
    new _rectangle.Rectangle(150, 150, 40, 80),
    new _rectangle.Rectangle(400, 400, 40, 40), 
];
const run = (lightSource)=>{
    const endpoints = _loadMap.loadMap(room, blocks, walls, lightSource);
    const visibility = _visibility.calculateVisibility(lightSource, endpoints);
    requestAnimationFrame(()=>_drawScene.drawScene(ctx, lightSource, blocks, walls, visibility)
    );
};
canvas.addEventListener('mousemove', ({ pageX , pageY  })=>{
    run(new _point.Point(pageX, pageY));
});
run(new _point.Point(100, 100));

},{"./draw-scene":"2019O","./load-map":"i4lqW","./visibility":"9z6vo","./rectangle":"hMUW9","./segment":"31BaA","./point":"9Cs6A"}],"2019O":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "drawScene", ()=>drawScene
);
console.log("hello");
const drawRectangle = (ctx, color, rectangle)=>{
    ctx.save();
    ctx.strokeStyle = 'black';
    ctx.strokeRect(rectangle.x, rectangle.y, rectangle.width, rectangle.height);
    ctx.restore();
};
const drawSegment = (ctx, color, segment)=>{
    ctx.save();
    ctx.beginPath();
    ctx.strokeStyle = 'black';
    ctx.moveTo(segment.p1.x, segment.p1.y);
    ctx.lineTo(segment.p2.x, segment.p2.y);
    ctx.closePath();
    ctx.stroke();
    ctx.restore();
};
const drawVisibilityTriangles = (ctx, color, lightSource, visibilityOutput)=>{
    ctx.save();
    ctx.strokeStyle = color;
    for (const points of visibilityOutput){
        ctx.beginPath();
        ctx.moveTo(lightSource.x, lightSource.y);
        ctx.lineTo(points[0].x, points[0].y);
        ctx.lineTo(points[1].x, points[1].y);
        ctx.closePath();
        ctx.fill();
    // ctx.stroke();
    }
    ctx.restore();
};
const drawScene = (ctx, lightSource, blocks, walls, visibilityOutput)=>{
    ctx.clearRect(-10000, -10000, 20000, 20000);
    for (const block of blocks)drawRectangle(ctx, 'blue', block);
    for (const wall of walls)drawSegment(ctx, 'red', wall);
    drawVisibilityTriangles(ctx, 'white', lightSource, visibilityOutput);
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"JacNc"}],"JacNc":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, '__esModule', {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === 'default' || key === '__esModule') return;
        // Skip duplicate re-exports when they have the same value.
        if (key in dest && dest[key] === source[key]) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"i4lqW":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "loadMap", ()=>loadMap
);
const calculateEndPointAngles = (lightSource, segment)=>{
    const { x , y  } = lightSource;
    const dx = 0.5 * (segment.p1.x + segment.p2.x) - x;
    const dy = 0.5 * (segment.p1.y + segment.p2.y) - y;
    segment.d = dx * dx + dy * dy;
    segment.p1.angle = Math.atan2(segment.p1.y - y, segment.p1.x - x);
    segment.p2.angle = Math.atan2(segment.p2.y - y, segment.p2.x - x);
};
const setSegmentBeginning = (segment)=>{
    let dAngle = segment.p2.angle - segment.p1.angle;
    if (dAngle <= -Math.PI) dAngle += 2 * Math.PI;
    if (dAngle > Math.PI) dAngle -= 2 * Math.PI;
    segment.p1.beginsSegment = dAngle > 0;
    segment.p2.beginsSegment = !segment.p1.beginsSegment;
};
const processSegments = (lightSource, segments)=>{
    for (const segment of segments){
        calculateEndPointAngles(lightSource, segment);
        setSegmentBeginning(segment);
    }
    return segments;
};
function loadMap(room, blocks, walls, lightSource) {
    const segments = [];
    for (const segment of room.getCornerSegments())segments.push(segment);
    for (const block of blocks)for (const segment1 of block.getCornerSegments())segments.push(segment1);
    for (const segment2 of walls)segments.push(segment2);
    const endPoints = [];
    for (const segment3 of processSegments(lightSource, segments))endPoints.push(segment3.p1, segment3.p2);
    return endPoints;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"JacNc"}],"9z6vo":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "calculateVisibility", ()=>calculateVisibility
);
var _lineIntersection = require("./line-intersection");
var _endpointCompare = require("./endpoint-compare");
var _segmentInFrontOf = require("./segment-in-front-of");
var _point = require("./point");
function getTrianglePoints(origin, angle1, angle2, segment) {
    const p1 = origin;
    const p2 = new _point.Point(origin.x + Math.cos(angle1), origin.y + Math.sin(angle1));
    const p3 = new _point.Point(0, 0);
    const p4 = new _point.Point(0, 0);
    if (segment) {
        p3.x = segment.p1.x;
        p3.y = segment.p1.y;
        p4.x = segment.p2.x;
        p4.y = segment.p2.y;
    } else {
        p3.x = origin.x + Math.cos(angle1) * 200;
        p3.y = origin.y + Math.sin(angle1) * 200;
        p4.x = origin.x + Math.cos(angle2) * 200;
        p4.y = origin.y + Math.sin(angle2) * 200;
    }
    const pBegin = _lineIntersection.lineIntersection(p3, p4, p1, p2);
    p2.x = origin.x + Math.cos(angle2);
    p2.y = origin.y + Math.sin(angle2);
    const pEnd = _lineIntersection.lineIntersection(p3, p4, p1, p2);
    return [
        pBegin,
        pEnd
    ];
}
function calculateVisibility(origin, endpoints) {
    const openSegments = [];
    const output = [];
    let beginAngle = 0;
    endpoints.sort(_endpointCompare.endpointCompare);
    for(let pass = 0; pass < 2; pass += 1)for (const endpoint of endpoints){
        const openSegment = openSegments[0];
        if (endpoint.beginsSegment) {
            let index = 0;
            let segment = openSegments[index];
            while(segment && _segmentInFrontOf.segmentInFrontOf(endpoint.segment, segment, origin)){
                index += 1;
                segment = openSegments[index];
            }
            if (!segment) openSegments.push(endpoint.segment);
            else openSegments.splice(index, 0, endpoint.segment);
        } else {
            const index = openSegments.indexOf(endpoint.segment);
            if (index > -1) openSegments.splice(index, 1);
        }
        if (openSegment !== openSegments[0]) {
            if (pass === 1) {
                const trianglePoints = getTrianglePoints(origin, beginAngle, endpoint.angle, openSegment);
                output.push(trianglePoints);
            }
            beginAngle = endpoint.angle;
        }
    }
    return output;
}

},{"./line-intersection":"fN3F5","./endpoint-compare":"1yKZq","./segment-in-front-of":"7sLpQ","./point":"9Cs6A","@parcel/transformer-js/src/esmodule-helpers.js":"JacNc"}],"fN3F5":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "lineIntersection", ()=>lineIntersection
);
var _point = require("./point");
function lineIntersection(point1, point2, point3, point4) {
    const s = ((point4.x - point3.x) * (point1.y - point3.y) - (point4.y - point3.y) * (point1.x - point3.x)) / ((point4.y - point3.y) * (point2.x - point1.x) - (point4.x - point3.x) * (point2.y - point1.y));
    return new _point.Point(point1.x + s * (point2.x - point1.x), point1.y + s * (point2.y - point1.y));
}

},{"./point":"9Cs6A","@parcel/transformer-js/src/esmodule-helpers.js":"JacNc"}],"9Cs6A":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Point", ()=>Point
);
class Point {
    constructor(x, y){
        this.x = x;
        this.y = y;
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"JacNc"}],"1yKZq":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "endpointCompare", ()=>endpointCompare
);
function endpointCompare(pointA, pointB) {
    if (pointA.angle > pointB.angle) return 1;
    if (pointA.angle < pointB.angle) return -1;
    if (!pointA.beginsSegment && pointB.beginsSegment) return 1;
    if (pointA.beginsSegment && !pointB.beginsSegment) return -1;
    return 0;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"JacNc"}],"7sLpQ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "segmentInFrontOf", ()=>segmentInFrontOf
);
var _point = require("./point");
const leftOf = (segment, point)=>{
    const cross = (segment.p2.x - segment.p1.x) * (point.y - segment.p1.y) - (segment.p2.y - segment.p1.y) * (point.x - segment.p1.x);
    return cross < 0;
};
const interpolate = (pointA, pointB, f)=>{
    return new _point.Point(pointA.x * (1 - f) + pointB.x * f, pointA.y * (1 - f) + pointB.y * f);
};
const segmentInFrontOf = (segmentA, segmentB, relativePoint)=>{
    const A1 = leftOf(segmentA, interpolate(segmentB.p1, segmentB.p2, 0.01));
    const A2 = leftOf(segmentA, interpolate(segmentB.p2, segmentB.p1, 0.01));
    const A3 = leftOf(segmentA, relativePoint);
    const B1 = leftOf(segmentB, interpolate(segmentA.p1, segmentA.p2, 0.01));
    const B2 = leftOf(segmentB, interpolate(segmentA.p2, segmentA.p1, 0.01));
    const B3 = leftOf(segmentB, relativePoint);
    if (B1 === B2 && B2 !== B3) return true;
    if (A1 === A2 && A2 === A3) return true;
    if (A1 === A2 && A2 !== A3) return false;
    if (B1 === B2 && B2 === B3) return false;
    return false;
};

},{"./point":"9Cs6A","@parcel/transformer-js/src/esmodule-helpers.js":"JacNc"}],"hMUW9":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Rectangle", ()=>Rectangle
);
var _point = require("./point");
var _segment = require("./segment");
class Rectangle {
    constructor(x, y, width, height){
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    }
    getCorners() {
        return {
            nw: new _point.Point(this.x, this.y),
            sw: new _point.Point(this.x, this.y + this.height),
            ne: new _point.Point(this.x + this.width, this.y),
            se: new _point.Point(this.x + this.width, this.y + this.height)
        };
    }
    getCornerSegments() {
        const { nw , sw , ne , se  } = this.getCorners();
        return [
            new _segment.Segment(nw.x, nw.y, ne.x, ne.y),
            new _segment.Segment(nw.x, nw.y, sw.x, sw.y),
            new _segment.Segment(ne.x, ne.y, se.x, se.y),
            new _segment.Segment(sw.x, sw.y, se.x, se.y), 
        ];
    }
}

},{"./point":"9Cs6A","./segment":"31BaA","@parcel/transformer-js/src/esmodule-helpers.js":"JacNc"}],"31BaA":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Segment", ()=>Segment
);
var _endPoint = require("./end-point");
class Segment {
    constructor(x1, y1, x2, y2){
        this.d = 0;
        this.p1 = new _endPoint.EndPoint(x1, y1);
        this.p2 = new _endPoint.EndPoint(x2, y2);
        this.p1.segment = this;
        this.p2.segment = this;
    }
}

},{"./end-point":"2KIK4","@parcel/transformer-js/src/esmodule-helpers.js":"JacNc"}],"2KIK4":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "EndPoint", ()=>EndPoint
);
var _point = require("./point");
class EndPoint extends _point.Point {
    constructor(x, y){
        super(x, y);
        this.x = x;
        this.y = y;
    }
}

},{"./point":"9Cs6A","@parcel/transformer-js/src/esmodule-helpers.js":"JacNc"}]},["9iToV","6LlLp"], "6LlLp", "parcelRequirea458")

//# sourceMappingURL=index.583896b2.js.map
