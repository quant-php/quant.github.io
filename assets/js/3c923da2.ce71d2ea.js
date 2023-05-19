"use strict";(self.webpackChunkthorsten_suckow_homberg_de=self.webpackChunkthorsten_suckow_homberg_de||[]).push([[250],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=p(n),m=r,h=c["".concat(l,".").concat(m)]||c[m]||d[m]||i;return n?a.createElement(h,o(o({ref:t},u),{},{components:n})):a.createElement(h,o({ref:t},u))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:r,o[1]=s;for(var p=2;p<i;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4270:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var a=n(7462),r=(n(7294),n(3905));const i={id:"quant_core",title:"Core",slug:"/packages/quant/core"},o="quant/core",s={unversionedId:"packages/quant/quant_core",id:"packages/quant/quant_core",title:"Core",description:"Low-level API providing contracts and base implementations for quant. Can easily be used as a foundation for",source:"@site/docs/packages/quant/core.md",sourceDirName:"packages/quant",slug:"/packages/quant/core",permalink:"/docs/packages/quant/core",draft:!1,editUrl:"https://github.com/quant-php/quant.github.io/tree/main/docs/packages/quant/core.md",tags:[],version:"current",lastUpdatedBy:"Thorsten Suckow-Homberg",lastUpdatedAt:1684514651,formattedLastUpdatedAt:"May 19, 2023",frontMatter:{id:"quant_core",title:"Core",slug:"/packages/quant/core"},sidebar:"docs",previous:{title:"Packages",permalink:"/docs/packages"},next:{title:"PHPStan",permalink:"/docs/packages/quant/phpstan"}},l={},p=[{value:"Installation",id:"installation",level:2},{value:"1. Getter/Setter automation",id:"1-gettersetter-automation",level:2},{value:"<code>#[Getter]</code> and <code>#[Setter]</code> Attributes",id:"getter-and-setter-attributes",level:3},{value:"Getters",id:"getters",level:4},{value:"Setters and Guards",id:"setters-and-guards",level:4},{value:"Using the guards with <code>__construct</code>",id:"using-the-guards-with-__construct",level:4},{value:"Constructor Property Promotion",id:"constructor-property-promotion",level:3},{value:"Attributes on class-level",id:"attributes-on-class-level",level:3},{value:"Attribute Configuration",id:"attribute-configuration",level:3},{value:"Access-level modifiers",id:"access-level-modifiers",level:4},{value:"Available modifier",id:"available-modifier",level:5},{value:"Remarks",id:"remarks",level:3},{value:"Benchmarks",id:"benchmarks",level:2},{value:"Resources",id:"resources",level:2}],u={toc:p},c="wrapper";function d(e){let{components:t,...n}=e;return(0,r.kt)(c,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"quantcore"},(0,r.kt)("inlineCode",{parentName:"h1"},"quant/core")),(0,r.kt)("p",null,"Low-level API providing contracts and base implementations for ",(0,r.kt)("strong",{parentName:"p"},"quant"),". Can easily be used as a foundation for\nother projects."),(0,r.kt)("admonition",{title:"Namespace",type:"tip"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("inlineCode",{parentName:"p"},"Quant\\Core"))),(0,r.kt)("h2",{id:"installation"},"Installation"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"quant/core")," comes bundled with ",(0,r.kt)("strong",{parentName:"p"},"quant"),". To install it separately, follow the ",(0,r.kt)("a",{parentName:"p",href:"/docs/installation#packages"},"installation instructions"),"."),(0,r.kt)("h2",{id:"1-gettersetter-automation"},"1. Getter/Setter automation"),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"In the following, the word ",(0,r.kt)("inlineCode",{parentName:"p"},"Accessor")," is used both for accessors and mutators, commonly referred to as ",(0,r.kt)("inlineCode",{parentName:"p"},"getters")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"setters"),".")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Quant/Core/Trait/AccessorTrait")," provides accessors to object properties attributed with ",(0,r.kt)("inlineCode",{parentName:"p"},"#[Setter]"),"\nand/or ",(0,r.kt)("inlineCode",{parentName:"p"},"#[Getter]"),"."),(0,r.kt)("h3",{id:"getter-and-setter-attributes"},(0,r.kt)("inlineCode",{parentName:"h3"},"#[Getter]")," and ",(0,r.kt)("inlineCode",{parentName:"h3"},"#[Setter]")," Attributes"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php",metastring:"title=Example",title:"Example"},'use Quant\\Core\\Trait\\AccessorTrait;\nuse Quant\\Core\\Attribute\\Setter;\nuse Quant\\Core\\Attribute\\Getter;\n\nclass Target \n{\n    use AccessorTrait;\n  \n    #[Setter] #[Getter] private string $value = "";\n}\n\n$target = new Target();\n$target->setValue("new value")->getValue(); // "new value"\n')),(0,r.kt)("p",null,"When ",(0,r.kt)("inlineCode",{parentName:"p"},"#[Setter]")," and/or ",(0,r.kt)("inlineCode",{parentName:"p"},"#[Getter]")," are used, ",(0,r.kt)("inlineCode",{parentName:"p"},"get"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"set")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"is")," methods will be available with an object instance\nwhose class uses these annotations ",(0,r.kt)("em",{parentName:"p"},"(sic!)"),"."),(0,r.kt)("p",null,"Such attributes may be configured for a class or its properties and/or its constructor parameters when using ",(0,r.kt)("strong",{parentName:"p"},"constructor property promotion"),"."),(0,r.kt)("h4",{id:"getters"},"Getters"),(0,r.kt)("p",null,"Getters are available for properties using the ",(0,r.kt)("inlineCode",{parentName:"p"},"#[Getter]")," attribute. Except for ",(0,r.kt)("inlineCode",{parentName:"p"},"boolean"),"-values, a ",(0,r.kt)("inlineCode",{parentName:"p"},"getter")," is always prefixed with\n",(0,r.kt)("inlineCode",{parentName:"p"},"get"),". ",(0,r.kt)("inlineCode",{parentName:"p"},"boolean")," values can be queried using the prefix ",(0,r.kt)("inlineCode",{parentName:"p"},"is"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php",metastring:"title=Getters",title:"Getters"},'use Quant\\Core\\Trait\\AccessorTrait;\nuse Quant\\Core\\Attribute\\Getter;\nclass Target \n{\n    use AccessorTrait;\n  \n    #[Getter] private string $value = "default";\n    #[Getter] private bool $valid = true;\n}\n\n$target = new Target();\n$target->getValue(); // "default"\n$target->isValid(); // true\n')),(0,r.kt)("h4",{id:"setters-and-guards"},"Setters and Guards"),(0,r.kt)("p",null,"The return value of a ",(0,r.kt)("inlineCode",{parentName:"p"},"set"),"-method provided with ",(0,r.kt)("inlineCode",{parentName:"p"},"AccessorTrait")," will always be the owning instance. "),(0,r.kt)("p",null,"To use invariants with ",(0,r.kt)("inlineCode",{parentName:"p"},"setters"),", each ",(0,r.kt)("inlineCode",{parentName:"p"},"setter")," has an ",(0,r.kt)("inlineCode",{parentName:"p"},"apply"),"-method that guards the property. If implemented, its return value\nwill be used as the new value for the property. This allows for applying validation and coercion logic without accidentally\nbreaking the ",(0,r.kt)("inlineCode",{parentName:"p"},"AccessorTrait"),"'s interface."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php",metastring:'title="Setters and Guards"',title:'"Setters',and:!0,'Guards"':!0},'use Quant\\Core\\Trait\\AccessorTrait;\nuse Quant\\Core\\Attribute\\Setter;\n\nclass Target \n{\n    use AccessorTrait;\n  \n    #[Setter] private string $value = "";\n\n    protected function applyValue(string $value): string\n    {\n        return $value === "" ? $this->value : $value;\n    }\n}\n\n$target = new Target();\n$target->setValue("new value")->setValue("")->getValue(); // "new value"\n')),(0,r.kt)("h4",{id:"using-the-guards-with-__construct"},"Using the guards with ",(0,r.kt)("inlineCode",{parentName:"h4"},"__construct")),(0,r.kt)("p",null,"If an object requires the guards to be used with ",(0,r.kt)("a",{parentName:"p",href:"#constructor-property-promotion"},"constructor arguments"),", the method ",(0,r.kt)("inlineCode",{parentName:"p"},"AccessorTrait::applyProperties()"),"\ncan be used: "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php",metastring:'title="Calling guards with the constructor"',title:'"Calling',guards:!0,with:!0,the:!0,'constructor"':!0},'use Quant\\Core\\Trait\\AccessorTrait;\nuse Quant\\Core\\Attribute\\Setter;\n\nclass Target \n{\n    use AccessorTrait;\n    \n    public function __construct(\n        private string $a,\n        #[Setter]\n        private string $b\n    ) {\n        $this->applyProperties([1 => $b]);\n    }\n\n    protected function applyB(string $value): mixed \n    {\n        echo "Called by the constructor.";\n        return $value;\n    }\n}\n')),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"AccessorTrait::applyProperties(array $args)")," configures the properties of ",(0,r.kt)("strong",{parentName:"p"},"this")," class with the values available in ",(0,r.kt)("inlineCode",{parentName:"p"},"$args"),".\nThe ordinal value of the individual entries in ",(0,r.kt)("inlineCode",{parentName:"p"},"$args")," is expected to match the ordinal value of the parameter\nthat is to be configured with the value, so it treats the arguments positionally: To use an argument\nfor ",(0,r.kt)("inlineCode",{parentName:"p"},"$b")," with the following constructor"),(0,r.kt)("p",null," ",(0,r.kt)("inlineCode",{parentName:"p"},"__construct($a = null, $b = null)")),(0,r.kt)("p",null," an array in the form of"),(0,r.kt)("p",null," ",(0,r.kt)("inlineCode",{parentName:"p"},'$args = [1 => "value_of_b"]')),(0,r.kt)("p",null," must be passed to ",(0,r.kt)("inlineCode",{parentName:"p"},"applyProperties")," "),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Argument inspection can be leveraged to the ",(0,r.kt)("inlineCode",{parentName:"p"},"AccessorTrait")," by applying ",(0,r.kt)("inlineCode",{parentName:"p"},"applyProperties()")," to the return value\nof ",(0,r.kt)("inlineCode",{parentName:"p"},"func_get_args()"),":"),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-php"},"$this->applyProperties(func_get_args());\n"))),(0,r.kt)("h3",{id:"constructor-property-promotion"},"Constructor Property Promotion"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"AccessorTrait")," considers constructor parameters used with ",(0,r.kt)("strong",{parentName:"p"},"Constructor Property Promotion"),". Configuring the attributes\ndirectly on constructor parameters greatly reduces boilerplate code:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php",metastring:'title="Constructor Property Promotion"',title:'"Constructor',Property:!0,'Promotion"':!0},"use Quant\\Core\\Trait\\AccessorTrait;\nuse Quant\\Core\\Attribute\\Setter;\n\nclass Target \n{\n    use AccessorTrait;\n\n    public function __construct(\n         #[Setter] #[Getter]\n         public string $value,\n         #[Setter]\n         private bool $state\n     ) {\n    {\n    }\n}\n")),(0,r.kt)("h3",{id:"attributes-on-class-level"},"Attributes on class-level"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"#[Setter]")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"#[Getter]")," can also be used on class-level:  "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php",metastring:'title="class-level setters and getters"',title:'"class-level',setters:!0,and:!0,'getters"':!0},"use Quant\\Core\\Trait\\AccessorTrait;\nuse Quant\\Core\\Attribute\\Setter;\nuse Quant\\Core\\Attribute\\Getter;\n\n#[Setter] #[Getter]\nclass Target \n{\n    use AccessorTrait;\n\n    public function __construct(\n         #Setter[Modifier::PRIVATE]  \n         public string $value,\n         private bool $state\n     ) {\n    {\n    }\n}\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"#[Getter]")," / ",(0,r.kt)("inlineCode",{parentName:"p"},"#[Setter]")," on property level override class-level attribute configuration."),(0,r.kt)("p",null,"In the example above, ",(0,r.kt)("inlineCode",{parentName:"p"},"setters")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"getters")," for ",(0,r.kt)("inlineCode",{parentName:"p"},"$value")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"$state")," are available, but ",(0,r.kt)("inlineCode",{parentName:"p"},"setValue()")," is configured\nwith a private access modifier."),(0,r.kt)("h3",{id:"attribute-configuration"},"Attribute Configuration"),(0,r.kt)("h4",{id:"access-level-modifiers"},"Access-level modifiers"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"#[Getter]")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"#[Setter]")," can be configured with access-level modifiers. To do so, import the ",(0,r.kt)("inlineCode",{parentName:"p"},"Modifier"),"-enum from\nthe package ",(0,r.kt)("inlineCode",{parentName:"p"},"Quant\\Core\\Lang\\Modifer"),", and pass the required modifier as an argument to the accessor:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},"use Quant\\Core\\Attribute\\Setter;\nuse Quant\\Core\\Lang\\Modifier;\n\n#[Getter(Modifier::PROTECTED)]\nclass A \n{\n    // ...\n")),(0,r.kt)("p",null,"The visibility of the methods provided by the ",(0,r.kt)("inlineCode",{parentName:"p"},"AccessorTrait")," correspond to the particular modifier. The default\nmodifier, if none is provided, is ",(0,r.kt)("inlineCode",{parentName:"p"},"Quant\\Core\\Lang\\Modifier\\Modifier::PUBLIC"),"."),(0,r.kt)("h5",{id:"available-modifier"},"Available modifier"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"quant"),"-modifier semantically correspond to language level modifier."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Quant\\Core\\Lang\\Modifier::PRIVATE")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Quant\\Core\\Lang\\Modifier::PROTECTED")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Quant\\Core\\Lang\\Modifier::PUBLIC"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php",metastring:'title="access-level modifiers"',title:'"access-level','modifiers"':!0},'use Quant\\Core\\Trait\\AccessorTrait;\nuse Quant\\Core\\Attribute\\Setter;\nuse Quant\\Core\\Attribute\\Getter;\nuse Quant\\Core\\Lang\\Modifier;\n\nclass A \n{\n     use AccessorTrait;\n\n     public function __construct(\n          public string $value,\n          #[Getter(Modifier::PROTECTED)]\n          private bool $state,\n          #[Getter(Modifier::PRIVATE)]\n          private bool $valid\n      ) {\n     {\n     }\n     \n     public function proxyIsValid(): bool\n     {\n         return $this->isValid();\n     }\n }\n \n\nclass B extends A \n{\n    public function proxyIsState(): bool\n    {\n        return $this->isState();\n    }\n} \n\n$a = new A("value", true, false);\n$a->isValid(); // BadMethodCallException\n$a->proxyIsValid(); // false\n\n$a = new B("value", true, false);\n$b->isState(); // BadMethodCallException\n$b->proxyIsState();// true \n')),(0,r.kt)("h3",{id:"remarks"},"Remarks"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"If the target already contains ",(0,r.kt)("inlineCode",{parentName:"li"},"setters")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"getters")," matching the naming conventions used by the ",(0,r.kt)("inlineCode",{parentName:"li"},"AccessorTrait"),",\nhandling of these methods will default to the owning object, and not the ",(0,r.kt)("inlineCode",{parentName:"li"},"AccessorTrait"),". This also applies to\nthe ",(0,r.kt)("a",{parentName:"li",href:"#setters-and-guards"},(0,r.kt)("inlineCode",{parentName:"a"},"applyProperties")),"-method."),(0,r.kt)("li",{parentName:"ul"},"Once the ",(0,r.kt)("inlineCode",{parentName:"li"},"AccessorTrait")," is ",(0,r.kt)("inlineCode",{parentName:"li"},"used"),"  by a class, subclasses of the hosting class inherit the functionality of the ",(0,r.kt)("inlineCode",{parentName:"li"},"AccessorTrait")," and\ndo not need to redeclare the trait with their class-definition to use ",(0,r.kt)("inlineCode",{parentName:"li"},"#[Getter]")," / ",(0,r.kt)("inlineCode",{parentName:"li"},"#[Setter]")," attributes. "),(0,r.kt)("li",{parentName:"ul"},"Static Code Analyzis Support is available with ",(0,r.kt)("a",{parentName:"li",href:"phpstan"},"quant/phpstan"))),(0,r.kt)("h2",{id:"benchmarks"},"Benchmarks"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"quant/core")," uses ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/phpbench/phpbench"},"phpbench")," for benchmarking selected functionality of this package. The command"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ vendor/bin/phpbench run Tests/Benchmarks --report=aggregate --retry-threshold=5\n")),(0,r.kt)("p",null,"starts the Benchmarks. Please consult the ",(0,r.kt)("a",{parentName:"p",href:"https://phpbench.readthedocs.io/"},"documentation")," for details on how to configure the benchmark-runner to your needs."),(0,r.kt)("h2",{id:"resources"},"Resources"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/quant-php/quant/issues"},"Report issues")," and\n",(0,r.kt)("a",{parentName:"li",href:"https://github.com/quant-php/quant/pulls"},"send Pull Requests"),"\nin the ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/quant-php/quant"},"main quant repository"))))}d.isMDXComponent=!0}}]);