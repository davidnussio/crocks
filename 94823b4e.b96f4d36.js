(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{100:function(e,t,a){"use strict";a.d(t,"a",(function(){return m})),a.d(t,"b",(function(){return j}));var n=a(0),r=a.n(n);function b(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){b(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},b=Object.keys(e);for(n=0;n<b.length;n++)a=b[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(e);for(n=0;n<b.length;n++)a=b[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=r.a.createContext({}),s=function(e){var t=r.a.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},m=function(e){var t=s(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},O=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,b=e.originalType,c=e.parentName,l=o(e,["components","mdxType","originalType","parentName"]),m=s(a),O=n,j=m["".concat(c,".").concat(O)]||m[O]||d[O]||b;return a?r.a.createElement(j,i(i({ref:t},l),{},{components:a})):r.a.createElement(j,i({ref:t},l))}));function j(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var b=a.length,c=new Array(b);c[0]=O;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i.mdxType="string"==typeof e?e:n,c[1]=i;for(var l=2;l<b;l++)c[l]=a[l];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,a)}O.displayName="MDXCreateElement"},81:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return i})),a.d(t,"rightToc",(function(){return o})),a.d(t,"default",(function(){return s}));var n=a(2),r=a(6),b=(a(0),a(100)),c={title:"Transformation Functions",description:"Transformation Functions API",layout:"notopic",functions:["arraytolist","asyncToPromise","eithertoasync","eithertofirst","eithertolast","eithertomaybe","eithertoresult","firsttoasync","firsttoeither","firsttolast","firsttomaybe","firsttoresult","lasttoasync","lasttoeither","lasttofirst","lasttomaybe","lasttoresult","listtoarray","maybetoasync","maybetoeither","maybetofirst","maybetolast","maybetoresult","resulttoasync","resulttoeither","resulttofirst","resulttolast","resulttomaybe","tupletoarray","writertopair"],weight:60},i={unversionedId:"functions/transformation-functions",id:"functions/transformation-functions",isDocsHomePage:!1,title:"Transformation Functions",description:"Transformation Functions API",source:"@site/docs/functions/transformation-functions.md",slug:"/functions/transformation-functions",permalink:"/crocks/docs/functions/transformation-functions",editUrl:"https://github.com/evilsoft/crocks/edit/master/docs/docs/functions/transformation-functions.md",version:"current",sidebar:"sidebar",previous:{title:"Predicate Functions",permalink:"/crocks/docs/functions/predicate-functions"}},o=[{value:"Transformation Signatures",id:"transformation-signatures",children:[]}],l={rightToc:o};function s(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(b.b)("wrapper",Object(n.a)({},l,a,{components:t,mdxType:"MDXLayout"}),Object(b.b)("p",null,"Transformation functions are mostly used to reduce unwanted nesting of similar\ntypes. Take for example the following structure:"),Object(b.b)("pre",null,Object(b.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js",metastring:"runkit",runkit:!0}),"import Either from 'crocks/Either'\nimport Maybe from 'crocks/Maybe'\n\nimport identity from 'crocks/combinators/identity'\nimport map from 'crocks/pointfree/map'\nimport option from 'crocks/pointfree/option'\n\nconst data =\n  Either.of(Maybe.of(3))\n//=> Right Just 3\n\n// mapping on the inner Maybe is tedious at best\ndata\n  .map(map(x => x + 1))   //=> Right Just 4\n  .map(map(x => x * 10))  //=> Right Just 40\n\n// and extraction...super gross\ndata\n  .either(identity, identity)  //=> Just 3\n  .option(0)                   //=> 3\n\n// or\ndata\n  .either(option(0), option(0))  // 3\n")),Object(b.b)("p",null,"The transformation functions, that ship with ",Object(b.b)("inlineCode",{parentName:"p"},"crocks"),", provide a means for\ndealing with this. Using them effectively, can turn the above code into\nsomething more like this:"),Object(b.b)("pre",null,Object(b.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js",metastring:"runkit",runkit:!0}),"import Either from 'crocks/Either'\nimport Maybe from 'crocks/Maybe'\n\nimport identity from 'crocks/combinators/identity'\nimport map from 'crocks/pointfree/map'\nimport maybeToEither from 'crocks/Either/maybeToEither'\n\nconst data =\n  Either.of(Maybe.of(3))      //=> Right Just 3\n    .chain(maybeToEither(0))  //=> Right 3\n\n// mapping on a single Either, much better\ndata\n  .map(x => x + 1)  //=> Right 4\n  .map(x => x * 10) //=> Right 40\n\n// no need to default the Left case anymore\ndata\n  .either(identity, identity)\n//=> 3\n\n// effects of the inner type are applied immediately\nconst nested =\n  Either.of(Maybe.Nothing)\n//=> Right Nothing\n\nconst unnested =\n  nested\n    .chain(maybeToEither(0))\n//=> Left 0\n\n// Always maps, although the inner Maybe skips\nnested\n  .map(map(x => x + 1))        //=> Right Nothing (runs mapping)\n  .map(map(x => x * 10))       //=> Right Nothing (runs mapping)\n  .either(identity, identity)  //=> Nothing\n  .option(0)                   //=> 0\n\n// Never maps on a Left, just skips it\nunnested\n  .map(x => x + 1)             //=> Left 0 (skips mapping)\n  .map(x => x * 10)            //=> Left 0 (skips mapping)\n  .either(identity, identity)  //=> 0\n")),Object(b.b)("p",null,"Not all types can be transformed to and from each other. Some of them are lazy\nand/or asynchronous, or are just too far removed. Also, some transformations\nwill result in a loss of information. Moving from an ",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"../crocks/Either"}),Object(b.b)("inlineCode",{parentName:"a"},"Either"))," to\na ",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"../crocks/Maybe"}),Object(b.b)("inlineCode",{parentName:"a"},"Maybe")),", for instance, would lose the ",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"../crocks/Either#left"}),Object(b.b)("inlineCode",{parentName:"a"},"Left"))," value\nof ",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"../crocks/Either"}),Object(b.b)("inlineCode",{parentName:"a"},"Either"))," as a ",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"../crocks/Maybe"}),Object(b.b)("inlineCode",{parentName:"a"},"Maybe")),"'s first parameter\n(",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"../crocks/Maybe#nothing"}),Object(b.b)("inlineCode",{parentName:"a"},"Nothing")),") is fixed at ",Object(b.b)("inlineCode",{parentName:"p"},"Unit"),". Conversely, if you move the other way\naround, from a ",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"../crocks/Maybe"}),Object(b.b)("inlineCode",{parentName:"a"},"Maybe"))," to an ",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"../crocks/Either"}),Object(b.b)("inlineCode",{parentName:"a"},"Either"))," you must provide a\ndefault ",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"../crocks/Either#left"}),Object(b.b)("inlineCode",{parentName:"a"},"Left"))," value. Which means, if the inner ",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"../crocks/Maybe"}),Object(b.b)("inlineCode",{parentName:"a"},"Maybe"))," results\nin a ",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"../crocks/Maybe#nothing"}),Object(b.b)("inlineCode",{parentName:"a"},"Nothing")),", it will map to ",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"../crocks/Either#left"}),Object(b.b)("inlineCode",{parentName:"a"},"Left"))," of your provided value.\nAs such, not all of these functions are guaranteed isomorphic. With some types\nyou just cannot go back and forth and expect to retain information."),Object(b.b)("p",null,"Each function provides two signatures, one for if a Function is used for the\nsecond argument and another if the source ADT is passed instead. Although it may\nseem strange, this provides some flexibility on how to apply the transformation.\nThe ADT version is great for squishing an already nested type or to perform the\ntransformation in a composition. While the Function version can be used to\nextend an existing function without having to explicitly compose it. Both\nversions can be seen here:"),Object(b.b)("pre",null,Object(b.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js",metastring:"runkit",runkit:!0}),"import Either from 'crocks/Either'\nimport Maybe from 'crocks/Maybe'\nimport Async from 'crocks/Async'\n\nimport safeLift from 'crocks/Maybe/safeLift'\nimport maybeToAsync from 'crocks/Either/maybeToAsync'\nimport eitherToMaybe from 'crocks/Maybe/eitherToMaybe'\nimport compose from 'crocks/helpers/compose'\nimport isNumber from 'crocks/predicates/isNumber'\n\n// Avoid nesting\n// inc :: a -> Maybe Number\nconst inc =\n  safeLift(isNumber, x => x + 1)\n\n// using Function signature\n// asyncInc :: a -> Async Number Number\nconst asyncInc =\n  maybeToAsync(0, inc)\n\n// using ADT signature to compose (extending functions)\n// asyncInc :: a -> Async Number Number\nconst anotherInc =\n  compose(maybeToAsync(0), inc)\n\n// resolveValue :: a -> Async _ a\nconst resolveValue =\n  Async.Resolved\n\nresolveValue(3)                          // Resolved 3\n  .chain(asyncInc)                       // Resolved 4\n  .chain(anotherInc)                     // Resolved 5\n  .chain(compose(maybeToAsync(20), inc)) // Resolved 6\n\nresolveValue('oops')                     // Resolved 'oops'\n  .chain(asyncInc)                       // Rejected 0\n  .chain(anotherInc)                     // Rejected 0\n  .chain(compose(maybeToAsync(20), inc)) // Rejected 0\n\n// Squash existing nesting\n// Just Right 'nice'\nconst good =\n  Maybe.of(Either.Right('nice'))\n\n// Just Left 'not so nice'\nconst bad =\n  Maybe.of(Either.Left('not so nice'))\n\ngood\n  .chain(eitherToMaybe) // Just 'nice'\n\nbad\n  .chain(eitherToMaybe) // Nothing\n")),Object(b.b)("h3",{id:"transformation-signatures"},"Transformation Signatures"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Transform"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"ADT signature"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Function Signature"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Location"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"arrayToList")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(b.b)("inlineCode",{parentName:"td"},"[ a ] -> List a")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(b.b)("inlineCode",{parentName:"td"},"(a -> [ b ]) -> a -> List b")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(b.b)("inlineCode",{parentName:"td"},"crocks/List"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"../crocks/Async#asynctopromise"}),Object(b.b)("inlineCode",{parentName:"a"},"asyncToPromise"))),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(b.b)("inlineCode",{parentName:"td"},"Async e a -> Promise a e")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(b.b)("inlineCode",{parentName:"td"},"(a -> Async e b) -> a -> Promise b e")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(b.b)("inlineCode",{parentName:"td"},"crocks/Async"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"../crocks/Async#eithertoasync"}),Object(b.b)("inlineCode",{parentName:"a"},"eitherToAsync"))),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(b.b)("inlineCode",{parentName:"td"},"Either e a -> Async e a")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(b.b)("inlineCode",{parentName:"td"},"(a -> Either e b) -> a -> Async e b")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(b.b)("inlineCode",{parentName:"td"},"crocks/Async"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"../monoids/First#eithertofirst"}),Object(b.b)("inlineCode",{parentName:"a"},"eitherToFirst"))),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(b.b)("inlineCode",{parentName:"td"},"Either b a -> First a")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(b.b)("inlineCode",{parentName:"td"},"(a -> Either c b) -> a -> First b")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(b.b)("inlineCode",{parentName:"td"},"crocks/First"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"../monoids/Last#eithertolast"}),Object(b.b)("inlineCode",{parentName:"a"},"eitherToLast"))),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(b.b)("inlineCode",{parentName:"td"},"Either b a -> Last a")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(b.b)("inlineCode",{parentName:"td"},"(a -> Either c b) -> a -> Last b")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(b.b)("inlineCode",{parentName:"td"},"crocks/Last"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"../crocks/Maybe#eithertomaybe"}),Object(b.b)("inlineCode",{parentName:"a"},"eitherToMaybe"))),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(b.b)("inlineCode",{parentName:"td"},"Either b a -> Maybe a")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(b.b)("inlineCode",{parentName:"td"},"(a -> Either c b) -> a -> Maybe b")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(b.b)("inlineCode",{parentName:"td"},"crocks/Maybe"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"../crocks/Result#eithertoresult"}),Object(b.b)("inlineCode",{parentName:"a"},"eitherToResult"))),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(b.b)("inlineCode",{parentName:"td"},"Either e a -> Result e a")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(b.b)("inlineCode",{parentName:"td"},"(a -> Either e b) -> a -> Result e b")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(b.b)("inlineCode",{parentName:"td"},"crocks/Result"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"../crocks/Async#firsttoasync"}),Object(b.b)("inlineCode",{parentName:"a"},"firstToAsync"))),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(b.b)("inlineCode",{parentName:"td"},"e -> First a -> Async e a")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(b.b)("inlineCode",{parentName:"td"},"e -> (a -> First b) -> a -> Async e b")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(b.b)("inlineCode",{parentName:"td"},"crocks/Async"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"../crocks/Either#firsttoeither"}),Object(b.b)("inlineCode",{parentName:"a"},"firstToEither"))),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(b.b)("inlineCode",{parentName:"td"},"c -> First a -> Either c a")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(b.b)("inlineCode",{parentName:"td"},"c -> (a -> First b) -> a -> Either c b")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(b.b)("inlineCode",{parentName:"td"},"crocks/Either"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"../monoids/Last#firsttolast"}),Object(b.b)("inlineCode",{parentName:"a"},"firstToLast"))),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(b.b)("inlineCode",{parentName:"td"},"First a -> Last a")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(b.b)("inlineCode",{parentName:"td"},"(a -> First b) -> a -> Last b")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(b.b)("inlineCode",{parentName:"td"},"crocks/Last"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"../crocks/Maybe#firsttomaybe"}),Object(b.b)("inlineCode",{parentName:"a"},"firstToMaybe"))),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(b.b)("inlineCode",{parentName:"td"},"First a -> Maybe a")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(b.b)("inlineCode",{parentName:"td"},"(a -> First b) -> a -> Maybe b")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(b.b)("inlineCode",{parentName:"td"},"crocks/Maybe"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"../crocks/Result#firsttoresult"}),Object(b.b)("inlineCode",{parentName:"a"},"firstToResult"))),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(b.b)("inlineCode",{parentName:"td"},"c -> First a -> Result c a")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(b.b)("inlineCode",{parentName:"td"},"c -> (a -> First b) -> a -> Result c b")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(b.b)("inlineCode",{parentName:"td"},"crocks/Result"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"../crocks/Async#lasttoasync"}),Object(b.b)("inlineCode",{parentName:"a"},"lastToAsync"))),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(b.b)("inlineCode",{parentName:"td"},"e -> Last a -> Async e a")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(b.b)("inlineCode",{parentName:"td"},"e -> (a -> Last b) -> a -> Async e b")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(b.b)("inlineCode",{parentName:"td"},"crocks/Async"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"../crocks/Either#lasttoeither"}),Object(b.b)("inlineCode",{parentName:"a"},"lastToEither"))),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(b.b)("inlineCode",{parentName:"td"},"c -> Last a -> Either c a")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(b.b)("inlineCode",{parentName:"td"},"c -> (a -> Last b) -> a -> Either c b")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(b.b)("inlineCode",{parentName:"td"},"crocks/Either"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"../monoids/First#lasttofirst"}),Object(b.b)("inlineCode",{parentName:"a"},"lastToFirst"))),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(b.b)("inlineCode",{parentName:"td"},"Last a -> First a")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(b.b)("inlineCode",{parentName:"td"},"(a -> Last b) -> a -> First b")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(b.b)("inlineCode",{parentName:"td"},"crocks/First"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"../crocks/Maybe#lasttomaybe"}),Object(b.b)("inlineCode",{parentName:"a"},"lastToMaybe"))),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(b.b)("inlineCode",{parentName:"td"},"Last a -> Maybe a")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(b.b)("inlineCode",{parentName:"td"},"(a -> Last b) -> a -> Maybe b")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(b.b)("inlineCode",{parentName:"td"},"crocks/Maybe"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"../crocks/Result#lasttoresult"}),Object(b.b)("inlineCode",{parentName:"a"},"lastToResult"))),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(b.b)("inlineCode",{parentName:"td"},"c -> Last a -> Result c a")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(b.b)("inlineCode",{parentName:"td"},"c -> (a -> Last b) -> a -> Result c b")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(b.b)("inlineCode",{parentName:"td"},"crocks/Result"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"listToArray")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(b.b)("inlineCode",{parentName:"td"},"List a -> [ a ]")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(b.b)("inlineCode",{parentName:"td"},"(a -> List b) -> a -> [ b ]")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(b.b)("inlineCode",{parentName:"td"},"crocks/List"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"../crocks/Maybe#maybetoarray"}),Object(b.b)("inlineCode",{parentName:"a"},"maybeToArray"))),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(b.b)("inlineCode",{parentName:"td"},"Maybe a -> [ a ]")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(b.b)("inlineCode",{parentName:"td"},"(a -> Maybe b) -> a -> [ b ]")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(b.b)("inlineCode",{parentName:"td"},"crocks/Maybe"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"../crocks/Async#maybetoasync"}),Object(b.b)("inlineCode",{parentName:"a"},"maybeToAsync"))),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(b.b)("inlineCode",{parentName:"td"},"e -> Maybe a -> Async e a")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(b.b)("inlineCode",{parentName:"td"},"e -> (a -> Maybe b) -> a -> Async e b")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(b.b)("inlineCode",{parentName:"td"},"crocks/Async"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"../crocks/Either#maybetoeither"}),Object(b.b)("inlineCode",{parentName:"a"},"maybeToEither"))),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(b.b)("inlineCode",{parentName:"td"},"c -> Maybe a -> Either c a")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(b.b)("inlineCode",{parentName:"td"},"c -> (a -> Maybe b) -> a -> Either c b")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(b.b)("inlineCode",{parentName:"td"},"crocks/Either"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"../monoids/First#maybetofirst"}),Object(b.b)("inlineCode",{parentName:"a"},"maybeToFirst"))),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(b.b)("inlineCode",{parentName:"td"},"Maybe a -> First a")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(b.b)("inlineCode",{parentName:"td"},"(a -> Maybe b) -> a -> First b")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(b.b)("inlineCode",{parentName:"td"},"crocks/First"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"../monoids/Last#maybetolast"}),Object(b.b)("inlineCode",{parentName:"a"},"maybeToLast"))),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(b.b)("inlineCode",{parentName:"td"},"Maybe a -> Last a")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(b.b)("inlineCode",{parentName:"td"},"(a -> Maybe b) -> a -> Last b")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(b.b)("inlineCode",{parentName:"td"},"crocks/Last"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"maybeToList")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(b.b)("inlineCode",{parentName:"td"},"Maybe a -> List a")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(b.b)("inlineCode",{parentName:"td"},"(a -> Maybe b) -> a -> List b")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(b.b)("inlineCode",{parentName:"td"},"crocks/List"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"../crocks/Result#maybetoresult"}),Object(b.b)("inlineCode",{parentName:"a"},"maybeToResult"))),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(b.b)("inlineCode",{parentName:"td"},"c -> Maybe a -> Result c a")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(b.b)("inlineCode",{parentName:"td"},"c -> (a -> Maybe b) -> a -> Result c b")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(b.b)("inlineCode",{parentName:"td"},"crocks/Result"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"../crocks/Async#resulttoasync"}),Object(b.b)("inlineCode",{parentName:"a"},"resultToAsync"))),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(b.b)("inlineCode",{parentName:"td"},"Result e a -> Async e a")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(b.b)("inlineCode",{parentName:"td"},"(a -> Result e b) -> a -> Async e b")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(b.b)("inlineCode",{parentName:"td"},"crocks/Async"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"../crocks/Either#resulttoeither"}),Object(b.b)("inlineCode",{parentName:"a"},"resultToEither"))),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(b.b)("inlineCode",{parentName:"td"},"Result e a -> Either e a")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(b.b)("inlineCode",{parentName:"td"},"(a -> Result e b) -> a -> Either e b")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(b.b)("inlineCode",{parentName:"td"},"crocks/Either"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"../monoids/First#resulttofirst"}),Object(b.b)("inlineCode",{parentName:"a"},"resultToFirst"))),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(b.b)("inlineCode",{parentName:"td"},"Result e a -> First a")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(b.b)("inlineCode",{parentName:"td"},"(a -> Result e b) -> a -> First b")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(b.b)("inlineCode",{parentName:"td"},"crocks/First"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"../monoids/Last#resulttolast"}),Object(b.b)("inlineCode",{parentName:"a"},"resultToLast"))),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(b.b)("inlineCode",{parentName:"td"},"Result e a -> Last a")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(b.b)("inlineCode",{parentName:"td"},"(a -> Result e b) -> a -> Last b")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(b.b)("inlineCode",{parentName:"td"},"crocks/Last"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"../crocks/Maybe#resulttomaybe"}),Object(b.b)("inlineCode",{parentName:"a"},"resultToMaybe"))),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(b.b)("inlineCode",{parentName:"td"},"Result e a -> Maybe a")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(b.b)("inlineCode",{parentName:"td"},"(a -> Result e b) -> a -> Maybe b")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(b.b)("inlineCode",{parentName:"td"},"crocks/Maybe"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"../crocks/Tuple#tupletoarray"}),Object(b.b)("inlineCode",{parentName:"a"},"tupleToArray"))),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(b.b)("inlineCode",{parentName:"td"},"Tuple a -> [ a ]")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(b.b)("inlineCode",{parentName:"td"},"(a -> Tuple b) -> a -> [ b ]")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(b.b)("inlineCode",{parentName:"td"},"crocks/Tuple"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"writerToPair")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(b.b)("inlineCode",{parentName:"td"},"Writer m a -> Pair m a")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(b.b)("inlineCode",{parentName:"td"},"(a -> Writer m b) -> a -> Pair m b")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(b.b)("inlineCode",{parentName:"td"},"crocks/Pair"))))))}s.isMDXComponent=!0}}]);