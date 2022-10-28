import testUtils from '../../testUtils/index.js';
import {expect as expect$0} from 'chai';
('use strict');
const stripe = testUtils.getSpyableStripe();
const expect = {expect: expect$0}.expect;
const PAYOUT_TEST_ID = 'po_testid1';
describe('Payouts Resource', () => {
  describe('retrieve', () => {
    it('Sends the correct request', () => {
      stripe.payouts.retrieve(PAYOUT_TEST_ID);
      expect(stripe.LAST_REQUEST).to.deep.equal({
        method: 'GET',
        url: `/v1/payouts/${PAYOUT_TEST_ID}`,
        headers: {},
        data: {},
        settings: {},
      });
    });
  });
  describe('create', () => {
    it('Sends the correct request', () => {
      stripe.payouts.create({
        amount: 200,
        currency: 'usd',
      });
      expect(stripe.LAST_REQUEST).to.deep.equal({
        method: 'POST',
        url: '/v1/payouts',
        headers: {},
        data: {amount: 200, currency: 'usd'},
        settings: {},
      });
    });
  });
  describe('update', () => {
    it('Sends the correct request', () => {
      stripe.payouts.update(PAYOUT_TEST_ID, {
        metadata: {key: 'value'},
      });
      expect(stripe.LAST_REQUEST).to.deep.equal({
        method: 'POST',
        url: `/v1/payouts/${PAYOUT_TEST_ID}`,
        headers: {},
        data: {metadata: {key: 'value'}},
        settings: {},
      });
    });
  });
  describe('cancel', () => {
    it('Sends the correct request', () => {
      stripe.payouts.cancel(PAYOUT_TEST_ID);
      expect(stripe.LAST_REQUEST).to.deep.equal({
        method: 'POST',
        url: `/v1/payouts/${PAYOUT_TEST_ID}/cancel`,
        headers: {},
        data: {},
        settings: {},
      });
    });
  });
  describe('list', () => {
    it('Sends the correct request', () => {
      stripe.payouts.list();
      expect(stripe.LAST_REQUEST).to.deep.equal({
        method: 'GET',
        url: '/v1/payouts',
        headers: {},
        data: {},
        settings: {},
      });
    });
  });
  describe('reverse', () => {
    it('Sends the correct request', () => {
      stripe.payouts.reverse(PAYOUT_TEST_ID);
      expect(stripe.LAST_REQUEST).to.deep.equal({
        method: 'POST',
        url: `/v1/payouts/${PAYOUT_TEST_ID}/reverse`,
        headers: {},
        data: {},
        settings: {},
      });
    });
  });
});
