// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
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
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
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
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
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
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"6DoTH":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
var HMR_USE_SSE = false;
module.bundle.HMR_BUNDLE_ID = "26170a8763aff760";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, HMR_USE_SSE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
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
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var HMR_USE_SSE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && ![
        "localhost",
        "127.0.0.1",
        "0.0.0.0"
    ].includes(hostname) ? "wss" : "ws";
    var ws;
    if (HMR_USE_SSE) ws = new EventSource("/__parcel_hmr");
    else try {
        ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/");
    } catch (err) {
        if (err.message) console.error(err.message);
        ws = {};
    }
    // Web extension context
    var extCtx = typeof browser === "undefined" ? typeof chrome === "undefined" ? null : chrome : browser;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    }
    // $FlowFixMe
    ws.onmessage = async function(event /*: {data: string, ...} */ ) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data /*: HMRMessage */  = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH);
            // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                }
                // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html);
                // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    if (ws instanceof WebSocket) {
        ws.onerror = function(e) {
            if (e.message) console.error(e.message);
        };
        ws.onclose = function() {
            console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
        };
    }
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          \u{1F6A8} ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>\u{1F4DD} <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
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
    var href = link.getAttribute("href");
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", // $FlowFixMe
    href.split("?")[0] + "?" + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension fix
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3 && typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                        extCtx.runtime.reload();
                        return;
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            });
            // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"adjPd":[function(require,module,exports) {
