(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{102:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),p=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=p(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=p(n),d=r,m=u["".concat(i,".").concat(d)]||u[d]||b[d]||o;return n?a.a.createElement(m,s(s({ref:t},l),{},{components:n})):a.a.createElement(m,s({ref:t},l))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},92:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return p}));var r=n(3),a=n(7),o=(n(0),n(102)),i={id:"glossary",title:"Secure Firewall Glossary",description:"A reference glossary for Secure Firewall and other terms",hide_table_of_contents:!1},s={unversionedId:"glossary",id:"glossary",isDocsHomePage:!1,title:"Secure Firewall Glossary",description:"A reference glossary for Secure Firewall and other terms",source:"@site/docs/glossary.md",slug:"/glossary",permalink:"/docs/glossary",editUrl:"https://mimerc.github.io/docs/glossary.md",version:"current",sidebar:"firstSidebar",previous:{title:"Secure IPS",permalink:"/docs/sips-wp"}},c=[],l={toc:c};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Access Control:")," A method to define levels of access between\nnetworks."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Access Control Policy:")," A set or collection of rules that define\nhow devices on a network communicate."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Access Control Rules:")," Individual entries within an Access Control\nPolicy that uses matching criteria to control network communication."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Advanced Malware Protection (AMP):")," Advanced capability to detect and\nblock malware and other threats contained within files traversing\nnetworks. Available as a licensed subscription."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Application Visibility & Control (AVC):")," Allows Secure Firewall to control\nconnections based on the applications used rather than IP, ports, and protocols."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Authentication:")," A process by which someone or something provides\nproof that they can access a particular resource. A typical example\nis a username and password."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Base License:")," Included with all Firepower Threat Defense firewall products."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Default Action:")," The final rule within the access control policy used\nto determine the action applied to traffic that does not matches any\nrules within the access control policy."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Demilitarized Zone (DMZ):")," A term used in network security to\nidentify a semi-trusted network. Typically between an internal (trusted)\nnetwork and an external (untrusted) network."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Device:")," A term used to referto a managed Cisco Firepower\nThreat Defense (FTD) firewall, physical or virtual, with the\nFirepower Management Center (FMC). It is also used more generically to\nidentify network-connected equipment, such as desktop computers,\nlaptops, phones and other equipment."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Encryption:")," A method to obfuscate the contents of a file or\nnetwork connection to prevent unauthorized users from seeing the\ndetails."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Entitlements:")," The number and type of licenses you have for products\nthat you own."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Fastpath:")," An action within a prefilter policy that allows traffic\nforwarding through the firewall without applying further inspections."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Firepower Chassis Manager (FCM):")," The user interface used to\nmanage Firepower chassis running FXOS."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Firepower Management Center (FMC):")," Cisco's centralized management platform\nused to manage multiple Firepower devices."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Firepower Threat Defense (FTD):")," The software from Cisco that\nis deployed onto Firepower hardware, ASA hardware, or virtually in\nprivate or public cloud environments."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Firepower eXtensible Operating System (FXOS):")," The operating\nsystem used by Firepower 4100/9300 hardware appliances."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Malware:")," A piece of software designed to cause harm to computers\nor obtain personal information illegally. Also, the term given to the\nlicense within Firepower that enables Advanced Malware Protection and\nfile control."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Management Information Base (MIB):")," A collection of Object IDs\n(OIDs) that describe and match components of a monitored network\ndevice. For example, network interface statistics or CPU\nutilization."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Multi-Instance:")," A method to logically distribute the resources of a\nsingle physical chassis to run multiple firewalls."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Management Station/Host:")," The device/server that runs the SNMP\nmanagement software."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Network Analysis Policy (NAP):")," A policy that governs how traffic is decoded\nand preprocessed for further evaluation, especially for anomalous traffic that\nmight signal an intrusion attempt."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Network Address Translation (NAT):")," A function of IP networking that\nallows private network address spaces to be translated to publicly\nroutable address spaces."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Network Object:")," A meaningful identifier for an IP address, Subnet\nor network range used within a policy."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Next Generation Intrusion Prevention System (NGIPS or IPS):")," Advanced\ncapability to detect and block malicious activity within network\ncommunications, typically using signatures to identify threats. An intrusion\npolicy uses intrusion and preprocessor rules (sometimes referred to collectively\nas intrusion rules) to examine decoded packets for attacks based on\npatterns. Intrusion policies are paired with variable sets, which uses named\nvalues to reflect a network environment accurately. Available as a licensed\nsubscription."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Object Identifier (OID):")," An address used to uniquely identify\nmanaged devices, their components, and their statuses."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Poll:")," A query issued by the SNMP server towards a network\ndevice, usually at periodic intervals."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Prefilter Policy:")," An initial policy used to quickly determine\nif traffic should be fastpathed, blocked or sent for further inspection\nvia the access control policy."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Security Intelligence:")," A database of known malicious entities that\nprovides the first layer of security in a firewall deployment."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Security Module:")," A modular processing unit installed within a\nFirepower 9300 chassis (max 3) that runs Firepower Threat Defense (FTD)\nor ASA software."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Smart Account:")," A user account that provides access to your\norganization's license repository."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Smart Licensing:")," A cloud-based licensing portal from Cisco that\nallows central and delegated management of product licenses."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Simple Network Management Protocol (SNMP):")," Used to monitor\nnetwork devices by allowing a network management station (Server) to\nsend queries to or receive events from network devices."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Subscription:")," Additional features available for the firewall via\noptional license purchases."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Threat:")," A Malicious entity or object that can cause harm to\nnetwork devices. Also, the term given to the license within Firepower\nthat enables Next Generation Intrusion Prevention (NGIPS)."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Token:")," A unique code that allows products to register to the Smart\nLicensing portal to retrieve licenses."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Trap:")," An event notification generated by a network device and\nsent to the configured SNMP server(s)."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Universal Resource Locator (URL):")," The text you type in when\nattempting to access a web-based resource. For example:\n",Object(o.b)("a",{parentName:"p",href:"http://www.cisco.com/support"},"www.cisco.com/support")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"URL Filtering:")," Web-based category filtering allows organizations to\ncontrol user web connections. Available as a licensed subscription."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Variable Set:")," Variables in a set represent values commonly used\nin intrusion rules to identify the source and destination IP\naddresses and ports. Variable sets provide greater detection\naccuracy and reduce the amount of noise. Whenever the system uses an\nintrusion policy to evaluate traffic, it uses an associated variable set."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Virtual Account:")," A way to organize licenses within your organization\nto provide the ability to structure based on geographical location,\ndepartments, or business functions."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Zone:")," A meaningful identifier that maps to an individual or group\nof network interfaces attached to a managed firewall used as either\nsources or destinations in access control rules."))}p.isMDXComponent=!0}}]);