(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{100:function(e,n,t){"use strict";t.d(n,"a",(function(){return b})),t.d(n,"b",(function(){return u}));var a=t(0),o=t.n(a);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=o.a.createContext({}),l=function(e){var n=o.a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},b=function(e){var n=l(e.components);return o.a.createElement(s.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},d=o.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,i=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),b=l(t),d=a,u=b["".concat(i,".").concat(d)]||b[d]||m[d]||r;return t?o.a.createElement(u,c(c({ref:n},s),{},{components:t})):o.a.createElement(u,c({ref:n},s))}));function u(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,i=new Array(r);i[0]=d;var c={};for(var p in n)hasOwnProperty.call(n,p)&&(c[p]=n[p]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var s=2;s<r;s++)i[s]=t[s];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},54:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return c})),t.d(n,"rightToc",(function(){return p})),t.d(n,"default",(function(){return l}));var a=t(2),o=t(6),r=(t(0),t(100)),i={title:"Const",description:"Const Monoid",layout:"guide",weight:30},c={unversionedId:"crocks/Const",id:"crocks/Const",isDocsHomePage:!1,title:"Const",description:"Const Monoid",source:"@site/docs/crocks/Const.md",slug:"/crocks/Const",permalink:"/crocks/docs/crocks/Const",editUrl:"https://github.com/evilsoft/crocks/edit/master/docs/docs/crocks/Const.md",version:"current",sidebar:"sidebar",previous:{title:"Async",permalink:"/crocks/docs/crocks/Async"},next:{title:"Either",permalink:"/crocks/docs/crocks/Either"}},p=[{value:"Implements",id:"implements",children:[]},{value:"Construction",id:"construction",children:[]},{value:"Constructor Methods",id:"constructor-methods",children:[{value:"empty",id:"empty",children:[]},{value:"of",id:"of",children:[]}]},{value:"Instance Methods",id:"instance-methods",children:[{value:"equals",id:"equals",children:[]},{value:"concat",id:"concat",children:[]},{value:"map",id:"map",children:[]},{value:"ap",id:"ap",children:[]},{value:"valueOf",id:"valueof",children:[]}]}],s={rightToc:p};function l(e){var n=e.components,t=Object(o.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},s,t,{components:n,mdxType:"MDXLayout"}),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-haskell"}),"Const c a\n")),Object(r.b)("p",null,"Commonly known as the Delta (\u0394) Functor, ",Object(r.b)("inlineCode",{parentName:"p"},"Const")," is a Product type the whose\nunderlying left-most value is fixed to the value it was originally constructed\nwith. This ensures that a desired value is immutable. While its right portion\ncan still be mapped over, when observed, all information on the right will be\ndiscarded, leaving only the initial fixed value ",Object(r.b)("inlineCode",{parentName:"p"},"c"),"."),Object(r.b)("p",null,"When ",Object(r.b)("inlineCode",{parentName:"p"},"c")," is a ",Object(r.b)("inlineCode",{parentName:"p"},"Semigroup")," instance, ",Object(r.b)("inlineCode",{parentName:"p"},"Const")," acts like a ",Object(r.b)("inlineCode",{parentName:"p"},"Semigroup")," and can\ncombine two instances using ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"#concat"}),Object(r.b)("inlineCode",{parentName:"a"},"concat")),". As a special bonus, is also\nacts as an ",Object(r.b)("inlineCode",{parentName:"p"},"Apply")," as ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"#ap"}),Object(r.b)("inlineCode",{parentName:"a"},"ap"))," can be derived from ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"#concat"}),Object(r.b)("inlineCode",{parentName:"a"},"concat")),"."),Object(r.b)("p",null,"When ",Object(r.b)("inlineCode",{parentName:"p"},"c")," is a ",Object(r.b)("inlineCode",{parentName:"p"},"Monoid")," instance, ",Object(r.b)("inlineCode",{parentName:"p"},"Const")," acts like a ",Object(r.b)("inlineCode",{parentName:"p"},"Monoid")," and provides\na valid ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"#empty"}),Object(r.b)("inlineCode",{parentName:"a"},"empty"))," function on both the Constructor and Instance. Like,\nthe ",Object(r.b)("inlineCode",{parentName:"p"},"Semigroup")," having the ability to be used as an ",Object(r.b)("inlineCode",{parentName:"p"},"Apply"),", ",Object(r.b)("inlineCode",{parentName:"p"},"Const")," can derive\nan ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"#of"}),Object(r.b)("inlineCode",{parentName:"a"},"of"))," function and can be used like an ",Object(r.b)("inlineCode",{parentName:"p"},"Applicative"),"."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js",metastring:"runkit",runkit:!0}),"import Const from '/crocks/Const'\nimport Identity from 'crocks/Identity'\nimport Pair from 'crocks/Pair'\nimport Sum from 'crocks/Sum'\n\nimport compose from 'crocks/helpers/compose'\nimport curry from 'crocks/helpers/curry'\nimport map from 'crocks/pointfree/map'\nimport traverse from 'crocks/pointfree/traverse'\n\n// StrConst :: String -> Const String a\nconst StrConst =\n  Const(String)\n\nStrConst('Hello World')\n//=> Const(String) \"Hello World\"\n\n// add :: Number -> Number -> Number\nconst add =\n  x => y => x + y\n\nPair(Identity(30), StrConst('always, forever'))\n  .bimap(map(add(4)), map(add(4)))\n//=> Pair(Identity 34, Const(String) \"always, forever\")\n\n// ArrayConst :: [ b ] -> Const [ b ] a\nconst ArrayConst =\n  Const(Array)\n\nArrayConst([ 'a' ])\n  .map(add)\n  .ap(ArrayConst([ 'b' ]))\n//=> Const(Array) [ \"a\", \"b\" ]\n\n// foldMap :: Monoid m, Foldable f => M -> (a -> m) -> f a -> m\nconst foldMap = curry(\n  (T, fn, xs) => {\n    const Rep = Const(T)\n    return traverse(Rep, compose(Rep, fn), xs).valueOf()\n  }\n)\n\n// foldLength :: [ String ] -> Sum\nconst foldLength =\n  foldMap(Sum, compose(Sum, x => x.length))\n\nfoldLength([ '12', '34', '567' ])\n//=> Sum 7\n")),Object(r.b)("h2",{id:"implements"},"Implements"),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"Setoid"),", ",Object(r.b)("inlineCode",{parentName:"p"},"Semigroup"),", ",Object(r.b)("inlineCode",{parentName:"p"},"Monoid"),", ",Object(r.b)("inlineCode",{parentName:"p"},"Functor"),", ",Object(r.b)("inlineCode",{parentName:"p"},"Apply"),", ",Object(r.b)("inlineCode",{parentName:"p"},"Applicative")),Object(r.b)("h2",{id:"construction"},"Construction"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-haskell"}),"Const :: TypeRep T => T -> Const T\nConst c :: c -> Const c a\n")),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"Const")," is a Type Constructor that take a Constructor or TypeRep and will give\nback an Instance Constructor that will take a value of the type provided."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js",metastring:"runkit",runkit:!0}),"import Const from 'crocks/Const'\n\n// StrConst :: Const String a\nconst StrConst =\n  Const(String)\n\n// BoolConst :: Const Boolean a\nconst BoolConst =\n  Const(Boolean)\n\nStrConst('always and forever')\n//=> Const(String) \"always and forever\"\n\nBoolConst(false)\n//=> Const(Boolean) false\n")),Object(r.b)("h2",{id:"constructor-methods"},"Constructor Methods"),Object(r.b)("h3",{id:"empty"},"empty"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-haskell"}),"Monoid m => Const(m).empty :: () -> Const m ()\n")),Object(r.b)("p",null,"When ",Object(r.b)("inlineCode",{parentName:"p"},"Const")," is fixed to a ",Object(r.b)("inlineCode",{parentName:"p"},"Monoid")," type, we automatically get\na ",Object(r.b)("inlineCode",{parentName:"p"},"Monoid")," implementation by creating an instance that points to\nthe ",Object(r.b)("inlineCode",{parentName:"p"},"empty")," element of the underlying ",Object(r.b)("inlineCode",{parentName:"p"},"Monoid"),'. As this is just a "pass through"\nof the underlying ',Object(r.b)("inlineCode",{parentName:"p"},"Monoid"),", everything valid for the underlying type, holds true\nfor ",Object(r.b)("inlineCode",{parentName:"p"},"Const"),"."),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"empty")," will throw a ",Object(r.b)("inlineCode",{parentName:"p"},"TypeError")," if the underlying Type does not point to a type\nof ",Object(r.b)("inlineCode",{parentName:"p"},"Monoid"),"."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js",metastring:"runkit",runkit:!0}),"")),Object(r.b)("h3",{id:"of"},"of"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-haskell"}),"Monoid m => Const(m).of :: a -> Const m a\n")),Object(r.b)("p",null,"When ",Object(r.b)("inlineCode",{parentName:"p"},"Const")," is fixed to a ",Object(r.b)("inlineCode",{parentName:"p"},"Monoid")," type, we automatically get\nan ",Object(r.b)("inlineCode",{parentName:"p"},"Applicative")," implementation by creating an instance that points to\nthe ",Object(r.b)("inlineCode",{parentName:"p"},"empty")," element of the underlying ",Object(r.b)("inlineCode",{parentName:"p"},"Monoid"),"."),Object(r.b)("p",null,"The ",Object(r.b)("inlineCode",{parentName:"p"},"Applicative")," laws work due to the fact that we can derive an ",Object(r.b)("inlineCode",{parentName:"p"},"Apply")," by\nmapping all every morphism to the ",Object(r.b)("inlineCode",{parentName:"p"},"concat")," method of a pointed to ",Object(r.b)("inlineCode",{parentName:"p"},"Semigroup"),".\nAs, we must be a ",Object(r.b)("inlineCode",{parentName:"p"},"Semigroup")," before we can be a ",Object(r.b)("inlineCode",{parentName:"p"},"Monoid"),", ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"#ap"}),Object(r.b)("inlineCode",{parentName:"a"},"ap"))," is\nguaranteed."),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"of")," will throw a ",Object(r.b)("inlineCode",{parentName:"p"},"TypeError")," if the underlying Type does not point to a type\nof ",Object(r.b)("inlineCode",{parentName:"p"},"Monoid"),"."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js",metastring:"runkit",runkit:!0}),"")),Object(r.b)("h2",{id:"instance-methods"},"Instance Methods"),Object(r.b)("h3",{id:"equals"},"equals"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-haskell"}),"Const c a ~> b -> Boolean\n")),Object(r.b)("p",null,"Used to compare the underlying values of two ",Object(r.b)("inlineCode",{parentName:"p"},"Const")," instances for equality by\nvalue, ",Object(r.b)("inlineCode",{parentName:"p"},"equals")," takes any given argument and returns ",Object(r.b)("inlineCode",{parentName:"p"},"true")," if the passed\nargument is a ",Object(r.b)("inlineCode",{parentName:"p"},"Const")," with an underlying ",Object(r.b)("inlineCode",{parentName:"p"},"left")," value equal to the underlying\nvalue of the ",Object(r.b)("inlineCode",{parentName:"p"},"Const")," the method is being called on. If the passed argument is\nnot a ",Object(r.b)("inlineCode",{parentName:"p"},"Const")," or the underlying values are not equal, ",Object(r.b)("inlineCode",{parentName:"p"},"equals")," will\nreturn ",Object(r.b)("inlineCode",{parentName:"p"},"false"),"."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js",metastring:"runkit",runkit:!0}),"import Const from 'crocks/Const'\n\n// NumConst :: Const Number a\nconst NumConst =\n  Const(Number)\n\n// ArrConst :: Const Array a\nconst ArrConst =\n  Const(Array)\n\nNumConst(2)\n  .equals(NumConst(5))\n//=> false\n\nNumConst(5)\n  .equals(NumConst(5))\n//=> true\n\nArrConst([ 'a', 'b' ])\n  .equals(ArrConst([ 'c', 'd' ]))\n//=> false\n\nArrConst([ 'c', 'd' ])\n  .equals(ArrConst([ 'c', 'd' ]))\n//=> true\n")),Object(r.b)("h3",{id:"concat"},"concat"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-haskell"}),"Semigroup s => Const s a ~> Const s a -> Const s a\n")),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"concat")," is used to combine two ",Object(r.b)("inlineCode",{parentName:"p"},"Semigroup"),"s of the same type under an operation\nspecified by the ",Object(r.b)("inlineCode",{parentName:"p"},"Semigroup"),". When a ",Object(r.b)("inlineCode",{parentName:"p"},"Const")," instance is fixed to\na ",Object(r.b)("inlineCode",{parentName:"p"},"Semigroup")," type, it will combine the two values that each ",Object(r.b)("inlineCode",{parentName:"p"},"Const")," points to\nusing the ",Object(r.b)("inlineCode",{parentName:"p"},"concat")," method of the underlying ",Object(r.b)("inlineCode",{parentName:"p"},"Semigroup"),"."),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"concat")," will throw a ",Object(r.b)("inlineCode",{parentName:"p"},"TypeError")," if the underlying Type does not point to a\ntype of ",Object(r.b)("inlineCode",{parentName:"p"},"Semigroup"),"."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js",metastring:"runkit",runkit:!0}),"import Const from 'crocks/Const'\n\nimport Maybe from 'crocks/Maybe'\nimport Sum from 'crocks/Sum'\n\nconst { Just } = Maybe\n\nconst ArrayConst =\n  Const(Array)\n\nconst MaybeConst =\n  Const(Maybe)\n\nArrayConst([ 'a', 'b' ])\n  .concat(ArrayConst([ 'c' ]))\n//=> Const(Array) [ \"a\", \"b\", \"c\" ]\n\n// a :: Maybe Sum\nconst a =\n  Just(Sum(10))\n\n// b :: Maybe Sum\nconst b =\n  Just(Sum(32))\n\nMaybeConst(a)\n  .concat(MaybeConst(b))\n  .valueOf()\n//=> Just (Sum 42)\n")),Object(r.b)("h3",{id:"map"},"map"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-haskell"}),"Const c a ~> (a -> b) -> Const c b\n")),Object(r.b)("p",null,"Typically used to lift a function into the context of an ADT, but due to the\nunique behavior of ",Object(r.b)("inlineCode",{parentName:"p"},"Const"),", any function that is passed in to ",Object(r.b)("inlineCode",{parentName:"p"},"map")," will be\nvalidated but it will not be applied. ",Object(r.b)("inlineCode",{parentName:"p"},"map")," will return a new ",Object(r.b)("inlineCode",{parentName:"p"},"Const")," with\nthe same left value."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js",metastring:"runkit",runkit:!0}),"import Const from 'crocks/Const'\nimport Identity from 'crocks/Identity'\nimport Maybe from 'crocks/Maybe'\n\nimport map from 'crocks/pointfree/map'\n\nconst { Just } = Maybe\n\n// MaybeConst :: Maybe a -> MaybeConst (Maybe a)\nconst MaybeConst =\n  Const(Maybe)\n\n// add10 :: Functor f => f Number -> f Number\nconst add10 =\n  map(x => x + 10)\n\nIdentity(Just(3))\n  .map(add10)\n//=> Identity Just 13\n\nMaybeConst(Just(3))\n  .map(add10)\n//=> Const(Maybe) Just 3\n")),Object(r.b)("h3",{id:"ap"},"ap"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-haskell"}),"Semigroup s => Const s (a -> b) ~> Const s a -> Const s b\n")),Object(r.b)("p",null,"The unique nature of the ",Object(r.b)("inlineCode",{parentName:"p"},"Const")," functor allows any underlying ",Object(r.b)("inlineCode",{parentName:"p"},"Semigroup")," to\nact an an ",Object(r.b)("inlineCode",{parentName:"p"},"Apply"),". When on ",Object(r.b)("inlineCode",{parentName:"p"},"Const")," is applied to another ",Object(r.b)("inlineCode",{parentName:"p"},"Const")," whose\nunderlying ",Object(r.b)("inlineCode",{parentName:"p"},"Semigroup"),"s match, the ",Object(r.b)("inlineCode",{parentName:"p"},"Semigroup"),"s will be combined by\ncalling ",Object(r.b)("inlineCode",{parentName:"p"},"concat")," on the underlying ",Object(r.b)("inlineCode",{parentName:"p"},"Semigroup"),"."),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"ap")," will throw a ",Object(r.b)("inlineCode",{parentName:"p"},"TypeError")," if the underlying Type does not point to a type\nof ",Object(r.b)("inlineCode",{parentName:"p"},"Semigroup"),"."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js",metastring:"runkit",runkit:!0}),"import Const from 'crocks/Const'\n\n// prod :: Number -> Number -> Number\nconst prod =\n  x => y => x * y\n\nConst(5)\n  .map(prod)\n  .ap(Const(27))\n//=> Const 5\n")),Object(r.b)("h3",{id:"valueof"},"valueOf"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-haskell"}),"Const c a ~> () -> c\n")),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"valueOf")," is used as a means of extraction. This function is used primarily for\nconvenience for some of the helper functions that ship with ",Object(r.b)("inlineCode",{parentName:"p"},"crocks"),".\nCalling ",Object(r.b)("inlineCode",{parentName:"p"},"valueOf")," on a ",Object(r.b)("inlineCode",{parentName:"p"},"Const")," instance will result in the underlying left value\nof the ",Object(r.b)("inlineCode",{parentName:"p"},"Product")," type."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js",metastring:"runkit",runkit:!0}),"import Const from 'crocks/Const'\n\nconst ArrayConst =\n  Const(Array)\n\nArrayConst([ 33 ])\n  .valueOf()\n//=> [ 33 ]\n\nArrayConst([ 35 ])\n  .concat(ArrayConst([ 20 ]))\n  .valueOf()\n//=> [ 35, 20 ]\n")))}l.isMDXComponent=!0}}]);