var _app = require("./src/App");
(0, _app.App)();

},{"./src/App":"2kQhy"}],"2kQhy":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "App", ()=>App);
var _router = require("./Utils/router");
var _home = require("./Pages/Home");
var _about = require("./Pages/About");
var _products = require("./Pages/Products");
var _productDetail = require("./Pages/ProductDetail");
var _default = require("./Layouts/Default");
const App = ()=>{
    return (0, _router.router)([
        {
            path: "/",
            component: (0, _home.Home)
        },
        {
            path: "/gioi-thieu",
            component: (0, _about.About)
        },
        {
            path: "/san-pham",
            component: (0, _products.Products)
        },
        {
            path: "/san-pham/:id",
            component: (0, _productDetail.ProductDetail)
        }
    ], (0, _default.DefaultLayout));
};

},{"./Utils/router":"hJunB","./Pages/Home":"3ABAM","./Pages/About":"kE7iT","./Pages/Products":"7BhDU","./Layouts/Default":"6DvqA","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","./Pages/ProductDetail":"JnNc3"}],"hJunB":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "router", ()=>router);
var _navigo = require("navigo");
var _navigoDefault = parcelHelpers.interopDefault(_navigo);
const router2 = new (0, _navigoDefault.default)("/");
let body = "";
const router = (array, layout)=>{
    array.forEach(({ path, component })=>{
        router2.on(path, function(params) {
            body = component(params);
            layout();
        });
    });
    router2.resolve();
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","navigo":"fuSlc"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || Object.prototype.hasOwnProperty.call(dest, key)) return;
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

},{}],"fuSlc":[function(require,module,exports) {
!function(t, n) {
    module.exports = n();
}("undefined" != typeof self ? self : this, function() {
    return function() {
        "use strict";
        var t = {
            407: function(t, n, e) {
                e.d(n, {
                    default: function() {
                        return N;
                    }
                });
                var o = /([:*])(\w+)/g, r = /\*/g, i = /\/\?/g;
                function a(t) {
                    return void 0 === t && (t = "/"), v() ? location.pathname + location.search + location.hash : t;
                }
                function s(t) {
                    return t.replace(/\/+$/, "").replace(/^\/+/, "");
                }
                function c(t) {
                    return "string" == typeof t;
                }
                function u(t) {
                    return t && t.indexOf("#") >= 0 && t.split("#").pop() || "";
                }
                function h(t) {
                    var n = s(t).split(/\?(.*)?$/);
                    return [
                        s(n[0]),
                        n.slice(1).join("")
                    ];
                }
                function f(t) {
                    for(var n = {}, e = t.split("&"), o = 0; o < e.length; o++){
                        var r = e[o].split("=");
                        if ("" !== r[0]) {
                            var i = decodeURIComponent(r[0]);
                            n[i] ? (Array.isArray(n[i]) || (n[i] = [
                                n[i]
                            ]), n[i].push(decodeURIComponent(r[1] || ""))) : n[i] = decodeURIComponent(r[1] || "");
                        }
                    }
                    return n;
                }
                function l(t, n) {
                    var e, a = h(s(t.currentLocationPath)), l = a[0], p = a[1], d = "" === p ? null : f(p), v = [];
                    if (c(n.path)) {
                        if (e = "(?:/^|^)" + s(n.path).replace(o, function(t, n, e) {
                            return v.push(e), "([^/]+)";
                        }).replace(r, "?(?:.*)").replace(i, "/?([^/]+|)") + "$", "" === s(n.path) && "" === s(l)) return {
                            url: l,
                            queryString: p,
                            hashString: u(t.to),
                            route: n,
                            data: null,
                            params: d
                        };
                    } else e = n.path;
                    var g = new RegExp(e, ""), m = l.match(g);
                    if (m) {
                        var y = c(n.path) ? function(t, n) {
                            return 0 === n.length ? null : t ? t.slice(1, t.length).reduce(function(t, e, o) {
                                return null === t && (t = {}), t[n[o]] = decodeURIComponent(e), t;
                            }, null) : null;
                        }(m, v) : m.groups ? m.groups : m.slice(1);
                        return {
                            url: s(l.replace(new RegExp("^" + t.instance.root), "")),
                            queryString: p,
                            hashString: u(t.to),
                            route: n,
                            data: y,
                            params: d
                        };
                    }
                    return !1;
                }
                function p() {
                    return !("undefined" == typeof window || !window.history || !window.history.pushState);
                }
                function d(t, n) {
                    return void 0 === t[n] || !0 === t[n];
                }
                function v() {
                    return "undefined" != typeof window;
                }
                function g(t, n) {
                    return void 0 === t && (t = []), void 0 === n && (n = {}), t.filter(function(t) {
                        return t;
                    }).forEach(function(t) {
                        [
                            "before",
                            "after",
                            "already",
                            "leave"
                        ].forEach(function(e) {
                            t[e] && (n[e] || (n[e] = []), n[e].push(t[e]));
                        });
                    }), n;
                }
                function m(t, n, e) {
                    var o = n || {}, r = 0;
                    !function n() {
                        t[r] ? Array.isArray(t[r]) ? (t.splice.apply(t, [
                            r,
                            1
                        ].concat(t[r][0](o) ? t[r][1] : t[r][2])), n()) : t[r](o, function(t) {
                            void 0 === t || !0 === t ? (r += 1, n()) : e && e(o);
                        }) : e && e(o);
                    }();
                }
                function y(t, n) {
                    void 0 === t.currentLocationPath && (t.currentLocationPath = t.to = a(t.instance.root)), t.currentLocationPath = t.instance._checkForAHash(t.currentLocationPath), n();
                }
                function _(t, n) {
                    for(var e = 0; e < t.instance.routes.length; e++){
                        var o = l(t, t.instance.routes[e]);
                        if (o && (t.matches || (t.matches = []), t.matches.push(o), "ONE" === t.resolveOptions.strategy)) return void n();
                    }
                    n();
                }
                function k(t, n) {
                    t.navigateOptions && (void 0 !== t.navigateOptions.shouldResolve && console.warn('"shouldResolve" is deprecated. Please check the documentation.'), void 0 !== t.navigateOptions.silent && console.warn('"silent" is deprecated. Please check the documentation.')), n();
                }
                function O(t, n) {
                    !0 === t.navigateOptions.force ? (t.instance._setCurrent([
                        t.instance._pathToMatchObject(t.to)
                    ]), n(!1)) : n();
                }
                m.if = function(t, n, e) {
                    return Array.isArray(n) || (n = [
                        n
                    ]), Array.isArray(e) || (e = [
                        e
                    ]), [
                        t,
                        n,
                        e
                    ];
                };
                var w = v(), L = p();
                function b(t, n) {
                    if (d(t.navigateOptions, "updateBrowserURL")) {
                        var e = ("/" + t.to).replace(/\/\//g, "/"), o = w && t.resolveOptions && !0 === t.resolveOptions.hash;
                        L ? (history[t.navigateOptions.historyAPIMethod || "pushState"](t.navigateOptions.stateObj || {}, t.navigateOptions.title || "", o ? "#" + e : e), location && location.hash && (t.instance.__freezeListening = !0, setTimeout(function() {
                            if (!o) {
                                var n = location.hash;
                                location.hash = "", location.hash = n;
                            }
                            t.instance.__freezeListening = !1;
                        }, 1))) : w && (window.location.href = t.to);
                    }
                    n();
                }
                function A(t, n) {
                    var e = t.instance;
                    e.lastResolved() ? m(e.lastResolved().map(function(n) {
                        return function(e, o) {
                            if (n.route.hooks && n.route.hooks.leave) {
                                var r = !1, i = t.instance.matchLocation(n.route.path, t.currentLocationPath, !1);
                                r = "*" !== n.route.path ? !i : !(t.matches && t.matches.find(function(t) {
                                    return n.route.path === t.route.path;
                                })), d(t.navigateOptions, "callHooks") && r ? m(n.route.hooks.leave.map(function(n) {
                                    return function(e, o) {
                                        return n(function(n) {
                                            !1 === n ? t.instance.__markAsClean(t) : o();
                                        }, t.matches && t.matches.length > 0 ? 1 === t.matches.length ? t.matches[0] : t.matches : void 0);
                                    };
                                }).concat([
                                    function() {
                                        return o();
                                    }
                                ])) : o();
                            } else o();
                        };
                    }), {}, function() {
                        return n();
                    }) : n();
                }
                function P(t, n) {
                    d(t.navigateOptions, "updateState") && t.instance._setCurrent(t.matches), n();
                }
                var R = [
                    function(t, n) {
                        var e = t.instance.lastResolved();
                        if (e && e[0] && e[0].route === t.match.route && e[0].url === t.match.url && e[0].queryString === t.match.queryString) return e.forEach(function(n) {
                            n.route.hooks && n.route.hooks.already && d(t.navigateOptions, "callHooks") && n.route.hooks.already.forEach(function(n) {
                                return n(t.match);
                            });
                        }), void n(!1);
                        n();
                    },
                    function(t, n) {
                        t.match.route.hooks && t.match.route.hooks.before && d(t.navigateOptions, "callHooks") ? m(t.match.route.hooks.before.map(function(n) {
                            return function(e, o) {
                                return n(function(n) {
                                    !1 === n ? t.instance.__markAsClean(t) : o();
                                }, t.match);
                            };
                        }).concat([
                            function() {
                                return n();
                            }
                        ])) : n();
                    },
                    function(t, n) {
                        d(t.navigateOptions, "callHandler") && t.match.route.handler(t.match), t.instance.updatePageLinks(), n();
                    },
                    function(t, n) {
                        t.match.route.hooks && t.match.route.hooks.after && d(t.navigateOptions, "callHooks") && t.match.route.hooks.after.forEach(function(n) {
                            return n(t.match);
                        }), n();
                    }
                ], S = [
                    A,
                    function(t, n) {
                        var e = t.instance._notFoundRoute;
                        if (e) {
                            t.notFoundHandled = !0;
                            var o = h(t.currentLocationPath), r = o[0], i = o[1], a = u(t.to);
                            e.path = s(r);
                            var c = {
                                url: e.path,
                                queryString: i,
                                hashString: a,
                                data: null,
                                route: e,
                                params: "" !== i ? f(i) : null
                            };
                            t.matches = [
                                c
                            ], t.match = c;
                        }
                        n();
                    },
                    m.if(function(t) {
                        return t.notFoundHandled;
                    }, R.concat([
                        P
                    ]), [
                        function(t, n) {
                            t.resolveOptions && !1 !== t.resolveOptions.noMatchWarning && void 0 !== t.resolveOptions.noMatchWarning || console.warn('Navigo: "' + t.currentLocationPath + "\" didn't match any of the registered routes."), n();
                        },
                        function(t, n) {
                            t.instance._setCurrent(null), n();
                        }
                    ])
                ];
                function E() {
                    return (E = Object.assign || function(t) {
                        for(var n = 1; n < arguments.length; n++){
                            var e = arguments[n];
                            for(var o in e)Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
                        }
                        return t;
                    }).apply(this, arguments);
                }
                function x(t, n) {
                    var e = 0;
                    A(t, function o() {
                        e !== t.matches.length ? m(R, E({}, t, {
                            match: t.matches[e]
                        }), function() {
                            e += 1, o();
                        }) : P(t, n);
                    });
                }
                function H(t) {
                    t.instance.__markAsClean(t);
                }
                function j() {
                    return (j = Object.assign || function(t) {
                        for(var n = 1; n < arguments.length; n++){
                            var e = arguments[n];
                            for(var o in e)Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
                        }
                        return t;
                    }).apply(this, arguments);
                }
                var C = "[data-navigo]";
                function N(t, n) {
                    var e, o = n || {
                        strategy: "ONE",
                        hash: !1,
                        noMatchWarning: !1,
                        linksSelector: C
                    }, r = this, i = "/", d = null, w = [], L = !1, A = p(), P = v();
                    function R(t) {
                        return t.indexOf("#") >= 0 && (t = !0 === o.hash ? t.split("#")[1] || "/" : t.split("#")[0]), t;
                    }
                    function E(t) {
                        return s(i + "/" + s(t));
                    }
                    function N(t, n, e, o) {
                        return t = c(t) ? E(t) : t, {
                            name: o || s(String(t)),
                            path: t,
                            handler: n,
                            hooks: g(e)
                        };
                    }
                    function U(t, n) {
                        if (!r.__dirty) {
                            r.__dirty = !0, t = t ? s(i) + "/" + s(t) : void 0;
                            var e = {
                                instance: r,
                                to: t,
                                currentLocationPath: t,
                                navigateOptions: {},
                                resolveOptions: j({}, o, n)
                            };
                            return m([
                                y,
                                _,
                                m.if(function(t) {
                                    var n = t.matches;
                                    return n && n.length > 0;
                                }, x, S)
                            ], e, H), !!e.matches && e.matches;
                        }
                        r.__waiting.push(function() {
                            return r.resolve(t, n);
                        });
                    }
                    function q(t, n) {
                        if (r.__dirty) r.__waiting.push(function() {
                            return r.navigate(t, n);
                        });
                        else {
                            r.__dirty = !0, t = s(i) + "/" + s(t);
                            var e = {
                                instance: r,
                                to: t,
                                navigateOptions: n || {},
                                resolveOptions: n && n.resolveOptions ? n.resolveOptions : o,
                                currentLocationPath: R(t)
                            };
                            m([
                                k,
                                O,
                                _,
                                m.if(function(t) {
                                    var n = t.matches;
                                    return n && n.length > 0;
                                }, x, S),
                                b,
                                H
                            ], e, H);
                        }
                    }
                    function F() {
                        if (P) return (P ? [].slice.call(document.querySelectorAll(o.linksSelector || C)) : []).forEach(function(t) {
                            "false" !== t.getAttribute("data-navigo") && "_blank" !== t.getAttribute("target") ? t.hasListenerAttached || (t.hasListenerAttached = !0, t.navigoHandler = function(n) {
                                if ((n.ctrlKey || n.metaKey) && "a" === n.target.tagName.toLowerCase()) return !1;
                                var e = t.getAttribute("href");
                                if (null == e) return !1;
                                if (e.match(/^(http|https)/) && "undefined" != typeof URL) try {
                                    var o = new URL(e);
                                    e = o.pathname + o.search;
                                } catch (t) {}
                                var i = function(t) {
                                    if (!t) return {};
                                    var n, e = t.split(","), o = {};
                                    return e.forEach(function(t) {
                                        var e = t.split(":").map(function(t) {
                                            return t.replace(/(^ +| +$)/g, "");
                                        });
                                        switch(e[0]){
                                            case "historyAPIMethod":
                                                o.historyAPIMethod = e[1];
                                                break;
                                            case "resolveOptionsStrategy":
                                                n || (n = {}), n.strategy = e[1];
                                                break;
                                            case "resolveOptionsHash":
                                                n || (n = {}), n.hash = "true" === e[1];
                                                break;
                                            case "updateBrowserURL":
                                            case "callHandler":
                                            case "updateState":
                                            case "force":
                                                o[e[0]] = "true" === e[1];
                                        }
                                    }), n && (o.resolveOptions = n), o;
                                }(t.getAttribute("data-navigo-options"));
                                L || (n.preventDefault(), n.stopPropagation(), r.navigate(s(e), i));
                            }, t.addEventListener("click", t.navigoHandler)) : t.hasListenerAttached && t.removeEventListener("click", t.navigoHandler);
                        }), r;
                    }
                    function I(t, n, e) {
                        var o = w.find(function(n) {
                            return n.name === t;
                        }), r = null;
                        if (o) {
                            if (r = o.path, n) for(var a in n)r = r.replace(":" + a, n[a]);
                            r = r.match(/^\//) ? r : "/" + r;
                        }
                        return r && e && !e.includeRoot && (r = r.replace(new RegExp("^/" + i), "")), r;
                    }
                    function M(t) {
                        var n = h(s(t)), o = n[0], r = n[1], i = "" === r ? null : f(r);
                        return {
                            url: o,
                            queryString: r,
                            hashString: u(t),
                            route: N(o, function() {}, [
                                e
                            ], o),
                            data: null,
                            params: i
                        };
                    }
                    function T(t, n, e) {
                        return "string" == typeof n && (n = z(n)), n ? (n.hooks[t] || (n.hooks[t] = []), n.hooks[t].push(e), function() {
                            n.hooks[t] = n.hooks[t].filter(function(t) {
                                return t !== e;
                            });
                        }) : (console.warn("Route doesn't exists: " + n), function() {});
                    }
                    function z(t) {
                        return "string" == typeof t ? w.find(function(n) {
                            return n.name === E(t);
                        }) : w.find(function(n) {
                            return n.handler === t;
                        });
                    }
                    t ? i = s(t) : console.warn('Navigo requires a root path in its constructor. If not provided will use "/" as default.'), this.root = i, this.routes = w, this.destroyed = L, this.current = d, this.__freezeListening = !1, this.__waiting = [], this.__dirty = !1, this.__markAsClean = function(t) {
                        t.instance.__dirty = !1, t.instance.__waiting.length > 0 && t.instance.__waiting.shift()();
                    }, this.on = function(t, n, o) {
                        var r = this;
                        return "object" != typeof t || t instanceof RegExp ? ("function" == typeof t && (o = n, n = t, t = i), w.push(N(t, n, [
                            e,
                            o
                        ])), this) : (Object.keys(t).forEach(function(n) {
                            if ("function" == typeof t[n]) r.on(n, t[n]);
                            else {
                                var o = t[n], i = o.uses, a = o.as, s = o.hooks;
                                w.push(N(n, i, [
                                    e,
                                    s
                                ], a));
                            }
                        }), this);
                    }, this.off = function(t) {
                        return this.routes = w = w.filter(function(n) {
                            return c(t) ? s(n.path) !== s(t) : "function" == typeof t ? t !== n.handler : String(n.path) !== String(t);
                        }), this;
                    }, this.resolve = U, this.navigate = q, this.navigateByName = function(t, n, e) {
                        var o = I(t, n);
                        return null !== o && (q(o.replace(new RegExp("^/?" + i), ""), e), !0);
                    }, this.destroy = function() {
                        this.routes = w = [], A && window.removeEventListener("popstate", this.__popstateListener), this.destroyed = L = !0;
                    }, this.notFound = function(t, n) {
                        return r._notFoundRoute = N("*", t, [
                            e,
                            n
                        ], "__NOT_FOUND__"), this;
                    }, this.updatePageLinks = F, this.link = function(t) {
                        return "/" + i + "/" + s(t);
                    }, this.hooks = function(t) {
                        return e = t, this;
                    }, this.extractGETParameters = function(t) {
                        return h(R(t));
                    }, this.lastResolved = function() {
                        return d;
                    }, this.generate = I, this.getLinkPath = function(t) {
                        return t.getAttribute("href");
                    }, this.match = function(t) {
                        var n = {
                            instance: r,
                            currentLocationPath: t,
                            to: t,
                            navigateOptions: {},
                            resolveOptions: o
                        };
                        return _(n, function() {}), !!n.matches && n.matches;
                    }, this.matchLocation = function(t, n, e) {
                        void 0 === n || void 0 !== e && !e || (n = E(n));
                        var o = {
                            instance: r,
                            to: n,
                            currentLocationPath: n
                        };
                        return y(o, function() {}), "string" == typeof t && (t = void 0 === e || e ? E(t) : t), l(o, {
                            name: String(t),
                            path: t,
                            handler: function() {},
                            hooks: {}
                        }) || !1;
                    }, this.getCurrentLocation = function() {
                        return M(s(a(i)).replace(new RegExp("^" + i), ""));
                    }, this.addBeforeHook = T.bind(this, "before"), this.addAfterHook = T.bind(this, "after"), this.addAlreadyHook = T.bind(this, "already"), this.addLeaveHook = T.bind(this, "leave"), this.getRoute = z, this._pathToMatchObject = M, this._clean = s, this._checkForAHash = R, this._setCurrent = function(t) {
                        return d = r.current = t;
                    }, (function() {
                        A && (this.__popstateListener = function() {
                            r.__freezeListening || U();
                        }, window.addEventListener("popstate", this.__popstateListener));
                    }).call(this), F.call(this);
                }
            }
        }, n = {};
        function e(o) {
            if (n[o]) return n[o].exports;
            var r = n[o] = {
                exports: {}
            };
            return t[o](r, r.exports, e), r.exports;
        }
        return e.d = function(t, n) {
            for(var o in n)e.o(n, o) && !e.o(t, o) && Object.defineProperty(t, o, {
                enumerable: !0,
                get: n[o]
            });
        }, e.o = function(t, n) {
            return Object.prototype.hasOwnProperty.call(t, n);
        }, e(407);
    }().default;
});

},{}],"3ABAM":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Home", ()=>Home);
const Home = ()=>{
    return `<h1>Home</h1>`;
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"kE7iT":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "About", ()=>About);
const About = ()=>{
    return `<h1>About</h1>`;
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7BhDU":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Products", ()=>Products);
const Products = ()=>{
    return `<h1>Danh s\xe1ch s\u{1EA3}n ph\u{1EA9}m</h1>
            <ul>
                <li><a href="/san-pham/1" data-route>S\u{1EA3}n ph\u{1EA9}m 1</a></li>
                <li><a href="/san-pham/2" data-route>S\u{1EA3}n ph\u{1EA9}m 2</a></li>
                <li><a href="/san-pham/3" data-route>S\u{1EA3}n ph\u{1EA9}m 3</a></li>
            </ul>`;
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6DvqA":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "DefaultLayout", ()=>DefaultLayout);
var _bootstrapMinCss = require("bootstrap/dist/css/bootstrap.min.css");
var _styleScss = require("../Assets/Style.scss");
const DefaultLayout = ()=>{
    return `<header class="mb-3">
                <div class="container">
                    <h1><a href="/" data-route>HEADER</a></h1>
                </div>
            </header>
            <main>
                <div class="container">
                    <div class="row">
                        <div class="col-3">
                            <h2>Menu</h2>
                            <ul>
                                <li><a href="/" data-route>Trang ch\u{1EE7}</a></li>
                                <li><a href="/gioi-thieu" data-route>Gi\u{1EDB}i thi\u{1EC7}u</a></li>
                                <li><a href="/san-pham" data-route>S\u{1EA3}n ph\u{1EA9}m</a></li>
                            </ul>
                        </div>
                        <div class="col-9">
                            ${body}
                        </div>
                    </div>
                </div>
            </main>
            <footer class="mt-3">
                <h1>FOOTER</h1>
            </footer>`;
};

},{"bootstrap/dist/css/bootstrap.min.css":"i5LP7","../Assets/Style.scss":"5B2fE","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"i5LP7":[function() {},{}],"5B2fE":[function() {},{}],"JnNc3":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ProductDetail", ()=>ProductDetail);
const ProductDetail = ({ params })=>{
    const { id } = params;
    return `<h1>Chi ti\u{1EBF}t s\u{1EA3}n ph\u{1EA9}m: ${id}</h1>
    <button onclick="navigate('/san-pham')">Back</button>
    `;
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["6DoTH","adjPd"], "adjPd", "parcelRequire35f7")

//# sourceMappingURL=index.63aff760.js.map
