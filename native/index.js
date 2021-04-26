const blocker = require('./index.node');

class FilterSet {
    constructor(debug) {
        this.boxed = blocker.FilterSet_constructor(debug);
    }

    addFilters(filters, format) {
        return blocker.FilterSet_addFilters(this.boxed, filters, format);
    }

    addFilter(filter, format) {
        return blocker.FilterSet_addFilter(this.boxed, filter, format);
    }

    intoContentBlocking(rule_types) {
        return blocker.FilterSet_intoContentBlocking(this.boxed, rule_types);
    }
}

exports.FilterFormat = blocker.FilterFormat;
exports.FilterSet = FilterSet;
exports.RuleTypes = blocker.RuleTypes;
exports.Engine = blocker.Engine;
exports.uBlockResources = blocker.uBlockResources;
