(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{102:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return u}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=r.a.createContext({}),b=function(e){var t=r.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},l=function(e){var t=b(e.components);return r.a.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),l=b(n),d=a,u=l["".concat(i,".").concat(d)]||l[d]||m[d]||o;return n?r.a.createElement(u,c(c({ref:t},p),{},{components:n})):r.a.createElement(u,c({ref:t},p))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var p=2;p<o;p++)i[p]=n[p];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},131:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/image2-eff25a6d296faba272677fa96973f761.png"},268:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/image3-249f96d4db9cac276dd9af4c11ae0f61.png"},269:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/image4-e7abe210a5605a49fcf58a5b81ceab78.png"},270:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/image5-768a458f5c51e6b136015dd7228b48b4.png"},271:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/image6-64a99d9fd78ffe1c82a48c2bb02571d3.png"},272:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/image7-8e699ee40fb694644ccad41f71f372d2.png"},273:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/image8-73b10fd8755e51d692ae619f5a69fa10.png"},94:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return b}));var a=n(3),r=n(7),o=(n(0),n(102)),i={id:"snmp",title:"SNMP Monitoring",description:"Configuring SNMP monitoring on Secure Firewall",hide_table_of_contents:!1},c={unversionedId:"snmp",id:"snmp",isDocsHomePage:!1,title:"SNMP Monitoring",description:"Configuring SNMP monitoring on Secure Firewall",source:"@site/docs/SF_SNMP.md",slug:"/snmp",permalink:"/docs/snmp",editUrl:"https://mimerc.github.io/docs/SF_SNMP.md",version:"current",sidebar:"firstSidebar",previous:{title:"Access Control Policy",permalink:"/docs/access-control-policy"},next:{title:"Virtual Routing and Forwarding",permalink:"/docs/vrf"}},s=[{value:"Introduction",id:"introduction",children:[]},{value:"Background Information",id:"background-information",children:[]},{value:"About SNMP",id:"about-snmp",children:[]},{value:"Configuration",id:"configuration",children:[{value:"Configure SNMP on FXOS (Firepower 4100/9300)",id:"configure-snmp-on-fxos-firepower-41009300",children:[]},{value:"Configure SNMP on FTD via Firepower Management Center (FMC)",id:"configure-snmp-on-ftd-via-firepower-management-center-fmc",children:[]}]},{value:"Verification/Troubleshooting",id:"verificationtroubleshooting",children:[]},{value:"Summary",id:"summary",children:[]}],p={toc:s};function b(e){var t=e.components,i=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},p,i,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"22 February 2021"),Object(o.b)("h2",{id:"introduction"},"Introduction"),Object(o.b)("p",null,"This document provides information, configuration, and troubleshooting\nguidance on Simple Network Management Protocol (SNMP) monitoring for\nCisco Secure Firewall Threat Defense (FTD) deployments managed by the\nCisco Secure Firewall Management Center (FMC). The version of software\nreferred to in this document is 6.7. Notable differences for previous\nversions are highlighted where appropriate."),Object(o.b)("h2",{id:"background-information"},"Background Information"),Object(o.b)("p",null,"Cisco Secure Firewall Threat Defense appliances have two major\nsubsystems:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"The Firewall Extensible Operating System (FX-OS): which controls the\nchassis hardware.")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"The Firewall Threat Defense Software (FTD): which runs within a\nsecurity module in the chassis."))),Object(o.b)("p",null,"FTD is a unified software consisting of two engines, the Snort engine,\nand the LINA engine. The current SNMP instance of FTD provides unified\nhealth monitoring, meaning the FMC and/or the network management system\nbeing used to monitor the deployment, receives details on CPU, memory,\nSnort statistics, critical processes, high availability, and cluster\nstatus as a whole. In previous versions, SNMP monitoring had visibility\ninto the LINA-related features only."),Object(o.b)("p",null,"FX-OS and FTD have independent control planes, and for monitoring\npurposes, they have different SNMP engines. Each of the SNMP engines\nprovides different information, and monitoring both provides a more\ncomprehensive view of the device's status."),Object(o.b)("p",null,"From a hardware point of view, there are two different architectures for\nthe Firewall Threat Defense appliances to consider:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Firepower 4100/9300 - Have a dedicated interface for device\nmanagement, which is the source and destination for the SNMP traffic\naddressed to the FXOS subsystem. The FTD application, which resides\non a security module(s) within the chassis, uses a LINA interface\n(management/data/diagnostic).")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Firepower 1000/2100 - The SNMP engine on these appliances use the\nFTD management interface and IP. The appliance itself bridges the\nSNMP traffic received on this interface and forwards it to the FXOS\nsoftware, which is not managed separately on these appliances."))),Object(o.b)("h2",{id:"about-snmp"},"About SNMP"),Object(o.b)("p",null,"Simple Network Management Protocol is an application-layer protocol that\nprovides a message format for communication between SNMP managers and\nagents. SNMP provides a standardized framework and a common language\nused to monitor and manage devices in a network."),Object(o.b)("p",null,"The SNMP framework consists of three parts:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"An ",Object(o.b)("strong",{parentName:"p"},"SNMP manager"),": The system used to control and monitor the\nactivities of network devices using SNMP.")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"An ",Object(o.b)("strong",{parentName:"p"},"SNMP agent"),": The software component within Firepower that\nmaintains and reports the data, as needed, to the SNMP manager.")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"A ",Object(o.b)("strong",{parentName:"p"},"Managed Information Base (MIB)"),": A collection of managed\nobjects on the SNMP agent."))),Object(o.b)("p",null,"FTD supports SNMPv1, SNMPv2c, and SNMPv3."),Object(o.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("p",{parentName:"div"},"SNMPv1 and SNMPv2c use a community string as the only form of\nauthentication. As a result, there are known serious security risks\nsince they transmit all information without encryption, including the\ncommunity string."))),Object(o.b)("p",null,"From a best practice recommendation perspective, this document focuses\non the configuration of SNMPv3 since SNMPv3 provides much better\nsecurity than v1 and v2."),Object(o.b)("h2",{id:"configuration"},"Configuration"),Object(o.b)("p",null,"Complete the following steps to configure SNMPv3 for your Firepower\ndeployment."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Prerequisite")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Network management server(s) to poll the managed devices and receive\nSNMP traps.")),Object(o.b)("h3",{id:"configure-snmp-on-fxos-firepower-41009300"},"Configure SNMP on FXOS (Firepower 4100/9300)"),Object(o.b)("p",null,"First, we will see how to configure SNMP in FXOS, which allows the\nchassis to be polled by and send SNMP traps to the network management\nserver."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Step 1:")," Log in to the Firepower Chassis Manager (FCM)."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Step 2:")," Navigate to ",Object(o.b)("strong",{parentName:"p"},"Platform Settings")," and then click ",Object(o.b)("strong",{parentName:"p"},"SNMP"),"."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Step 3:")," Check the ",Object(o.b)("strong",{parentName:"p"},"Enable")," checkbox and then enter a\n",Object(o.b)("strong",{parentName:"p"},"Community/Username"),"."),Object(o.b)("p",null,Object(o.b)("img",{alt:"SNMP on FCM",src:n(131).default})),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Figure 1:")," Enabling SNMP on Firepower Chassis Manager"),Object(o.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("p",{parentName:"div"},'The System Administrator name and Location are optional. The\n"',Object(o.b)("strong",{parentName:"p"},"Set : Yes/No"),'" value to the right of ',Object(o.b)("strong",{parentName:"p"},"Community/Username")," changes\nto '",Object(o.b)("strong",{parentName:"p"},"Yes'")," once you have entered a value and saved your changes."))),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Step 4:")," Click ",Object(o.b)("strong",{parentName:"p"},"Add")," under ",Object(o.b)("strong",{parentName:"p"},"SNMP Users")," and complete the required\nfields in the window that displays:"),Object(o.b)("p",null,Object(o.b)("img",{alt:"SNMP Users",src:n(268).default})),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Figure 2:")," Adding SNMP Users for SNMPv3"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("strong",{parentName:"p"},"Name")," is the user name assigned to the SNNPv3 user. It can be up\nto 32 characters and must begin with a letter. Other valid\ncharacters are letters, numbers, and the following symbols: ","_"," . @ -")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("strong",{parentName:"p"},"Auth Type")," is hardcoded to SHA and cannot be changed.")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("strong",{parentName:"p"},"Use AES-128,")," if checked (recommended), enables 128-bit Advanced\nEncryption Standard as the privacy protocol for SNMPv3 message\nencryption conforming to RFC3826. If unchecked, DES is used as the\nencryption protocol.")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("strong",{parentName:"p"},"Password")," sets the password for the user.")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Defining the ",Object(o.b)("strong",{parentName:"p"},"Privacy Password"),", combined with ",Object(o.b)("strong",{parentName:"p"},"AES-128"),"\nencryption, allows the chassis to use this password to generate a\n128-bit AES key."),Object(o.b)("div",{parentName:"li",className:"admonition admonition-note alert alert--secondary"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("p",{parentName:"div"},"** Passwords have the following requirements:"),Object(o.b)("ul",{parentName:"div"},Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Must contain a minimum of 8 characters and a maximum of 80\ncharacters.")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Must contain only letters, numbers, and the following characters:\n","~","`","!@","#","%\\^&","*","()","_","-+{}","[","]","|","\\",":;\\\"\\'\\<,",">","./")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Must not contain the following symbols: \\$ (dollar sign), ?\n(question mark), or = (equals sign).")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Must contain at least five different characters.")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},'Must not contain too many consecutively incrementing or decrementing\nnumbers or letters. For example, the string \\"12345\\" has four such\ncharacters, and the string \\"ZYXW\\" has three. If the total number\nof such characters exceeds a specific limit (typically more than\naround 4-6 such occurrences), the simplicity check will fail.'))))))),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Step 5:")," Click ",Object(o.b)("strong",{parentName:"p"},"Add")," under ",Object(o.b)("strong",{parentName:"p"},"SNMP Traps")," and complete the required\nfields in the window that displays:"),Object(o.b)("p",null,Object(o.b)("img",{alt:"SNMP Traps",src:n(269).default})),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Figure 3:")," Adding SNMP Traps"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("strong",{parentName:"p"},"Host Name")," is the hostname or IP address of the SNMP manager that\nthe chassis should send the traps.")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"For ",Object(o.b)("strong",{parentName:"p"},"Community/Username"),", enter the SNMPv3 username created in\n",Object(o.b)("strong",{parentName:"p"},"Step 4"),". This username must be the same as the community/username\nconfigured for the SNMP service in ",Object(o.b)("strong",{parentName:"p"},"Step 3"),".")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Enter the ",Object(o.b)("strong",{parentName:"p"},"Port")," number on which the chassis will communicate with\nthe SNMP host. An integer between 1 and 65535 is required.")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Select ",Object(o.b)("strong",{parentName:"p"},"V3")," as the SNMP version.")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"For ",Object(o.b)("strong",{parentName:"p"},"Type"),", click the ",Object(o.b)("strong",{parentName:"p"},"Traps")," radio button. (Informs are only\nvalid when using SNMPv2.)")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("strong",{parentName:"p"},"V3 Privilege")," defines the privilege level associated with the\nTrap. The recommendation is to use ",Object(o.b)("strong",{parentName:"p"},"Priv")," since this enables\nAuthentication ",Object(o.b)("strong",{parentName:"p"},"and")," Encryption."),Object(o.b)("div",{parentName:"li",className:"admonition admonition-note alert alert--secondary"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("p",{parentName:"div"},Object(o.b)("strong",{parentName:"p"}," while it is possible to select "),"NoAuth,",Object(o.b)("strong",{parentName:"p"}," FXOS does not\nsupport its use with "),"v3.**"))))),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Step 6:")," On the main ",Object(o.b)("strong",{parentName:"p"},"SNMP")," configuration window under ",Object(o.b)("strong",{parentName:"p"},"Platform\nSettings"),", click ",Object(o.b)("strong",{parentName:"p"},"Save"),"."),Object(o.b)("h3",{id:"configure-snmp-on-ftd-via-firepower-management-center-fmc"},"Configure SNMP on FTD via Firepower Management Center (FMC)"),Object(o.b)("p",null,"Now we will see how to configure SNMP in the FMC to allow the management\nserver to define how the FTD devices (LINA) operate in the SNMP\nenvironment."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Step 1:")," Log in to the FMC user interface."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Step 2:")," Navigate to ",Object(o.b)("strong",{parentName:"p"},"Devices ",">"," Platform Settings"),"."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Step 3:")," Choose an existing FTD Platform Settings Policy or create a\nnew one if required."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Step 4:")," On the left-hand side of the ",Object(o.b)("strong",{parentName:"p"},"FTD_Platform_Settings"),"\nwindow, choose ",Object(o.b)("strong",{parentName:"p"},"SNMP"),"."),Object(o.b)("p",null,Object(o.b)("img",{alt:"SNMP Platform Settings",src:n(270).default})),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Figure 4:")," FMC/FTD Platform Settings SNMP Configuration"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Step 5:")," Enable SNMP and configure the basic settings:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("strong",{parentName:"p"},"Enable SNMP Servers"),": Choose whether to allow devices to provide\nSNMP information to the configured SNMP hosts.")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("strong",{parentName:"p"},"Read Community String"),": Enter the password used by the SNMP\nmanagement host when sending requests to FTD devices. Passwords are\ncase-sensitive, comprised of an alphanumeric string of up to 32\ncharacters. Spaces and special characters are NOT supported.")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("strong",{parentName:"p"},"System Administrator Name")," and ",Object(o.b)("strong",{parentName:"p"},"Location")," (both optional) allow\nyou to include contact information.")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Specify the ",Object(o.b)("strong",{parentName:"p"},"Port")," number (UDP) on which incoming requests to the\nFTD devices will be accepted. The default is ",Object(o.b)("strong",{parentName:"p"},"161/UDP,")," but this\ncan be changed if needed to suit your requirements."))),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Step 6:")," Below the ",Object(o.b)("strong",{parentName:"p"},"Listen Port")," field, click ",Object(o.b)("strong",{parentName:"p"},"Users"),". Now we're\ngoing to define the users for SNMPv3. SNMP users have a specified\nusername, an authentication password, an encryption password, and\nauthentication & encryption algorithms to use. The authentication\nalgorithm options are MD5 and SHA. The encryption algorithm options are\nDES, 3DES, and AES128."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Step 7:")," Click ",Object(o.b)("strong",{parentName:"p"},"Add")," to open the ",Object(o.b)("strong",{parentName:"p"},"Add Username")," window."),Object(o.b)("p",null,Object(o.b)("img",{alt:"SNMP Users FMC",src:n(271).default})),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Figure 5:")," Adding SNMP user to FMC Platform Settings"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"First, set the ",Object(o.b)("strong",{parentName:"p"},"Security Level"),". The recommendation is to choose\n",Object(o.b)("strong",{parentName:"p"},"Priv")," because this means SNMP messages are authenticated and\nencrypted.")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Next, define the ",Object(o.b)("strong",{parentName:"p"},"user name")," to be used. The maximum number of\ncharacters is 32.")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"For ",Object(o.b)("strong",{parentName:"p"},"Encryption Password Type"),", the options are ",Object(o.b)("strong",{parentName:"p"},"Clear text")," or\n",Object(o.b)("strong",{parentName:"p"},"Encrypted"),".")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"With ",Object(o.b)("strong",{parentName:"p"},"Encrypted"),", the password must be formatted as\n",Object(o.b)("strong",{parentName:"p"},"xx:xx:xx....")," (where ",Object(o.b)("strong",{parentName:"p"},"xx")," are hexadecimal values). The FTD\ndevice will then directly deploy the encrypted password.")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"With ",Object(o.b)("strong",{parentName:"p"},"Clear text"),", enter the password as usual (and confirmed).\nThe FTD device still encrypts the password when deploying. The\nrecommendation is to use the ",Object(o.b)("strong",{parentName:"p"},"Clear text")," option to avoid\nconverting the password to hexadecimal..")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"For the ",Object(o.b)("strong",{parentName:"p"},"Auth Algorithm Type"),", choose ",Object(o.b)("strong",{parentName:"p"},"SHA256")," (MD5 and SHA are\nalso options).")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"As we selected ",Object(o.b)("strong",{parentName:"p"},"Clear text")," as the ",Object(o.b)("strong",{parentName:"p"},"Encryption Password Type"),",\nyou now need to enter the ",Object(o.b)("strong",{parentName:"p"},"Authentication Password")," and confirm\nit.")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Finally, choose the ",Object(o.b)("strong",{parentName:"p"},"Encryption Type")," you want to use and enter\nthe ",Object(o.b)("strong",{parentName:"p"},"Encryption Password"),". The recommendation is to use ",Object(o.b)("strong",{parentName:"p"},"AES256"),"\nfor the ",Object(o.b)("strong",{parentName:"p"},"Encryption Type"),". Again, since we set ",Object(o.b)("strong",{parentName:"p"},"Clear text")," as\nthe ",Object(o.b)("strong",{parentName:"p"},"Encryption Password Type"),", you can enter the ",Object(o.b)("strong",{parentName:"p"},"Encryption\nPassword")," and confirm it."),Object(o.b)("div",{parentName:"li",className:"admonition admonition-note alert alert--secondary"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("p",{parentName:"div"},"To use AES or 3DES encryption, you must have the appropriate license installed.")))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Click ",Object(o.b)("strong",{parentName:"p"},"OK")," when complete."))),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Step 8:")," Next to the ",Object(o.b)("strong",{parentName:"p"},"Users")," tab, click ",Object(o.b)("strong",{parentName:"p"},"Hosts"),". This area\ndefines the SNMP management servers allowed to access the FTD devices\nfor monitoring. A maximum of 4000 hosts can be defined, but be aware\nthat only 128 of these can be used for SNMP traps."),Object(o.b)("p",null,Object(o.b)("img",{alt:"SNMP Management Hosts",src:n(272).default})),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Figure 6:")," Adding SNMP Management Hosts"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"For ",Object(o.b)("strong",{parentName:"p"},"IP Address"),", you can enter an IPv4 or IPv6 address or choose\na host previously configured in network objects from the drop-down\nlist. The best practice uses a network object, either one already\ndefined or one added using the + sign at the side of the ",Object(o.b)("strong",{parentName:"p"},"IP\naddress")," field.")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Under the ",Object(o.b)("strong",{parentName:"p"},"SNMP version,")," choose ",Object(o.b)("strong",{parentName:"p"},"V3"),". This option requires a\nuser to exist, so make sure you created the user as described in\n",Object(o.b)("strong",{parentName:"p"},"Step 7"),".")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"For ",Object(o.b)("strong",{parentName:"p"},"Username"),", choose from the drop-down list the user you\ncreated in ",Object(o.b)("strong",{parentName:"p"},"Step 7"),".")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"As we are using SNMPv3, the ",Object(o.b)("strong",{parentName:"p"},"Community String")," isn't required and\nis greyed out.")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Select the type of SNMP communication between the device and the\nSNMP management host. Chose ",Object(o.b)("strong",{parentName:"p"},"Poll")," or ",Object(o.b)("strong",{parentName:"p"},"Trap")," individually, or\nyou can choose ",Object(o.b)("strong",{parentName:"p"},"both"),".")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("strong",{parentName:"p"},"Poll")," allows the SNMP management host to request information from\nthe FTD devices periodically.")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("strong",{parentName:"p"},"Trap")," means the device will send trap events to the SNMP\nmanagement host as they occur."),Object(o.b)("div",{parentName:"li",className:"admonition admonition-note alert alert--secondary"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("p",{parentName:"div"},"If you have defined the SNMP host IP as either an IPv4\nrange or subnet, you can only configure either Poll or Trap, not\nboth.")))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"The default ",Object(o.b)("strong",{parentName:"p"},"Port")," value is ",Object(o.b)("strong",{parentName:"p"},"162/UDP"),". This value can be\ncustomized within a range from ",Object(o.b)("strong",{parentName:"p"},"1")," to ",Object(o.b)("strong",{parentName:"p"},"65535"),".")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"From v6.6 of Firepower, the ",Object(o.b)("strong",{parentName:"p"},"Device Management interface")," of the\nmanaged devices as the communication source/destination for SNMP is\navailable and recommended. However, based on your environment's\nspecific requirements, you may choose a ",Object(o.b)("strong",{parentName:"p"},"Security Zone")," or another\n",Object(o.b)("strong",{parentName:"p"},"Named Interface")," to act as the communication channel.")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Click ",Object(o.b)("strong",{parentName:"p"},"Ok"),"."))),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Step 9:")," Click ",Object(o.b)("strong",{parentName:"p"},"Save")," to commit the changes."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Step 10:")," The last part of the configuration is to choose ",Object(o.b)("strong",{parentName:"p"},"SNMP\nTraps")," in the main SNMP window next to the ",Object(o.b)("strong",{parentName:"p"},"Users")," tab."),Object(o.b)("p",null,'Traps are event notifications sent from the FTD device and are different\nfrom polling. They are unsolicited "comments" from the FTD device to the\nmanagement station for specific events such as linkup, linkdown, and\nSyslog event generated. An SNMP object ID (OID) for the device appears\nin SNMP event traps sent from the device.'),Object(o.b)("p",null,"Some traps do not apply to specific hardware models and are ignored if\nyou deploy the policy to one of these models. For example, not all\nmodels have Field Replaceable Units (FRUs), so the Field Replaceable\nUnit Insert/Delete trap will not be configured on those models."),Object(o.b)("p",null,Object(o.b)("img",{alt:"SNMP Traps",src:n(273).default})),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Figure 7:")," Defining SNMP Traps"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"The best practice here is only to enable the traps that you require.\nChoosing ",Object(o.b)("strong",{parentName:"p"},"All SNMP")," could have an impact on system resources.")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"The traps in the ",Object(o.b)("strong",{parentName:"p"},"Standard")," section are enabled by default and\nhave the following definitions:")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("strong",{parentName:"p"},"Authentication"),": Unauthorized SNMP access. This authentication\nfailure occurs for packets with an incorrect community string.")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("strong",{parentName:"p"},"Link Up"),': One of the device\'s communication links has become\navailable (it has "come up"), as indicated in the notification.')),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("strong",{parentName:"p"},"Link Down"),": One of the device's communication links has failed,\nas indicated in the notification.")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("strong",{parentName:"p"},"Cold Start"),": The device is reinitializing itself such that its\nconfiguration or the protocol entity implementation may be altered.")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("strong",{parentName:"p"},"Warm Start"),": The device is reinitializing itself such that its\nconfiguration and the protocol entity implementation are unaltered.")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("strong",{parentName:"p"},"Entity MIBs")," are only supported if the hardware used supports\nFRUs, such as the Firepower 4100/9300 chassis. If these are enabled,\nand the policy is applied to devices that do not support FRUs, they\nwill be ignored.")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"The other recommended options to choose from are the ",Object(o.b)("strong",{parentName:"p"},"Nat Packet\nDiscard"),", ",Object(o.b)("strong",{parentName:"p"},"CPU Rising Threshold,")," and ",Object(o.b)("strong",{parentName:"p"},"Memory Rising\nThreshold.")," The default values should be accepted.")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"If you deploy FTD devices in Failover or Cluster modes, choose the\n",Object(o.b)("strong",{parentName:"p"},"Failover")," or ",Object(o.b)("strong",{parentName:"p"},"Cluster")," traps.")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Click ",Object(o.b)("strong",{parentName:"p"},"Save"),"."))),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Step 11:")," Navigate to ",Object(o.b)("strong",{parentName:"p"},"Deploy ",">"," Deployment")," and deploy the policy\nto the assigned devices. Changes made to the SNMP configuration will not\nbe active until you deploy them."),Object(o.b)("h2",{id:"verificationtroubleshooting"},"Verification/Troubleshooting"),Object(o.b)("p",null,"Use the following link as an additional information source and for steps\nto verify/troubleshoot your configuration:"),Object(o.b)("p",null,Object(o.b)("a",{parentName:"p",href:"https://www.cisco.com/c/en/us/support/docs/ip/simple-network-management-protocol-snmp/213971-configure-snmp-on-firepower-ngfw-applian.html"},"https://www.cisco.com/c/en/us/support/docs/ip/simple-network-management-protocol-snmp/213971-configure-snmp-on-firepower-ngfw-applian.html")),Object(o.b)("p",null,"To verify your FMC configuration, make sure your SNMP server receives\nSNMP traps from your managed devices (if configured) and verify that\nyour SNMP management server can poll the devices. Ensure that the ports\nused in the configuration match the configuration of the SNMP server and\nthat any firewalls or access-lists between the managed devices and SNMP\nservers are configured to allow the connections."),Object(o.b)("h2",{id:"summary"},"Summary"),Object(o.b)("p",null,"SNMP is an effective way of monitoring network devices centrally. By\nfollowing the steps included in this document, you can allow your\nFirepower solution to take part in your SNMP monitoring strategy in\naddition to the built-in monitoring capabilities that Firepower\nManagement Center provides."))}b.isMDXComponent=!0}}]);