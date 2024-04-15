import{a,c as S,e as n}from"./chunk-YJUYSB66.js";import{e as I,g as m}from"./chunk-IPYPKU6N.js";import{b as u}from"./chunk-62N6AU7Z.js";import{J as h,aa as p,fa as l,ga as f}from"./chunk-ADCSPYYS.js";var c={API_HOST:{test_local:"http://localhost:5000/",test_cloud:"http://localhost:5000/",production:"http://localhost:5000/"},USER:{changePassword:""},CAISSE:{caisse:""},AUTHENTICATION:{login:"api/auth/login",logout:"api/logout",refresh:"api/refresh"}};var T=(()=>{let r=class r{constructor(){this._http=f(u),this.API_HOST=c.API_HOST.test_local}getAsset(t,e){return this._http.get(t+this._getId(e))}get(t,e){return this._http.get(this.API_HOST+t+this._getId(e))}post(t,e,o,i){return this._http.post(this.API_HOST+t+this._getId(i),e,{params:o})}patch(t,e,o,i){return this._http.patch(this.API_HOST+t+this._getId(o),e,{params:i})}delete(t,e,o){return this._http.delete(this.API_HOST+t+this._getId(e),{body:o})}_getId(t){return t?`/${t}`:""}};r.\u0275fac=function(e){return new(e||r)},r.\u0275prov=p({token:r,factory:r.\u0275fac,providedIn:"root"});let s=r;return s})();var R=(()=>{let r=class r{constructor(t,e){this._networkService=t,this._router=e,this.isRefreshTokenCalled=!1}login(t,e){this._networkService.post(c.AUTHENTICATION.login,{username:t,password:e}).pipe(h(1)).subscribe({next:o=>{if(o&&o.data){this.isRefreshTokenCalled=!1;let i=JSON.parse(S(o.data));a(n.SS.token,i.accessToken),a(n.SS.username,i.username),a(n.SS.name,i.name),a(n.SS.user,JSON.stringify(i)),this._router.navigateByUrl("/")}}})}refreshToken(){return new Promise((t,e)=>{this._networkService.get(c.AUTHENTICATION.refresh).pipe(h(1)).subscribe({next:o=>{let i=o.accessToken;a(n.SS.token,i),this.isRefreshTokenCalled=!1,t(i)},error:o=>{e(o)}})})}logOut(){sessionStorage.clear(),this._router.navigateByUrl(m.LOGIN.route),this._networkService.get(c.AUTHENTICATION.logout).pipe(h(1)).subscribe()}};r.\u0275fac=function(e){return new(e||r)(l(T),l(I))},r.\u0275prov=p({token:r,factory:r.\u0275fac,providedIn:"root"});let s=r;return s})();export{c as a,T as b,R as c};
