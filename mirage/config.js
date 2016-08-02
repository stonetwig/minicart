export default function() {

  // These comments are here to help you get started. Feel free to delete them.

  /*
    Config (with defaults).

    Note: these only affect routes defined *after* them!
  */

  // this.urlPrefix = '';    // make this `http://localhost:8080`, for example, if your API is on a different server
  // this.namespace = '';    // make this `api`, for example, if your API is namespaced
  // this.timing = 400;      // delay for each request, automatically set to 0 during testing

  /*
    Shorthand cheatsheet:

    this.get('/posts');
    this.post('/posts');
    this.get('/posts/:id');
    this.put('/posts/:id'); // or this.patch
    this.del('/posts/:id');

    http://www.ember-cli-mirage.com/docs/v0.2.x/shorthands/
  */


  this.namespace = 'api';

  this.get('/products', () => {
    return {
      products: [
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
      ]
    };
  });
}
