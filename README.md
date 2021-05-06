# Image Shop

This app is developed in Node.js and React and uses Stripe Api for handling payment and deployed on Heroku.
Currently user can manage inventory i.e. add/remove item from cart and checkout and pay.
The account is test account in stripe so only card number giver by stripe api can be used (https://stripe.com/docs/testing).

Future Features:
1. Search and show all the related images to the searched image based on category.
2. Adding Authentication to define role :

    2.1. Admin : Add/delete /update products and its parameters.
    
    2.2. User: adding feature like save for later, payment receipt track.

Link: https://movieimageshop.herokuapp.com/

# To view in development mode.

1. You can use yarn run dev command.
2. You need to add your own Stripe API key in App.js for the checkout functionality.


# To access the Application
You can add/remove product and view the shopping cart by clicking Total Amount field in Navbar. You can select checkout button to chekout and pay.
