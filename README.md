# showMore  
- jQuery plugin for large content show more/less functionality

Author : <wiflux@gmail.com> Dharminder Singh Negi

### Project home:
   [https://wiflux.github.io/showMore/](https://wiflux.github.io/showMore/)



### Usage :
1. Download and add script file into your project.
`<script type="text/javascript" src="showMore.js"></script>`

2. Put a class or id on HTML element which has very long plain content. i.e

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
