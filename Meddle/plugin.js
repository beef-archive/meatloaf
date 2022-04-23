(function(c,l,m,u,i,g){"use strict";function f(e){if(e&&e.__esModule)return e;var s=Object.create(null);return e&&Object.keys(e).forEach(function(n){if(n!=="default"){var r=Object.getOwnPropertyDescriptor(e,n);Object.defineProperty(s,n,r.get?r:{enumerable:!0,get:function(){return e[n]}})}}),s.default=e,Object.freeze(s)}var t=f(m);const[b,h,{GuildFeatures:z},p,d,E,y,o]=u.batchFind(({findByProps:e,findByDisplayName:s})=>{s("SettingsView"),e("dirtyDispatch"),e("GuildFeatures"),s("FormTitle"),s("FormText"),s("FormDivider"),s("Switch"),e("Sizes","Colors","Looks","DropdownSizes")}),a=[],D=[];var S=()=>l.after("dispatch",h,e=>{!i.persist.ghost.logDispatch||D?.includes(e[0].type)||a.push(e[0])});const v=({k:e,children:s})=>t.createElement("div",{className:"beef-meddle-settings-row"},t.createElement(y,{checked:i.persist.ghost[e],onChange:n=>i.persist.store[e]=n}),t.createElement(d,null,s));function F(e){return t.createElement(g.ErrorBoundary,null,t.createElement("div",{className:"beef-meddle-settings"},t.createElement("div",{className:"beef-meddle-settings-title"},t.createElement(p,{tag:"h1"},"Meddle"),t.createElement(d,null,"A tool for those who like to mess with the Maze."),t.createElement(d,{className:"beef-meddle-settings-title-subtext"},"Currently very WIP"),t.createElement(E,null)),t.createElement(v,{k:"logDispatch"},"Log all FluxDispatcher calls")),t.createElement(o,{color:o.Colors.BRAND,size:o.Sizes.SMALL,look:o.Looks.FILLED,className:"beef-meddle-settings-button",onClick:()=>{console.log(a)}},"Show all logged FluxDispatcher calls in console"))}var w=()=>l.findAndPatch(()=>b,e=>l.after("getPredicateSections",e.prototype,(s,n)=>{if(n[1]?.section!="My Account")return;let r=n.findIndex(k=>k.section=="changelog")-1;const j=[{section:"DIVIDER"},{section:"HEADER",label:"Meddle"},{section:"beef_meddle_SETTINGS",label:"Settings",element:F}];return n.splice(r,0,...j),n})),x=()=>l.injectCSS(".beef-meddle-settings .beef-meddle-settings-title{margin-bottom:1rem}.beef-meddle-settings .beef-meddle-settings-title h1{margin-bottom:.2rem}.beef-meddle-settings .beef-meddle-settings-title :nth-child(3){margin-bottom:.5rem;color:var(--text-muted)}.beef-meddle-settings .beef-meddle-settings-title .beef-meddle-settings-title-subtext{font-size:x-small}.beef-meddle-settings .beef-meddle-settings-row{display:flex;align-items:center;gap:.5rem;margin-bottom:1rem}");i.persist.ghost.logDispatch??=!0;const L=[w(),S(),x()];function N(){_.forEachRight(L,e=>e())}return c.onUnload=N,Object.defineProperty(c,"__esModule",{value:!0}),c})({},cumcord.patcher,cumcord.modules.common.React,cumcord.modules.webpack,cumcord.pluginData,cumcord.ui.components);