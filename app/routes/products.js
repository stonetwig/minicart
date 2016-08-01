import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return [
      {
        "productNumber": 411,
        "productName": "Apple, Ingrid Marie, healthy, chewy and not much more",
        "productImageName": "apple.png",
        "price": 1,
        "productAvailable": true
      },
      {
        "productNumber": 132,
        "productName": "Baseball, round used for baseball, quite boring",
        "productImageName": "ball.png",
        "price": 3,
        "productAvailable": false
      },
      {
        "productNumber": 567,
        "productName": "Golden key, where it leads is a mystery but at the same time an adventure",
        "productImageName": "key.png",
        "price": 999,
        "productAvailable": true
      },
      {
        "productNumber": 578,
        "productName": "Leather shoes, slightly worn with a hole in right sole",
        "productImageName": "shoes.png",
        "price": 49,
        "productAvailable": true
      },
      {
        "productNumber": 243,
        "productName": "Umbrella, Blue wooden handle sturdy lightweight construction. Storm approved up to 1000 storm units",
        "productImageName": "umbrella.png",
        "price": 17,
        "productAvailable": true
      }
    ];
  }
});
