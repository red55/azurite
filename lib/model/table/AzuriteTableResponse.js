'use strict';

const uuidV1 = require('uuid/v1'),
    N = require('./../../core/HttpHeaderNames');

class AzuriteTableResponse {
    constructor({ proxy = undefined }) {
        this.proxy = proxy;
        this.httpProps = {};
        this.httpProps[N.VERSION] = '2016-05-31';
        this.httpProps[N.DATE] = new Date().toGMTString();
        this.httpProps[N.REQUEST_ID] = uuidV1();
    }

    addHttpProperty(key, value) {
        if (value !== undefined) {
            this.httpProps[key] = value;
        }
    }
}

module.exports = AzuriteTableResponse;
