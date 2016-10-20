var _ = require('../src/intercom-fashion-utils');
var expect = require('chai').expect;
var sinon = require('sinon');
var utils = require('./utils');

global.Intercom = utils.Intercom;

describe('Utilities', function () {
    it('should calling the callback on checkConditionPoll', function () {
        var condition = function () { return true };
        var callbackSpy = sinon.spy();
        
        _.checkConditionPoll(condition, callbackSpy, 0)
        expect(callbackSpy.calledOnce).to.be.eql(true);
    })
    
    it('should not calling the callback on checkConditionPoll', function () {
        var condition = function () { return false };
        var callbackSpy = sinon.spy();
        
        _.checkConditionPoll(condition, callbackSpy, 0)
        expect(callbackSpy.notCalled).to.be.eql(true);
    })
})