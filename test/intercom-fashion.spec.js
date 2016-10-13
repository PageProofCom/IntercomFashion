var IntercomFashion = require('../src/intercom-fashion');
var expect = require('chai').expect;
var sinon = require('sinon');
var utils = require('./utils');

global.Intercom = utils.Intercom;

describe('Intercom Fashion', function () {
    it('Simple test', function () {
        expect(1).to.be.eql(1);
    })
})