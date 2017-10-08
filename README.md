# showMore  
- jQuery plugin for large content show more/less functionality

Author : <wiflux@gmail.com> Dharminder Singh Negi

### Project home:
   https://github.com/wiflux/showMore



### Usage :
1. Put a class or id on HTML element which has very long plain content. i.e

`<div class="largeContent"> ...... </div>`
Use class for multiple large content elament 

```javascript
<script type="text/javascript">
$(function() { // Load script after jQuery loaded
    $(".largeContent").showMore({ showChar: 150 });
});
 </script>
 ```
 
 ### Options
 ```javascript
$(".largeContent").showMore({ 
                            showChar: 150,
                            ellipsestext : "...",
                            moretext : "Show more",
                            lesstext : "Show less",
                            });
```

- showChar : Number of character you want to show for less content.
- ellipsestext : Ellipses text on less content. deafult would be `...`
- moretext : Show more text on less content
- lesstext : Show less text on full content.
 


Free script, Hell Yeah!