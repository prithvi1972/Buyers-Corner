function valid(x) {
	return (x===null || x===undefined || x==="") ? false : true;
}

function inherit(Parent, Child){
	var temp = function(){}
	temp.prototype = Parent.prototype;
	Child.prototype = new temp();
}

function Component(tag, id, classes, content) {
	this.ele = document.createElement(tag);
	if(valid(id))
		this.ele.id = id;
	if(valid(classes))
		for(let i=0; i<classes.length; i++)
			this.ele.classList.add(classes[i]);
	if(valid(content))
		(content instanceof Node) ? this.ele.appendChild(content) : this.ele.appendChild(TextNode(content));
	return this.ele;
}

function TextNode(text) {
	return document.createTextNode(text);
}

Component.prototype.append = function(content) {
	(content instanceof Node) ? this.ele.appendChild(content) : this.ele.appendChild(TextNode(content));
};

function List(type, id, classes) {
	this.type = (type==="ul" || type==="ol" || type==="dl")?type:"ul";
	this.ele = new Component(this.type, id, classes);
}

inherit(Component, List);

function ListItem(id, classes, content) {
	this.ele = new Component("li", id, classes);
	if(valid(content))
		(content instanceof Node) ? this.ele.appendChild(content) : this.ele.appendChild(TextNode(content));
}

inherit(Component, ListItem)

List.prototype.addItem = function(item) {
	if(item instanceof ListItem)
		this.append(item.ele);
	else
		this.append(item);
}

function Link(id,classes,href,content) {
	this.href = href;
	this.ele = new Component("a",id,classes,content);
	if(valid(this.href)) this.ele.href = this.href;
}

inherit(Component,Link);