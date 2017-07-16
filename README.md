# Ob
observable properties of javascript object
## install
`npm i tungptvn/ob`
## use


### nodejs
```javascript
var ob = require('ob');
var person = {
    fname: "Tung",
    lname: "Pham"
}
person.changed = function (prop, newVl, oldVl) {
    console.log(prop, newVl, oldVl) // fname TUNG Tung
}
person.fnameChanged = function (newVl, oldVl) {
    //impl notify fname prop
    console.log(newVl, oldVl) //TUNG Tung
}

me = ob(person)


me.fname = 'TUNG'    
```

### browser

```html
<script src="ob.js"></script>
<script>
    // like above
    
  </script>
```
