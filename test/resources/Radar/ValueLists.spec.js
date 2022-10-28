import testUtils from '../../../testUtils/index.js';
import {expect as expect$0} from 'chai';
('use strict');
const stripe = testUtils.getSpyableStripe();
const expect = {expect: expect$0}.expect;
describe('Radar', () => {
  describe('ValueLists Resource', () => {
    describe('retrieve', () => {
      it('Sends the correct request', () => {
        stripe.radar.valueLists.retrieve('rsl_123');
        expect(stripe.LAST_REQUEST).to.deep.equal({
          method: 'GET',
          url: '/v1/radar/value_lists/rsl_123',
          headers: {},
          data: {},
          settings: {},
        });
      });
    });
    describe('create', () => {
      it('Sends the correct request', () => {
        stripe.radar.valueLists.create({
          alias: 'alias',
          name: 'name',
        });
        expect(stripe.LAST_REQUEST).to.deep.equal({
          method: 'POST',
          url: '/v1/radar/value_lists',
          headers: {},
          data: {
            alias: 'alias',
            name: 'name',
          },
          settings: {},
        });
      });
    });
    describe('list', () => {
      it('Sends the correct request', () => {
        stripe.radar.valueLists.list();
        expect(stripe.LAST_REQUEST).to.deep.equal({
          method: 'GET',
          url: '/v1/radar/value_lists',
          headers: {},
          data: {},
          settings: {},
        });
      });
    });
    describe('del', () => {
      it('Sends the correct request', () => {
        stripe.radar.valueLists.del('rsl_123');
        expect(stripe.LAST_REQUEST).to.deep.equal({
          method: 'DELETE',
          url: '/v1/radar/value_lists/rsl_123',
          headers: {},
          data: {},
          settings: {},
        });
      });
    });
    describe('update', () => {
      it('Sends the correct request', () => {
        stripe.radar.valueLists.update('rsl_123', {
          metadata: {a: '1234'},
        });
        expect(stripe.LAST_REQUEST).to.deep.equal({
          method: 'POST',
          url: '/v1/radar/value_lists/rsl_123',
          headers: {},
          data: {
            metadata: {a: '1234'},
          },
          settings: {},
        });
      });
    });
  });
});
