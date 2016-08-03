import Ember from 'ember';

export default Ember.Route.extend({
  cart: Ember.inject.service(),
  model() {
    return this.get('cart');
  },

  actions: {
    pay(price) {
      alert("Congratulations! You payed us $" + price + " and we successfully placed your order!");
      this.get('cart').empty();
    }
  }
});
