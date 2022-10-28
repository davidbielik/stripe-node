import testUtils from '../../testUtils/index.js';
import {expect as expect$0} from 'chai';
('use strict');
const stripe = testUtils.getSpyableStripe();
const expect = {expect: expect$0}.expect;
describe('PromotionCodes Resource', () => {
  describe('retrieve', () => {
    it('Sends the correct request', () => {
      stripe.promotionCodes.retrieve('promo_123');
      expect(stripe.LAST_REQUEST).to.deep.equal({
        method: 'GET',
        url: '/v1/promotion_codes/promo_123',
        headers: {},
        data: {},
        settings: {},
      });
    });
  });
  describe('update', () => {
    it('Sends the correct request', () => {
      stripe.promotionCodes.update('promo_123', {
        metadata: {a: '1234'},
      });
      expect(stripe.LAST_REQUEST).to.deep.equal({
        method: 'POST',
        url: '/v1/promotion_codes/promo_123',
        headers: {},
        data: {
          metadata: {a: '1234'},
        },
        settings: {},
      });
    });
  });
  describe('create', () => {
    it('Sends the correct request', () => {
      stripe.promotionCodes.create({
        coupon: 'co_123',
        code: 'MYCODE',
      });
      expect(stripe.LAST_REQUEST).to.deep.equal({
        method: 'POST',
        url: '/v1/promotion_codes',
        headers: {},
        data: {
          coupon: 'co_123',
          code: 'MYCODE',
        },
        settings: {},
      });
    });
  });
  describe('list', () => {
    it('Sends the correct request', () => {
      stripe.promotionCodes.list();
      expect(stripe.LAST_REQUEST).to.deep.equal({
        method: 'GET',
        url: '/v1/promotion_codes',
        headers: {},
        data: {},
        settings: {},
      });
    });
  });
});
