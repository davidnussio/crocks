(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{101:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return d}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=r.a.createContext({}),l=function(e){var t=r.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},b=function(e){var t=l(e.components);return r.a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),b=l(n),m=a,d=b["".concat(o,".").concat(m)]||b[m]||u[m]||i;return n?r.a.createElement(d,c(c({ref:t},p),{},{components:n})):r.a.createElement(d,c({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var p=2;p<i;p++)o[p]=n[p];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},97:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return l}));var a=n(2),r=n(6),i=(n(0),n(101)),o={title:"State",description:"State Crock",layout:"guide",functions:["evalwith","execwith"],weight:140},c={unversionedId:"crocks/State",id:"crocks/State",isDocsHomePage:!1,title:"State",description:"State Crock",source:"@site/docs/crocks/State.md",slug:"/crocks/State",permalink:"/docs/crocks/State",editUrl:"https://github.com/evilsoft/crocks/edit/master/docs/docs/crocks/State.md",version:"current",sidebar:"sidebar",previous:{title:"Result",permalink:"/docs/crocks/Result"},next:{title:"Tuple",permalink:"/docs/crocks/Tuple"}},s=[{value:"Implements",id:"implements",children:[]},{value:"Construction",id:"construction",children:[]},{value:"Constructor Methods",id:"constructor-methods",children:[{value:"get",id:"get",children:[]},{value:"modify",id:"modify",children:[]},{value:"put",id:"put",children:[]},{value:"of",id:"of",children:[]}]},{value:"Instance Methods",id:"instance-methods",children:[{value:"map",id:"map",children:[]},{value:"ap",id:"ap",children:[]},{value:"chain",id:"chain",children:[]},{value:"runWith",id:"runwith",children:[]},{value:"evalWith",id:"evalwith",children:[]},{value:"execWith",id:"execwith",children:[]}]},{value:"Pointfree Functions",id:"pointfree-functions",children:[{value:"evalWith <em>(pointfree)</em>",id:"evalwith-pointfree",children:[]},{value:"execWith <em>(pointfree)</em>",id:"execwith-pointfree",children:[]}]}],p={rightToc:s};function l(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-haskell"}),"State s a\n")),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"State")," is an Algebraic Data Type that abstracts away the associated state\nmanagement that comes with stateful computations.",Object(i.b)("inlineCode",{parentName:"p"},"State")," is parameterized by\ntwo types, a state ",Object(i.b)("inlineCode",{parentName:"p"},"s")," and a resultant ",Object(i.b)("inlineCode",{parentName:"p"},"a"),". The resultant portion may vary it's\ntype, but the state portion must be fixed to a type that is used by all related\nstateful computations."),Object(i.b)("p",null,"All ",Object(i.b)("inlineCode",{parentName:"p"},"State")," instances wrap a function of the form ",Object(i.b)("inlineCode",{parentName:"p"},"s -> Pair a s")," and can be\nconstructed by providing a function of this form. In order to get maximum\nreuse of existing functions, a few construction helpers are available on\nthe ",Object(i.b)("inlineCode",{parentName:"p"},"State")," constructor."),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"State")," is lazy and is required to be run at the edge with some initial state.\nThree methods are available on the instance for running the ",Object(i.b)("inlineCode",{parentName:"p"},"State")," with a\ngiven initial state. ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"#runwith"}),Object(i.b)("inlineCode",{parentName:"a"},"runWith"))," will return a ",Object(i.b)("inlineCode",{parentName:"p"},"Pair a s")," with the\nstate ",Object(i.b)("inlineCode",{parentName:"p"},"s")," on the right and the resultant ",Object(i.b)("inlineCode",{parentName:"p"},"a")," on the left."),Object(i.b)("p",null,"The other two are used for extracting either the state or resultant, unwrapping\nthe values from the ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"Pair"}),Object(i.b)("inlineCode",{parentName:"a"},"Pair"))," and discarding the unwanted portion.\n",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"#evalwith"}),Object(i.b)("inlineCode",{parentName:"a"},"evalWith"))," used when the resultant is wanted, while\n",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"#execwith"}),Object(i.b)("inlineCode",{parentName:"a"},"execWith"))," is used to pull the state."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js",metastring:"runkit",runkit:!0}),"import State from 'crocks/State'\n\nimport Pair from 'crocks/Pair'\nimport constant from 'crocks/combinators/constant'\n\nconst { get, put } = State\n\n// toUpper :: String -> String\nconst toUpper =\n  x => x.toUpperCase()\n\n// putResultant :: String -> State String String\nconst putResultant = x =>\n  put(x)\n    .map(constant(x))\n\n// standard construction\n// State String String\nState(s => Pair(toUpper(s), s))\n  .runWith('nice')\n//=> Pair('NICE', 'nice')\n\n// construction helper\n// State String String\nget(toUpper)\n  .runWith('nice')\n//=> Pair('NICE', 'nice')\n\n// combine states\nget(toUpper)\n  .chain(putResultant)\n  .runWith('nice')\n//=> Pair('NICE', 'NICE')\n\n// pull resultant only\nget(toUpper)\n  .evalWith('nice')\n//=> 'NICE'\n\n// pull state only\nget(toUpper)\n  .execWith('nice')\n//=> 'nice'\n")),Object(i.b)("h2",{id:"implements"},"Implements"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"Functor"),", ",Object(i.b)("inlineCode",{parentName:"p"},"Apply"),", ",Object(i.b)("inlineCode",{parentName:"p"},"Chain"),", ",Object(i.b)("inlineCode",{parentName:"p"},"Applicative"),", ",Object(i.b)("inlineCode",{parentName:"p"},"Monad")),Object(i.b)("h2",{id:"construction"},"Construction"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-haskell"}),"State :: (s -> Pair a s) -> State s a\n")),Object(i.b)("p",null,"Typically instances of ",Object(i.b)("inlineCode",{parentName:"p"},"State")," are constructed using the provided\nconstruction helpers like ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"#get"}),Object(i.b)("inlineCode",{parentName:"a"},"get"))," or ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"#put"}),Object(i.b)("inlineCode",{parentName:"a"},"put")),". While the provided\nhelpers fit most situations, there are times where a ",Object(i.b)("inlineCode",{parentName:"p"},"State"),' instance will need\nto be constructed "by-hand".'),Object(i.b)("p",null,"An instance of ",Object(i.b)("inlineCode",{parentName:"p"},"State")," can be constructed by passing a unary function that takes\nsome type ",Object(i.b)("inlineCode",{parentName:"p"},"s")," as its input and returns a ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"Pair"}),Object(i.b)("inlineCode",{parentName:"a"},"Pair"))," with any type ",Object(i.b)("inlineCode",{parentName:"p"},"a")," in the\nfirst position and the same type ",Object(i.b)("inlineCode",{parentName:"p"},"s")," in second."),Object(i.b)("p",null,"While there is nothing that prevents the type ",Object(i.b)("inlineCode",{parentName:"p"},"s")," from varying, it is\nrecommended to fix the type to a single type for all ",Object(i.b)("inlineCode",{parentName:"p"},"State")," instances that\nare used in a given flow."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js",metastring:"runkit",runkit:!0}),"import Pair from 'crocks/Pair'\nimport State from 'crocks/State'\n\nState(state => Pair(state, state))\n//=> State s s\n\n// increaseBy :: Number -> State Number Number\nconst increaseBy = value =>\n  State(state => Pair(value, state + 1))\n\nincreaseBy(5)\n//=> State Number Number\n")),Object(i.b)("h2",{id:"constructor-methods"},"Constructor Methods"),Object(i.b)("h3",{id:"get"},"get"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-haskell"}),"State.get :: () -> State s s\nState.get :: (s -> a) -> State s a\n")),Object(i.b)("p",null,"A construction helper that is used to access the state portion of a\ngiven ",Object(i.b)("inlineCode",{parentName:"p"},"State")," instance. To make the state accessible, ",Object(i.b)("inlineCode",{parentName:"p"},"get")," will place the\nstate in the resultant portion, overwriting what was there previously."),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"get")," may be called with or without a function as its argument. When nothing is\nprovided for the argument, the state will be applied to the resultant as is. The\nstate will be mapped over any provided function that takes the same type as the\nstate, with the result deposited in the resultant."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js",metastring:"runkit",runkit:!0}),"import State from 'crocks/State'\n\nimport chain from 'crocks/pointfree/chain'\nimport compose from 'crocks/helpers/compose'\nimport getProp from 'crocks/Maybe/getProp'\nimport isNumber from 'crocks/predicates/isNumber'\nimport option from 'crocks/pointfree/option'\nimport safe from 'crocks/Maybe/safe'\n\nconst { get } = State\n\n// propOr :: (String, (b -> Boolean), a) -> Object -> c\nconst propOr = (key, pred, def) =>\n  compose(option(def), chain(safe(pred)), getProp(key))\n\n// safeNumber :: Object -> Number\nconst safeNumber =\n  propOr('number', isNumber, 0)\n\nget(safeNumber)\n  .runWith({ number: 23 })\n//=> Pair(23, { number: 23 })\n\nget(safeNumber)\n  .evalWith({ number: '23' })\n//=> 0\n\nget()\n  .map(safeNumber)\n  .evalWith({ number: 23 })\n//=> 23\n\nget()\n  .map(safeNumber)\n  .runWith({ string: '47' })\n//=> Pair(0, { string: '47'})\n")),Object(i.b)("h3",{id:"modify"},"modify"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-haskell"}),"State.modify :: (s -> s) -> State s ()\n")),Object(i.b)("p",null,"A construction helper that can be used to lift an endo-function that matches\nthe fixed type of the state portion. The lifted function will receive the state\nand returns a new ",Object(i.b)("inlineCode",{parentName:"p"},"State")," instance with the result of the function in the state\nportion. Great care should be taken to not use functions that will change the\ntype of the state as it may not be expected in other stateful computations and\ncan result in hard to track down bugs."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js",metastring:"runkit",runkit:!0}),"import State from 'crocks/State'\n\nimport mapProps from 'crocks/helpers/mapProps'\n\nconst { modify } = State\n\n// add :: Number -> Number -> Number\nconst add =\n  x => y => x + y\n\n// addState :: Number -> State Number ()\nconst addState = x =>\n  modify(add(x))\n\n// addValue :: Number -> State Object ()\nconst addValue = x =>\n  modify(mapProps({ value: add(x) }))\n\naddState(5)\n  .execWith(45)\n//=> 50\n\naddValue(5)\n  .execWith({ value: 45 })\n//=> { value: 50 }\n\naddValue(5)\n  .execWith({})\n//=> {}\n")),Object(i.b)("h3",{id:"put"},"put"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-haskell"}),"State.put :: s -> State s ()\n")),Object(i.b)("p",null,"Used to replace the state portion of a given State instance,, ",Object(i.b)("inlineCode",{parentName:"p"},"put")," can be\nemployed anytime that the state can change without having to know about it's\nprevious value. If the previous value is required for a given stateful\ncomputation, ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"#modify"}),Object(i.b)("inlineCode",{parentName:"a"},"modify"))," can be used to lift a function that represents\nthe change."),Object(i.b)("p",null,"As put updates the state, it is important to ensure that the state portion stays\nfixed for all related functions. Changing the type of the state portion may\nresult in hard to debug bugs and destroys the relationship between stateful\ncomputations."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js",metastring:"runkit",runkit:!0}),"import State from 'crocks/State'\n\nimport compose from 'crocks/helpers/compose'\nimport isString from 'crocks/predicates/isString'\nimport option from 'crocks/pointfree/option'\nimport safe from 'crocks/Maybe/safe'\n\nconst { put } = State\n\n// safeString :: a -> String\nconst safeString =\n  compose(option(''), safe(isString))\n\n// reset :: () -> State String ()\nconst reset = () =>\n  put('')\n\n// update :: a ->  State String ()\nconst update =\n  compose(put, safeString)\n\n// heckYeah :: State String ()\nconst heckYeah =\n  update('Oh Heck Yeah')\n\nheckYeah\n  .execWith('Gosh')\n//=> 'Oh Heck Yeah'\n\nheckYeah\n  .chain(reset)\n  .runWith('Gosh')\n// Pair((), '')\n")),Object(i.b)("h3",{id:"of"},"of"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-haskell"}),"State.of :: a -> State s a\n")),Object(i.b)("p",null,'Used to "blindly" lift any JavaScript value into a ',Object(i.b)("inlineCode",{parentName:"p"},"State"),", ",Object(i.b)("inlineCode",{parentName:"p"},"of")," will take the\nprovided value and return back a new ",Object(i.b)("inlineCode",{parentName:"p"},"State")," instance with the value in\nthe resultant. There are many uses for ",Object(i.b)("inlineCode",{parentName:"p"},"of"),", but mostly it is used to set the\nresultant in the same way ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"#put"}),Object(i.b)("inlineCode",{parentName:"a"},"put"))," is used to replace the state. Many\ntimes ",Object(i.b)("inlineCode",{parentName:"p"},"of")," is used at the start of a given stateful computation or in conjunction\nwith ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"#put"}),Object(i.b)("inlineCode",{parentName:"a"},"put"))," and ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"#modify"}),Object(i.b)("inlineCode",{parentName:"a"},"modify"))," to replace the ",Object(i.b)("inlineCode",{parentName:"p"},"Unit")," the resultant\nis set to for those construction helpers."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js",metastring:"runkit",runkit:!0}),"import State from 'crocks/State'\n\nconst { get, put } = State\n\n// updatePop :: String -> State String String\nconst updatePop = x =>\n  get().chain(\n    old => put(x).chain(\n      () => State.of(old)\n    )\n  )\n\nState.of('hotness')\n  .chain(updatePop)\n  .runWith('crusty')\n//=> Pair('crusty', 'hotness')\n")),Object(i.b)("h2",{id:"instance-methods"},"Instance Methods"),Object(i.b)("h3",{id:"map"},"map"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-haskell"}),"State s a ~> (a -> b) -> State s b\n")),Object(i.b)("p",null,"While the state portion ",Object(i.b)("inlineCode",{parentName:"p"},"s")," of ",Object(i.b)("inlineCode",{parentName:"p"},"State")," must remain fixed to a type, the\nresultant ",Object(i.b)("inlineCode",{parentName:"p"},"a")," can vary in it's type as needed. This allows complex stateful\ncomputations to be represented with ",Object(i.b)("inlineCode",{parentName:"p"},"State"),". The ",Object(i.b)("inlineCode",{parentName:"p"},"map")," method provides a means\nto lift a function into the datatype that will be applied to the resultant and\nreturn a new instance of ",Object(i.b)("inlineCode",{parentName:"p"},"State")," with the result of the function as the new\nresultant."),Object(i.b)("p",null,"While this is similar to the ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"#modify"}),Object(i.b)("inlineCode",{parentName:"a"},"modify"))," construction helper, which\nlifts an endo-function that acts upon the state, ",Object(i.b)("inlineCode",{parentName:"p"},"map")," does not require an\nendo-function as it can move to any type."),Object(i.b)("p",null,"Due to the composition law associated with ",Object(i.b)("inlineCode",{parentName:"p"},"map"),", successive ",Object(i.b)("inlineCode",{parentName:"p"},"map"),"s can be\ncomposed together using function composition. This will give the same results\nbut will only map the value once, instead of once for every mapping."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js",metastring:"runkit",runkit:!0}),"import State from 'crocks/State'\n\nimport compose from 'crocks/helpers/compose'\nimport objOf from 'crocks/helpers/objOf'\nimport getPropOr from 'crocks/helpers/getPropOr'\n\nconst { get } = State\n\n// add :: Number -> Number -> Number\nconst add =\n  x => y => x + y\n\n// getNum :: State Object Number\nconst getNum =\n  get(getPropOr(0, 'num'))\n\ngetNum\n  .map(add(10))\n  .evalWith({ num: 32 })\n//=> 42\n\ngetNum\n  .map(add(10))\n  .map(objOf('result'))\n  .evalWith({ val: 32 })\n//=> { result: 10 }\n\n// comp :: Number -> Object\nconst comp = compose(\n  objOf('result'),\n  add(10)\n)\n\ngetNum\n  .map(comp)\n  .evalWith({ num: 32 })\n//=> { result: 42 }\n")),Object(i.b)("h3",{id:"ap"},"ap"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-haskell"}),"State s (a -> b) ~> State s a -> State s b\n")),Object(i.b)("p",null,"Short for apply, the ",Object(i.b)("inlineCode",{parentName:"p"},"ap")," method is used to apply the resultant of a\ngiven ",Object(i.b)("inlineCode",{parentName:"p"},"State")," instance to a function wrapped in another instance. On\na ",Object(i.b)("inlineCode",{parentName:"p"},"State")," instance that wraps a function, calling ",Object(i.b)("inlineCode",{parentName:"p"},"ap"),", providing it\nanother ",Object(i.b)("inlineCode",{parentName:"p"},"State")," instance, will return a new ",Object(i.b)("inlineCode",{parentName:"p"},"State")," instance with the result of\nthe function in the resultant portion."),Object(i.b)("p",null,"When used with curried, polyadic functions, multiple stateful computations can\nbe combined using the lifted function as a means to combine each of the\ninstances' resultants."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js",metastring:"runkit",runkit:!0}),"import State from 'crocks/State'\n\nimport setProp from 'crocks/helpers/setProp'\nimport getPropOr from 'crocks/helpers/getPropOr'\n\nconst { get, modify } = State\n\nconst data = {\n  tax: .084,\n  sub: 34.97\n}\n\n// add :: Number -> Number -> Number\nconst add =\n  x => y => x + y\n\n// multiply :: Number -> Number -> Number\nconst multiply =\n  x => y => x * y\n\n// round :: Number -> Number\nconst round =\n  x => Math.round(x * 100) / 100\n\n// getKey :: String -> State Object Number\nconst getKey = key =>\n  get(getPropOr(0, key))\n\n// updateKey :: String -> a -> State Object ()\nconst updateKey = key => val =>\n  modify(setProp(key, val))\n\n// addToSub :: Number -> String Object Number\nconst addToSub = x =>\n  getKey('sub')\n    .map(add(x))\n\nconst calcTax =\n  getKey('tax')\n    .map(multiply)\n    .ap(getKey('sub'))\n\n// applyTax :: State Object ()\nconst applyTax =\n  calcTax\n    .chain(addToSub)\n    .map(round)\n    .chain(updateKey('total'))\n\napplyTax\n  .execWith(data)\n//=> { tax: 0.084, sub: 34.07, total: 37.91 }\n")),Object(i.b)("h3",{id:"chain"},"chain"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-haskell"}),"State s a ~> (a -> State s b) -> State s b\n")),Object(i.b)("p",null,"As a means to combine stateful computations, ",Object(i.b)("inlineCode",{parentName:"p"},"chain")," is used to sequence\nstate transactions that either read from or write to the state. ",Object(i.b)("inlineCode",{parentName:"p"},"chain")," takes\na unary function that must return a new ",Object(i.b)("inlineCode",{parentName:"p"},"State")," instance. ",Object(i.b)("inlineCode",{parentName:"p"},"chain")," returns a\nnew ",Object(i.b)("inlineCode",{parentName:"p"},"State")," instance that will apply the computation when run."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js",metastring:"runkit",runkit:!0}),"import State from 'crocks/State'\n\nconst { get, modify } = State\n\n// add :: Number -> State Number ()\nconst add = x =>\n  modify(y => x + y)\n\n// multiply :: Number -> State Number ()\nconst multiply = x =>\n  modify(y => x * y)\n\n// double :: () -> State Number ()\nconst double = () =>\n  get()\n    .chain(add)\n\n// square :: () -> State Number ()\nconst square = () =>\n  get()\n    .chain(multiply)\n\nadd(10)\n  .execWith(10)\n//=> 20\n\nadd(10)\n  .chain(double)\n  .execWith(10)\n//=> 40\n\nadd(10)\n  .chain(square)\n  .execWith(10)\n//=> 400\n\nadd(10)\n  .chain(double)\n  .chain(square)\n  .execWith(10)\n//=> 1600\n")),Object(i.b)("h3",{id:"runwith"},"runWith"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-haskell"}),"State s a ~> s -> Pair a s\n")),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"State")," is a lazy datatype that requires a value for it's state portion to be\nrun. A given ",Object(i.b)("inlineCode",{parentName:"p"},"State")," instance provides a ",Object(i.b)("inlineCode",{parentName:"p"},"runWith")," method that accepts a value\nto run the instance with. The value must be a member of the type that the\ngiven ",Object(i.b)("inlineCode",{parentName:"p"},"State")," instance is fixed to in it's state portion, ",Object(i.b)("inlineCode",{parentName:"p"},"s"),"."),Object(i.b)("p",null,"When called, ",Object(i.b)("inlineCode",{parentName:"p"},"runWith")," will run the state transition with the given value as the\ninitial state and will return the resulting ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"Pair"}),Object(i.b)("inlineCode",{parentName:"a"},"Pair"))," with the resultant in\nthe ",Object(i.b)("inlineCode",{parentName:"p"},"fst")," (first) and the state in the ",Object(i.b)("inlineCode",{parentName:"p"},"snd")," (second)."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js",metastring:"runkit",runkit:!0}),"import State from 'crocks/State'\n\nimport K from 'crocks/combinators/constant'\n\nconst { get, put } = State\n\n// swap :: s -> s -> State s s\nconst swap = x => old =>\n  put(x)\n    .chain(K(State.of(old)))\n\n//update :: s -> State s s\nconst update = x =>\n  get()\n    .chain(swap(x))\n\nupdate(45)\n  .runWith(100)\n//=> Pair(100, 45)\n")),Object(i.b)("h3",{id:"evalwith"},"evalWith"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-haskell"}),"State s a ~> s -> a\n")),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"State")," is a lazy datatype that requires a value for it's state portion to\nbe run. A given ",Object(i.b)("inlineCode",{parentName:"p"},"State")," instance provides an ",Object(i.b)("inlineCode",{parentName:"p"},"evalWith")," method that accepts a\nvalue to run the instance with. The value must be a member of the type that the\ngiven ",Object(i.b)("inlineCode",{parentName:"p"},"State")," instance is fixed to in its state portion, ",Object(i.b)("inlineCode",{parentName:"p"},"s"),"."),Object(i.b)("p",null,"When called, ",Object(i.b)("inlineCode",{parentName:"p"},"evalWith")," will run the state transition with the given value as\nthe initial state and will return the resulting resultant discarding the state\nportion."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js",metastring:"runkit",runkit:!0}),"import State from 'crocks/State'\n\nimport concat from 'crocks/pointfree/concat'\nimport flip from 'crocks/combinators/flip'\nimport liftA2 from 'crocks/helpers/liftA2'\nimport map from 'crocks/pointfree/map'\nimport getPropOr from 'crocks/helpers/getPropOr'\n\nconst { get } = State\n\nconst name = {\n  first: 'Franklin',\n  last: 'Jennings'\n}\n\n// getLast :: State Object String\nconst getFirst =\n  get(getPropOr('', 'first'))\n\n// getLast :: State Object String\nconst getLast =\n  get(getPropOr('', 'last'))\n\n// inner :: Functor f => f a -> f [ a ]\nconst inner =\n  map(Array.of)\n\n// combineNames :: State Object [ String ]\nconst combineNames = liftA2(\n  flip(concat),\n  inner(getFirst),\n  inner(getLast)\n)\n\ncombineNames\n  .evalWith(name)\n//=> [ 'Franklin', 'Jennings' ]\n")),Object(i.b)("h3",{id:"execwith"},"execWith"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-haskell"}),"State s a ~> s -> s\n")),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"State")," is a lazy datatype that requires a value for it's state portion to\nbe run. A given ",Object(i.b)("inlineCode",{parentName:"p"},"State")," instance provides an ",Object(i.b)("inlineCode",{parentName:"p"},"execWith")," method that accepts a\nvalue to run the instance with. The value must be a member of the type that the\ngiven ",Object(i.b)("inlineCode",{parentName:"p"},"State")," instance is fixed to in it's state portion, ",Object(i.b)("inlineCode",{parentName:"p"},"s"),"."),Object(i.b)("p",null,"When called, ",Object(i.b)("inlineCode",{parentName:"p"},"execWith")," will run the state transition with the given value as\nthe initial state and will return the resulting state, discarding the resultant\nportion."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js",metastring:"runkit",runkit:!0}),"import State from 'crocks/State'\n\nimport compose from 'crocks/helpers/compose'\nimport concat from 'crocks/pointfree/concat'\n\nconst { modify } = State\n\n// toUpper :: String -> String\nconst toUpper =\n  x => x.toUpperCase()\n\n// exclaim :: String -> String\nconst exclaim =\n  concat('!!!')\n\n// yell :: State String ()\nconst yell = modify(\n  compose(exclaim, toUpper)\n)\n\nyell\n  .execWith('nice')\n//=> 'NICE!!!'\n")),Object(i.b)("h2",{id:"pointfree-functions"},"Pointfree Functions"),Object(i.b)("h3",{id:"evalwith-pointfree"},"evalWith ",Object(i.b)("em",{parentName:"h3"},"(pointfree)")),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"crocks/State/evalWith")),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-haskell"}),"evalWith :: s -> State s a -> a\n")),Object(i.b)("p",null,"The ",Object(i.b)("inlineCode",{parentName:"p"},"evalWith")," pointfree function can be employed to execute the\n",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"#evalwith"}),Object(i.b)("inlineCode",{parentName:"a"},"evalWith"))," method on a given ",Object(i.b)("inlineCode",{parentName:"p"},"State")," instance. This function is\ntypically used at the edge of a program where all the side-effects typically\nreside."),Object(i.b)("p",null,"As all this function does is return the result of applying a given initial state\nto the ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"#evalwith"}),Object(i.b)("inlineCode",{parentName:"a"},"evalWith"))," method to the provided ",Object(i.b)("inlineCode",{parentName:"p"},"State")," instance, it will\nalso return the resulting resultant, throwing away the resulting state."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js",metastring:"runkit",runkit:!0}),"import State from 'crocks/State'\n\nimport evalWith from 'crocks/State/evalWith'\n\nimport compose from 'crocks/helpers/compose'\nimport curry from 'crocks/helpers/curry'\nimport flip from 'crocks/combinators/flip'\n\nconst { get } = State\n\n// addToState :: Number -> State Number Number\nconst addToState =\n  x => get(y => x + y)\n\n// add :: Number -> Number -> Number\nconst add = curry(\n  compose(flip(evalWith), addToState)\n)\n\n// add10 :: Number -> Number\nconst add10 =\n  add(10)\n\nadd10(32)\n//=> 42\n\nadd(1295, 42)\n// 1337\n")),Object(i.b)("h3",{id:"execwith-pointfree"},"execWith ",Object(i.b)("em",{parentName:"h3"},"(pointfree)")),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"crocks/State/execWith")),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-haskell"}),"execWith :: s -> State s a -> s\n")),Object(i.b)("p",null,"The ",Object(i.b)("inlineCode",{parentName:"p"},"execWith")," pointfree function can be employed to execute the\n",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"#execwith"}),Object(i.b)("inlineCode",{parentName:"a"},"execWith"))," method on a given ",Object(i.b)("inlineCode",{parentName:"p"},"State")," instance. This function is\ntypically used at the edge of a program where all the side-effects typically\nreside."),Object(i.b)("p",null,"As all this function does is return the result of applying a given initial state\nto the ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"#execwith"}),Object(i.b)("inlineCode",{parentName:"a"},"execWith"))," method to the provided ",Object(i.b)("inlineCode",{parentName:"p"},"State")," instance, it will\nalso return the resulting state, throwing away the resulting resultant."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js",metastring:"runkit",runkit:!0}),"import State from 'crocks/State'\n\nimport execWith from 'crocks/State/execWith'\n\nimport curry from 'crocks/helpers/curry'\nimport isSameType from 'crocks/predicates/isSameType'\nimport mapProps from 'crocks/helpers/mapProps'\nimport when from 'crocks/logic/when'\n\nconst { modify } = State\n\n// middleware :: Object -> State Object | Object -> Object\nconst middleware = curry(\n  s => when(isSameType(State), execWith(s))\n)\n\n// incValue :: State Object ()\nconst incValue =\n  modify(mapProps({ value: x => x + 1 }))\n\nmiddleware({ value: 10 }, incValue)\n//=> { value: 11 }\n\nmiddleware({ value: 10 }, { value: 32 })\n//=> { value: 32 }\n")))}l.isMDXComponent=!0}}]);