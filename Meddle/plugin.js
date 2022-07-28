(function(h,a,c,v,B,y,x,Ne,A,j,F){"use strict";function U(e){return e&&typeof e=="object"&&"default"in e?e:{default:e}}function $(e){if(e&&e.__esModule)return e;var r=Object.create(null);return e&&Object.keys(e).forEach(function(n){if(n!=="default"){var s=Object.getOwnPropertyDescriptor(e,n);Object.defineProperty(r,n,s.get?s:{enumerable:!0,get:function(){return e[n]}})}}),r.default=e,Object.freeze(r)}var t=$(B),d=U(A);const[{getChannel:O},{getGuild:W},{getCurrentUser:D},{getUser:z},{getMessage:R},{getToken:G}]=c.batchFind(({findByProps:e,findByDisplayName:r,findByDisplayNameAll:n})=>{e("hasChannel"),e("getGuild"),e("getCurrentUser"),e("getUser"),e("getMessages"),e("getToken")}),Y={modules:{getChannel:O,getGuild:W,getCurrentUser:D,getUser:z,getMessage:R,getToken:G}};function w(){return a.persist.ghost.generalExposeObject&&!window.Meddle?window.Meddle=Y:!a.persist.ghost.generalExposeObject&&window.Meddle&&delete window.Meddle,()=>{delete window.Meddle}}const[ke,p,J,m,i,N,l,V,k,q,H,K,S,C,L,Q,{GuildFeatures:Se},{joinGuild:X},{getCurrentUser:Z},{findActivity:ee}]=c.batchFind(({findByProps:e,findByDisplayName:r,findByDisplayNameAll:n})=>{r("SettingsView"),e("dirtyDispatch"),r("FormTitle"),r("FormText"),r("FormDivider"),r("Switch"),e("Sizes","Colors","Looks","DropdownSizes"),r("TextInput"),r("TabBar"),e("topPill"),e("tabBar","nowPlayingColumn"),r("UserActivityContainer"),e("userPopout","body"),e("activity","note"),e("scrollerBase","thin"),e("contentImagesProfile"),e("GuildFeatures"),e("joinGuild"),e("getCurrentUser"),e("getApplicationActivities")});function te(e){return t.createElement("div",null,t.createElement(J,{style:{marginBottom:"0.2rem"},tag:"h1"},"Meddle"),t.createElement(m,null,"A tool for those who like to mess with the Maze."))}function re({items:e}){let[r,n]=t.useState(0);return t.createElement("div",null,t.createElement("div",{className:"beef-meddle-card"},t.createElement(te,null),t.createElement(i,{className:"beef-meddle-divider"}),t.createElement(k,{type:q.topPill,className:H.tabBar,selectedItem:r,onItemSelect:n},e.map((s,o)=>t.createElement(k.Item,{id:o},s.text)))),t.createElement(i,{className:"beef-meddle-divider"}),t.createElement("div",{className:"beef-meddle-settings-section beef-meddle-card"},t.createElement(y.ErrorBoundary,null,t.createElement(e[r].component,{goTo:n}))))}function ne({text:e,subtext:r,checked:n,onChange:s}){return t.createElement("div",{class:"beef-meddle-switch"},t.createElement(N,{checked:n,onChange:s}),t.createElement(m,null,e,t.createElement(m,{class:"beef-meddle-subtext"},r)))}function se(e){return t.createElement("div",null,t.createElement(ne,{text:"Expose a Meddle object on the window",subtext:"This contains several utilities such as some common Webpack modules.",checked:a.persist.ghost.generalExposeObject,onChange:r=>{a.persist.store.generalExposeObject=r,w()}}))}const T=c.findByDisplayName("FormText"),ae=c.findByDisplayName("Switch"),ie=c.findByDisplayName("TextInput");c.findByDisplayName("Select",!1).SingleSelect;const I=e=>({display:"flex",alignItems:"center",gap:".5rem",marginBottom:"1rem",marginLeft:e!==void 0?"1rem":0}),le=({k:e,depends:r,children:n})=>d.default.createElement("div",{style:I(r)},d.default.createElement(ae,{checked:a.persist.ghost[e],disabled:r!==void 0&&!a.persist.ghost[r],onChange:s=>a.persist.store[e]=s}),d.default.createElement(T,{children:n})),oe=({k:e,depends:r,children:n})=>d.default.createElement("div",{style:I(r)},d.default.createElement(ie,{value:a.persist.ghost[e],disabled:r!==void 0&&!a.persist.ghost[r],onChange:s=>a.persist.store[e]=s}),d.default.createElement(T,{children:n})),ce=e=>r=>(x.useNest(a.persist),e(r)),de=(e,r=a.persist)=>{for(const n in e)r.ghost[n]===void 0&&(r.store[n]=e[n])};function g({k:e,depends:r,children:n}){return t.createElement("div",{class:"beef-meddle-persist-textbox-wrapper"},t.createElement(oe,{k:e,depends:r},n))}function b({k:e,depends:r,children:n}){return t.createElement("div",{class:"beef-meddle-persist-switch-wrapper"},t.createElement(le,{k:e,depends:r},n))}function me(e){return t.createElement("div",null,t.createElement("div",{class:"beef-meddle-column"},t.createElement(b,{k:"dispatchLogEnabled"},"Log all FluxDispatcher calls to console"),t.createElement(b,{k:"dispatchWhiteListMode"},"Dispatch logger whitelist mode")),t.createElement(i,{className:"beef-meddle-divider"}),t.createElement("div",{class:"beef-meddle-column"},t.createElement(g,{k:"dispatchIgnoreList"},"FluxDispatcher calls to hide when not in whitelist mode (comma separated)"),t.createElement(g,{k:"dispatchWhiteList"},"FluxDispatcher calls to allow when in whitelist mode (comma separated)")))}function M({text:e,color:r,size:n,look:s,func:o,style:we}){return t.createElement(l,{style:we,color:l.Colors[r]||l.Colors.BRAND,size:l.Sizes[n]||l.Sizes.SMALL,look:l.Looks[s]||l.Looks.FILLED,onClick:o},e)}function ue(e){return t.createElement("div",null,t.createElement(g,{k:"serverId"},"Server ID"),t.createElement(i,{className:"beef-meddle-divider"}),t.createElement("div",{class:"beef-meddle-row"},t.createElement(b,{k:"serverLurkMode"},"Join as lurker"),t.createElement(M,{style:{marginLeft:"auto"},text:"Join",size:"SMALL",func:async()=>{X(a.persist.ghost.serverId,{lurker:a.persist.ghost.serverLurkMode})}})))}const P={isPlaying:!1,position:0,track:{name:"Song Name",album:{image:{url:"https://raw.githubusercontent.com/Cumcord/assets/main/logo/filled.svg"},name:"Album Name"},duration:0,artists:[{name:"Artist Name",external_urls:{},href:{},id:"stub",type:"artist",url:"Artist URL"}]}},f=j.nests.make(Object.assign({},P));function fe(e){for(let r of Object.keys(f.ghost))f.store[r]=e.track||e.context?e[r]:P[r]}function u({value:e,onChange:r,variant:n="column",fixedWidth:s,children:o}){if(n!=="column"&&n!=="row")throw new Error("Component Error - Textbox: variant should be column (default) or row");return t.createElement("div",{class:n==="column"?"beef-meddle-column":"beef-meddle-row beef-meddle-center"},t.createElement(m,{style:s?{width:s}:{}},o),t.createElement(V,{value:e,onChange:r}))}function pe(e){x.useNest(f);const r=f.store,n=f.ghost;return t.createElement("div",null,t.createElement("div",{className:"beef-meddle-row"},t.createElement("div",{className:"beef-meddle-row beef-meddle-center"},t.createElement("img",{src:n.track.album.image.url,height:"120",width:"120"}),t.createElement("div",{className:"beef-meddle-column"},t.createElement(u,{fixedWidth:"0.75rem",variant:"row",value:n.track.name,onChange:s=>{r.track.name=s}}),t.createElement(u,{fixedWidth:"0.75rem",variant:"row",value:n.track.artists.map(s=>s.name).join(", "),onChange:s=>{r.track.artists=s.split(", ").map(o=>({name:o,external_urls:{},href:{},id:"stub",type:"artist",url:"Artist URL"}))}},"by"),t.createElement(u,{fixedWidth:"0.75rem",variant:"row",value:n.track.album.name,onChange:s=>{r.track.album.name=s}},"on"))),t.createElement("div",{className:"beef-meddle-column",style:{marginLeft:"auto"}},t.createElement(M,{text:"Dispatch",size:"MEDIUM",func:async()=>{p.dispatch({...n,type:"SPOTIFY_PLAYER_STATE"})}}))),t.createElement(i,{className:"beef-meddle-divider"}),t.createElement("div",{className:"beef-meddle-row"},t.createElement("div",{className:"beef-meddle-column"},t.createElement(u,{fixedWidth:"3rem",variant:"row",value:n.position,onChange:s=>{r.position=isNaN(s)||!s?void 0:parseInt(s)}},"Position (ms)"),t.createElement(u,{fixedWidth:"3rem",variant:"row",value:n.track.duration,onChange:s=>{r.track.duration=isNaN(s)||!s?void 0:parseInt(s)}},"Duration (ms)")),t.createElement("div",{className:"beef-meddle-row beef-meddle-center",style:{marginLeft:"auto"}},t.createElement(m,null,"Playing"),t.createElement(N,{checked:n.isPlaying,onChange:s=>{r.isPlaying=s}}))),t.createElement(i,{className:"beef-meddle-divider"}),t.createElement(u,{value:n.track.album.image.url,onChange:s=>{r.track.album.image.url=s}},"Image URL (only supports ",t.createElement("code",null,"https://i.scdn.co/image/*")," urls)"),t.createElement(i,{className:"beef-meddle-divider"}),t.createElement(m,{className:"beef-meddle-subtext"},"If this is out of date/incorrect, try updating the current state of your Spotify player."),t.createElement("div",{className:`beef-meddle-preview ${[S.userPopout,S.body,L.scrollerBase,L.thin,C.bodyInnerWrapper,C.activity,Q.activityUserPopout].join(" ")}`},t.createElement(K,{type:"UserPopout",user:Z(),activity:ee(s=>s.type===constants.ActivityTypes.LISTENING)})))}function he(e){return t.createElement(y.ErrorBoundary,null,t.createElement("div",{className:"beef-meddle-settings"},t.createElement(re,{items:[{text:"General",component:se},{text:"FluxDispatcher",component:me},{text:"Servers",component:ue},{text:"Spotify",component:pe}]})))}var ge=()=>F.registerSection("MEDDLE","Meddle",ce(he));function be(){return v.after("dispatch",p,e=>{!a.persist.ghost.dispatchLogEnabled||a.persist.ghost.dispatchWhiteListMode&&!a.persist.ghost.dispatchWhiteList.split(",").includes(e[0].type)||a.persist.ghost.dispatchIgnoreList.split(",").includes(e[0].type)||console.log(e[0])})}const E=new Map;E.set("SPOTIFY_PLAYER_STATE",fe);function Ee(){for(const[e,r]of E)p.subscribe(e,r);return()=>{for(const[e,r]of E)p.unsubscribe(e,r)}}var ve=()=>v.injectCSS(".beef-meddle-row{display:flex;gap:.5rem}.beef-meddle-column{display:flex;flex-direction:column;gap:.5rem}.beef-meddle-divider{margin-top:.5rem;margin-bottom:.5rem}.beef-meddle-subtext{font-size:x-small;color:var(--text-muted)}.beef-meddle-card{padding:1rem;border-radius:.5rem;background-color:var(--background-secondary)}.beef-meddle-center{display:flex;justify-content:center;align-items:center}.beef-meddle-persist-textbox-wrapper *{display:flex;flex-direction:column-reverse}.beef-meddle-persist-textbox-wrapper * *{width:100%}.beef-meddle-persist-switch-wrapper{display:flex}.beef-meddle-persist-switch-wrapper *{margin-bottom:0!important;align-items:center}.beef-meddle-switch{display:flex;align-items:center;gap:.5rem}.beef-meddle-preview{width:300px;padding-top:16px;margin:16px auto 0}.beef-meddle-preview div img{top:16px!important;right:16px!important}");de({dispatchLogEnabled:!1,dispatchIgnoreList:"",dispatchWhiteList:"",dispatchWhiteListMode:!1,serverId:"",serverLurkMode:!1,generalExposeObject:!0});const ye=[w(),ge(),be(),Ee(),ve()];function xe(){_.forEachRight(ye,e=>e())}return h.onUnload=xe,Object.defineProperty(h,"__esModule",{value:!0}),h})({},cumcord.pluginData,cumcord.modules.webpack,cumcord.patcher,cumcord.modules.common.React,cumcord.ui.components,cumcord.utils,cumcord.plugins,cumcord.modules.common.React,cumcord.modules.internal,cumcord.ui.userSettings);
