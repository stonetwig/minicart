import Ember from 'ember';

export default Ember.Route.extend({
  cart: Ember.inject.service(),
  model() {
    return this.get('store').findAll('product');
  },

  actions: {
    addToCart(product) {
      this.get('cart').add(product);
    }
  }
});
