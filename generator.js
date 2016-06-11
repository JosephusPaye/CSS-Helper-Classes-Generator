var generateCss = function(header, classPrefix, rules, values) {
    var classes = values.map(function(value) {
        var open = '.' + classPrefix + value + ' {';
        var close = '}';

        var rulesCss = rules.map(function(rule) {
            return '    ' + rule + ': ' + value + (value ? 'px' : '') + '!important;';
        });

        return [open, rulesCss.join('\n'), close].join('\n');
    });

    header = header ? header + '\n' : '';

    return header + classes.join('\n\n') + '\n';
}

var helpers = require('./helpers');
var gridValues = require('./grid-values');

helpers.forEach(function(helper) {
    var css = generateCss(helper.header, helper.prefix, helper.rules, gridValues);

    console.log(css);
});
