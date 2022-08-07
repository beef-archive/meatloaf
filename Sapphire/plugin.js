(function(f,k,p,w,y,x,M,z,P){"use strict";function i(e){return e&&typeof e=="object"&&"default"in e?e:{default:e}}function D(e){if(e&&e.__esModule)return e;var t=Object.create(null);return e&&Object.keys(e).forEach(function(n){if(n!=="default"){var o=Object.getOwnPropertyDescriptor(e,n);Object.defineProperty(t,n,o.get?o:{enumerable:!0,get:function(){return e[n]}})}}),t.default=e,Object.freeze(t)}var r=D(k),c=i(p),b=i(w),L=i(x),s=i(M);const[_e,N,V,B,m,H,[,v],g,u,W,U,Ce,Ae,je,Ee,{BOT_AVATARS:Ie},{createBotMessage:G},{getChannelId:T},{receiveMessage:J},{showChangeLog:q,hideChangeLog:K},{changeLog:d}]=p.batchFind(({findByProps:e,findByDisplayName:t,findByDisplayNameAll:n})=>{t("FormTitle"),t("FormText"),t("FormDivider"),t("FormItem"),e("dividerDefault","titleDefault"),e("formText","placeholder"),n("Markdown"),e("Sizes","Colors","Looks","DropdownSizes"),t("Flex"),e("marginTop20","marginBottom8"),t("SwitchItem"),t("Tooltip"),t("Science"),t("InfoFilled"),t("WarningCircle"),e("BOT_AVATARS","DEFAULT_AVATARS"),e("createBotMessage"),e("getChannelId","getVoiceChannelId"),e("receiveMessage","sendBotMessage"),e("showChangeLog"),e("changeLog")});function C(){return r.createElement(V,{className:m.dividerDefault})}function A({children:e,text:t,subtext:n}){return r.createElement(B,{className:[u.Direction.VERTICAL,u.Justify.START,u.Align.STRETCH,u.Wrap.NO_WRAP,W.marginBottom20].join(" ")},r.createElement("div",{style:{display:"flex",justifyContent:"space-between"}},r.createElement("div",null,r.createElement("div",{className:m.labelRow,style:{marginBottom:"4px"}},r.createElement("label",{className:m.title},t)),r.createElement(N,{className:H.description},r.createElement(v,{className:"settings-note-markdown"},n))),e),r.createElement(C,null))}function Q({text:e,subtext:t,danger:n,disabled:o,onclick:a,buttonText:l}){return r.createElement(A,{text:e,subtext:t},r.createElement(g,{color:n?g.Colors.RED:g.Colors.BRAND,disabled:o,onClick:()=>a()},l))}function X({text:e,subtext:t,isToggled:n,onToggle:o,disabled:a}){const[l,Te]=r.useState(n()||!1);return r.createElement(U,{value:l,note:r.createElement(v,null,t),disabled:a?a():!1,onChange:F=>{Te(F),o(F)}},e)}const j=new Map;function Y(e,t,n,o=!1,a=!1){const l=o?"before":a?"instead":"after";return b.default[l](t,e,n)}function Z(e,t,n,o,a=!1){const l=a?"before":"after";j.set(e,b.default[l](n,t,o))}function $(e){const t=j.get(e);return t?(t(),!0):!1}var ee=Object.freeze({__proto__:null,patch:Y,inject:Z,uninject:$});const E=new Map;function te(e,t,n,o=[]){E.set(e,y.addCommand({name:e,description:t,args:o,handler:n}))}function ne(e){E.get(e)()}var oe=Object.freeze({__proto__:null,add:te,remove:ne});function ae(e,t="Sapphire"){const n=G(T(),"");typeof e=="string"?n.content=e:n.embeds.push(e),n.state,n.author.id="1",n.author.bot=!0,n.author.discriminator="6969",n.author.avatar="clyde",n.author.username=t,J(T(),n)}var re={...ee,commands:oe,internalMessage:ae};const h=()=>Object.keys(c.default.modules).map(e=>c.default.modules[e].exports).filter(e=>e),I=e=>t=>{try{return e(t)}catch{return!1}},S=(e,t=!0)=>{const n=I(e);for(const o of h()){if(t&&o.default&&n(o.default))return o.default;if(n(o))return o}},O=(e,t=!0)=>{const n=I(e),o=[];for(const a of h())t&&a.default&&n(a.default)&&o.push(a.default),n(a)&&o.push(a);return o};var le={all:h,common:L.default,find:S,findAll:O,find:S,findAll:O,findByDisplayName:c.default.findByDisplayName,findByDisplayNameAll:c.default.findByDisplayNameAll,findByModuleId:e=>c.default.modules[e],findByProps:c.default.findByProps,findByPropsAll:c.default.findByPropsAll,findByPrototypes:c.default.findByPrototypes},ce={findInReactTree:s.default.findInReactTree,findInTree:s.default.findInTree,getNodeInternals:e=>e._reactInternalFiber||e._reactInternals,getOwnerInstance:s.default.getOwnerInstance,getReactInstance:s.default.getReactInstance};function ie(e,t){const n=document.createElement("div"),o=z.showToast({title:e,content:t?.subtext||"",duration:t?.duration||3e3});return{toastElem:n,closeFn:o}}let se=Object.assign({},d);function R(e){const t={template:"standard",revision:"1",locale:"en-gb",...e};for(let n of Object.keys(d))delete d[n];for(let n of Object.keys(t))d[n]=t[n]}var ue={showChangelog:q,hideChangelog:K,setChangelog:R,resetChangelog:()=>R(se)};function de(e,t,n,o=void 0,a=void 0){let l;switch(a){case"Brand":l="neutral";break;case"Green":l="confirm";break;case"Red":l="danger";break;default:l="neutral";break}return P.showConfirmationModal({header:t,content:n,confirmText:e,cancelText:o,type:l})}function fe(){return window.goosemod={patcher:re,webpackModules:le,settings:{Items:{divider:C,toggle:X,"text-and-child":A,"text-and-button":Q}},changelog:ue,reactUtils:ce,showToast:ie,confirmDialog:de,_SAPPHIRE:!0},()=>{window.goosemod?._SAPPHIRE&&delete window.goosemod}}const me=eval;function ge(){return fetch("https://goosemod.github.io/topaz/out.js").then(async e=>me(await e.text())),()=>{window.topaz&&(window.topaz.__reloading=!0,window.topaz.purge(),delete window.topaz)}}function he(){const e=document.createElement("frame");e.src="about:blank",document.body.appendChild(e);let t=Object.getOwnPropertyDescriptor(e.contentWindow,"localStorage");return e.remove(),t}var pe=()=>(Object.defineProperty(window,"localStorage",{...he(),_SAPPHIRE:!0}),()=>{window.localStorage._SAPPHIRE&&delete window.localStorage}),we=()=>w.injectCSS(".settings-note-markdown{font-size:inherit;color:inherit!important}.settings-note-markdown,.settings-note-markdown [class*=paragraph-]{margin:0}.beef-sapphire-stub{color:var(--info-warning-foreground);display:flex;gap:.5rem;align-items:center;padding:.25rem}");const be=[pe(),fe(),ge(),we()];function ve(){_.forEachRight(be,e=>e())}return f.onUnload=ve,Object.defineProperty(f,"__esModule",{value:!0}),f})({},cumcord.modules.common.React,cumcord.modules.webpack,cumcord.patcher,cumcord.commands,cumcord.modules.common,cumcord.utils,cumcord.ui.toasts,cumcord.ui.modals);
