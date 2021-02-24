(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{105:function(n,e,t){"use strict";t.r(e),t.d(e,"frontMatter",(function(){return i})),t.d(e,"metadata",(function(){return s})),t.d(e,"toc",(function(){return c})),t.d(e,"default",(function(){return p}));var r=t(3),a=t(7),o=(t(0),t(114)),i={description:"Logic Functions API",layout:"notopic",title:"Logic Functions",functions:["and","ifelse","implies","not","or","unless","when"],weight:30},s={unversionedId:"functions/logic-functions",id:"functions/logic-functions",isDocsHomePage:!1,title:"Logic Functions",description:"Logic Functions API",source:"@site/docs/functions/logic-functions.md",slug:"/functions/logic-functions",permalink:"/crocks/docs/functions/logic-functions",editUrl:"https://github.com/evilsoft/crocks/edit/master/docs/docs/functions/logic-functions.md",version:"current",sidebar:"sidebar",previous:{title:"Helpers",permalink:"/crocks/docs/functions/helpers"},next:{title:"Point-free Functions",permalink:"/crocks/docs/functions/pointfree-functions"}},c=[{value:"and",id:"and",children:[]},{value:"ifElse",id:"ifelse",children:[]},{value:"implies",id:"implies",children:[]},{value:"not",id:"not",children:[]},{value:"or",id:"or",children:[]},{value:"unless",id:"unless",children:[]},{value:"when",id:"when",children:[]}],l={toc:c};function p(n){var e=n.components,t=Object(a.a)(n,["components"]);return Object(o.b)("wrapper",Object(r.a)({},l,t,{components:e,mdxType:"MDXLayout"}),Object(o.b)("p",null,"The functions in this section are used to represent logical branching in a\ndeclarative manner. Each of these functions require either ",Object(o.b)("a",{parentName:"p",href:"../crocks/Pred"},Object(o.b)("inlineCode",{parentName:"a"},"Pred")),"s or\npredicate functions in their input. Since these functions work\nwith ",Object(o.b)("a",{parentName:"p",href:"../crocks/Pred"},Object(o.b)("inlineCode",{parentName:"a"},"Pred")),'s and predicate functions, rather than values, this allows\nfor composeable, "lazy" evaluation. All logic functions can be referenced\nfrom ',Object(o.b)("inlineCode",{parentName:"p"},"crocks/logic")),Object(o.b)("h3",{id:"and"},"and"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-haskell"},"and :: ((a -> Boolean) | Pred a) -> ((a -> Boolean) | Pred a) -> a -> Boolean\n")),Object(o.b)("p",null,"Say you have two predicate functions or ",Object(o.b)("a",{parentName:"p",href:"../crocks/Pred"},Object(o.b)("inlineCode",{parentName:"a"},"Pred")),"s and would like to\ncombine them into one predicate over conjunction, well you came to the right\nplace, ",Object(o.b)("inlineCode",{parentName:"p"},"and")," accepts either predicate functions or ",Object(o.b)("a",{parentName:"p",href:"../crocks/Pred"},Object(o.b)("inlineCode",{parentName:"a"},"Pred")),"s and will\nreturn you a function ready to take a value. Once that value is passed, it will\nrun it through both of the predicates and return the result of combining it over\na ",Object(o.b)("inlineCode",{parentName:"p"},"logical and"),". This is super helpful when combined with ",Object(o.b)("inlineCode",{parentName:"p"},"or")," for putting\ntogether reusable, complex predicates. As they follow the general form\nof ",Object(o.b)("inlineCode",{parentName:"p"},"(a -> Boolean)")," they are easily combined with other logic functions."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js",metastring:"runkit",runkit:!0},"//  p | q | p && q\n// ================\n//  T | T |   T\n//  T | F |   F\n//  F | T |   F\n//  F | F |   F\n\nimport and from 'crocks/logic/and'\n\nimport constant from 'crocks/combinators/constant'\nimport isArray from 'crocks/predicates/isArray'\nimport isEmpty from 'crocks/predicates/isEmpty'\nimport isNumber from 'crocks/predicates/isNumber'\nimport not from 'crocks/logic/not'\n\n// gte :: Number -> Number -> Boolean\nconst gte = x => y =>\n  y >= x\n\n// isLegalDrinkingAge :: Number -> Boolean\nconst isLegalDrinkingAge =\n    and(isNumber, gte(21))\n\n// isValid :: a -> Boolean\nconst isValid =\n  and(isArray, not(isEmpty))\n\nisLegalDrinkingAge(18)\n//=> false\n\nisLegalDrinkingAge(21)\n//=> true\n\nisValid([ 42 ])\n//=> true\n\nisValid(null)\n//=> false\n\nisValid([])\n//=> false\n\nand(constant(true), constant(true), 'ignored')\n//=> true\n\nand(constant(true), constant(false), 'ignored')\n//=> false\n\nand(constant(false), constant(true), 'ignored')\n//=> false\n\nand(constant(false), constant(false), 'ignored')\n//=> false\n")),Object(o.b)("h3",{id:"ifelse"},"ifElse"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-haskell"},"ifElse :: ((a -> Boolean) | Pred a) -> (a -> b) -> (a -> b) -> a -> b\n")),Object(o.b)("p",null,"Whenever you need to modify a value based some condition and want a functional\nway to do it without some imperative ",Object(o.b)("inlineCode",{parentName:"p"},"if")," statement, then reach for ",Object(o.b)("inlineCode",{parentName:"p"},"ifElse"),".\nThis function take a predicate (some function that returns a ",Object(o.b)("inlineCode",{parentName:"p"},"Boolean"),") and two\nfunctions. The first is what is executed when the predicate is true, the second\non a false condition. This will return a function ready to take a value to run\nthrough the predicate. After the value is evaluated, it will be ran through it's\ncorresponding function, returning the result as the final result. This function\ncomes in really handy when creating lifting functions for Sum Types\n(like ",Object(o.b)("inlineCode",{parentName:"p"},"Either")," or ",Object(o.b)("a",{parentName:"p",href:"../crocks/Maybe"},Object(o.b)("inlineCode",{parentName:"a"},"Maybe")),")."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js",metastring:"runkit",runkit:!0},"import ifElse from 'crocks/logic/ifElse'\n\nimport Maybe from 'crocks/Maybe'\n\nimport chain from 'crocks/pointfree/chain'\nimport compose from 'crocks/helpers/compose'\nimport identity from 'crocks/combinators/identity'\nimport isArray from 'crocks/predicates/isArray'\nimport isNumber from 'crocks/predicates/isNumber'\n\nconst { Just, Nothing } = Maybe\n\n// safe :: (a -> Boolean) -> a -> Maybe a\nconst safe = pred =>\n  ifElse(pred, Just, Nothing)\n\n// gte :: Number -> Number -> Maybe Number\nconst gte = x =>\n  safe(n => n >= x)\n\n// isLarge :: a -> Maybe a\nconst isLarge =\n  compose(chain(gte(42)), safe(isNumber))\n\n// ensureArray :: a -> Array\nconst ensureArray =\n  ifElse(isArray, identity, () => [])\n\nisLarge(10)\n//=> Nothing\n\nisLarge(44)\n//=> Just 44\n\nensureArray('nope')\n  .map(x => x + x)\n//=> []\n\nensureArray([ 3 ])\n  .map(x => x + x)\n//=> [ 6 ]\n")),Object(o.b)("h3",{id:"implies"},"implies"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-haskell"},"implies :: ((a -> Boolean) | Pred a) -> ((a -> Boolean) | Pred a) -> a -> Boolean\n")),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"implies")," is a logic combinator that will combine the evaluation of two\npredicates over ",Object(o.b)("inlineCode",{parentName:"p"},"logical implication"),". It takes any combination of predicate\nfunctions or ",Object(o.b)("a",{parentName:"p",href:"../crocks/Pred"},Object(o.b)("inlineCode",{parentName:"a"},"Pred")),"s as its first two arguments and will return a new\npredicate function that will return ",Object(o.b)("inlineCode",{parentName:"p"},"false")," when the first predicate evaluates\nto ",Object(o.b)("inlineCode",{parentName:"p"},"true")," and the second evaluates to ",Object(o.b)("inlineCode",{parentName:"p"},"false"),". All other combinations will\nreturn ",Object(o.b)("inlineCode",{parentName:"p"},"true"),"."),Object(o.b)("p",null,"Implication is a very weak condition in regards to assertion of a value and is\nusually paired with disjunction over conjunction for types\nlike ",Object(o.b)("a",{parentName:"p",href:"../crocks/Pred"},Object(o.b)("inlineCode",{parentName:"a"},"Pred"))," and the ",Object(o.b)("a",{parentName:"p",href:"../monoids/All"},Object(o.b)("inlineCode",{parentName:"a"},"All"))," ",Object(o.b)("inlineCode",{parentName:"p"},"Monoid"),"."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js",metastring:"runkit",runkit:!0},"//  p | q | p -> q\n// ================\n//  T | T |   T\n//  T | F |   F\n//  F | T |   T\n//  F | F |   T\n\nimport implies from 'crocks/logic/implies'\n\nimport Pred from 'crocks/Pred'\n\nimport isArray from 'crocks/predicates/isArray'\nimport isString from 'crocks/predicates/isString'\nimport not from 'crocks/logic/not'\nimport or from 'crocks/logic/or'\nimport safe from 'crocks/Maybe/safe'\n\n// length :: (String | Array) -> Number\nconst length = x =>\n  x.length\n\n// stringOrArray :: a -> Pred a\nconst stringOrArray =\n  Pred(or(isArray, isString))\n\n// stringLength :: a -> Pred a\nconst stringLength =\n  Pred(implies(isString, length))\n\n// emptyArray :: a -> Pred a\nconst emptyArray =\n  Pred(implies(isArray, not(length)))\n\nstringOrArray\n  .runWith('')\n//=> true\n\nstringOrArray\n  .runWith([ 1, 2, 3 ])\n//=> true\n\nstringOrArray\n  .runWith(23)\n//=> false\n\nstringLength\n  .runWith('')\n//=> false\n\nstringLength\n  .runWith('with length')\n//=> true\n\nstringLength\n  .runWith([ 1, 3 ])\n//=> true\n\nemptyArray\n  .runWith([ 1, 3 ])\n//=> false\n\nemptyArray\n  .runWith([])\n//=> true\n\nemptyArray\n  .runWith(23)\n//=> true\n\n// pred :: a -> Pred a\nconst pred =\n  stringOrArray\n    .concat(stringLength)\n    .concat(emptyArray)\n\n// isValid :: a -> Maybe (String | Array)\nconst isValid =\n  safe(pred)\n\nisValid(34)\n//=> Nothing\n\nisValid([ 1, 3 ])\n//=> Nothing\n\nisValid('')\n//=> Nothing\n\nisValid([])\n//=> Just []\n\nisValid('valid')\n//=> Just \"valid\"\n")),Object(o.b)("h3",{id:"not"},"not"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-haskell"},"not :: ((a -> Boolean) | Pred) -> a -> Boolean\n")),Object(o.b)("p",null,"When you need to negate a predicate function or a ",Object(o.b)("a",{parentName:"p",href:"../crocks/Pred"},Object(o.b)("inlineCode",{parentName:"a"},"Pred")),", but want a new\npredicate function that does the negation, then ",Object(o.b)("inlineCode",{parentName:"p"},"not")," is going to get you what\nyou need. Using ",Object(o.b)("inlineCode",{parentName:"p"},"not")," will allow you to stay as declarative as possible. Just\npass ",Object(o.b)("inlineCode",{parentName:"p"},"not")," your predicate function or a ",Object(o.b)("a",{parentName:"p",href:"../crocks/Pred"},Object(o.b)("inlineCode",{parentName:"a"},"Pred")),", and it will give you\nback a predicate function ready for insertion into your flow. All predicate\nbased functions in ",Object(o.b)("inlineCode",{parentName:"p"},"crocks")," take either a ",Object(o.b)("a",{parentName:"p",href:"../crocks/Pred"},Object(o.b)("inlineCode",{parentName:"a"},"Pred"))," or predicate\nfunction, so it should be easy to swap between the two."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js",metastring:"runkit",runkit:!0},"//  p | !p\n// ========\n//  T | F\n//  F | T\n\nimport not from 'crocks/logic/not'\n\nimport Pred from 'crocks/Pred'\n\nimport and from 'crocks/logic/and'\nimport compose from 'crocks/helpers/compose'\nimport flip from 'crocks/combinators/flip'\nimport identity from 'crocks/combinators/identity'\nimport isString from 'crocks/predicates/isString'\nimport propSatisfies from 'crocks/predicates/propSatisfies'\n\n// isFalsy :: a -> Boolean\nconst isFalsy =\n  not(identity)\n\n// isTruthy :: a -> Boolean\nconst isTruthy =\n  not(isFalsy)\n\nisTruthy('Test string')\n//=> true\n\nisTruthy('')\n//=> false\n\nisFalsy('')\n//=> true\n\nisFalsy('Test string')\n//=> false\n\n// User :: { email: String, firstName: String, lastName: String}\n\n// validUser :: User\nconst validUser = {\n  email: 'testuser@email.com',\n  firstName: 'Tom',\n  lastName: 'Smith'\n}\n\n// invalidUser :: User\nconst invalidUser = {\n  email: '',\n  firstName: '',\n  lastName: 'Smith'\n}\n\n// isNonEmptyString :: a -> Boolean\nconst isNonEmptyString =\n  and(isString, isTruthy)\n\n// hasValidStringProp :: String -> User -> Boolean\nconst hasValidStringProp = compose(\n  Pred,\n  flip(propSatisfies, isNonEmptyString)\n)\n\n// hasName :: User -> Boolean\nconst hasName =\n  hasValidStringProp('firstName')\n\n// hasEmail :: User -> Boolean\nconst hasEmail =\n  hasValidStringProp('email')\n\n// isUserInvalid :: User -> Boolean\nconst isUserInvalid =\n  Pred(not(hasName))\n    .concat(Pred(not(hasEmail)))\n\nisUserInvalid\n  .runWith(invalidUser)\n//=> true\n\nisUserInvalid\n  .runWith(validUser)\n//=> false\n")),Object(o.b)("h3",{id:"or"},"or"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-haskell"},"or :: ((a -> Boolean) | Pred) -> ((a -> Boolean) | Pred) -> a -> Boolean\n")),Object(o.b)("p",null,"Say you have two predicate functions or ",Object(o.b)("a",{parentName:"p",href:"../crocks/Pred"},Object(o.b)("inlineCode",{parentName:"a"},"Pred")),"s and would like to\ncombine them into one predicate over disjunction, look no further, ",Object(o.b)("inlineCode",{parentName:"p"},"or")," accepts\neither predicate functions or ",Object(o.b)("a",{parentName:"p",href:"../crocks/Pred"},Object(o.b)("inlineCode",{parentName:"a"},"Pred")),"s and will return you a function '\nready to take a value. Once that value is passed, it will run it through both of\nthe predicates and return the result of combining it over a ",Object(o.b)("inlineCode",{parentName:"p"},"logical or"),". This\nis super helpful when combined with ",Object(o.b)("inlineCode",{parentName:"p"},"and")," for putting together reusable, complex\npredicates. As they follow the general form of ",Object(o.b)("inlineCode",{parentName:"p"},"(a -> Boolean)")," they are easily\ncombined with other logic functions."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js",metastring:"runkit",runkit:!0},"//  p | q | p || q\n// ================\n//  T | T |   T\n//  T | F |   T\n//  F | T |   T\n//  F | F |   F\n\nimport or from 'crocks/logic/or'\n\nimport constant from 'crocks/combinators/constant'\nimport isEmpty from 'crocks/predicates/isEmpty'\nimport not from 'crocks/logic/not'\nimport propSatisfies from 'crocks/predicates/propSatisfies'\nimport pathSatisfies from 'crocks/predicates/pathSatisfies'\n\nor(constant(true), constant(true), 'ignored')\n//=> true\n\nor(constant(true), constant(false), 'ignored')\n//=> true\n\nor(constant(false), constant(true), 'ignored')\n//=> true\n\nor(constant(false), constant(false), 'ignored')\n//=> false\n\n// Response :: { error: String, response: { users: [ * ] } }\n\n// createResponse :: ([ * ], String) -> Response\nconst createResponse = (users, error = '') => ({\n  error,\n  response: {\n    users\n  }\n})\n\n// hasData :: Response -> Boolean\nconst hasData = or(\n  propSatisfies('error', isEmpty),\n  pathSatisfies([ 'response', 'users' ], not(isEmpty))\n)\n\nhasData(createResponse([ { name: 'User 1' } ]))\n//=> true\n\nhasData(createResponse([], 'No users found'))\n//=> false\n\n")),Object(o.b)("h3",{id:"unless"},"unless"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-haskell"},"unless :: ((a -> Boolean) | Pred) -> (a -> a) -> a -> a\n")),Object(o.b)("p",null,"There may come a time when you need to adjust a value when a condition is false,\nthat is where ",Object(o.b)("inlineCode",{parentName:"p"},"unless")," can come into play. Just provide a predicate function (a\nfunction that returns a ",Object(o.b)("inlineCode",{parentName:"p"},"Boolean"),") and a function to apply your desired\nmodification. This will get you back a function that when you pass it a value,\nit will evaluate it and if false, will run your value through the provided\nfunction. Either the original or modified value will be returned depending on\nthe result of the predicate. Check out ",Object(o.b)("a",{parentName:"p",href:"#when"},Object(o.b)("inlineCode",{parentName:"a"},"when"))," for a negated version of\nthis function."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js",metastring:"runkit",runkit:!0},"import unless from 'crocks/logic/unless'\n\nimport constant from 'crocks/combinators/constant'\nimport flip from 'crocks/combinators/flip'\nimport isString from 'crocks/predicates/isString'\n\n// double :: Number -> Number\nconst double = a =>\n  a * 2\n\n// doubleUnless :: (a -> Boolean) -> Number -> Number\nconst doubleUnless =\n  flip(unless, double)\n\ndoubleUnless(constant(true), 21)\n//=> 21\n\ndoubleUnless(constant(false), 21)\n//=> 42\n\n// toString :: a -> String\nconst toString = x =>\n  x.toString()\n\n// ensureString :: a -> String\nconst ensureString =\n  unless(isString, toString)\n\n// testData :: [ * ]\nconst testData =\n  [ 1, 2, '3', 4, true, false, new Date(1770, 3, 29) ]\n\ntestData.map(ensureString)\n//=> [ '1', '2', '3', '4', 'true', 'false', 'Sun Apr 29 1770 00:00:00 GMT-0752 (Pacific Daylight Time)' ]\n")),Object(o.b)("h3",{id:"when"},"when"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-haskell"},"when :: ((a -> Boolean) | Pred) -> (a -> a) -> a -> a\n")),Object(o.b)("p",null,"There may come a time when you need to adjust a value when a condition is true,\nthat is where ",Object(o.b)("inlineCode",{parentName:"p"},"when")," can come into play. Just provide a predicate function (a\nfunction that returns a ",Object(o.b)("inlineCode",{parentName:"p"},"Boolean"),") and a function to apply your desired\nmodification. This will get you back a function that when you pass it a value,\nit will evaluate it and if true, will run your value through the provided\nfunction. Either the original or modified value will be returned depending on\nthe result of the predicate. Check out ",Object(o.b)("a",{parentName:"p",href:"#unless"},Object(o.b)("inlineCode",{parentName:"a"},"unless"))," for a negated version\nof this function."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js",metastring:"runkit",runkit:!0},"import when from 'crocks/logic/when'\n\nimport compose from 'crocks/helpers/compose'\nimport composeB from 'crocks/combinators/composeB'\nimport constant from 'crocks/combinators/constant'\nimport curry from 'crocks/helpers/curry'\nimport flip from 'crocks/combinators/flip'\nimport mapProps from 'crocks/helpers/mapProps'\n\n// gt :: Number -> Number -> Boolean\nconst gt = a => b =>\n  b > a\n\n// subtract :: Number -> Number\nconst subtract = a => b =>\n  b - a\n\n// protectedSubtract :: Number -> Number -> Number\nconst protectedSubtract = curry(\n  composeB(when(gt(0)),subtract)\n)\n\nprotectedSubtract(10, 30)\n//=> 20\n\nprotectedSubtract(10, -5)\n//=> -5\n\n// smallExplosion :: Number -> Number\nconst smallExplosion =\n  protectedSubtract(15)\n\n// largeExplosion :: Number -> Number\nconst largeExplosion = compose(\n  smallExplosion,\n  smallExplosion,\n  smallExplosion\n)\n\n// Player :: { health: Number }\n// player :: Player\nconst player = {\n  health: 30\n}\n\n// affectHealth :: (Number -> Number) -> Player -> Player\nconst affectHealth = curry(\n  fn => mapProps({ health: fn })\n)\n\naffectHealth(smallExplosion, player)\n//=> { health: 15 }\n\naffectHealth(largeExplosion, player)\n//=> { health: 0 }\n\n// double :: Number -> Number\nconst double = a =>\n  a * 2\n\n// doubleWhen :: (a -> Boolean) -> Number -> Number\nconst doubleWhen =\n  flip(when, double)\n\ndoubleWhen(constant(true), 21)\n//=> 42\n\ndoubleWhen(constant(false), 21)\n//=> 21\n")))}p.isMDXComponent=!0},114:function(n,e,t){"use strict";t.d(e,"a",(function(){return u})),t.d(e,"b",(function(){return b}));var r=t(0),a=t.n(r);function o(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function i(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,r)}return t}function s(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?i(Object(t),!0).forEach((function(e){o(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function c(n,e){if(null==n)return{};var t,r,a=function(n,e){if(null==n)return{};var t,r,a={},o=Object.keys(n);for(r=0;r<o.length;r++)t=o[r],e.indexOf(t)>=0||(a[t]=n[t]);return a}(n,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);for(r=0;r<o.length;r++)t=o[r],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(a[t]=n[t])}return a}var l=a.a.createContext({}),p=function(n){var e=a.a.useContext(l),t=e;return n&&(t="function"==typeof n?n(e):s(s({},e),n)),t},u=function(n){var e=p(n.components);return a.a.createElement(l.Provider,{value:e},n.children)},m={inlineCode:"code",wrapper:function(n){var e=n.children;return a.a.createElement(a.a.Fragment,{},e)}},d=a.a.forwardRef((function(n,e){var t=n.components,r=n.mdxType,o=n.originalType,i=n.parentName,l=c(n,["components","mdxType","originalType","parentName"]),u=p(t),d=r,b=u["".concat(i,".").concat(d)]||u[d]||m[d]||o;return t?a.a.createElement(b,s(s({ref:e},l),{},{components:t})):a.a.createElement(b,s({ref:e},l))}));function b(n,e){var t=arguments,r=e&&e.mdxType;if("string"==typeof n||r){var o=t.length,i=new Array(o);i[0]=d;var s={};for(var c in e)hasOwnProperty.call(e,c)&&(s[c]=e[c]);s.originalType=n,s.mdxType="string"==typeof n?n:r,i[1]=s;for(var l=2;l<o;l++)i[l]=t[l];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"}}]);