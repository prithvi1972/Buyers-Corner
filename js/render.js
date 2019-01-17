let body = document.body;

// Banner Begin
let banner = new Banner("banner");
body.appendChild(banner);

// Nav Begin
let nav = new Component("div","nav");

// NavHead Begin
let navHead = new Component("div","",["nav-head"]);
let branding = new Component("div","",["branding"]);
let subscribeBtn = new Component("div", "", ["subscribe-btn"], "Subscribe");
let social = new Social("",["social"]);
navHead.append(branding);
navHead.append(subscribeBtn);
navHead.append(social);
nav.append(navHead);

// NavBody Begin
let navBody = new Component("div","",["nav-body"]);
let navLinks = new Navigation("",["nav-links"]);
navBody.append(navLinks);
nav.append(navBody);

body.append(nav);