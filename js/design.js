if(typeof Component === "undefined")
	console.error("Could not load core components.");

function Banner(id,classes) {
	this.ele = new Component("div", id, classes);

	this.heading = new Component("div", "", ["heading"]);
	if(valid(id))
		this.heading.id = id + "-heading";
	this.heading.innerHTML = 'PROP<strong>GUIDE</strong> − A Complete Property Guide';
	
	this.desc = new Component("div", "", ["desc"]);
	if(valid(id))
		this.desc.id = id + "-desc";
	this.desc.innerHTML = '#happy<span class="desc-red">home</span>';

	this.ele.append(this.heading);
	this.ele.append(this.desc);

	return this.ele;
}

inherit(Component,Banner);

function Navigation(id, classes) {
	this.navLinks = [
		{ value: "all", href: "#" },
		{ value: "buy & sell", href: "#" },
		{ value: "city", href: "#" },
		{ value: "living", href: "#" },
		{ value: "nri", href: "#" },
		{ value: "news and views", href: "#" },
		{ value: "legal", href: "#" },
		{ value: "budget 2018", href: "#" },
		{ value: "more", href: "#" },
	];

	this.list = new List("ul", id, classes);

	for(let i=0; i<this.navLinks.length; i++) {
		li = new ListItem("navlink-" + i,"");
		a = new Link("",["no-link"],this.navLinks[i].href,this.navLinks[i].value)
		li.append(a.ele);
		this.list.addItem(li);
	}

	return this.list.ele;
}

inherit(Banner, Navigation);