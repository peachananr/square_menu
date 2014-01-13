#Square Menu by Pete R.
Create a [Square-like](http://www.squareup.com) Menu Animation for Website using jQuery and CSS3
Created by [Pete R.](http://www.thepetedesign.com), Founder of [BucketListly](http://www.bucketlistly.com)

[![Square Menu](http://www.thepetedesign.com/images/square_menu_image.png "Square Menu")](http://www.thepetedesign.com/demos/square_menu_demo.html)

## Demo
[View demo](http://www.thepetedesign.com/demos/square_menu_demo.html)

## Compatibility
Modern browsers such as Chrome, Firefox, and Safari on both desktop and smartphones have been tested. I have not tested this on IE.

## Basic Usage
Square menu, as you can see from the name, is a plugin that let you add a similar animated menu that you see on the new [Square website](http://www.squareup.com). I've also added additional animations, add various browsers support and provide options for you to play around with.

To add this to your website, make sure you've included the latest jQuery library together with `jquery.square_menu.js` and `square_menu.css` into your document's `<head>`, and make sure your HTML markup are as follows:
````html  
<body>
  ..
  <div class="sidemenu">
    <nav class="left">
      <a href="...">...</a>
      <a href="...">...</a>
      <a href="...">...</a>
    </nav>
    <nav class="right">
      <a href="...">...</a>
      <a href="...">...</a>
      <a href="...">...</a>
    </nav>
  </div>
  ..
</body>
````
Note: Having 2 `nav` tags is very important for the plugin to function. Both these `nav` tags will be used to create a similar animation that you see on Square website. The content inside on the other hand, can be changed as you see fit.

Once that is done, simply call the function like this:

````javascript
  $(".sidemenu").square_menu({
    flyDirection: "bottom", // The direction where the menu will fly from. Available options are "top", "bottom", "left", "right", "top-left", "top-right", "bottom-left" and "bottom-right". The default value is "bottom".
    button: "Menu", // You can define text inside the auto-generated button here. If you want to prevent the plugin from generating a menu button, change this to false. The default value is "Menu".
    animationStyle: "vertical", // The type of animation style you will see after it flew in. Available options are "vertical" which expands vertically and "horizontal" which expands horizontally. Vertical works best with "top" or "bottom" flyDirection whereas Horizontal works best with "left" or "right" flyDirection. The default value is "vertical".
    closeButton: "X" // You can define the content of the close button appears after animates are completed here. Change this to false to hide the close button. The default value is X.
  });
````


## Public Method

### $.fn.openMenu()

With this method, you can open your menu programmatically by calling the `openMenu()` function like this:

````javascript
$(".sidemenu").openMenu();
````

### $.fn.closeMenu()

Same goes for this method. You can close your menu programmatically by calling the `closeMenu()` function like this:

````javascript
$(".sidemenu").closeMenu();
````

Now you will have a beautifully crafted menu animation like you see on [Squareup.com](http://www.squareup.com) website with little to no effort. If you like this kind of plugin, stay tuned for more from me. :)

If you want to see more of my plugins, visit [The Pete Design](http://www.thepetedesign.com/#design), or follow me on [Twitter](http://www.twitter.com/peachananr) and [Github](http://www.github.com/peachananr).

## Other Resources
- [Tutorial](http://www.onextrapixel.com/2014/01/09/create-a-square-like-3d-animated-menu-gallery-with-jquery-square-menu/)
