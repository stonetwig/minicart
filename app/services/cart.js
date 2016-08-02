import Ember from 'ember';

export default Ember.Service.extend({
  items: [],

  totalPrice: Ember.computed('items.@each.quantity', function() {
    const items = this.get('items');
    if (items === null || items.length === 0) {
      return 0;
    }

    const totalPriceForEachItem = items.map(item => {
      // Int parsing needed since quantity can come from post string
      return item.get('price') * parseInt(item.get('quantity'));
    });

    return totalPriceForEachItem.reduce((prev, current) => {
      return prev + current;
    });
  }),

  totalQuantity: Ember.computed('items.@each.quantity', function() {
    const items = this.get('items');
    if (items === null || items.length === 0) {
      return 0;
    }

    //TODO: For some reason, can't call reduce on the ember objects directly
    // Not enough time to investigate right now, fix later
    const totalQuantityForEachItem = items.map(item => {
      // Int parsing needed since quantity can come from post string
      return parseInt(item.get('quantity'));
    });

    return totalQuantityForEachItem.reduce((prev, current) => {
      return prev + current;
    });
  }),


  init() {
    this._super(...arguments);
  },

  add(item) {
    const itemPos = this.getCartItemPos(item);
    if (itemPos === null) {
      item.set('quantity', 1);
      this.get('items').pushObject(item);
    } else {
      this.get('items')[itemPos].set('quantity', this.get('items')[itemPos].get('quantity') + 1);
    }
  },

  remove(item) {
    this.get('items').removeObject(item);
  },

  empty() {
    this.get('items').clear();
  },

  getCartItemPos(item) {
    let potentialItemPos = null;
    this.get('items').forEach((itemInCart, pos) => {
      if (itemInCart.get('productNumber') === item.get('productNumber')) {
        potentialItemPos = pos;
      }
    });
    return potentialItemPos;
  },

  changeQuantity(item, quantity) {
    const itemPos = this.getCartItemPos(item);
    this.get('items')[itemPos].set('quantity', quantity);
  }
});
