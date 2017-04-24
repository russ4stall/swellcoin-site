var hbs = require('handlebars');
var fs = require('fs');
var titleCase = require('title-case');

var htmlDir = __dirname + '/src/html';
var outputDir = __dirname + '/dist';

var layoutFilename = "layout.html";
var homePageFilename = "_index.html";

var layoutTemplate = fs.readFileSync(htmlDir + '/' + layoutFilename, 'utf8');
var template = hbs.compile(layoutTemplate);

var partialsFilenames = fs.readdirSync(htmlDir);

partialsFilenames.forEach(function (filename) {
  var matches = /^_([^.]+).html$/.exec(filename);
  if (!matches) {
    return;
  }
  var name = matches[1];
  var isHomePage = filename === homePageFilename;
  var title = 'Home';
  if (!isHomePage) {
    title = name.replace('-', ' ');
    title = titleCase(title);
  }
  
  var content = fs.readFileSync(htmlDir + '/' + filename, 'utf8');

  fs.writeFile(outputDir + "/" + name + ".html", template({'title': title, 'isHomePage': isHomePage, 'content':content}));
});
