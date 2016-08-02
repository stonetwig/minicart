import Ember from 'ember';

export default Ember.Component.extend({
  cart: Ember.inject.service(),
  actions: {
    removeFromCart(item) {
      this.get('cart').remove(item);
    },
    updateQuantity(quantity) {
      this.get('cart').updateQuantity(this.get('item'), quantity);
    }
  }
});
