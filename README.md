# Ob
observable properties of javascript object
## install
`npm i tungptvn/ob`
## use


### nodejs
```javascript
var ob = require('ob');

// observable this 
 var me = ob(this)
    var fname = "Tung"
    var lname = "Pham"

    changed = function(prop, newVl, oldVl){
      //impl notify all prop
      console.log(prop, newVl, oldVl) // fname TUNG Tung
    }
    fnameChanged = function(newVl, oldVl){
       //impl notify fname prop
      console.log( newVl, oldVl) //TUNG Tung
    }



// observable object

var info = { someProp : 'someData' }
var obInfo = ob(info)
    obInfo.somePropChanged = function(newVl,oldVl){
    // your impl
    }
    obInfo.someProp = 'new data'
    
```

### browser

```html
<script src="ob.js"></script>
<script>
    var me = ob(this)
    // like above
    
  </script>
```