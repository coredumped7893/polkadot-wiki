(self.webpackChunk=self.webpackChunk||[]).push([[7202],{47940:(e,a,t)=>{"use strict";t.d(a,{Z:()=>p});var n=t(74165),o=t(15861),s=t(67294),r=t(87152),i=t(34200),l=t(67425);function d(e,a,t){return u.apply(this,arguments)}function u(){return(u=(0,o.Z)((0,n.Z)().mark((function e(a,t,o){var s,l,d,u,c;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:s=void 0,l=void 0,e.t0=a,e.next="polkadot"===e.t0?5:"kusama"===e.t0?7:"statemine"===e.t0?9:"statemint"===e.t0?11:13;break;case 5:return s="wss://rpc.polkadot.io",e.abrupt("break",14);case 7:return s="wss://kusama-rpc.polkadot.io/",e.abrupt("break",14);case 9:return s="wss://statemine-rpc.polkadot.io/",e.abrupt("break",14);case 11:return s="wss://statemint-rpc.polkadot.io/",e.abrupt("break",14);case 13:console.log("Unknown socket url provided, no connection made.");case 14:if(void 0!==s){e.next=18;break}return e.abrupt("return");case 18:return d=new r.U(s),e.next=21,i.G.create({provider:d});case 21:u=e.sent,(c=t.split(".")).forEach((function(e){e in u&&(u=u[e])})),e.t1=c[0],e.next="consts"===e.t1?27:"query"===e.t1?29:34;break;case 27:return l=u.toString(),e.abrupt("break",35);case 29:return e.next=31,u();case 31:return l=(l=e.sent).toString(),e.abrupt("break",35);case 34:console.log("Unknown path prefix ("+c[0]+") in "+t);case 35:return e.abrupt("return",l);case 36:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function c(e,a,t,n){switch(a){case"humanReadable":(0,l.HumanReadable)(e,t,n);break;case"precise":(0,l.Precise)(e,t,n);break;case"blocksToDays":(0,l.BlocksToDays)(e,n);break;case"percentage":(0,l.Percentage)(e,n);break;case"arrayLength":(0,l.ArrayLength)(e,n);break;default:return void console.log("Ignoring unknown filter type")}}const p=function(e){var a=e.network,t=e.path,r=e.defaultValue,i=e.filter,l=void 0===i?void 0:i,u=(0,s.useState)(""),p=u[0],m=u[1];return a=a.toLowerCase(),(0,s.useEffect)((function(){void 0!==l?c(r.toString(),l,a,m):m(r.toString());var e=void 0;switch(a){case"polkadot":e="wss://rpc.polkadot.io";break;case"kusama":e="wss://kusama-rpc.polkadot.io/";break;case"statemine":e="wss://statemine-rpc.polkadot.io/";break;case"statemint":e="wss://statemint-rpc.polkadot.io/";break;default:console.log("Unknown network provided, "+a)}if(void 0===e)console.log("Failed to connect to a valid websocket, applying default");else{var s=function(){var e=(0,o.Z)((0,n.Z)().mark((function e(){var o;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d(a,t,m);case 2:if(void 0!==(o=e.sent)){e.next=7;break}return e.abrupt("return");case 7:void 0!==l?c(o,l,a,m):m(o);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();try{s()}catch(i){console.log(i)}}}),[]),p}},67425:e=>{var a={polkadot:{precision:1e10,symbol:"DOT"},kusama:{precision:1e12,symbol:"KSM"},statemint:{precision:1e10,symbol:"DOT"},statemine:{precision:1e12,symbol:"KSM"}};e.exports={HumanReadable:function(e,t,n){var o=void 0;if("polkadot"===t||"statemint"===t)o=3;else{if("kusama"!==t&&"statemine"!==t)return void console.log("Unknown network type found when attempting to apply 'Human Readable' filter");o=6}e=parseFloat(e),n((e=Number.isInteger(e/a[t].precision)?e/a[t].precision+" "+a[t].symbol:(e/a[t].precision).toFixed(o)+" "+a[t].symbol).toString())},Precise:function(e,t,n){n(e=(e=parseFloat(e))/a[t].precision+" "+a[t].symbol)},BlocksToDays:function(e,a){a((e=6*e/86400).toString())},Percentage:function(e,a){a((e/=1e7).toString())},ArrayLength:function(e,a){a((e=e.split(",").length).toString())}}},87149:(e,a,t)=>{"use strict";t.r(a),t.d(a,{assets:()=>c,contentTitle:()=>d,default:()=>h,frontMatter:()=>l,metadata:()=>u,toc:()=>p});var n=t(87462),o=t(63366),s=(t(67294),t(3905)),r=t(47940),i=["components"],l={id:"learn-comparisons-kusama",title:"Polkadot vs. Kusama",sidebar_label:"Kusama",description:"Comparing the cousins.",keywords:["polkadot","kusama","polkadot vs kusama","canary"],slug:"../learn-comparisons-kusama"},d=void 0,u={unversionedId:"learn/learn-comparisons-kusama",id:"learn/learn-comparisons-kusama",title:"Polkadot vs. Kusama",description:"Comparing the cousins.",source:"@site/../docs/learn/learn-comparisons-kusama.md",sourceDirName:"learn",slug:"/learn-comparisons-kusama",permalink:"/docs/learn-comparisons-kusama",draft:!1,editUrl:"https://github.com/w3f/polkadot-wiki/edit/master/docs/learn/learn-comparisons-kusama.md",tags:[],version:"current",lastUpdatedBy:"Filippo",lastUpdatedAt:1679996989,formattedLastUpdatedAt:"Mar 28, 2023",frontMatter:{id:"learn-comparisons-kusama",title:"Polkadot vs. Kusama",sidebar_label:"Kusama",description:"Comparing the cousins.",keywords:["polkadot","kusama","polkadot vs kusama","canary"],slug:"../learn-comparisons-kusama"},sidebar:"docs",previous:{title:"Polkadot Comparisons",permalink:"/docs/learn-comparisons-index"},next:{title:"Ethereum",permalink:"/docs/learn-comparisons-ethereum-2"}},c={},p=[{value:"Cost and Speed",id:"cost-and-speed",level:2},{value:"Canary network",id:"canary-network",level:2},{value:"Going forward",id:"going-forward",level:2},{value:"Explore more",id:"explore-more",level:2}],m={toc:p},k="wrapper";function h(e){var a=e.components,t=(0,o.Z)(e,i);return(0,s.kt)(k,(0,n.Z)({},m,t,{components:a,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"Although they are like cousins and share many parts of their code, Polkadot and Kusama are\nindependent, standalone networks with different priorities. Kusama is wild and fast, and great for\nbold experimentation and early-stage deployment. Polkadot is more conservative, prioritizing\nstability and dependability. Cousins have their differences after all."),(0,s.kt)("admonition",{type:"info"},(0,s.kt)("p",{parentName:"admonition"},"To get a better understanding of the key similarities and difference between Polkadot and Kusama,\ncheckout\n",(0,s.kt)("a",{parentName:"p",href:"https://support.polkadot.network/support/solutions/articles/65000182146-kusama-and-polkadot-what-s-the-difference-"},"this support article"),".")),(0,s.kt)("h2",{id:"cost-and-speed"},"Cost and Speed"),(0,s.kt)("p",null,"Teams wishing to run a parachain are required to bond tokens as security. The bonding requirement on\nKusama is lower than on Polkadot, making it the more affordable development environment."),(0,s.kt)("p",null,"Another key technical difference between Polkadot and Kusama is that Kusama has modified governance\nparameters that allow for faster upgrades. Kusama is up to four times faster than Polkadot. On\nPolkadot, the voting period on referendums lasts\n",(0,s.kt)(r.Z,{network:"polkadot",path:"consts.democracy.votingPeriod",defaultValue:403200,filter:"blocksToDays",mdxType:"RPC"}),"\n","\ndays, followed by an enactment period of\n",(0,s.kt)(r.Z,{network:"polkadot",path:"consts.democracy.enactmentPeriod",defaultValue:403200,filter:"blocksToDays",mdxType:"RPC"}),"\n","\ndays before the changes are enacted on-chain. On Kusama, voting lasts\n",(0,s.kt)(r.Z,{network:"kusama",path:"consts.democracy.votingPeriod",defaultValue:100800,filter:"blocksToDays",mdxType:"RPC"}),"\n","\ndays, followed by an\n",(0,s.kt)(r.Z,{network:"kusama",path:"consts.democracy.enactmentPeriod",defaultValue:115200,filter:"blocksToDays",mdxType:"RPC"}),"\n","\nday enactment period. This means stakeholders need to stay active and vigilant if they want to keep\nup with all the proposals, referenda, and upgrades, and validators on Kusama often need to update on\nshort notice."),(0,s.kt)("p",null,"This does not mean that the Kusama blockchain itself is faster, in the sense of faster block times\nor transaction throughput (these are the same on both networks), but that there's a shorter amount\nof time between governance events such as proposing new referenda, voting, and enacting approved\nupgrades. This allows Kusama to adapt and evolve faster than Polkadot."),(0,s.kt)("h2",{id:"canary-network"},"Canary network"),(0,s.kt)("p",null,"The initial use case for Kusama was as a pre-production environment, a \u201ccanary network\u201d."),(0,s.kt)("p",null,"Canary is a type of bird: back in the day, coal miners would put canaries into coal mines as a way\nto measure the amount of toxic gases in the tunnels. Similarly, canary testing is a way to validate\nsoftware by releasing software to a limited number of users, or perhaps, an isolated environment -\nwithout hurting a wide range of users."),(0,s.kt)("p",null,"Releases made onto Kusama can be thought of as\n",(0,s.kt)("a",{parentName:"p",href:"https://martinfowler.com/bliki/CanaryRelease.html"},"Canary Releases"),". These releases are usually\nstaged. In Kusama's early days, the network won't just be used for parachain candidates to innovate\nand test changes, but a proof of concept for Polkadot's sharded model."),(0,s.kt)("p",null,'Kusama is not simply a testnet, the blockchain is fully functional with attached economic value, and\nown governance. The future of Kusama is in the hands of its participants. In a typical blockchain\ndevelopment pipeline, Kusama would sit in between a "testnet" and a "mainnet":'),(0,s.kt)("admonition",{title:"Testnet --\x3e Kusama --\x3e Polkadot",type:"info"}),(0,s.kt)("p",null,"As you can imagine, building on Kusama first allows teams to test things out in a live, fully\ndecentralized, and community-controlled network with real-world conditions and lower stakes in the\nevent of problems or bugs than on Polkadot."),(0,s.kt)("p",null,"Many projects will maintain parachains on both networks, experimenting and testing new technologies\nand features on Kusama before deploying them to Polkadot. Some teams will decide just to stay on\nKusama, which is likely to be a place where we see some exciting experimentation with new\ntechnologies going forward. Projects that require high-throughput but don\u2019t necessarily require\nbank-like security, such as some gaming, social networking, and content distribution applications,\nare particularly good candidates for this use case."),(0,s.kt)("p",null,"Kusama may also prove to be the perfect environment for ambitious experiments with new ideas and\ninnovations in areas like governance, incentives, monetary policy, and DAOs (decentralized\nautonomous organizations). Future upgrades to the Polkadot runtime will also likely be deployed to\nKusama before Polkadot mainnet. This way, not only will we be able to see how these new technologies\nand features will perform under real-world conditions before bringing them to Polkadot, but teams\nwho have deployed to both networks will also get an advanced look at how their own technology will\nperform under those upgrades."),(0,s.kt)("h2",{id:"going-forward"},"Going forward"),(0,s.kt)("p",null,"Ultimately, Kusama and Polkadot will live on as independent, standalone networks with their own\ncommunities, their own governance, and their own complementary use cases, though they will continue\nto maintain a close relationship, with many teams likely deploying applications to both networks. In\nthe future, we\u2019re also likely to see Kusama bridged to Polkadot for cross-network interoperability.\nWeb3 Foundation remains committed to both networks going forward, providing crucial support and\nguidance to teams building for the ecosystem."),(0,s.kt)("h2",{id:"explore-more"},"Explore more"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://kusama.network"},"About Kusama")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://guide.kusama.network"},"The Kusama Wiki")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://kusama.dotapps.io"},"Kusama on Polkadot-JS Apps")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://support.polkadot.network/support/solutions/articles/65000182146-kusama-and-polkadot-what-s-the-difference-"},"Polkadot and Kusama: What's the difference?"))))}h.isMDXComponent=!0},46601:()=>{}}]);