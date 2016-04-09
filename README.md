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
You see? It's simple!

##Installation###
npm install gridminCss

## Row & Column ##
There are two container classes, the first one is **row**. This class going to make your container as a responsive one and it'll organize the elements inside it in horizontal way. On the other hand **column** is used to stack the elements in a vertical way. Let's some examples below:
```html
            <section class="row">                 <aside class="column">
                This is a row                          This is a column
            </section>                            </aside>
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

## Col-n ##
These classes are basically to set the width lenght. This is for the main screen resolution. It's important to know that, if you don't use any break point, the elements always gonna occupy the same value. As it's mentioned previously, there are 12 differents column sizes.

For instance:
<pre>
  <code>
    ______   ____________    __________________
    |col-1| |  col-2     |  |       col-3      |    And so on...
    |_____| |____________|  |__________________|  
  </code>
</pre>

## Offset
You can use *offset* to add margin to the left in the columns.If you add offset, the offset lenght can't be use.
```html
<div class="col-5 off-7"> This column has 7 offset spaces</div>
```

## Push and Pull
Push and pull has relative positions and they moves to left and right respectively.
```html
<div class="col-7 push-5"> This column is 5 spaces right</div>
<div class="col-5 pull-7"> This column is 7 spaces left</div>
```


## Break Points (Responsive) and syntax##
There are three more break points and you can make responsive using a simple classes only.

**720px and above** |**720px and below** |**480px and below**|**320px and below**|
--------------------|--------------------|-------------------|-------------------|
      col-n         |         mn         |sn                 |xsn                |
      off-n         |        moff-n      |soff-n             |xsoff-n            |
      push-n        |       mpush-n      |spush-n            |xspush-n           |
      pull-n        |       mpull-n      |spull-n            |xspull-n           |
      hide          |         m-h        |s-h                |xs-h               |
      show          |         m-s        |s-s                |xs-s               |



##Aligments##
The aligments are, as it's name say, to align the elements, there are 3 sorts

Justify Content        |Position     |
-----------------------|-------------|
center                 | center      |
end                    | flex end    |
start                  | flex start  |
space-btw              |space between|
space-a                |space around |

Aling Items |Position    |
------------|------------|
ai-middle   | center     |
ai-bottom   | flex end   |
ai-top      |flex start  |
ai-stretch  | stretch    |
ai-baseline | baseline   |

Aling Selfs |Position    |
------------|------------|
as-middle   | center     |
as-bottom   | flex end   |
as-top      |flex start  |
as-stretch  | stretch    |
as-baseline | baseline   |
