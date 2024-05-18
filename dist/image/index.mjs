import M from "openseadragon";
import "@iiif/vault-helpers";
import { ErrorBoundary as R } from "react-error-boundary";
import { createStitches as W } from "@stitches/react";
import r, { useState as k, useRef as D, useEffect as w } from "react";
import { Vault as z } from "@iiif/vault";
import { v4 as V } from "uuid";
let h = window.OpenSeadragon;
if (!h && (h = M, !h))
  throw new Error("OpenSeadragon is missing.");
const $ = "http://www.w3.org/2000/svg";
h.Viewer && (h.Viewer.prototype.svgOverlay = function() {
  return this._svgOverlayInfo ? this._svgOverlayInfo : (this._svgOverlayInfo = new P(this), this._svgOverlayInfo);
});
const P = function(e) {
  const t = this;
  this._viewer = e, this._containerWidth = 0, this._containerHeight = 0, this._svg = document.createElementNS($, "svg"), this._svg.style.position = "absolute", this._svg.style.left = 0, this._svg.style.top = 0, this._svg.style.width = "100%", this._svg.style.height = "100%", this._viewer.canvas.appendChild(this._svg), this._node = document.createElementNS($, "g"), this._svg.appendChild(this._node), this._viewer.addHandler("animation", function() {
    t.resize();
  }), this._viewer.addHandler("open", function() {
    t.resize();
  }), this._viewer.addHandler("rotate", function() {
    t.resize();
  }), this._viewer.addHandler("flip", function() {
    t.resize();
  }), this._viewer.addHandler("resize", function() {
    t.resize();
  }), this.resize();
};
P.prototype = {
  // ----------
  node: function() {
    return this._node;
  },
  // ----------
  resize: function() {
    this._containerWidth !== this._viewer.container.clientWidth && (this._containerWidth = this._viewer.container.clientWidth, this._svg.setAttribute("width", this._containerWidth)), this._containerHeight !== this._viewer.container.clientHeight && (this._containerHeight = this._viewer.container.clientHeight, this._svg.setAttribute("height", this._containerHeight));
    const e = this._viewer.viewport.pixelFromPoint(new h.Point(0, 0), !0), t = this._viewer.viewport.getZoom(!0), o = this._viewer.viewport.getRotation(), i = this._viewer.viewport.getFlip(), a = this._viewer.viewport._containerInnerSize.x;
    let l = a * t;
    const s = l;
    i && (l = -l, e.x = -e.x + a), this._node.setAttribute(
      "transform",
      "translate(" + e.x + "," + e.y + ") scale(" + l + "," + s + ") rotate(" + o + ")"
    );
  },
  // ----------
  onClick: function(e, t) {
    new h.MouseTracker({
      element: e,
      clickHandler: t
    }).setTracking(!0);
  }
};
const N = (e) => fetch(`${e.replace(/\/$/, "")}/info.json`).then((t) => t.json()).then((t) => t).catch((t) => {
  console.error(
    `The IIIF tilesource ${e.replace(
      /\/$/,
      ""
    )}/info.json failed to load: ${t}`
  );
}), j = (e) => {
  let t, o;
  if (Array.isArray(e) && (t = e[0], t)) {
    let i;
    "@id" in t ? i = t["@id"] : i = t.id, o = i;
  }
  return o;
};
var x = /* @__PURE__ */ ((e) => (e.TiledImage = "tiledImage", e.SimpleImage = "simpleImage", e))(x || {});
const Z = (e) => {
  const t = Array.isArray(e == null ? void 0 : e.service) && (e == null ? void 0 : e.service.length) > 0, o = t ? j(e == null ? void 0 : e.service) : e == null ? void 0 : e.id, i = t ? x.TiledImage : x.SimpleImage;
  return {
    uri: o,
    imageType: i
  };
}, U = (e, t) => {
  const o = t ? x.TiledImage : x.SimpleImage;
  return {
    uri: e,
    imageType: o
  };
}, y = 209, X = {
  colors: {
    /*
     * Black and dark grays in a light theme.
     * Must contrast to 4.5 or greater with `secondary`.
     */
    primary: "#1a1d1e",
    primaryMuted: "#26292b",
    primaryAlt: "#151718",
    /*
     * Key brand color(s).
     * Must contrast to 4.5 or greater with `secondary`.
     */
    accent: `hsl(${y} 100% 38.2%)`,
    accentMuted: `hsl(${y} 80% 61.8%)`,
    accentAlt: `hsl(${y} 80% 30%)`,
    /*
     * White and light grays in a light theme.
     * Must contrast to 4.5 or greater with `primary` and  `accent`.
     */
    secondary: "#FFFFFF",
    secondaryMuted: "#e6e8eb",
    secondaryAlt: "#c1c8cd"
  },
  fontSizes: {
    1: "12px",
    2: "13px",
    3: "15px",
    4: "17px",
    5: "19px",
    6: "21px",
    7: "27px",
    8: "35px",
    9: "59px"
  },
  lineHeights: {
    1: "12px",
    2: "13px",
    3: "15px",
    4: "17px",
    5: "19px",
    6: "21px",
    7: "27px",
    8: "35px",
    9: "59px"
  },
  sizes: {
    1: "5px",
    2: "10px",
    3: "15px",
    4: "20px",
    5: "25px",
    6: "35px",
    7: "45px",
    8: "65px",
    9: "80px"
  },
  space: {
    1: "5px",
    2: "10px",
    3: "15px",
    4: "20px",
    5: "25px",
    6: "35px",
    7: "45px",
    8: "65px",
    9: "80px"
  },
  radii: {
    1: "4px",
    2: "6px",
    3: "8px",
    4: "12px",
    round: "50%",
    pill: "9999px"
  },
  transitions: {
    all: "all 300ms cubic-bezier(0.16, 1, 0.3, 1)"
  },
  zIndices: {
    1: "100",
    2: "200",
    3: "300",
    4: "400",
    max: "999"
  }
}, q = {
  xxs: "(max-width: 349px)",
  xs: "(max-width: 575px)",
  sm: "(max-width: 767px)",
  md: "(max-width: 991px)",
  lg: "(max-width: 90rem)",
  xl: "(min-width: calc(90rem + 1px))"
}, { styled: m, css: Ce, keyframes: Ie, createTheme: ke } = W({
  theme: X,
  media: q
}), Y = m("div", {
  display: "flex",
  flexDirection: "column",
  alignItems: "center"
}), G = m("p", {
  fontWeight: "bold",
  fontSize: "x-large"
}), J = m("span", {
  fontSize: "medium"
}), K = ({ error: e }) => {
  const { message: t } = e;
  return /* @__PURE__ */ r.createElement(Y, { role: "alert" }, /* @__PURE__ */ r.createElement(G, { "data-testid": "headline" }, "Something went wrong"), t && /* @__PURE__ */ r.createElement(J, null, `Error message: ${t}`, " "));
}, S = m("div", {
  position: "absolute !important",
  zIndex: "1",
  top: "1rem",
  left: "1rem",
  width: "161.8px",
  height: "100px",
  backgroundColor: "#000D",
  boxShadow: "5px 5px 5px #0002",
  borderRadius: "3px",
  ".displayregion": {
    border: " 3px solid $accent !important",
    boxShadow: "0 0 3px #0006"
  },
  "@sm": {
    width: "123px",
    height: "76px"
  },
  "@xs": {
    width: "100px",
    height: "61.8px"
  }
}), Q = m("div", {
  position: "relative",
  width: "100%",
  height: "100%",
  zIndex: "0"
}), ee = m("div", {
  width: "100%",
  height: "100%",
  maxHeight: "100vh",
  background: "transparent",
  backgroundSize: "contain",
  color: "white",
  position: "relative",
  zIndex: "0",
  overflow: "hidden",
  variants: {
    hasNavigator: {
      true: {
        [`${S}`]: {
          display: "block"
        }
      },
      false: {
        [`${S}`]: {
          display: "none"
        }
      }
    }
  }
}), te = m("button", {
  display: "flex",
  height: "2rem",
  width: "2rem",
  borderRadius: "2rem",
  padding: "0",
  margin: "0",
  fontFamily: "inherit",
  background: "none",
  backgroundColor: "$primary",
  border: "none",
  color: "white",
  cursor: "pointer",
  marginLeft: "0.618rem",
  filter: "drop-shadow(2px 2px 5px #0003)",
  transition: "$all",
  boxSizing: "content-box !important",
  "&:first-child": {
    marginLeft: "0"
  },
  "@xs": {
    marginBottom: "0.618rem",
    marginLeft: "0",
    "&:last-child": {
      marginBottom: "0"
    }
  },
  svg: {
    height: "60%",
    width: "60%",
    padding: "20%",
    fill: "$secondary",
    stroke: "$secondary",
    filter: "drop-shadow(2px 2px 5px #0003)",
    transition: "$all",
    boxSizing: "inherit"
  },
  "&:hover, &:focus": {
    backgroundColor: "$accent"
  },
  "&[data-button=rotate-right]": {
    "&:hover, &:focus": {
      svg: {
        rotate: "45deg"
      }
    }
  },
  "&[data-button=rotate-left]": {
    transform: "scaleX(-1)",
    "&:hover, &:focus": {
      svg: {
        rotate: "45deg"
      }
    }
  },
  "&[data-button=reset]": {
    "&:hover, &:focus": {
      svg: {
        rotate: "-15deg"
      }
    }
  }
}), g = ({ className: e, id: t, label: o, children: i }) => {
  const a = o.toLowerCase().replace(/\s/g, "-");
  return /* @__PURE__ */ r.createElement(
    te,
    {
      id: t,
      className: e,
      "data-testid": "openseadragon-button",
      "data-button": a
    },
    /* @__PURE__ */ r.createElement(
      "svg",
      {
        xmlns: "http://www.w3.org/2000/svg",
        "aria-labelledby": `${t}-svg-title`,
        "data-testid": "openseadragon-button-svg",
        focusable: "false",
        viewBox: "0 0 512 512",
        role: "img"
      },
      /* @__PURE__ */ r.createElement("title", { id: `${t}-svg-title` }, o),
      i
    )
  );
}, re = m("div", {
  position: "absolute",
  zIndex: "1",
  top: "1rem",
  right: "1rem",
  display: "flex",
  "@xs": {
    flexDirection: "column",
    zIndex: "2"
  },
  variants: {
    hasPlaceholder: {
      true: {
        right: "3.618rem",
        "@xs": {
          top: "3.618rem",
          right: "1rem"
        }
      },
      false: {
        right: "1rem",
        "@xs": {
          top: "1rem",
          right: "1rem"
        }
      }
    }
  }
}), oe = {
  behavior: "smooth",
  block: "center"
}, u = {
  annotationOverlays: {
    backgroundColor: "#6666ff",
    borderColor: "#000099",
    borderType: "solid",
    borderWidth: "1px",
    opacity: "0.5",
    renderOverlays: !0,
    zoomLevel: 2
  },
  background: "transparent",
  canvasBackgroundColor: "#6662",
  canvasHeight: "500px",
  contentSearch: {
    searchResultsLimit: 20,
    overlays: {
      backgroundColor: "#ff6666",
      borderColor: "#990000",
      borderType: "solid",
      borderWidth: "1px",
      opacity: "0.5",
      renderOverlays: !0,
      zoomLevel: 4
    }
  },
  ignoreCaptionLabels: [],
  informationPanel: {
    vtt: {
      autoScroll: {
        enabled: !0,
        settings: oe
      }
    },
    open: !0,
    renderAbout: !0,
    renderSupplementing: !0,
    renderToggle: !0,
    renderAnnotation: !0,
    renderContentSearch: !0
  },
  openSeadragon: {},
  requestHeaders: { "Content-Type": "application/json" },
  showDownload: !0,
  showIIIFBadge: !0,
  showTitle: !0,
  withCredentials: !1,
  localeText: {
    contentSearch: {
      tabLabel: "Search Results",
      formPlaceholder: "Enter search words",
      noSearchResults: "No search results",
      loading: "Loading...",
      moreResults: "more results"
    }
  }
};
function ne(e) {
  let t = {
    ...u.informationPanel.vtt.autoScroll
  };
  return typeof e == "object" && (t = "enabled" in e ? e : { enabled: !0, settings: e }), e === !1 && (t.enabled = !1), ie(t.settings), t;
}
function ie({ behavior: e, block: t }) {
  const o = ["auto", "instant", "smooth"], i = ["center", "end", "nearest", "start"];
  if (!o.includes(e))
    throw TypeError(`'${e}' not in ${o.join(" | ")}`);
  if (!i.includes(t))
    throw TypeError(`'${t}' not in ${i.join(" | ")}`);
}
var A, B;
const ae = ne(
  (B = (A = u == null ? void 0 : u.informationPanel) == null ? void 0 : A.vtt) == null ? void 0 : B.autoScroll
);
var H;
const T = {
  activeCanvas: "",
  activeManifest: "",
  OSDImageLoaded: !1,
  collection: {},
  configOptions: u,
  customDisplays: [],
  plugins: [],
  isAutoScrollEnabled: ae.enabled,
  isAutoScrolling: !1,
  isInformationOpen: (H = u == null ? void 0 : u.informationPanel) == null ? void 0 : H.open,
  isLoaded: !1,
  isUserScrolling: void 0,
  vault: new z(),
  contentSearchVault: new z(),
  openSeadragonViewer: null,
  viewerId: V()
}, se = r.createContext(T), le = r.createContext(T);
function L() {
  const e = r.useContext(se);
  if (e === void 0)
    throw new Error("useViewerState must be used within a ViewerProvider");
  return e;
}
function F() {
  const e = r.useContext(le);
  if (e === void 0)
    throw new Error("useViewerDispatch must be used within a ViewerProvider");
  return e;
}
const ce = () => /* @__PURE__ */ r.createElement(
  "path",
  {
    strokeLinecap: "round",
    strokeMiterlimit: "10",
    strokeWidth: "45",
    d: "M256 112v288M400 256H112"
  }
), de = () => /* @__PURE__ */ r.createElement(
  "path",
  {
    strokeLinecap: "round",
    strokeMiterlimit: "10",
    strokeWidth: "45",
    d: "M400 256H112"
  }
), ue = () => /* @__PURE__ */ r.createElement(
  "path",
  {
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "32",
    d: "M432 320v112H320M421.8 421.77L304 304M80 192V80h112M90.2 90.23L208 208M320 80h112v112M421.77 90.2L304 208M192 432H80V320M90.23 421.8L208 304"
  }
), me = () => /* @__PURE__ */ r.createElement("path", { d: "M448 440a16 16 0 01-12.61-6.15c-22.86-29.27-44.07-51.86-73.32-67C335 352.88 301 345.59 256 344.23V424a16 16 0 01-27 11.57l-176-168a16 16 0 010-23.14l176-168A16 16 0 01256 88v80.36c74.14 3.41 129.38 30.91 164.35 81.87C449.32 292.44 464 350.9 464 424a16 16 0 01-16 16z" }), O = () => /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement(
  "path",
  {
    fill: "none",
    strokeLinecap: "round",
    strokeMiterlimit: "10",
    strokeWidth: "45",
    d: "M400 148l-21.12-24.57A191.43 191.43 0 00240 64C134 64 48 150 48 256s86 192 192 192a192.09 192.09 0 00181.07-128"
  }
), /* @__PURE__ */ r.createElement("path", { d: "M464 97.42V208a16 16 0 01-16 16H337.42c-14.26 0-21.4-17.23-11.32-27.31L436.69 86.1C446.77 76 464 83.16 464 97.42z" })), he = ({
  _cloverViewerHasPlaceholder: e,
  config: t
}) => {
  const o = L(), {
    activeCanvas: i,
    configOptions: a,
    openSeadragonViewer: l,
    plugins: s,
    vault: f,
    activeManifest: n
  } = o, v = f.get({
    id: i,
    type: "Canvas"
  });
  function p() {
    return s.filter((c) => {
      var d;
      return (d = c.imageViewer) == null ? void 0 : d.menu;
    }).map((c, d) => {
      var b, _, C, I;
      const E = (_ = (b = c.imageViewer) == null ? void 0 : b.menu) == null ? void 0 : _.component;
      return /* @__PURE__ */ r.createElement(
        E,
        {
          key: d,
          ...(I = (C = c == null ? void 0 : c.imageViewer) == null ? void 0 : C.menu) == null ? void 0 : I.componentProps,
          activeManifest: n,
          canvas: v,
          viewerConfigOptions: a,
          openSeadragonViewer: l,
          useViewerDispatch: F,
          useViewerState: L
        }
      );
    });
  }
  return /* @__PURE__ */ r.createElement(
    re,
    {
      "data-testid": "clover-iiif-image-openseadragon-controls",
      hasPlaceholder: e
    },
    t.showZoomControl && /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement(g, { id: t.zoomInButton, label: "zoom in" }, /* @__PURE__ */ r.createElement(ce, null)), /* @__PURE__ */ r.createElement(g, { id: t.zoomOutButton, label: "zoom out" }, /* @__PURE__ */ r.createElement(de, null))),
    t.showFullPageControl && /* @__PURE__ */ r.createElement(g, { id: t.fullPageButton, label: "full page" }, /* @__PURE__ */ r.createElement(ue, null)),
    t.showRotationControl && /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement(g, { id: t.rotateRightButton, label: "rotate right" }, /* @__PURE__ */ r.createElement(O, null)), /* @__PURE__ */ r.createElement(g, { id: t.rotateLeftButton, label: "rotate left" }, /* @__PURE__ */ r.createElement(O, null))),
    t.showHomeControl && /* @__PURE__ */ r.createElement(g, { id: t.homeButton, label: "reset" }, /* @__PURE__ */ r.createElement(me, null)),
    p()
  );
}, pe = ({
  ariaLabel: e,
  config: t,
  uri: o,
  _cloverViewerHasPlaceholder: i,
  imageType: a,
  openSeadragonCallback: l
}) => {
  const [s, f] = k(), [n, v] = k(), p = F(), c = D(!1);
  return w(() => (c.current || (c.current = !0, n || v(M(t))), () => n == null ? void 0 : n.destroy()), []), w(() => {
    n && l && l(n);
  }, [n, l]), w(() => {
    n && o !== s && (n == null || n.forceRedraw(), f(o));
  }, [n, s, o]), w(() => {
    if (s && n)
      switch (a) {
        case "simpleImage":
          n == null || n.addSimpleImage({
            url: s
          });
          break;
        case "tiledImage":
          N(s).then((d) => {
            try {
              if (!d)
                throw new Error(`No tile source found for ${s}`);
              n == null || n.addTiledImage({
                tileSource: d,
                success: () => {
                  typeof p == "function" && p({
                    type: "updateOSDImageLoaded",
                    OSDImageLoaded: !0
                  });
                }
              });
            } catch (E) {
              console.error(E);
            }
          });
          break;
        default:
          n == null || n.close(), console.warn(
            `Unable to render ${s} in OpenSeadragon as type: "${a}"`
          );
          break;
      }
  }, [a, s]), /* @__PURE__ */ r.createElement(
    ee,
    {
      className: "clover-iiif-image-openseadragon",
      "data-testid": "clover-iiif-image-openseadragon",
      "data-openseadragon-instance": t.id,
      hasNavigator: t.showNavigator
    },
    /* @__PURE__ */ r.createElement(
      he,
      {
        _cloverViewerHasPlaceholder: i,
        config: t
      }
    ),
    t.showNavigator && /* @__PURE__ */ r.createElement(
      S,
      {
        id: t.navigatorId,
        "data-testid": "clover-iiif-image-openseadragon-navigator"
      }
    ),
    /* @__PURE__ */ r.createElement(
      Q,
      {
        id: t.id,
        "data-testid": "clover-iiif-image-openseadragon-viewport",
        role: "img",
        ...e && { "aria-label": e }
      }
    )
  );
};
function ge(e) {
  return {
    id: `openseadragon-${e}`,
    navigatorId: `openseadragon-navigator-${e}`,
    loadTilesWithAjax: !0,
    fullPageButton: `fullPage-${e}`,
    homeButton: `reset-${e}`,
    rotateLeftButton: `rotateLeft-${e}`,
    rotateRightButton: `rotateRight-${e}`,
    zoomInButton: `zoomIn-${e}`,
    zoomOutButton: `zoomOut-${e}`,
    showNavigator: !0,
    showFullPageControl: !0,
    showHomeControl: !0,
    showRotationControl: !0,
    showZoomControl: !0,
    navigatorBorderColor: "transparent",
    gestureSettingsMouse: {
      clickToZoom: !0,
      dblClickToZoom: !0,
      pinchToZoom: !0,
      scrollToZoom: !1
    }
  };
}
const fe = (e, t = "none") => {
  if (!e)
    return null;
  if (typeof e == "string")
    return [e];
  if (!e[t]) {
    const o = Object.getOwnPropertyNames(e);
    if (o.length > 0)
      return e[o[0]];
  }
  return !e[t] || !Array.isArray(e[t]) ? null : e[t];
}, ve = (e, t = "none", o = ", ") => {
  const i = fe(e, t);
  return Array.isArray(i) ? i.join(`${o}`) : i;
}, ze = ({
  _cloverViewerHasPlaceholder: e = !1,
  body: t,
  instanceId: o,
  isTiledImage: i = !1,
  label: a,
  src: l = "",
  openSeadragonCallback: s,
  openSeadragonConfig: f = {}
}) => {
  const n = o || V(), v = typeof a == "string" ? a : ve(a), p = {
    ...ge(n),
    ...f
  }, { imageType: c, uri: d } = t ? Z(t) : U(l, i);
  return d ? /* @__PURE__ */ r.createElement(R, { FallbackComponent: K }, /* @__PURE__ */ r.createElement(
    pe,
    {
      _cloverViewerHasPlaceholder: e,
      ariaLabel: v,
      config: p,
      imageType: c,
      key: n,
      uri: d,
      openSeadragonCallback: s
    }
  )) : null;
};
export {
  ze as default
};
//# sourceMappingURL=index.mjs.map