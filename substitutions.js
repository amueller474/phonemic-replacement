// Replacement function from: http://stackoverflow.com/a/17606289/1687505
String.prototype.replaceAll = function(search, replacement) {
    var target = this;
    return target.replace(new RegExp(search, 'g'), replacement);
};

// TODO: put in a menu to select language instead of defaulting to English
var replacement_array = require('./json/en_US.json');

//Below function modified from: http://stackoverflow.com/a/7275856/1687505
var allTextNodes = document.createTreeWalker(document.body,NodeFilter.SHOW_TEXT),tmpnode,tmptext;

while (allTextNodes.nextNode()) {
	tmpnode = allTextNodes.currentNode;
	tmptext = tmpnode.nodeValue
	for (var key in replacement_array) {
		tmptext = tmptext.replaceAll(key,replacement_array[key]);
	}
	tmpnode.nodeValue = tmptext;
}
