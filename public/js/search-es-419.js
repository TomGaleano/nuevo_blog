(() => {
  // <stdin>
  (() => {
    var __create = Object.create;
    var __defProp = Object.defineProperty;
    var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames = Object.getOwnPropertyNames;
    var __getProtoOf = Object.getPrototypeOf;
    var __hasOwnProp = Object.prototype.hasOwnProperty;
    var __commonJS = (cb, mod) => function __require() {
      return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
    };
    var __copyProps = (to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames(from))
          if (!__hasOwnProp.call(to, key) && key !== except)
            __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
      }
      return to;
    };
    var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
      // If the importer is in node compatibility mode or this is not an ESM
      // file that has been converted to a CommonJS file using a Babel-
      // compatible transform (i.e. "__esModule" has not been set), then set
      // "default" to the CommonJS "module.exports" for node compatibility.
      isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
      mod
    ));
    var require_fuse_v6_6_2_min = __commonJS({
      "ns-hugo:/home/tgaleano/Coding/tgdiario/themes/hugo-theme-monochrome/assets/lib/js/fuse-v6.6.2.min.js"(exports, module) {
        var e;
        var t;
        e = exports, t = function() {
          "use strict";
          function e2(e3, t3) {
            var n2 = Object.keys(e3);
            if (Object.getOwnPropertySymbols) {
              var r2 = Object.getOwnPropertySymbols(e3);
              t3 && (r2 = r2.filter(function(t4) {
                return Object.getOwnPropertyDescriptor(e3, t4).enumerable;
              })), n2.push.apply(n2, r2);
            }
            return n2;
          }
          function t2(t3) {
            for (var n2 = 1; n2 < arguments.length; n2++) {
              var r2 = null != arguments[n2] ? arguments[n2] : {};
              n2 % 2 ? e2(Object(r2), true).forEach(function(e3) {
                c(t3, e3, r2[e3]);
              }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t3, Object.getOwnPropertyDescriptors(r2)) : e2(Object(r2)).forEach(function(e3) {
                Object.defineProperty(t3, e3, Object.getOwnPropertyDescriptor(r2, e3));
              });
            }
            return t3;
          }
          function n(e3) {
            return n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e4) {
              return typeof e4;
            } : function(e4) {
              return e4 && "function" == typeof Symbol && e4.constructor === Symbol && e4 !== Symbol.prototype ? "symbol" : typeof e4;
            }, n(e3);
          }
          function r(e3, t3) {
            if (!(e3 instanceof t3)) throw new TypeError("Cannot call a class as a function");
          }
          function i(e3, t3) {
            for (var n2 = 0; n2 < t3.length; n2++) {
              var r2 = t3[n2];
              r2.enumerable = r2.enumerable || false, r2.configurable = true, "value" in r2 && (r2.writable = true), Object.defineProperty(e3, r2.key, r2);
            }
          }
          function o(e3, t3, n2) {
            return t3 && i(e3.prototype, t3), n2 && i(e3, n2), Object.defineProperty(e3, "prototype", { writable: false }), e3;
          }
          function c(e3, t3, n2) {
            return t3 in e3 ? Object.defineProperty(e3, t3, { value: n2, enumerable: true, configurable: true, writable: true }) : e3[t3] = n2, e3;
          }
          function a(e3, t3) {
            if ("function" != typeof t3 && null !== t3) throw new TypeError("Super expression must either be null or a function");
            Object.defineProperty(e3, "prototype", { value: Object.create(t3 && t3.prototype, { constructor: { value: e3, writable: true, configurable: true } }), writable: false }), t3 && u(e3, t3);
          }
          function s(e3) {
            return s = Object.setPrototypeOf ? Object.getPrototypeOf : function(e4) {
              return e4.__proto__ || Object.getPrototypeOf(e4);
            }, s(e3);
          }
          function u(e3, t3) {
            return u = Object.setPrototypeOf || function(e4, t4) {
              return e4.__proto__ = t4, e4;
            }, u(e3, t3);
          }
          function h(e3, t3) {
            if (t3 && ("object" == typeof t3 || "function" == typeof t3)) return t3;
            if (void 0 !== t3) throw new TypeError("Derived constructors may only return object or undefined");
            return function(e4) {
              if (void 0 === e4) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
              return e4;
            }(e3);
          }
          function l(e3) {
            var t3 = function() {
              if ("undefined" == typeof Reflect || !Reflect.construct) return false;
              if (Reflect.construct.sham) return false;
              if ("function" == typeof Proxy) return true;
              try {
                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
                })), true;
              } catch (e4) {
                return false;
              }
            }();
            return function() {
              var n2, r2 = s(e3);
              if (t3) {
                var i2 = s(this).constructor;
                n2 = Reflect.construct(r2, arguments, i2);
              } else n2 = r2.apply(this, arguments);
              return h(this, n2);
            };
          }
          function f(e3) {
            return function(e4) {
              if (Array.isArray(e4)) return d(e4);
            }(e3) || function(e4) {
              if ("undefined" != typeof Symbol && null != e4[Symbol.iterator] || null != e4["@@iterator"]) return Array.from(e4);
            }(e3) || function(e4, t3) {
              if (e4) {
                if ("string" == typeof e4) return d(e4, t3);
                var n2 = Object.prototype.toString.call(e4).slice(8, -1);
                return "Object" === n2 && e4.constructor && (n2 = e4.constructor.name), "Map" === n2 || "Set" === n2 ? Array.from(e4) : "Arguments" === n2 || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n2) ? d(e4, t3) : void 0;
              }
            }(e3) || function() {
              throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
            }();
          }
          function d(e3, t3) {
            (null == t3 || t3 > e3.length) && (t3 = e3.length);
            for (var n2 = 0, r2 = new Array(t3); n2 < t3; n2++) r2[n2] = e3[n2];
            return r2;
          }
          function v(e3) {
            return Array.isArray ? Array.isArray(e3) : "[object Array]" === b(e3);
          }
          function g(e3) {
            return "string" == typeof e3;
          }
          function y(e3) {
            return "number" == typeof e3;
          }
          function p(e3) {
            return true === e3 || false === e3 || function(e4) {
              return m(e4) && null !== e4;
            }(e3) && "[object Boolean]" == b(e3);
          }
          function m(e3) {
            return "object" === n(e3);
          }
          function k(e3) {
            return null != e3;
          }
          function M(e3) {
            return !e3.trim().length;
          }
          function b(e3) {
            return null == e3 ? void 0 === e3 ? "[object Undefined]" : "[object Null]" : Object.prototype.toString.call(e3);
          }
          var x = function(e3) {
            return "Invalid value for key ".concat(e3);
          }, w = function(e3) {
            return "Pattern length exceeds max of ".concat(e3, ".");
          }, L = Object.prototype.hasOwnProperty, S = function() {
            function e3(t3) {
              var n2 = this;
              r(this, e3), this._keys = [], this._keyMap = {};
              var i2 = 0;
              t3.forEach(function(e4) {
                var t4 = _(e4);
                i2 += t4.weight, n2._keys.push(t4), n2._keyMap[t4.id] = t4, i2 += t4.weight;
              }), this._keys.forEach(function(e4) {
                e4.weight /= i2;
              });
            }
            return o(e3, [{ key: "get", value: function(e4) {
              return this._keyMap[e4];
            } }, { key: "keys", value: function() {
              return this._keys;
            } }, { key: "toJSON", value: function() {
              return JSON.stringify(this._keys);
            } }]), e3;
          }();
          function _(e3) {
            var t3 = null, n2 = null, r2 = null, i2 = 1, o2 = null;
            if (g(e3) || v(e3)) r2 = e3, t3 = O(e3), n2 = j(e3);
            else {
              if (!L.call(e3, "name")) throw new Error(function(e4) {
                return "Missing ".concat(e4, " property in key");
              }("name"));
              var c2 = e3.name;
              if (r2 = c2, L.call(e3, "weight") && (i2 = e3.weight) <= 0) throw new Error(function(e4) {
                return "Property 'weight' in key '".concat(e4, "' must be a positive integer");
              }(c2));
              t3 = O(c2), n2 = j(c2), o2 = e3.getFn;
            }
            return { path: t3, id: n2, weight: i2, src: r2, getFn: o2 };
          }
          function O(e3) {
            return v(e3) ? e3 : e3.split(".");
          }
          function j(e3) {
            return v(e3) ? e3.join(".") : e3;
          }
          var A = { useExtendedSearch: false, getFn: function(e3, t3) {
            var n2 = [], r2 = false;
            return function e4(t4, i2, o2) {
              if (k(t4)) if (i2[o2]) {
                var c2 = t4[i2[o2]];
                if (!k(c2)) return;
                if (o2 === i2.length - 1 && (g(c2) || y(c2) || p(c2))) n2.push(function(e5) {
                  return null == e5 ? "" : function(e6) {
                    if ("string" == typeof e6) return e6;
                    var t5 = e6 + "";
                    return "0" == t5 && 1 / e6 == -1 / 0 ? "-0" : t5;
                  }(e5);
                }(c2));
                else if (v(c2)) {
                  r2 = true;
                  for (var a2 = 0, s2 = c2.length; a2 < s2; a2 += 1) e4(c2[a2], i2, o2 + 1);
                } else i2.length && e4(c2, i2, o2 + 1);
              } else n2.push(t4);
            }(e3, g(t3) ? t3.split(".") : t3, 0), r2 ? n2 : n2[0];
          }, ignoreLocation: false, ignoreFieldNorm: false, fieldNormWeight: 1 }, I = t2(t2(t2(t2({}, { isCaseSensitive: false, includeScore: false, keys: [], shouldSort: true, sortFn: function(e3, t3) {
            return e3.score === t3.score ? e3.idx < t3.idx ? -1 : 1 : e3.score < t3.score ? -1 : 1;
          } }), { includeMatches: false, findAllMatches: false, minMatchCharLength: 1 }), { location: 0, threshold: 0.6, distance: 100 }), A), C = /[^ ]+/g;
          function E() {
            var e3 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1, t3 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 3, n2 = /* @__PURE__ */ new Map(), r2 = Math.pow(10, t3);
            return { get: function(t4) {
              var i2 = t4.match(C).length;
              if (n2.has(i2)) return n2.get(i2);
              var o2 = 1 / Math.pow(i2, 0.5 * e3), c2 = parseFloat(Math.round(o2 * r2) / r2);
              return n2.set(i2, c2), c2;
            }, clear: function() {
              n2.clear();
            } };
          }
          var $ = function() {
            function e3() {
              var t3 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, n2 = t3.getFn, i2 = void 0 === n2 ? I.getFn : n2, o2 = t3.fieldNormWeight, c2 = void 0 === o2 ? I.fieldNormWeight : o2;
              r(this, e3), this.norm = E(c2, 3), this.getFn = i2, this.isCreated = false, this.setIndexRecords();
            }
            return o(e3, [{ key: "setSources", value: function() {
              var e4 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
              this.docs = e4;
            } }, { key: "setIndexRecords", value: function() {
              var e4 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
              this.records = e4;
            } }, { key: "setKeys", value: function() {
              var e4 = this, t3 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
              this.keys = t3, this._keysMap = {}, t3.forEach(function(t4, n2) {
                e4._keysMap[t4.id] = n2;
              });
            } }, { key: "create", value: function() {
              var e4 = this;
              !this.isCreated && this.docs.length && (this.isCreated = true, g(this.docs[0]) ? this.docs.forEach(function(t3, n2) {
                e4._addString(t3, n2);
              }) : this.docs.forEach(function(t3, n2) {
                e4._addObject(t3, n2);
              }), this.norm.clear());
            } }, { key: "add", value: function(e4) {
              var t3 = this.size();
              g(e4) ? this._addString(e4, t3) : this._addObject(e4, t3);
            } }, { key: "removeAt", value: function(e4) {
              this.records.splice(e4, 1);
              for (var t3 = e4, n2 = this.size(); t3 < n2; t3 += 1) this.records[t3].i -= 1;
            } }, { key: "getValueForItemAtKeyId", value: function(e4, t3) {
              return e4[this._keysMap[t3]];
            } }, { key: "size", value: function() {
              return this.records.length;
            } }, { key: "_addString", value: function(e4, t3) {
              if (k(e4) && !M(e4)) {
                var n2 = { v: e4, i: t3, n: this.norm.get(e4) };
                this.records.push(n2);
              }
            } }, { key: "_addObject", value: function(e4, t3) {
              var n2 = this, r2 = { i: t3, $: {} };
              this.keys.forEach(function(t4, i2) {
                var o2 = t4.getFn ? t4.getFn(e4) : n2.getFn(e4, t4.path);
                if (k(o2)) {
                  if (v(o2)) !function() {
                    for (var e5 = [], t5 = [{ nestedArrIndex: -1, value: o2 }]; t5.length; ) {
                      var c3 = t5.pop(), a2 = c3.nestedArrIndex, s2 = c3.value;
                      if (k(s2)) if (g(s2) && !M(s2)) {
                        var u2 = { v: s2, i: a2, n: n2.norm.get(s2) };
                        e5.push(u2);
                      } else v(s2) && s2.forEach(function(e6, n3) {
                        t5.push({ nestedArrIndex: n3, value: e6 });
                      });
                    }
                    r2.$[i2] = e5;
                  }();
                  else if (g(o2) && !M(o2)) {
                    var c2 = { v: o2, n: n2.norm.get(o2) };
                    r2.$[i2] = c2;
                  }
                }
              }), this.records.push(r2);
            } }, { key: "toJSON", value: function() {
              return { keys: this.keys, records: this.records };
            } }]), e3;
          }();
          function F(e3, t3) {
            var n2 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, r2 = n2.getFn, i2 = void 0 === r2 ? I.getFn : r2, o2 = n2.fieldNormWeight, c2 = void 0 === o2 ? I.fieldNormWeight : o2, a2 = new $({ getFn: i2, fieldNormWeight: c2 });
            return a2.setKeys(e3.map(_)), a2.setSources(t3), a2.create(), a2;
          }
          function R(e3) {
            var t3 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, n2 = t3.errors, r2 = void 0 === n2 ? 0 : n2, i2 = t3.currentLocation, o2 = void 0 === i2 ? 0 : i2, c2 = t3.expectedLocation, a2 = void 0 === c2 ? 0 : c2, s2 = t3.distance, u2 = void 0 === s2 ? I.distance : s2, h2 = t3.ignoreLocation, l2 = void 0 === h2 ? I.ignoreLocation : h2, f2 = r2 / e3.length;
            if (l2) return f2;
            var d2 = Math.abs(a2 - o2);
            return u2 ? f2 + d2 / u2 : d2 ? 1 : f2;
          }
          function N() {
            for (var e3 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [], t3 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : I.minMatchCharLength, n2 = [], r2 = -1, i2 = -1, o2 = 0, c2 = e3.length; o2 < c2; o2 += 1) {
              var a2 = e3[o2];
              a2 && -1 === r2 ? r2 = o2 : a2 || -1 === r2 || ((i2 = o2 - 1) - r2 + 1 >= t3 && n2.push([r2, i2]), r2 = -1);
            }
            return e3[o2 - 1] && o2 - r2 >= t3 && n2.push([r2, o2 - 1]), n2;
          }
          var P = 32;
          function W(e3) {
            for (var t3 = {}, n2 = 0, r2 = e3.length; n2 < r2; n2 += 1) {
              var i2 = e3.charAt(n2);
              t3[i2] = (t3[i2] || 0) | 1 << r2 - n2 - 1;
            }
            return t3;
          }
          var T = function() {
            function e3(t3) {
              var n2 = this, i2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, o2 = i2.location, c2 = void 0 === o2 ? I.location : o2, a2 = i2.threshold, s2 = void 0 === a2 ? I.threshold : a2, u2 = i2.distance, h2 = void 0 === u2 ? I.distance : u2, l2 = i2.includeMatches, f2 = void 0 === l2 ? I.includeMatches : l2, d2 = i2.findAllMatches, v2 = void 0 === d2 ? I.findAllMatches : d2, g2 = i2.minMatchCharLength, y2 = void 0 === g2 ? I.minMatchCharLength : g2, p2 = i2.isCaseSensitive, m2 = void 0 === p2 ? I.isCaseSensitive : p2, k2 = i2.ignoreLocation, M2 = void 0 === k2 ? I.ignoreLocation : k2;
              if (r(this, e3), this.options = { location: c2, threshold: s2, distance: h2, includeMatches: f2, findAllMatches: v2, minMatchCharLength: y2, isCaseSensitive: m2, ignoreLocation: M2 }, this.pattern = m2 ? t3 : t3.toLowerCase(), this.chunks = [], this.pattern.length) {
                var b2 = function(e4, t4) {
                  n2.chunks.push({ pattern: e4, alphabet: W(e4), startIndex: t4 });
                }, x2 = this.pattern.length;
                if (x2 > P) {
                  for (var w2 = 0, L2 = x2 % P, S2 = x2 - L2; w2 < S2; ) b2(this.pattern.substr(w2, P), w2), w2 += P;
                  if (L2) {
                    var _2 = x2 - P;
                    b2(this.pattern.substr(_2), _2);
                  }
                } else b2(this.pattern, 0);
              }
            }
            return o(e3, [{ key: "searchIn", value: function(e4) {
              var t3 = this.options, n2 = t3.isCaseSensitive, r2 = t3.includeMatches;
              if (n2 || (e4 = e4.toLowerCase()), this.pattern === e4) {
                var i2 = { isMatch: true, score: 0 };
                return r2 && (i2.indices = [[0, e4.length - 1]]), i2;
              }
              var o2 = this.options, c2 = o2.location, a2 = o2.distance, s2 = o2.threshold, u2 = o2.findAllMatches, h2 = o2.minMatchCharLength, l2 = o2.ignoreLocation, d2 = [], v2 = 0, g2 = false;
              this.chunks.forEach(function(t4) {
                var n3 = t4.pattern, i3 = t4.alphabet, o3 = t4.startIndex, y3 = function(e5, t5, n4) {
                  var r3 = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {}, i4 = r3.location, o4 = void 0 === i4 ? I.location : i4, c3 = r3.distance, a3 = void 0 === c3 ? I.distance : c3, s3 = r3.threshold, u3 = void 0 === s3 ? I.threshold : s3, h3 = r3.findAllMatches, l3 = void 0 === h3 ? I.findAllMatches : h3, f2 = r3.minMatchCharLength, d3 = void 0 === f2 ? I.minMatchCharLength : f2, v3 = r3.includeMatches, g3 = void 0 === v3 ? I.includeMatches : v3, y4 = r3.ignoreLocation, p3 = void 0 === y4 ? I.ignoreLocation : y4;
                  if (t5.length > P) throw new Error(w(P));
                  for (var m3, k3 = t5.length, M2 = e5.length, b2 = Math.max(0, Math.min(o4, M2)), x2 = u3, L2 = b2, S2 = d3 > 1 || g3, _2 = S2 ? Array(M2) : []; (m3 = e5.indexOf(t5, L2)) > -1; ) {
                    var O2 = R(t5, { currentLocation: m3, expectedLocation: b2, distance: a3, ignoreLocation: p3 });
                    if (x2 = Math.min(O2, x2), L2 = m3 + k3, S2) for (var j2 = 0; j2 < k3; ) _2[m3 + j2] = 1, j2 += 1;
                  }
                  L2 = -1;
                  for (var A2 = [], C2 = 1, E2 = k3 + M2, $2 = 1 << k3 - 1, F2 = 0; F2 < k3; F2 += 1) {
                    for (var W2 = 0, T2 = E2; W2 < T2; ) R(t5, { errors: F2, currentLocation: b2 + T2, expectedLocation: b2, distance: a3, ignoreLocation: p3 }) <= x2 ? W2 = T2 : E2 = T2, T2 = Math.floor((E2 - W2) / 2 + W2);
                    E2 = T2;
                    var z2 = Math.max(1, b2 - T2 + 1), D2 = l3 ? M2 : Math.min(b2 + T2, M2) + k3, K2 = Array(D2 + 2);
                    K2[D2 + 1] = (1 << F2) - 1;
                    for (var q2 = D2; q2 >= z2; q2 -= 1) {
                      var B2 = q2 - 1, J2 = n4[e5.charAt(B2)];
                      if (S2 && (_2[B2] = +!!J2), K2[q2] = (K2[q2 + 1] << 1 | 1) & J2, F2 && (K2[q2] |= (A2[q2 + 1] | A2[q2]) << 1 | 1 | A2[q2 + 1]), K2[q2] & $2 && (C2 = R(t5, { errors: F2, currentLocation: B2, expectedLocation: b2, distance: a3, ignoreLocation: p3 })) <= x2) {
                        if (x2 = C2, (L2 = B2) <= b2) break;
                        z2 = Math.max(1, 2 * b2 - L2);
                      }
                    }
                    if (R(t5, { errors: F2 + 1, currentLocation: b2, expectedLocation: b2, distance: a3, ignoreLocation: p3 }) > x2) break;
                    A2 = K2;
                  }
                  var U2 = { isMatch: L2 >= 0, score: Math.max(1e-3, C2) };
                  if (S2) {
                    var V2 = N(_2, d3);
                    V2.length ? g3 && (U2.indices = V2) : U2.isMatch = false;
                  }
                  return U2;
                }(e4, n3, i3, { location: c2 + o3, distance: a2, threshold: s2, findAllMatches: u2, minMatchCharLength: h2, includeMatches: r2, ignoreLocation: l2 }), p2 = y3.isMatch, m2 = y3.score, k2 = y3.indices;
                p2 && (g2 = true), v2 += m2, p2 && k2 && (d2 = [].concat(f(d2), f(k2)));
              });
              var y2 = { isMatch: g2, score: g2 ? v2 / this.chunks.length : 1 };
              return g2 && r2 && (y2.indices = d2), y2;
            } }]), e3;
          }(), z = function() {
            function e3(t3) {
              r(this, e3), this.pattern = t3;
            }
            return o(e3, [{ key: "search", value: function() {
            } }], [{ key: "isMultiMatch", value: function(e4) {
              return D(e4, this.multiRegex);
            } }, { key: "isSingleMatch", value: function(e4) {
              return D(e4, this.singleRegex);
            } }]), e3;
          }();
          function D(e3, t3) {
            var n2 = e3.match(t3);
            return n2 ? n2[1] : null;
          }
          var K = function(e3) {
            a(n2, e3);
            var t3 = l(n2);
            function n2(e4) {
              return r(this, n2), t3.call(this, e4);
            }
            return o(n2, [{ key: "search", value: function(e4) {
              var t4 = e4 === this.pattern;
              return { isMatch: t4, score: t4 ? 0 : 1, indices: [0, this.pattern.length - 1] };
            } }], [{ key: "type", get: function() {
              return "exact";
            } }, { key: "multiRegex", get: function() {
              return /^="(.*)"$/;
            } }, { key: "singleRegex", get: function() {
              return /^=(.*)$/;
            } }]), n2;
          }(z), q = function(e3) {
            a(n2, e3);
            var t3 = l(n2);
            function n2(e4) {
              return r(this, n2), t3.call(this, e4);
            }
            return o(n2, [{ key: "search", value: function(e4) {
              var t4 = -1 === e4.indexOf(this.pattern);
              return { isMatch: t4, score: t4 ? 0 : 1, indices: [0, e4.length - 1] };
            } }], [{ key: "type", get: function() {
              return "inverse-exact";
            } }, { key: "multiRegex", get: function() {
              return /^!"(.*)"$/;
            } }, { key: "singleRegex", get: function() {
              return /^!(.*)$/;
            } }]), n2;
          }(z), B = function(e3) {
            a(n2, e3);
            var t3 = l(n2);
            function n2(e4) {
              return r(this, n2), t3.call(this, e4);
            }
            return o(n2, [{ key: "search", value: function(e4) {
              var t4 = e4.startsWith(this.pattern);
              return { isMatch: t4, score: t4 ? 0 : 1, indices: [0, this.pattern.length - 1] };
            } }], [{ key: "type", get: function() {
              return "prefix-exact";
            } }, { key: "multiRegex", get: function() {
              return /^\^"(.*)"$/;
            } }, { key: "singleRegex", get: function() {
              return /^\^(.*)$/;
            } }]), n2;
          }(z), J = function(e3) {
            a(n2, e3);
            var t3 = l(n2);
            function n2(e4) {
              return r(this, n2), t3.call(this, e4);
            }
            return o(n2, [{ key: "search", value: function(e4) {
              var t4 = !e4.startsWith(this.pattern);
              return { isMatch: t4, score: t4 ? 0 : 1, indices: [0, e4.length - 1] };
            } }], [{ key: "type", get: function() {
              return "inverse-prefix-exact";
            } }, { key: "multiRegex", get: function() {
              return /^!\^"(.*)"$/;
            } }, { key: "singleRegex", get: function() {
              return /^!\^(.*)$/;
            } }]), n2;
          }(z), U = function(e3) {
            a(n2, e3);
            var t3 = l(n2);
            function n2(e4) {
              return r(this, n2), t3.call(this, e4);
            }
            return o(n2, [{ key: "search", value: function(e4) {
              var t4 = e4.endsWith(this.pattern);
              return { isMatch: t4, score: t4 ? 0 : 1, indices: [e4.length - this.pattern.length, e4.length - 1] };
            } }], [{ key: "type", get: function() {
              return "suffix-exact";
            } }, { key: "multiRegex", get: function() {
              return /^"(.*)"\$$/;
            } }, { key: "singleRegex", get: function() {
              return /^(.*)\$$/;
            } }]), n2;
          }(z), V = function(e3) {
            a(n2, e3);
            var t3 = l(n2);
            function n2(e4) {
              return r(this, n2), t3.call(this, e4);
            }
            return o(n2, [{ key: "search", value: function(e4) {
              var t4 = !e4.endsWith(this.pattern);
              return { isMatch: t4, score: t4 ? 0 : 1, indices: [0, e4.length - 1] };
            } }], [{ key: "type", get: function() {
              return "inverse-suffix-exact";
            } }, { key: "multiRegex", get: function() {
              return /^!"(.*)"\$$/;
            } }, { key: "singleRegex", get: function() {
              return /^!(.*)\$$/;
            } }]), n2;
          }(z), G = function(e3) {
            a(n2, e3);
            var t3 = l(n2);
            function n2(e4) {
              var i2, o2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, c2 = o2.location, a2 = void 0 === c2 ? I.location : c2, s2 = o2.threshold, u2 = void 0 === s2 ? I.threshold : s2, h2 = o2.distance, l2 = void 0 === h2 ? I.distance : h2, f2 = o2.includeMatches, d2 = void 0 === f2 ? I.includeMatches : f2, v2 = o2.findAllMatches, g2 = void 0 === v2 ? I.findAllMatches : v2, y2 = o2.minMatchCharLength, p2 = void 0 === y2 ? I.minMatchCharLength : y2, m2 = o2.isCaseSensitive, k2 = void 0 === m2 ? I.isCaseSensitive : m2, M2 = o2.ignoreLocation, b2 = void 0 === M2 ? I.ignoreLocation : M2;
              return r(this, n2), (i2 = t3.call(this, e4))._bitapSearch = new T(e4, { location: a2, threshold: u2, distance: l2, includeMatches: d2, findAllMatches: g2, minMatchCharLength: p2, isCaseSensitive: k2, ignoreLocation: b2 }), i2;
            }
            return o(n2, [{ key: "search", value: function(e4) {
              return this._bitapSearch.searchIn(e4);
            } }], [{ key: "type", get: function() {
              return "fuzzy";
            } }, { key: "multiRegex", get: function() {
              return /^"(.*)"$/;
            } }, { key: "singleRegex", get: function() {
              return /^(.*)$/;
            } }]), n2;
          }(z), H = function(e3) {
            a(n2, e3);
            var t3 = l(n2);
            function n2(e4) {
              return r(this, n2), t3.call(this, e4);
            }
            return o(n2, [{ key: "search", value: function(e4) {
              for (var t4, n3 = 0, r2 = [], i2 = this.pattern.length; (t4 = e4.indexOf(this.pattern, n3)) > -1; ) n3 = t4 + i2, r2.push([t4, n3 - 1]);
              var o2 = !!r2.length;
              return { isMatch: o2, score: o2 ? 0 : 1, indices: r2 };
            } }], [{ key: "type", get: function() {
              return "include";
            } }, { key: "multiRegex", get: function() {
              return /^'"(.*)"$/;
            } }, { key: "singleRegex", get: function() {
              return /^'(.*)$/;
            } }]), n2;
          }(z), Q = [K, H, B, J, V, U, q, G], X = Q.length, Y = / +(?=(?:[^\"]*\"[^\"]*\")*[^\"]*$)/;
          function Z(e3) {
            var t3 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            return e3.split("|").map(function(e4) {
              for (var n2 = e4.trim().split(Y).filter(function(e5) {
                return e5 && !!e5.trim();
              }), r2 = [], i2 = 0, o2 = n2.length; i2 < o2; i2 += 1) {
                for (var c2 = n2[i2], a2 = false, s2 = -1; !a2 && ++s2 < X; ) {
                  var u2 = Q[s2], h2 = u2.isMultiMatch(c2);
                  h2 && (r2.push(new u2(h2, t3)), a2 = true);
                }
                if (!a2) for (s2 = -1; ++s2 < X; ) {
                  var l2 = Q[s2], f2 = l2.isSingleMatch(c2);
                  if (f2) {
                    r2.push(new l2(f2, t3));
                    break;
                  }
                }
              }
              return r2;
            });
          }
          var ee = /* @__PURE__ */ new Set([G.type, H.type]), te = function() {
            function e3(t3) {
              var n2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, i2 = n2.isCaseSensitive, o2 = void 0 === i2 ? I.isCaseSensitive : i2, c2 = n2.includeMatches, a2 = void 0 === c2 ? I.includeMatches : c2, s2 = n2.minMatchCharLength, u2 = void 0 === s2 ? I.minMatchCharLength : s2, h2 = n2.ignoreLocation, l2 = void 0 === h2 ? I.ignoreLocation : h2, f2 = n2.findAllMatches, d2 = void 0 === f2 ? I.findAllMatches : f2, v2 = n2.location, g2 = void 0 === v2 ? I.location : v2, y2 = n2.threshold, p2 = void 0 === y2 ? I.threshold : y2, m2 = n2.distance, k2 = void 0 === m2 ? I.distance : m2;
              r(this, e3), this.query = null, this.options = { isCaseSensitive: o2, includeMatches: a2, minMatchCharLength: u2, findAllMatches: d2, ignoreLocation: l2, location: g2, threshold: p2, distance: k2 }, this.pattern = o2 ? t3 : t3.toLowerCase(), this.query = Z(this.pattern, this.options);
            }
            return o(e3, [{ key: "searchIn", value: function(e4) {
              var t3 = this.query;
              if (!t3) return { isMatch: false, score: 1 };
              var n2 = this.options, r2 = n2.includeMatches;
              e4 = n2.isCaseSensitive ? e4 : e4.toLowerCase();
              for (var i2 = 0, o2 = [], c2 = 0, a2 = 0, s2 = t3.length; a2 < s2; a2 += 1) {
                var u2 = t3[a2];
                o2.length = 0, i2 = 0;
                for (var h2 = 0, l2 = u2.length; h2 < l2; h2 += 1) {
                  var d2 = u2[h2], v2 = d2.search(e4), g2 = v2.isMatch, y2 = v2.indices, p2 = v2.score;
                  if (!g2) {
                    c2 = 0, i2 = 0, o2.length = 0;
                    break;
                  }
                  if (i2 += 1, c2 += p2, r2) {
                    var m2 = d2.constructor.type;
                    ee.has(m2) ? o2 = [].concat(f(o2), f(y2)) : o2.push(y2);
                  }
                }
                if (i2) {
                  var k2 = { isMatch: true, score: c2 / i2 };
                  return r2 && (k2.indices = o2), k2;
                }
              }
              return { isMatch: false, score: 1 };
            } }], [{ key: "condition", value: function(e4, t3) {
              return t3.useExtendedSearch;
            } }]), e3;
          }(), ne = [];
          function re(e3, t3) {
            for (var n2 = 0, r2 = ne.length; n2 < r2; n2 += 1) {
              var i2 = ne[n2];
              if (i2.condition(e3, t3)) return new i2(e3, t3);
            }
            return new T(e3, t3);
          }
          var ie = "$and", oe = "$or", ce = "$path", ae = "$val", se = function(e3) {
            return !(!e3[ie] && !e3[oe]);
          }, ue = function(e3) {
            return !!e3[ce];
          }, he = function(e3) {
            return !v(e3) && m(e3) && !se(e3);
          }, le = function(e3) {
            return c({}, ie, Object.keys(e3).map(function(t3) {
              return c({}, t3, e3[t3]);
            }));
          };
          function fe(e3, t3) {
            var n2 = t3.ignoreFieldNorm, r2 = void 0 === n2 ? I.ignoreFieldNorm : n2;
            e3.forEach(function(e4) {
              var t4 = 1;
              e4.matches.forEach(function(e5) {
                var n3 = e5.key, i2 = e5.norm, o2 = e5.score, c2 = n3 ? n3.weight : null;
                t4 *= Math.pow(0 === o2 && c2 ? Number.EPSILON : o2, (c2 || 1) * (r2 ? 1 : i2));
              }), e4.score = t4;
            });
          }
          function de(e3, t3) {
            var n2 = e3.matches;
            t3.matches = [], k(n2) && n2.forEach(function(e4) {
              if (k(e4.indices) && e4.indices.length) {
                var n3 = { indices: e4.indices, value: e4.value };
                e4.key && (n3.key = e4.key.src), e4.idx > -1 && (n3.refIndex = e4.idx), t3.matches.push(n3);
              }
            });
          }
          function ve(e3, t3) {
            t3.score = e3.score;
          }
          function ge(e3, t3) {
            var n2 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, r2 = n2.includeMatches, i2 = void 0 === r2 ? I.includeMatches : r2, o2 = n2.includeScore, c2 = void 0 === o2 ? I.includeScore : o2, a2 = [];
            return i2 && a2.push(de), c2 && a2.push(ve), e3.map(function(e4) {
              var n3 = e4.idx, r3 = { item: t3[n3], refIndex: n3 };
              return a2.length && a2.forEach(function(t4) {
                t4(e4, r3);
              }), r3;
            });
          }
          var ye = function() {
            function e3(n2) {
              var i2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, o2 = arguments.length > 2 ? arguments[2] : void 0;
              r(this, e3), this.options = t2(t2({}, I), i2), this.options.useExtendedSearch, this._keyStore = new S(this.options.keys), this.setCollection(n2, o2);
            }
            return o(e3, [{ key: "setCollection", value: function(e4, t3) {
              if (this._docs = e4, t3 && !(t3 instanceof $)) throw new Error("Incorrect 'index' type");
              this._myIndex = t3 || F(this.options.keys, this._docs, { getFn: this.options.getFn, fieldNormWeight: this.options.fieldNormWeight });
            } }, { key: "add", value: function(e4) {
              k(e4) && (this._docs.push(e4), this._myIndex.add(e4));
            } }, { key: "remove", value: function() {
              for (var e4 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : function() {
                return false;
              }, t3 = [], n2 = 0, r2 = this._docs.length; n2 < r2; n2 += 1) {
                var i2 = this._docs[n2];
                e4(i2, n2) && (this.removeAt(n2), n2 -= 1, r2 -= 1, t3.push(i2));
              }
              return t3;
            } }, { key: "removeAt", value: function(e4) {
              this._docs.splice(e4, 1), this._myIndex.removeAt(e4);
            } }, { key: "getIndex", value: function() {
              return this._myIndex;
            } }, { key: "search", value: function(e4) {
              var t3 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, n2 = t3.limit, r2 = void 0 === n2 ? -1 : n2, i2 = this.options, o2 = i2.includeMatches, c2 = i2.includeScore, a2 = i2.shouldSort, s2 = i2.sortFn, u2 = i2.ignoreFieldNorm, h2 = g(e4) ? g(this._docs[0]) ? this._searchStringList(e4) : this._searchObjectList(e4) : this._searchLogical(e4);
              return fe(h2, { ignoreFieldNorm: u2 }), a2 && h2.sort(s2), y(r2) && r2 > -1 && (h2 = h2.slice(0, r2)), ge(h2, this._docs, { includeMatches: o2, includeScore: c2 });
            } }, { key: "_searchStringList", value: function(e4) {
              var t3 = re(e4, this.options), n2 = this._myIndex.records, r2 = [];
              return n2.forEach(function(e5) {
                var n3 = e5.v, i2 = e5.i, o2 = e5.n;
                if (k(n3)) {
                  var c2 = t3.searchIn(n3), a2 = c2.isMatch, s2 = c2.score, u2 = c2.indices;
                  a2 && r2.push({ item: n3, idx: i2, matches: [{ score: s2, value: n3, norm: o2, indices: u2 }] });
                }
              }), r2;
            } }, { key: "_searchLogical", value: function(e4) {
              var t3 = this, n2 = function(e5, t4) {
                var n3 = (arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}).auto, r3 = void 0 === n3 || n3, i3 = function e6(n4) {
                  var i4 = Object.keys(n4), o3 = ue(n4);
                  if (!o3 && i4.length > 1 && !se(n4)) return e6(le(n4));
                  if (he(n4)) {
                    var c3 = o3 ? n4[ce] : i4[0], a2 = o3 ? n4[ae] : n4[c3];
                    if (!g(a2)) throw new Error(x(c3));
                    var s2 = { keyId: j(c3), pattern: a2 };
                    return r3 && (s2.searcher = re(a2, t4)), s2;
                  }
                  var u2 = { children: [], operator: i4[0] };
                  return i4.forEach(function(t5) {
                    var r4 = n4[t5];
                    v(r4) && r4.forEach(function(t6) {
                      u2.children.push(e6(t6));
                    });
                  }), u2;
                };
                return se(e5) || (e5 = le(e5)), i3(e5);
              }(e4, this.options), r2 = function e5(n3, r3, i3) {
                if (!n3.children) {
                  var o3 = n3.keyId, c3 = n3.searcher, a2 = t3._findMatches({ key: t3._keyStore.get(o3), value: t3._myIndex.getValueForItemAtKeyId(r3, o3), searcher: c3 });
                  return a2 && a2.length ? [{ idx: i3, item: r3, matches: a2 }] : [];
                }
                for (var s2 = [], u2 = 0, h2 = n3.children.length; u2 < h2; u2 += 1) {
                  var l2 = e5(n3.children[u2], r3, i3);
                  if (l2.length) s2.push.apply(s2, f(l2));
                  else if (n3.operator === ie) return [];
                }
                return s2;
              }, i2 = this._myIndex.records, o2 = {}, c2 = [];
              return i2.forEach(function(e5) {
                var t4 = e5.$, i3 = e5.i;
                if (k(t4)) {
                  var a2 = r2(n2, t4, i3);
                  a2.length && (o2[i3] || (o2[i3] = { idx: i3, item: t4, matches: [] }, c2.push(o2[i3])), a2.forEach(function(e6) {
                    var t5, n3 = e6.matches;
                    (t5 = o2[i3].matches).push.apply(t5, f(n3));
                  }));
                }
              }), c2;
            } }, { key: "_searchObjectList", value: function(e4) {
              var t3 = this, n2 = re(e4, this.options), r2 = this._myIndex, i2 = r2.keys, o2 = r2.records, c2 = [];
              return o2.forEach(function(e5) {
                var r3 = e5.$, o3 = e5.i;
                if (k(r3)) {
                  var a2 = [];
                  i2.forEach(function(e6, i3) {
                    a2.push.apply(a2, f(t3._findMatches({ key: e6, value: r3[i3], searcher: n2 })));
                  }), a2.length && c2.push({ idx: o3, item: r3, matches: a2 });
                }
              }), c2;
            } }, { key: "_findMatches", value: function(e4) {
              var t3 = e4.key, n2 = e4.value, r2 = e4.searcher;
              if (!k(n2)) return [];
              var i2 = [];
              if (v(n2)) n2.forEach(function(e5) {
                var n3 = e5.v, o3 = e5.i, c3 = e5.n;
                if (k(n3)) {
                  var a3 = r2.searchIn(n3), s3 = a3.isMatch, u3 = a3.score, h3 = a3.indices;
                  s3 && i2.push({ score: u3, key: t3, value: n3, idx: o3, norm: c3, indices: h3 });
                }
              });
              else {
                var o2 = n2.v, c2 = n2.n, a2 = r2.searchIn(o2), s2 = a2.isMatch, u2 = a2.score, h2 = a2.indices;
                s2 && i2.push({ score: u2, key: t3, value: o2, norm: c2, indices: h2 });
              }
              return i2;
            } }]), e3;
          }();
          return ye.version = "6.6.2", ye.createIndex = F, ye.parseIndex = function(e3) {
            var t3 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, n2 = t3.getFn, r2 = void 0 === n2 ? I.getFn : n2, i2 = t3.fieldNormWeight, o2 = void 0 === i2 ? I.fieldNormWeight : i2, c2 = e3.keys, a2 = e3.records, s2 = new $({ getFn: r2, fieldNormWeight: o2 });
            return s2.setKeys(c2), s2.setIndexRecords(a2), s2;
          }, ye.config = I, function() {
            ne.push.apply(ne, arguments);
          }(te), ye;
        }, "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : (e = "undefined" != typeof globalThis ? globalThis : e || self).Fuse = t();
      }
    });
    var index_url = "//localhost:1313/index.json";
    var import_fuse_v6_6_2_min = __toESM(require_fuse_v6_6_2_min());
    async function init() {
      const data = fetch(index_url);
      const search_btn = document.getElementById("search_btn");
      const search_menu_wrapper = document.getElementById("search_menu_wrapper");
      const search_menu_close_btn = document.getElementById("search_menu_close_btn");
      const search_menu_input = document.getElementById("search_menu_input");
      const search_menu_results = document.getElementById("search_menu_results");
      search_btn.addEventListener("click", function() {
        search_menu_wrapper.classList.remove("hidden");
        search_menu_input.focus();
      });
      search_menu_close_btn.addEventListener("click", function() {
        search_menu_wrapper.classList.add("hidden");
      });
      const index_json = await (await data).json();
      const options = {
        distance: 100,
        threshold: 0.3,
        ignoreLocation: true,
        minMatchCharLength: 2,
        keys: [
          "title",
          "permalink",
          "content"
        ],
        includeMatches: true
      };
      const fuse = new import_fuse_v6_6_2_min.default(index_json, options);
      const createItem = (title, permalink, content) => {
        return `<a href="${permalink}">
                    <div class="search-menu-result-item">
                        <div class="search-menu-result-item-title">${title}</div>
                        <div class="search-menu-result-item-content">${content}</div>
                    </div>
                </a>`;
      };
      const hlItem = (item, matches) => {
        const highlightTitle = (text, match) => {
          let textHl = "", ptr = 0;
          match.forEach((idx) => {
            if (ptr < idx[0]) {
              textHl += text.substring(ptr, idx[0]);
            }
            textHl += "<mark>" + text.substring(idx[0], idx[1] + 1) + "</mark>";
            ptr = idx[1] + 1;
          });
          textHl += text.substring(ptr, text.length);
          return textHl;
        };
        const highlightContent = (text, match) => {
          let textHl = "<mark>" + text.substring(match[0][0], match[0][1] + 1) + "</mark>";
          let ptr = match[0][1] + 1;
          let length = match[0][1] + 1 - match[0][0];
          if (match[0][0] > 0) {
            textHl = "..." + textHl;
          }
          for (let i = 1; i < match.length; i++) {
            const idx = match[i];
            if (ptr < idx[0] && length + idx[0] - ptr >= 100) {
              textHl += text.substring(ptr, ptr + (100 - length + 1)) + "...";
              length = 100;
              break;
            }
            if (ptr < idx[0]) {
              textHl += text.substring(ptr, idx[0]);
              length += idx[0] - ptr;
            }
            textHl += "<mark>" + text.substring(idx[0], idx[1] + 1) + "</mark>";
            length += idx[1] + 1 - idx[0];
            ptr = idx[1] + 1;
            if (length >= 100) {
              break;
            }
          }
          if (length < 100) {
            textHl += text.substring(ptr, ptr + (100 - length));
          }
          if (ptr <= text.length) {
            textHl += "...";
          }
          return textHl;
        };
        let itemHl = {
          title: void 0,
          permalink: item.permalink,
          content: void 0
        };
        matches.forEach((match) => {
          if (match.key == "title") {
            itemHl.title = highlightTitle(item.title, match.indices);
          } else if (match.key == "content") {
            itemHl.content = highlightContent(item.content, match.indices);
          }
        });
        if (itemHl.title === void 0) itemHl.title = item.title;
        if (itemHl.content === void 0) itemHl.content = item.content;
        return itemHl;
      };
      const buildAllItems = () => {
        search_menu_results.innerHTML = index_json.reduce((acc, curr) => {
          let content = curr.content.length > 100 ? curr.content.substring(0, 100) + "..." : curr.content;
          return acc + createItem(curr.title, curr.permalink, content);
        }, "");
      };
      const search = (value) => {
        const results = fuse.search(value);
        if (results.length == 0) {
          search_menu_results.innerHTML = "";
        } else {
          search_menu_results.innerHTML = results.reduce((acc, curr) => {
            const item = hlItem(curr.item, curr.matches);
            return acc + createItem(item.title, item.permalink, item.content);
          }, "");
        }
      };
      search_menu_input.addEventListener("input", function() {
        if (this.value === "") {
          buildAllItems();
        } else {
          search(this.value.trim());
        }
      });
      buildAllItems();
    }
    window.addEventListener("DOMContentLoaded", init);
  })();
})();
