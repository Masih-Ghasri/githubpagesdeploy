"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[607],{93062:function(e,t,o){var r=o(2265),n=o(90305),l=o(37053),c=o(57437);let i="function"==typeof(0,n.zY)({}),s=(e,t)=>({WebkitFontSmoothing:"antialiased",MozOsxFontSmoothing:"grayscale",boxSizing:"border-box",WebkitTextSizeAdjust:"100%",...t&&!e.vars&&{colorScheme:e.palette.mode}}),a=e=>({color:(e.vars||e).palette.text.primary,...e.typography.body1,backgroundColor:(e.vars||e).palette.background.default,"@media print":{backgroundColor:(e.vars||e).palette.common.white}}),d=function(e){var t,o;let r=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n={};r&&e.colorSchemes&&"function"==typeof e.getColorSchemeSelector&&Object.entries(e.colorSchemes).forEach(t=>{var o,r;let[l,c]=t,i=e.getColorSchemeSelector(l);i.startsWith("@")?n[i]={":root":{colorScheme:null===(o=c.palette)||void 0===o?void 0:o.mode}}:n[i.replace(/\s*&/,"")]={colorScheme:null===(r=c.palette)||void 0===r?void 0:r.mode}});let l={html:s(e,r),"*, *::before, *::after":{boxSizing:"inherit"},"strong, b":{fontWeight:e.typography.fontWeightBold},body:{margin:0,...a(e),"&::backdrop":{backgroundColor:(e.vars||e).palette.background.default}},...n},c=null===(o=e.components)||void 0===o?void 0:null===(t=o.MuiCssBaseline)||void 0===t?void 0:t.styleOverrides;return c&&(l=[l,c]),l},u="mui-ecs",m=e=>{let t=d(e,!1),o=Array.isArray(t)?t[0]:t;return!e.vars&&o&&(o.html[":root:has(".concat(u,")")]={colorScheme:e.palette.mode}),e.colorSchemes&&Object.entries(e.colorSchemes).forEach(t=>{var r,n;let[l,c]=t,i=e.getColorSchemeSelector(l);i.startsWith("@")?o[i]={[":root:not(:has(.".concat(u,"))")]:{colorScheme:null===(r=c.palette)||void 0===r?void 0:r.mode}}:o[i.replace(/\s*&/,"")]={["&:not(:has(.".concat(u,"))")]:{colorScheme:null===(n=c.palette)||void 0===n?void 0:n.mode}}}),t},h=(0,n.zY)(i?e=>{let{theme:t,enableColorScheme:o}=e;return d(t,o)}:e=>{let{theme:t}=e;return m(t)});t.default=function(e){let{children:t,enableColorScheme:o=!1}=(0,l.i)({props:e,name:"MuiCssBaseline"});return(0,c.jsxs)(r.Fragment,{children:[i&&(0,c.jsx)(h,{enableColorScheme:o}),!i&&!o&&(0,c.jsx)("span",{className:u,style:{display:"none"}}),t]})}},62145:function(e,t,o){o.d(t,{default:function(){return s}}),o(2265);var r=o(49333),n=o(22166),l=o(57437);function c(e){let{theme:t,...o}=e,c=n.Z in t?t[n.Z]:void 0;return(0,l.jsx)(r.default,{...o,themeId:c?n.Z:void 0,theme:c||t})}var i=o(98189);function s(e){let{theme:t,...o}=e;return"function"!=typeof t&&"colorSchemes"in(n.Z in t?t[n.Z]:t)?(0,l.jsx)(i.CssVarsProvider,{theme:t,...o}):(0,l.jsx)(c,{theme:t,...o})}},98189:function(e,t,o){o.r(t),o.d(t,{CssVarsProvider:function(){return v},Experimental_CssVarsProvider:function(){return S},getInitColorSchemeScript:function(){return y},useColorScheme:function(){return f}});var r=o(2265),n=o(38720),l=o(18598),c=o(44462),i=o(49333),s=o(16639),a=o(50789),d=o(57437),u=o(99163),m=o(84792);let{CssVarsProvider:h,useColorScheme:f,getInitColorSchemeScript:p}=function(e){let{themeId:t,theme:o={},modeStorageKey:n=s.RI,colorSchemeStorageKey:u=s.Wp,disableTransitionOnChange:m=!1,defaultColorScheme:h,resolveTheme:f}=e,p={allColorSchemes:[],colorScheme:void 0,darkColorScheme:void 0,lightColorScheme:void 0,mode:void 0,setColorScheme:()=>{},setMode:()=>{},systemMode:void 0},S=r.createContext(void 0),g="string"==typeof h?h:h.light,y="string"==typeof h?h:h.dark;return{CssVarsProvider:function(e){let{children:s,theme:p,modeStorageKey:g=n,colorSchemeStorageKey:y=u,disableTransitionOnChange:v=m,storageWindow:k="undefined"==typeof window?void 0:window,documentNode:C="undefined"==typeof document?void 0:document,colorSchemeNode:b="undefined"==typeof document?void 0:document.documentElement,disableNestedContext:x=!1,disableStyleSheetGeneration:w=!1,defaultMode:I="system"}=e,M=r.useRef(!1),j=(0,c.Z)(),$=r.useContext(S),E=!!$&&!x,Z=r.useMemo(()=>p||("function"==typeof o?o():o),[p]),W=Z[t],{colorSchemes:T={},components:_={},cssVarPrefix:L,...P}=W||Z,A=Object.keys(T).filter(e=>!!T[e]).join(","),V=r.useMemo(()=>A.split(","),[A]),R="string"==typeof h?h:h.light,z="string"==typeof h?h:h.dark,O=T[R]&&T[z]?I:T[P.defaultColorScheme]?.palette?.mode||P.palette?.mode,{mode:H,setMode:K,systemMode:N,lightColorScheme:F,darkColorScheme:B,colorScheme:Y,setColorScheme:q}=(0,a.default)({supportedColorSchemes:V,defaultLightColorScheme:R,defaultDarkColorScheme:z,modeStorageKey:g,colorSchemeStorageKey:y,defaultMode:O,storageWindow:k}),D=H,U=Y;E&&(D=$.mode,U=$.colorScheme);let G=U||P.defaultColorScheme,J=P.generateThemeVars?.()||P.vars,Q={...P,components:_,colorSchemes:T,cssVarPrefix:L,vars:J};if("function"==typeof Q.generateSpacing&&(Q.spacing=Q.generateSpacing()),G){let e=T[G];e&&"object"==typeof e&&Object.keys(e).forEach(t=>{e[t]&&"object"==typeof e[t]?Q[t]={...Q[t],...e[t]}:Q[t]=e[t]})}let X=P.colorSchemeSelector;r.useEffect(()=>{if(U&&b&&X&&"media"!==X){let e=X;if("class"===X&&(e=".%s"),"data"===X&&(e="[data-%s]"),X?.startsWith("data-")&&!X.includes("%s")&&(e=`[${X}="%s"]`),e.startsWith("."))b.classList.remove(...V.map(t=>e.substring(1).replace("%s",t))),b.classList.add(e.substring(1).replace("%s",U));else{let t=e.replace("%s",U).match(/\[([^\]]+)\]/);if(t){let[e,o]=t[1].split("=");o||V.forEach(t=>{b.removeAttribute(e.replace(U,t))}),b.setAttribute(e,o?o.replace(/"|'/g,""):"")}else b.setAttribute(e,U)}}},[U,X,b,V]),r.useEffect(()=>{let e;if(v&&M.current&&C){let t=C.createElement("style");t.appendChild(C.createTextNode("*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}")),C.head.appendChild(t),window.getComputedStyle(C.body),e=setTimeout(()=>{C.head.removeChild(t)},1)}return()=>{clearTimeout(e)}},[U,v,C]),r.useEffect(()=>(M.current=!0,()=>{M.current=!1}),[]);let ee=r.useMemo(()=>({allColorSchemes:V,colorScheme:U,darkColorScheme:B,lightColorScheme:F,mode:D,setColorScheme:q,setMode:K,systemMode:N}),[V,U,B,F,D,q,K,N]),et=!0;(w||!1===P.cssVariables||E&&j?.cssVarPrefix===L)&&(et=!1);let eo=(0,d.jsxs)(r.Fragment,{children:[(0,d.jsx)(i.default,{themeId:W?t:void 0,theme:f?f(Q):Q,children:s}),et&&(0,d.jsx)(l.default,{styles:Q.generateStyleSheets?.()||[]})]});return E?eo:(0,d.jsx)(S.Provider,{value:ee,children:eo})},useColorScheme:()=>r.useContext(S)||p,getInitColorSchemeScript:e=>(0,s.ZP)({colorSchemeStorageKey:u,defaultLightColorScheme:g,defaultDarkColorScheme:y,modeStorageKey:n,...e})}}({themeId:o(22166).Z,theme:()=>(0,u.Z)({cssVariables:!0}),colorSchemeStorageKey:"mui-color-scheme",modeStorageKey:"mui-mode",defaultColorScheme:{light:"light",dark:"dark"},resolveTheme:e=>{let t={...e,typography:(0,m.Z)(e.palette,e.typography)};return t.unstable_sx=function(e){return(0,n.Z)({sx:e,theme:this})},t}});function S(e){return(0,d.jsx)(h,{...e})}let g=!1,y=e=>(g||(console.warn("MUI: The getInitColorSchemeScript function has been deprecated.\n\nYou should use `import InitColorSchemeScript from '@mui/material/InitColorSchemeScript'`\nand replace the function call with `<InitColorSchemeScript />` instead."),g=!0),p(e)),v=h},46037:function(e,t,o){let r=o(2265).createContext(null);t.Z=r},44462:function(e,t,o){o.d(t,{Z:function(){return l}});var r=o(2265),n=o(46037);function l(){return r.useContext(n.Z)}},16639:function(e,t,o){o.d(t,{RI:function(){return n},Wp:function(){return l},ZP:function(){return c}}),o(2265);var r=o(57437);let n="mode",l="color-scheme";function c(e){let{defaultMode:t="system",defaultLightColorScheme:o="light",defaultDarkColorScheme:c="dark",modeStorageKey:i=n,colorSchemeStorageKey:s=l,attribute:a="data-color-scheme",colorSchemeNode:d="document.documentElement",nonce:u}=e||{},m="",h=a;if("class"===a&&(h=".%s"),"data"===a&&(h="[data-%s]"),h.startsWith(".")){let e=h.substring(1);m+=`${d}.classList.remove('${e}'.replace('%s', light), '${e}'.replace('%s', dark));
      ${d}.classList.add('${e}'.replace('%s', colorScheme));`}let f=h.match(/\[([^\]]+)\]/);if(f){let[e,t]=f[1].split("=");t||(m+=`${d}.removeAttribute('${e}'.replace('%s', light));
      ${d}.removeAttribute('${e}'.replace('%s', dark));`),m+=`
      ${d}.setAttribute('${e}'.replace('%s', colorScheme), ${t?`${t}.replace('%s', colorScheme)`:'""'});`}else m+=`${d}.setAttribute('${h}', colorScheme);`;return(0,r.jsx)("script",{suppressHydrationWarning:!0,nonce:"undefined"==typeof window?u:"",dangerouslySetInnerHTML:{__html:`(function() {
try {
  let colorScheme = '';
  const mode = localStorage.getItem('${i}') || '${t}';
  const dark = localStorage.getItem('${s}-dark') || '${c}';
  const light = localStorage.getItem('${s}-light') || '${o}';
  if (mode === 'system') {
    // handle system mode
    const mql = window.matchMedia('(prefers-color-scheme: dark)');
    if (mql.matches) {
      colorScheme = dark
    } else {
      colorScheme = light
    }
  }
  if (mode === 'light') {
    colorScheme = light;
  }
  if (mode === 'dark') {
    colorScheme = dark;
  }
  if (colorScheme) {
    ${m}
  }
} catch(e){}})();`}},"mui-color-scheme-init")}},49333:function(e,t,o){o.d(t,{default:function(){return S}});var r=o(2265),n=o(44462),l=o(46037),c="function"==typeof Symbol&&Symbol.for?Symbol.for("mui.nested"):"__THEME_NESTED__",i=o(57437),s=function(e){let{children:t,theme:o}=e,s=(0,n.Z)(),a=r.useMemo(()=>{let e=null===s?{...o}:"function"==typeof o?o(s):{...s,...o};return null!=e&&(e[c]=null!==s),e},[o,s]);return(0,i.jsx)(l.Z.Provider,{value:a,children:t})},a=o(34692),d=o(80184);let u=r.createContext();var m=function({value:e,...t}){return(0,i.jsx)(u.Provider,{value:e??!0,...t})},h=o(17804);let f={};function p(e,t,o){let n=arguments.length>3&&void 0!==arguments[3]&&arguments[3];return r.useMemo(()=>{let r=e&&t[e]||t;if("function"==typeof o){let l=o(r),c=e?{...t,[e]:l}:l;return n?()=>c:c}return e?{...t,[e]:o}:{...t,...o}},[e,t,o,n])}var S=function(e){let{children:t,theme:o,themeId:r}=e,l=(0,d.default)(f),c=(0,n.Z)()||f,u=p(r,l,o),S=p(r,c,o,!0),g="rtl"===u.direction;return(0,i.jsx)(s,{theme:S,children:(0,i.jsx)(a.T.Provider,{value:u,children:(0,i.jsx)(m,{value:g,children:(0,i.jsx)(h.Z,{value:null==u?void 0:u.components,children:t})})})})}},50789:function(e,t,o){o.d(t,{default:function(){return s}});var r=o(2265),n=o(16639);function l(e){if("undefined"!=typeof window&&"function"==typeof window.matchMedia&&"system"===e)return window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}function c(e,t){return"light"===e.mode||"system"===e.mode&&"light"===e.systemMode?t("light"):"dark"===e.mode||"system"===e.mode&&"dark"===e.systemMode?t("dark"):void 0}function i(e,t){let o;if("undefined"!=typeof window){try{(o=localStorage.getItem(e)||void 0)||localStorage.setItem(e,t)}catch(e){}return o||t}}function s(e){let{defaultMode:t="light",defaultLightColorScheme:o,defaultDarkColorScheme:s,supportedColorSchemes:a=[],modeStorageKey:d=n.RI,colorSchemeStorageKey:u=n.Wp,storageWindow:m="undefined"==typeof window?void 0:window}=e,h=a.join(","),f=a.length>1,[p,S]=r.useState(()=>{let e=i(d,t),r=i("".concat(u,"-light"),o),n=i("".concat(u,"-dark"),s);return{mode:e,systemMode:l(e),lightColorScheme:r,darkColorScheme:n}}),[,g]=r.useState(!1),y=r.useRef(!1);r.useEffect(()=>{f&&g(!0),y.current=!0},[f]);let v=c(p,e=>"light"===e?p.lightColorScheme:"dark"===e?p.darkColorScheme:void 0),k=r.useCallback(e=>{S(o=>{if(e===o.mode)return o;let r=null!=e?e:t;try{localStorage.setItem(d,r)}catch(e){}return{...o,mode:r,systemMode:l(r)}})},[d,t]),C=r.useCallback(e=>{e?"string"==typeof e?e&&!h.includes(e)?console.error("`".concat(e,"` does not exist in `theme.colorSchemes`.")):S(t=>{let o={...t};return c(t,t=>{try{localStorage.setItem("".concat(u,"-").concat(t),e)}catch(e){}"light"===t&&(o.lightColorScheme=e),"dark"===t&&(o.darkColorScheme=e)}),o}):S(t=>{let r={...t},n=null===e.light?o:e.light,l=null===e.dark?s:e.dark;if(n){if(h.includes(n)){r.lightColorScheme=n;try{localStorage.setItem("".concat(u,"-light"),n)}catch(e){}}else console.error("`".concat(n,"` does not exist in `theme.colorSchemes`."))}if(l){if(h.includes(l)){r.darkColorScheme=l;try{localStorage.setItem("".concat(u,"-dark"),l)}catch(e){}}else console.error("`".concat(l,"` does not exist in `theme.colorSchemes`."))}return r}):S(e=>{try{localStorage.setItem("".concat(u,"-light"),o),localStorage.setItem("".concat(u,"-dark"),s)}catch(e){}return{...e,lightColorScheme:o,darkColorScheme:s}})},[h,u,o,s]),b=r.useCallback(e=>{"system"===p.mode&&S(t=>{let o=(null==e?void 0:e.matches)?"dark":"light";return t.systemMode===o?t:{...t,systemMode:o}})},[p.mode]),x=r.useRef(b);return x.current=b,r.useEffect(()=>{if("function"!=typeof window.matchMedia||!f)return;let e=function(){for(var e=arguments.length,t=Array(e),o=0;o<e;o++)t[o]=arguments[o];return x.current(...t)},t=window.matchMedia("(prefers-color-scheme: dark)");return t.addListener(e),e(t),()=>{t.removeListener(e)}},[f]),r.useEffect(()=>{if(m&&f){let e=e=>{let o=e.newValue;"string"==typeof e.key&&e.key.startsWith(u)&&(!o||h.match(o))&&(e.key.endsWith("light")&&C({light:o}),e.key.endsWith("dark")&&C({dark:o})),e.key===d&&(!o||["light","dark","system"].includes(o))&&k(o||t)};return m.addEventListener("storage",e),()=>{m.removeEventListener("storage",e)}}},[C,k,d,u,h,t,m,f]),{...p,mode:y.current||!f?p.mode:void 0,systemMode:y.current||!f?p.systemMode:void 0,colorScheme:y.current||!f?v:void 0,setMode:k,setColorScheme:C}}},99376:function(e,t,o){var r=o(35475);o.o(r,"useRouter")&&o.d(t,{useRouter:function(){return r.useRouter}}),o.o(r,"useServerInsertedHTML")&&o.d(t,{useServerInsertedHTML:function(){return r.useServerInsertedHTML}})}}]);