# gridminCss
A powerfull responsive grid system, pure css. This grid system is based on 12 columns where 12 is equals to 100% width. All the classes were made it as intuitive and friendly as possible in order to make faster the development.

It's so simple to use it, you just have to create your html tag and add the gridminCss classes as you wish, and play with them.

Example
```html
  <div class="row">
    <div class="col-6 xs12 ">This column worth 6 but 12 in small resolutions</div>
    <div class="col-12 xs6 ">This column worth 12 but in small resolution worth 6</div>
    <div class="col-12 s-h ">This column worth 12 but disappear in mobile resolution</div>
  </div>
```
You ee? It's simple!

# Row & Column
There are two container classes, the first one is **row**. This class going to make your container as a responsive one and it'll organize the elements inside it in horizontal way. On the other hand **column** is used to stack the elements in a vertical way. Let's some examples below:
```html
<section class="row"    >                       <aside class="column">
      This is a ro  w                             This is a column
</section>                                      </aside>
```
<pre>
  <code>
     ___________________________________              ______
    |   |   |   | R | O | W |   |   |   |            |      |
    |___|___|___|___|___|___|___|___|___|            |______|
                                                     |  C   |
                                                     |______|
                                                     |  O   |
                                                     |______|
                                                     |  L   |
                                                     |______|
                                                     |  U   |
                                                     |______|
                                                     |  M   |
                                                     |______|
                                                     |  N   |
                                                     |______|
                                                     |      |
                                                     |______|
                                                 
  </code>
</pre>


Note: When you use **row** but all your elements inside are 100% width, the container it's gonna act like a **column**

# Col-x
These classes are basically to set the width lenght. This is for the main screen resolution. It's important to know that, if you don't use any break point, the elements always gonna occupy the same value. As I mention previously, there are 12 differntes sizes of columns.
