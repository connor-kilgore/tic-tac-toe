var fs = require('fs');
var system = require('system');
var page = require('webpage').create();

page.onConsoleMessage = function (msg) {
    console.log(msg);
};

page.onError = function (msg, trace) {
    var msgStack = ['ERROR: ' + msg];
    if (trace && trace.length) {
        msgStack.push('TRACE:');
        trace.forEach(function (t) {
            msgStack.push(' -> ' + t.file + ': ' + t.line + (t.function ? ' (in function "' + t.function + '")' : ''));
        });
    }
    console.error(msgStack.join('\n'));
};

// Polyfill for String.prototype.endsWith
if (!String.prototype.endsWith) {
  String.prototype.endsWith = function (suffix) {
    return this.indexOf(suffix, this.length - suffix.length) !== -1;
  };
}

// Define the function to load specs and run them
function loadAndRunSpecs() {
    // Assuming the dependencies and speclj are loaded properly
    for (var k in goog.debugLoader_.dependencies_) {
        if (goog.debugLoader_.dependencies_.hasOwnProperty(k)) {
            var dep = goog.debugLoader_.dependencies_[k];
            for (var i = 0; i < dep.provides.length; i++) {
                var ns = dep.provides[i];
                console.log('Namespace:', ns);
                console.log(typeof ns)
                if (typeof ns === 'string' && ns.endsWith("_spec")) {
                    console.log('Requiring namespace:', ns);
                    goog.require(ns);
                }
            }
        }
    }

    function runSpecsConfigured(color, reporter) {
        speclj.run.standard.armed = true;
        return speclj.run.standard.run_specs(
            cljs.core.keyword("color"), color,
            cljs.core.keyword("reporters"), [reporter]
        );
    }

    function runSpecs() {
        runSpecsConfigured(false, "documentation");
    }

    function runSpecsFiltered(affectedSpecs) {
        if (affectedSpecs != null) {
            var descriptionAtom = speclj.config.active_runner().descriptions;
            cljs.core.swap_BANG_(descriptionAtom, function (descriptions) {
                return cljs.core.filter(function (description) {
                    return description.ns in affectedSpecs;
                }, descriptions);
            });
        }
        return runSpecsConfigured(true, "documentation");
    }

    runSpecs();
}

// Load the required scripts and then run the specs
page.open('about:blank', function (status) {
    if (status !== 'success') {
        console.error('Failed to open blank page');
        phantom.exit(1);
    } else {
        // Inject the scripts
        if (!page.injectJs('../../target/goog/base.js')) {
            console.error('Failed to load base.js');
            phantom.exit(1);
        }
        if (!page.injectJs('../../target/c3kit_scaffold_dev.js')) {
            console.error('Failed to load c3kit_scaffold_dev.js');
            phantom.exit(1);
        }

        // Run the specs after a short delay to ensure scripts are loaded
        setTimeout(function () {
            page.evaluate(loadAndRunSpecs);
            phantom.exit();
        }, 1000);
    }
});
