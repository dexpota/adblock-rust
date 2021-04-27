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

class Engine {
    constructor() {
        this.boxed = blocker.Engine_constructor(filter_set, config);
    }

    check(url, source_url, request_type, debug) {
        return blocker.Engine_check(this.boxed, url, source_url, request_type, debug);
    }

    serialize() {
        return blocker.Engine_serialize(this.boxed);
    }

    deserialize(buffer) {
        return blocker.Engine_deserialize(this.boxed, buffer);
    }

    enableTag(tag) {
        return blocker.Engine_enableTag(this.boxed, tag);
    }

    useResources(resources) {
        return blocker.Engine_useResources(this.boxed, resources);
    }

    tagExists(tag) {
        return blocker.Engine_tagExists(this.boxed, tag);
    }

    clearTags() {
        return blocker.Engine_clearTags(this.boxed);
    }

    addResource(resource) {
        return blocker.Engine_addResource(this.boxed, resource);
    }

    getResource(name) {
        return blocker.Engine_getResource(this.boxed, name);
    }
}

exports.FilterFormat = blocker.FilterFormat;
exports.FilterSet = FilterSet;
exports.RuleTypes = blocker.RuleTypes;
exports.Engine = Engine;
exports.uBlockResources = blocker.uBlockResources;
