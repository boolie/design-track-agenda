"use strict";var precacheConfig=[["assets/gfx/icons/aeroplane.svg","54ba841b7dfab4abe6c854b656cd19a1"],["assets/gfx/icons/close.svg","553f42d3d62e0f12425dbd207a70cbfd"],["assets/gfx/icons/coffee.svg","7c1436d8bed33958fd20b5c39dfeecc6"],["assets/gfx/icons/help-circle.svg","19f1e9ddf0d3072ad86aff856aa149f7"],["assets/gfx/icons/people.svg","eb1bf28cea4ab974907fa622a7c6fe18"],["assets/gfx/icons/product-mobile.svg","541e167d3f72faf3bb9ee0ab353371d4"],["assets/gfx/icons/resource-blog.svg","0a1a8e668653be45c5e2be093ab9b67a"],["assets/gfx/icons/star.svg","e57166c837bfc82a5fd8fba4a663405e"],["assets/gfx/pega-logo.svg","6262b54dab4246af83e01bdf45163be5"],["assets/js/lib/jquery-3.2.1.min.js","27a8f25e65bfe1872ebd62e021a0c6ca"],["index.html","162eedc3f19971d9b2bd297bd2cf40d8"],["main.ae9b484feb9aa96e83db.bundle.js","d3fc024ec265d4837d4243ec76552fe7"],["main.ae9b484feb9aa96e83db.styles.css","59b53ac4fb3d842818035996b089ff0a"]],cacheName="sw-precache-v3-pegaworld-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,n){var t=new URL(e);return"/"===t.pathname.slice(-1)&&(t.pathname+=n),t.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(n){return new Response(n,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,n,t,r){var s=new URL(e);return r&&s.pathname.match(r)||(s.search+=(s.search?"&":"")+encodeURIComponent(n)+"="+encodeURIComponent(t)),s.toString()},isPathWhitelisted=function(e,n){if(0===e.length)return!0;var t=new URL(n).pathname;return e.some(function(e){return t.match(e)})},stripIgnoredUrlParameters=function(e,n){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return n.every(function(n){return!n.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var n=e[0],t=e[1],r=new URL(n,self.location),s=createCacheKey(r,hashParamName,t,/\.\w{8}\./);return[r.toString(),s]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(n){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!n.has(t)){var r=new Request(t,{credentials:"same-origin"});return fetch(r).then(function(n){if(!n.ok)throw new Error("Request for "+t+" returned a response with status "+n.status);return cleanResponse(n).then(function(n){return e.put(t,n)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var n=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(t){return Promise.all(t.map(function(t){if(!n.has(t.url))return e.delete(t)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var n,t=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching),r="index.html";(n=urlsToCacheKeys.has(t))||(t=addDirectoryIndex(t,r),n=urlsToCacheKeys.has(t));0,n&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(t)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(n){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,n),fetch(e.request)}))}});