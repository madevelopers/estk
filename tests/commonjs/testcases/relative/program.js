var test = require('test');
$.writeln('cur: ' + require.currentDir);
var a = require('submodule/a');
$.writeln('a: ' + require.currentDir);
var b = require('submodule/b');
$.writeln('b: ' + require.currentDir);
test.assert(a.foo == b.foo, 'a and b share foo through a relative require');
test.print('DONE', 'info');
