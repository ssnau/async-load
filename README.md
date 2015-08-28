# async-load

A very simple resrouce loader, only ~30 lines of code.

# install

```
npm install async-load
```


# example

load bootstrap before executing the code.

```

var load = require('aysnc-load')

// the styles and scripts will load sequentially.
// in this example, jquery.min.js will always loaded before bootstrap.js
// so you never have to worry about the order.
load(
  'https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.0.0-alpha/css/bootstrap.css'
  'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.0.0-alpha1/jquery.min.js',
  'https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.0.0-alpha/js/bootstrap.js'
).then(function() {
    console.log('awesome!')
});
```

License
----
MIT

