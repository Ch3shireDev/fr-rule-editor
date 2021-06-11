const dialog = require("electron");
var ace = require("brace");
require("brace/mode/yaml");
require("brace/mode/python");
require("brace/mode/c_cpp");
require("brace/theme/monokai");

var editor1 = ace.edit("editor-1");
editor1.getSession().setMode("ace/mode/yaml");
editor1.setTheme("ace/theme/monokai");
editor1.setValue(
    `example: 
  - element1: a 
  - element2: b 
  - element3: c`
);

editor1.selection.clearSelection();
editor1.blur();

var editor2 = ace.edit("editor-2");
editor2.getSession().setMode("ace/mode/python");
editor2.setTheme("ace/theme/monokai");

editor2.setValue('print("Hello world!")');
editor2.selection.clearSelection();

var editor3 = ace.edit("editor-3");
editor3.getSession().setMode("ace/mode/c_cpp");
editor3.setTheme("ace/theme/monokai");

editor3.setValue(`#include <iostream>

using namespace std;

int main(){
    cout << "Hello world!" << endl;
    return 0;
}`);
editor3.selection.clearSelection();

var fs = require("fs");
document.getElementById("choose-yaml-button").onclick = function() {
    dialog.showOpenDialog({
        properties: ["openFile"],
        // filters: [{ name: "Yaml", extensions: ["yaml", "yml"] }],
    });
};