import{a as c,b as d,e as h}from"./chunk-ORTFMJ5A.js";import{a as o,aa as r,ab as n,b as a,l}from"./chunk-ADCSPYYS.js";var y=(()=>{let e=class e{constructor(){this._theme=n("light"),this._navSettings=n({show:!1,back:!1,title:"",buttons:[]}),this._buttonClicked$=new l,this.buttonClicked$=this._buttonClicked$.asObservable(),this.theme=this._theme.asReadonly(),this.navSettings=this._navSettings.asReadonly()}clearNav(){this._navSettings.set({show:!1,back:!1,title:"",buttons:[]})}updateNav(t){this._navSettings.set(a(o({},t),{buttons:t.buttons?t.buttons.map(s=>a(o({},s),{takeFullWidth:!0})):[]}))}click(t){this._buttonClicked$.next(t)}getThemeOnLoad(){let t=d(h.LS.theme,!0);t&&t==="dark"&&(document.getElementById("body")?.classList.add(t),this._theme.set(t))}toggleTheme(){let t=document.getElementById("body");t&&(t.classList.contains("dark")?(t.classList.remove("dark"),this._theme.set("light")):(t.classList.add("dark"),this._theme.set("dark"))),c(h.LS.theme,JSON.stringify(this.theme()),!0)}};e.\u0275fac=function(s){return new(s||e)},e.\u0275prov=r({token:e,factory:e.\u0275fac,providedIn:"root"});let i=e;return i})();export{y as a};
