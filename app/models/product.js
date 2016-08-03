import DS from 'ember-data';
import Ember from 'ember';

export default DS.Model.extend({
  productNumber: DS.attr('number'),
  productName: DS.attr('string'),
  productImageName: DS.attr('string'),
  price: DS.attr('number'),
  productAvailable: DS.attr('boolean'),
  imageAlt: Ember.computed('productName', function() {
    return `Image for ${this.get('productName')}}`;
  }),
  quantity: DS.attr('number'),
  totalPrice: DS.attr('number')
});
