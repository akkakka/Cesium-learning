/**
 * @license
 * Cesium - https://github.com/CesiumGS/cesium
 * Version 1.118
 *
 * Copyright 2011-2022 Cesium Contributors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * Columbus View (Pat. Pend.)
 *
 * Portions licensed separately.
 * See https://github.com/CesiumGS/cesium/blob/main/LICENSE.md for full licensing details.
 */

import{a as tt}from"./chunk-VKVIYER6.js";import{a as At}from"./chunk-4RS52VIY.js";import{a as yt}from"./chunk-KGSZTFHZ.js";import{a as G}from"./chunk-DNL2WDRL.js";import{a as z}from"./chunk-QVEE4QL2.js";import{a as at}from"./chunk-5ENAGXBI.js";import{a as ht}from"./chunk-Z7B2VEL5.js";import{b as mt,c as st,d as F}from"./chunk-PWPX3224.js";import{a as dt,d as rt}from"./chunk-46KFVW24.js";import{f as it,h as bt}from"./chunk-TVO2A75R.js";import{a as S}from"./chunk-KKKPU2CI.js";import{a,b as _t,c as Q,d as v,e as R}from"./chunk-4EI6PP43.js";import{a as I}from"./chunk-3T4KR75X.js";import{a as T}from"./chunk-4YLYA3DC.js";import{a as nt,b as H}from"./chunk-6RGNWVZ2.js";import{e as K}from"./chunk-IALXUAD4.js";var et=new a,pt=new a,xt=new a,wt=new a,w=new Q,Mt=new R,Vt=new R,gt=new it,Tt=new a,Nt=new a,Et=new a,lt=new _t,Pt=new a,St=new Q,Ft=new Q;function Ot(o,e,t){let n=e.vertexFormat,s=e.center,i=e.semiMajorAxis,r=e.semiMinorAxis,f=e.ellipsoid,h=e.stRotation,E=t?o.length/3*2:o.length/3,g=e.shadowVolume,c=n.st?new Float32Array(E*2):void 0,l=n.normal?new Float32Array(E*3):void 0,A=n.tangent?new Float32Array(E*3):void 0,x=n.bitangent?new Float32Array(E*3):void 0,O=g?new Float32Array(E*3):void 0,B=0,b=Tt,M=Nt,d=Et,_=new dt(f),L=_.project(f.cartesianToCartographic(s,lt),Pt),J=f.scaleToGeodeticSurface(s,et);f.geodeticSurfaceNormal(J,J);let Z=Mt,W=Vt;if(h!==0){let m=it.fromAxisAngle(J,h,gt);Z=R.fromQuaternion(m,Z),m=it.fromAxisAngle(J,-h,gt),W=R.fromQuaternion(m,W)}else Z=R.clone(R.IDENTITY,Z),W=R.clone(R.IDENTITY,W);let k=Q.fromElements(Number.POSITIVE_INFINITY,Number.POSITIVE_INFINITY,St),q=Q.fromElements(Number.NEGATIVE_INFINITY,Number.NEGATIVE_INFINITY,Ft),j=o.length,y=t?j:0,p=y/3*2;for(let m=0;m<j;m+=3){let u=m+1,N=m+2,D=a.fromArray(o,m,et);if(n.st){let P=R.multiplyByVector(Z,D,pt),C=_.project(f.cartesianToCartographic(P,lt),xt);a.subtract(C,L,C),w.x=(C.x+i)/(2*i),w.y=(C.y+r)/(2*r),k.x=Math.min(w.x,k.x),k.y=Math.min(w.y,k.y),q.x=Math.max(w.x,q.x),q.y=Math.max(w.y,q.y),t&&(c[B+p]=w.x,c[B+1+p]=w.y),c[B++]=w.x,c[B++]=w.y}(n.normal||n.tangent||n.bitangent||g)&&(b=f.geodeticSurfaceNormal(D,b),g&&(O[m+y]=-b.x,O[u+y]=-b.y,O[N+y]=-b.z),(n.normal||n.tangent||n.bitangent)&&((n.tangent||n.bitangent)&&(M=a.normalize(a.cross(a.UNIT_Z,b,M),M),R.multiplyByVector(W,M,M)),n.normal&&(l[m]=b.x,l[u]=b.y,l[N]=b.z,t&&(l[m+y]=-b.x,l[u+y]=-b.y,l[N+y]=-b.z)),n.tangent&&(A[m]=M.x,A[u]=M.y,A[N]=M.z,t&&(A[m+y]=-M.x,A[u+y]=-M.y,A[N+y]=-M.z)),n.bitangent&&(d=a.normalize(a.cross(b,M,d),d),x[m]=d.x,x[u]=d.y,x[N]=d.z,t&&(x[m+y]=d.x,x[u+y]=d.y,x[N+y]=d.z))))}if(n.st){j=c.length;for(let m=0;m<j;m+=2)c[m]=(c[m]-k.x)/(q.x-k.x),c[m+1]=(c[m+1]-k.y)/(q.y-k.y)}let V=new ht;if(n.position){let m=tt.raisePositionsToHeight(o,e,t);V.position=new F({componentDatatype:S.DOUBLE,componentsPerAttribute:3,values:m})}if(n.st&&(V.st=new F({componentDatatype:S.FLOAT,componentsPerAttribute:2,values:c})),n.normal&&(V.normal=new F({componentDatatype:S.FLOAT,componentsPerAttribute:3,values:l})),n.tangent&&(V.tangent=new F({componentDatatype:S.FLOAT,componentsPerAttribute:3,values:A})),n.bitangent&&(V.bitangent=new F({componentDatatype:S.FLOAT,componentsPerAttribute:3,values:x})),g&&(V.extrudeDirection=new F({componentDatatype:S.FLOAT,componentsPerAttribute:3,values:O})),t&&K(e.offsetAttribute)){let m=new Uint8Array(E);if(e.offsetAttribute===G.TOP)m=m.fill(1,0,E/2);else{let u=e.offsetAttribute===G.NONE?0:1;m=m.fill(u)}V.applyOffset=new F({componentDatatype:S.UNSIGNED_BYTE,componentsPerAttribute:1,values:m})}return V}function jt(o){let e=new Array(12*(o*(o+1))-6),t=0,n,s,i,r,f;for(n=0,i=1,r=0;r<3;r++)e[t++]=i++,e[t++]=n,e[t++]=i;for(r=2;r<o+1;++r){for(i=r*(r+1)-1,n=(r-1)*r-1,e[t++]=i++,e[t++]=n,e[t++]=i,s=2*r,f=0;f<s-1;++f)e[t++]=i,e[t++]=n++,e[t++]=n,e[t++]=i++,e[t++]=n,e[t++]=i;e[t++]=i++,e[t++]=n,e[t++]=i}for(s=o*2,++i,++n,r=0;r<s-1;++r)e[t++]=i,e[t++]=n++,e[t++]=n,e[t++]=i++,e[t++]=n,e[t++]=i;for(e[t++]=i,e[t++]=n++,e[t++]=n,e[t++]=i++,e[t++]=n++,e[t++]=n,++n,r=o-1;r>1;--r){for(e[t++]=n++,e[t++]=n,e[t++]=i,s=2*r,f=0;f<s-1;++f)e[t++]=i,e[t++]=n++,e[t++]=n,e[t++]=i++,e[t++]=n,e[t++]=i;e[t++]=n++,e[t++]=n++,e[t++]=i++}for(r=0;r<3;r++)e[t++]=n++,e[t++]=n,e[t++]=i;return e}var X=new a;function Dt(o){let e=o.center;X=a.multiplyByScalar(o.ellipsoid.geodeticSurfaceNormal(e,X),o.height,X),X=a.add(e,X,X);let t=new rt(X,o.semiMajorAxis),n=tt.computeEllipsePositions(o,!0,!1),s=n.positions,i=n.numPts,r=Ot(s,o,!1),f=jt(i);return f=at.createTypedArray(s.length/3,f),{boundingSphere:t,attributes:r,indices:f}}function vt(o,e){let t=e.vertexFormat,n=e.center,s=e.semiMajorAxis,i=e.semiMinorAxis,r=e.ellipsoid,f=e.height,h=e.extrudedHeight,E=e.stRotation,g=o.length/3*2,c=new Float64Array(g*3),l=t.st?new Float32Array(g*2):void 0,A=t.normal?new Float32Array(g*3):void 0,x=t.tangent?new Float32Array(g*3):void 0,O=t.bitangent?new Float32Array(g*3):void 0,B=e.shadowVolume,b=B?new Float32Array(g*3):void 0,M=0,d=Tt,_=Nt,L=Et,J=new dt(r),Z=J.project(r.cartesianToCartographic(n,lt),Pt),W=r.scaleToGeodeticSurface(n,et);r.geodeticSurfaceNormal(W,W);let k=it.fromAxisAngle(W,E,gt),q=R.fromQuaternion(k,Mt),j=Q.fromElements(Number.POSITIVE_INFINITY,Number.POSITIVE_INFINITY,St),y=Q.fromElements(Number.NEGATIVE_INFINITY,Number.NEGATIVE_INFINITY,Ft),p=o.length,V=p/3*2;for(let u=0;u<p;u+=3){let N=u+1,D=u+2,P=a.fromArray(o,u,et),C;if(t.st){let ot=R.multiplyByVector(q,P,pt),$=J.project(r.cartesianToCartographic(ot,lt),xt);a.subtract($,Z,$),w.x=($.x+s)/(2*s),w.y=($.y+i)/(2*i),j.x=Math.min(w.x,j.x),j.y=Math.min(w.y,j.y),y.x=Math.max(w.x,y.x),y.y=Math.max(w.y,y.y),l[M+V]=w.x,l[M+1+V]=w.y,l[M++]=w.x,l[M++]=w.y}P=r.scaleToGeodeticSurface(P,P),C=a.clone(P,pt),d=r.geodeticSurfaceNormal(P,d),B&&(b[u+p]=-d.x,b[N+p]=-d.y,b[D+p]=-d.z);let ct=a.multiplyByScalar(d,f,wt);if(P=a.add(P,ct,P),ct=a.multiplyByScalar(d,h,ct),C=a.add(C,ct,C),t.position&&(c[u+p]=C.x,c[N+p]=C.y,c[D+p]=C.z,c[u]=P.x,c[N]=P.y,c[D]=P.z),t.normal||t.tangent||t.bitangent){L=a.clone(d,L);let ot=a.fromArray(o,(u+3)%p,wt);a.subtract(ot,P,ot);let $=a.subtract(C,P,xt);d=a.normalize(a.cross($,ot,d),d),t.normal&&(A[u]=d.x,A[N]=d.y,A[D]=d.z,A[u+p]=d.x,A[N+p]=d.y,A[D+p]=d.z),t.tangent&&(_=a.normalize(a.cross(L,d,_),_),x[u]=_.x,x[N]=_.y,x[D]=_.z,x[u+p]=_.x,x[u+1+p]=_.y,x[u+2+p]=_.z),t.bitangent&&(O[u]=L.x,O[N]=L.y,O[D]=L.z,O[u+p]=L.x,O[N+p]=L.y,O[D+p]=L.z)}}if(t.st){p=l.length;for(let u=0;u<p;u+=2)l[u]=(l[u]-j.x)/(y.x-j.x),l[u+1]=(l[u+1]-j.y)/(y.y-j.y)}let m=new ht;if(t.position&&(m.position=new F({componentDatatype:S.DOUBLE,componentsPerAttribute:3,values:c})),t.st&&(m.st=new F({componentDatatype:S.FLOAT,componentsPerAttribute:2,values:l})),t.normal&&(m.normal=new F({componentDatatype:S.FLOAT,componentsPerAttribute:3,values:A})),t.tangent&&(m.tangent=new F({componentDatatype:S.FLOAT,componentsPerAttribute:3,values:x})),t.bitangent&&(m.bitangent=new F({componentDatatype:S.FLOAT,componentsPerAttribute:3,values:O})),B&&(m.extrudeDirection=new F({componentDatatype:S.FLOAT,componentsPerAttribute:3,values:b})),K(e.offsetAttribute)){let u=new Uint8Array(g);if(e.offsetAttribute===G.TOP)u=u.fill(1,0,g/2);else{let N=e.offsetAttribute===G.NONE?0:1;u=u.fill(N)}m.applyOffset=new F({componentDatatype:S.UNSIGNED_BYTE,componentsPerAttribute:1,values:u})}return m}function zt(o){let e=o.length/3,t=at.createTypedArray(e,e*6),n=0;for(let s=0;s<e;s++){let i=s,r=s+e,f=(i+1)%e,h=f+e;t[n++]=i,t[n++]=r,t[n++]=f,t[n++]=f,t[n++]=r,t[n++]=h}return t}var ut=new rt,ft=new rt;function Bt(o){let e=o.center,t=o.ellipsoid,n=o.semiMajorAxis,s=a.multiplyByScalar(t.geodeticSurfaceNormal(e,et),o.height,et);ut.center=a.add(e,s,ut.center),ut.radius=n,s=a.multiplyByScalar(t.geodeticSurfaceNormal(e,s),o.extrudedHeight,s),ft.center=a.add(e,s,ft.center),ft.radius=n;let i=tt.computeEllipsePositions(o,!0,!0),r=i.positions,f=i.numPts,h=i.outerPositions,E=rt.union(ut,ft),g=Ot(r,o,!0),c=jt(f),l=c.length;c.length=l*2;let A=r.length/3;for(let _=0;_<l;_+=3)c[_+l]=c[_+2]+A,c[_+1+l]=c[_+1]+A,c[_+2+l]=c[_]+A;let x=at.createTypedArray(A*2/3,c),O=new st({attributes:g,indices:x,primitiveType:mt.TRIANGLES}),B=vt(h,o);c=zt(h);let b=at.createTypedArray(h.length*2/3,c),M=new st({attributes:B,indices:b,primitiveType:mt.TRIANGLES}),d=yt.combineInstances([new At({geometry:O}),new At({geometry:M})]);return{boundingSphere:E,attributes:d[0].attributes,indices:d[0].indices}}function Ct(o,e,t,n,s,i,r){let h=tt.computeEllipsePositions({center:o,semiMajorAxis:e,semiMinorAxis:t,rotation:n,granularity:s},!1,!0).outerPositions,E=h.length/3,g=new Array(E);for(let l=0;l<E;++l)g[l]=a.fromArray(h,l*3);let c=bt.fromCartesianArray(g,i,r);return c.width>I.PI&&(c.north=c.north>0?I.PI_OVER_TWO-I.EPSILON7:c.north,c.south=c.south<0?I.EPSILON7-I.PI_OVER_TWO:c.south,c.east=I.PI,c.west=-I.PI),c}function U(o){o=T(o,T.EMPTY_OBJECT);let e=o.center,t=T(o.ellipsoid,v.WGS84),n=o.semiMajorAxis,s=o.semiMinorAxis,i=T(o.granularity,I.RADIANS_PER_DEGREE),r=T(o.vertexFormat,z.DEFAULT);if(H.defined("options.center",e),H.typeOf.number("options.semiMajorAxis",n),H.typeOf.number("options.semiMinorAxis",s),n<s)throw new nt("semiMajorAxis must be greater than or equal to the semiMinorAxis.");if(i<=0)throw new nt("granularity must be greater than zero.");let f=T(o.height,0),h=T(o.extrudedHeight,f);this._center=a.clone(e),this._semiMajorAxis=n,this._semiMinorAxis=s,this._ellipsoid=v.clone(t),this._rotation=T(o.rotation,0),this._stRotation=T(o.stRotation,0),this._height=Math.max(h,f),this._granularity=i,this._vertexFormat=z.clone(r),this._extrudedHeight=Math.min(h,f),this._shadowVolume=T(o.shadowVolume,!1),this._workerName="createEllipseGeometry",this._offsetAttribute=o.offsetAttribute,this._rectangle=void 0,this._textureCoordinateRotationPoints=void 0}U.packedLength=a.packedLength+v.packedLength+z.packedLength+9;U.pack=function(o,e,t){return H.defined("value",o),H.defined("array",e),t=T(t,0),a.pack(o._center,e,t),t+=a.packedLength,v.pack(o._ellipsoid,e,t),t+=v.packedLength,z.pack(o._vertexFormat,e,t),t+=z.packedLength,e[t++]=o._semiMajorAxis,e[t++]=o._semiMinorAxis,e[t++]=o._rotation,e[t++]=o._stRotation,e[t++]=o._height,e[t++]=o._granularity,e[t++]=o._extrudedHeight,e[t++]=o._shadowVolume?1:0,e[t]=T(o._offsetAttribute,-1),e};var Rt=new a,It=new v,Lt=new z,Y={center:Rt,ellipsoid:It,vertexFormat:Lt,semiMajorAxis:void 0,semiMinorAxis:void 0,rotation:void 0,stRotation:void 0,height:void 0,granularity:void 0,extrudedHeight:void 0,shadowVolume:void 0,offsetAttribute:void 0};U.unpack=function(o,e,t){H.defined("array",o),e=T(e,0);let n=a.unpack(o,e,Rt);e+=a.packedLength;let s=v.unpack(o,e,It);e+=v.packedLength;let i=z.unpack(o,e,Lt);e+=z.packedLength;let r=o[e++],f=o[e++],h=o[e++],E=o[e++],g=o[e++],c=o[e++],l=o[e++],A=o[e++]===1,x=o[e];return K(t)?(t._center=a.clone(n,t._center),t._ellipsoid=v.clone(s,t._ellipsoid),t._vertexFormat=z.clone(i,t._vertexFormat),t._semiMajorAxis=r,t._semiMinorAxis=f,t._rotation=h,t._stRotation=E,t._height=g,t._granularity=c,t._extrudedHeight=l,t._shadowVolume=A,t._offsetAttribute=x===-1?void 0:x,t):(Y.height=g,Y.extrudedHeight=l,Y.granularity=c,Y.stRotation=E,Y.rotation=h,Y.semiMajorAxis=r,Y.semiMinorAxis=f,Y.shadowVolume=A,Y.offsetAttribute=x===-1?void 0:x,new U(Y))};U.computeRectangle=function(o,e){o=T(o,T.EMPTY_OBJECT);let t=o.center,n=T(o.ellipsoid,v.WGS84),s=o.semiMajorAxis,i=o.semiMinorAxis,r=T(o.granularity,I.RADIANS_PER_DEGREE),f=T(o.rotation,0);if(H.defined("options.center",t),H.typeOf.number("options.semiMajorAxis",s),H.typeOf.number("options.semiMinorAxis",i),s<i)throw new nt("semiMajorAxis must be greater than or equal to the semiMinorAxis.");if(r<=0)throw new nt("granularity must be greater than zero.");return Ct(t,s,i,f,r,n,e)};U.createGeometry=function(o){if(o._semiMajorAxis<=0||o._semiMinorAxis<=0)return;let e=o._height,t=o._extrudedHeight,n=!I.equalsEpsilon(e,t,0,I.EPSILON2);o._center=o._ellipsoid.scaleToGeodeticSurface(o._center,o._center);let s={center:o._center,semiMajorAxis:o._semiMajorAxis,semiMinorAxis:o._semiMinorAxis,ellipsoid:o._ellipsoid,rotation:o._rotation,height:e,granularity:o._granularity,vertexFormat:o._vertexFormat,stRotation:o._stRotation},i;if(n)s.extrudedHeight=t,s.shadowVolume=o._shadowVolume,s.offsetAttribute=o._offsetAttribute,i=Bt(s);else if(i=Dt(s),K(o._offsetAttribute)){let r=i.attributes.position.values.length,f=o._offsetAttribute===G.NONE?0:1,h=new Uint8Array(r/3).fill(f);i.attributes.applyOffset=new F({componentDatatype:S.UNSIGNED_BYTE,componentsPerAttribute:1,values:h})}return new st({attributes:i.attributes,indices:i.indices,primitiveType:mt.TRIANGLES,boundingSphere:i.boundingSphere,offsetAttribute:o._offsetAttribute})};U.createShadowVolume=function(o,e,t){let n=o._granularity,s=o._ellipsoid,i=e(n,s),r=t(n,s);return new U({center:o._center,semiMajorAxis:o._semiMajorAxis,semiMinorAxis:o._semiMinorAxis,ellipsoid:s,rotation:o._rotation,stRotation:o._stRotation,granularity:n,extrudedHeight:i,height:r,vertexFormat:z.POSITION_ONLY,shadowVolume:!0})};function kt(o){let e=-o._stRotation;if(e===0)return[0,0,0,1,1,0];let n=tt.computeEllipsePositions({center:o._center,semiMajorAxis:o._semiMajorAxis,semiMinorAxis:o._semiMinorAxis,rotation:o._rotation,granularity:o._granularity},!1,!0).outerPositions,s=n.length/3,i=new Array(s);for(let h=0;h<s;++h)i[h]=a.fromArray(n,h*3);let r=o._ellipsoid,f=o.rectangle;return st._textureCoordinateRotationPoints(i,e,r,f)}Object.defineProperties(U.prototype,{rectangle:{get:function(){return K(this._rectangle)||(this._rectangle=Ct(this._center,this._semiMajorAxis,this._semiMinorAxis,this._rotation,this._granularity,this._ellipsoid)),this._rectangle}},textureCoordinateRotationPoints:{get:function(){return K(this._textureCoordinateRotationPoints)||(this._textureCoordinateRotationPoints=kt(this)),this._textureCoordinateRotationPoints}}});var de=U;export{de as a};
