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

## Installation ##

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
  <style style="display:none">
    @charset "UTF-8";img,legend{border:0}legend,td,th{padding:0}[class*=pull-],[class*=mpush-],[class*=mpull-],[class*=spush-],[class*=spull-],[class*=xspush-],[class*=xspull-],[class*=push-],sub,sup{position:relative}.center{justify-content:center}.end{justify-content:flex-end}.start{justify-content:flex-start}.space-btw{justify-content:space-between}.space-a{justify-content:space-around}.ai-top{align-items:flex-start}.ai-bottom{align-items:flex-end}.ai-stretch{align-items:stretch}.ai-baseline{align-items:baseline}.ai-middle{align-items:center}.as-top{align-self:flex-start}.as-bottom{align-self:flex-end}.as-stretch{align-self:stretch}.as-baseline{align-self:baseline}.as-middle{align-self:middle}html{font-family:sans-serif;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%}body{margin:0}article,aside,details,figcaption,figure,footer,header,hgroup,main,menu,nav,section,summary{display:block}audio,canvas,progress,video{display:inline-block;vertical-align:baseline}audio:not([controls]){display:none;height:0}[hidden],template{display:none}a{background:0 0}a:active,a:hover{outline:0}abbr[title]{border-bottom:1px dotted}b,optgroup,strong{font-weight:700}dfn{font-style:italic}h1{font-size:2em;margin:.67em 0}mark{background:#ff0;color:#000}small{font-size:80%}sub,sup{font-size:75%;line-height:0;vertical-align:baseline}sup{top:-.5em}sub{bottom:-.25em}svg:not(root){overflow:hidden}figure{margin:1em 40px}hr{box-sizing:content-box;height:0}pre,textarea{overflow:auto}code,kbd,pre,samp{font-family:monospace,monospace;font-size:1em}button,input,optgroup,select,textarea{color:inherit;font:inherit;margin:0}button{overflow:visible}button,select{text-transform:none}button,html input[type=button],input[type=reset],input[type=submit]{-webkit-appearance:button;cursor:pointer}button[disabled],html input[disabled]{cursor:default}button::-moz-focus-inner,input::-moz-focus-inner{border:0;padding:0}input{line-height:normal}input[type=checkbox],input[type=radio]{box-sizing:border-box;padding:0}input[type=number]::-webkit-inner-spin-button,input[type=number]::-webkit-outer-spin-button{height:auto}input[type=search]{-webkit-appearance:textfield;box-sizing:content-box}.column,.row{box-sizing:border-box;display:flex}input[type=search]::-webkit-search-cancel-button,input[type=search]::-webkit-search-decoration{-webkit-appearance:none}fieldset{border:1px solid silver;margin:0 2px;padding:.35em .625em .75em}table{border-collapse:collapse;border-spacing:0}.reverse.row{flex-direction:row-reverse}.reverse.column{flex-direction:column-reverse}.column{flex-flow:column wrap;flex:0 1 auto}.row{flex-flow:row wrap;flex:0 1 auto}.hide{display:none}.show{display:block}[class*=col-].col-1{flex-basis:8.333333333333334%}[class*=col-].col-2{flex-basis:16.666666666666668%}[class*=col-].col-3{flex-basis:25%}[class*=col-].col-4{flex-basis:33.333333333333336%}[class*=col-].col-5{flex-basis:41.666666666666664%}[class*=col-].col-6{flex-basis:50%}[class*=col-].col-7{flex-basis:58.333333333333336%}[class*=col-].col-8{flex-basis:66.66666666666667%}[class*=col-].col-9{flex-basis:75%}[class*=col-].col-10{flex-basis:83.33333333333333%}[class*=col-].col-11{flex-basis:91.66666666666667%}[class*=col-].col-12{flex-basis:100%}[class*=pull-].pull-1,[class*=mpush-].pull-1,[class*=mpull-].pull-1,[class*=spush-].pull-1,[class*=spull-].pull-1,[class*=xspush-].pull-1,[class*=xspull-].pull-1,[class*=push-].pull-1{right:8.333333333333334%}[class*=pull-].push-1,[class*=mpush-].push-1,[class*=mpull-].push-1,[class*=spush-].push-1,[class*=spull-].push-1,[class*=xspush-].push-1,[class*=xspull-].push-1,[class*=push-].push-1{left:8.333333333333334%}[class*=pull-].pull-2,[class*=mpush-].pull-2,[class*=mpull-].pull-2,[class*=spush-].pull-2,[class*=spull-].pull-2,[class*=xspush-].pull-2,[class*=xspull-].pull-2,[class*=push-].pull-2{right:16.666666666666668%}[class*=pull-].push-2,[class*=mpush-].push-2,[class*=mpull-].push-2,[class*=spush-].push-2,[class*=spull-].push-2,[class*=xspush-].push-2,[class*=xspull-].push-2,[class*=push-].push-2{left:16.666666666666668%}[class*=pull-].pull-3,[class*=mpush-].pull-3,[class*=mpull-].pull-3,[class*=spush-].pull-3,[class*=spull-].pull-3,[class*=xspush-].pull-3,[class*=xspull-].pull-3,[class*=push-].pull-3{right:25%}[class*=pull-].push-3,[class*=mpush-].push-3,[class*=mpull-].push-3,[class*=spush-].push-3,[class*=spull-].push-3,[class*=xspush-].push-3,[class*=xspull-].push-3,[class*=push-].push-3{left:25%}[class*=pull-].pull-4,[class*=mpush-].pull-4,[class*=mpull-].pull-4,[class*=spush-].pull-4,[class*=spull-].pull-4,[class*=xspush-].pull-4,[class*=xspull-].pull-4,[class*=push-].pull-4{right:33.333333333333336%}[class*=pull-].push-4,[class*=mpush-].push-4,[class*=mpull-].push-4,[class*=spush-].push-4,[class*=spull-].push-4,[class*=xspush-].push-4,[class*=xspull-].push-4,[class*=push-].push-4{left:33.333333333333336%}[class*=pull-].pull-5,[class*=mpush-].pull-5,[class*=mpull-].pull-5,[class*=spush-].pull-5,[class*=spull-].pull-5,[class*=xspush-].pull-5,[class*=xspull-].pull-5,[class*=push-].pull-5{right:41.666666666666664%}[class*=pull-].push-5,[class*=mpush-].push-5,[class*=mpull-].push-5,[class*=spush-].push-5,[class*=spull-].push-5,[class*=xspush-].push-5,[class*=xspull-].push-5,[class*=push-].push-5{left:41.666666666666664%}[class*=pull-].pull-6,[class*=mpush-].pull-6,[class*=mpull-].pull-6,[class*=spush-].pull-6,[class*=spull-].pull-6,[class*=xspush-].pull-6,[class*=xspull-].pull-6,[class*=push-].pull-6{right:50%}[class*=pull-].push-6,[class*=mpush-].push-6,[class*=mpull-].push-6,[class*=spush-].push-6,[class*=spull-].push-6,[class*=xspush-].push-6,[class*=xspull-].push-6,[class*=push-].push-6{left:50%}[class*=pull-].pull-7,[class*=mpush-].pull-7,[class*=mpull-].pull-7,[class*=spush-].pull-7,[class*=spull-].pull-7,[class*=xspush-].pull-7,[class*=xspull-].pull-7,[class*=push-].pull-7{right:58.333333333333336%}[class*=pull-].push-7,[class*=mpush-].push-7,[class*=mpull-].push-7,[class*=spush-].push-7,[class*=spull-].push-7,[class*=xspush-].push-7,[class*=xspull-].push-7,[class*=push-].push-7{left:58.333333333333336%}[class*=pull-].pull-8,[class*=mpush-].pull-8,[class*=mpull-].pull-8,[class*=spush-].pull-8,[class*=spull-].pull-8,[class*=xspush-].pull-8,[class*=xspull-].pull-8,[class*=push-].pull-8{right:66.66666666666667%}[class*=pull-].push-8,[class*=mpush-].push-8,[class*=mpull-].push-8,[class*=spush-].push-8,[class*=spull-].push-8,[class*=xspush-].push-8,[class*=xspull-].push-8,[class*=push-].push-8{left:66.66666666666667%}[class*=pull-].pull-9,[class*=mpush-].pull-9,[class*=mpull-].pull-9,[class*=spush-].pull-9,[class*=spull-].pull-9,[class*=xspush-].pull-9,[class*=xspull-].pull-9,[class*=push-].pull-9{right:75%}[class*=pull-].push-9,[class*=mpush-].push-9,[class*=mpull-].push-9,[class*=spush-].push-9,[class*=spull-].push-9,[class*=xspush-].push-9,[class*=xspull-].push-9,[class*=push-].push-9{left:75%}[class*=pull-].pull-10,[class*=mpush-].pull-10,[class*=mpull-].pull-10,[class*=spush-].pull-10,[class*=spull-].pull-10,[class*=xspush-].pull-10,[class*=xspull-].pull-10,[class*=push-].pull-10{right:83.33333333333333%}[class*=pull-].push-10,[class*=mpush-].push-10,[class*=mpull-].push-10,[class*=spush-].push-10,[class*=spull-].push-10,[class*=xspush-].push-10,[class*=xspull-].push-10,[class*=push-].push-10{left:83.33333333333333%}[class*=pull-].pull-11,[class*=mpush-].pull-11,[class*=mpull-].pull-11,[class*=spush-].pull-11,[class*=spull-].pull-11,[class*=xspush-].pull-11,[class*=xspull-].pull-11,[class*=push-].pull-11{right:91.66666666666667%}[class*=pull-].push-11,[class*=mpush-].push-11,[class*=mpull-].push-11,[class*=spush-].push-11,[class*=spull-].push-11,[class*=xspush-].push-11,[class*=xspull-].push-11,[class*=push-].push-11{left:91.66666666666667%}[class*=pull-].pull-12,[class*=mpush-].pull-12,[class*=mpull-].pull-12,[class*=spush-].pull-12,[class*=spull-].pull-12,[class*=xspush-].pull-12,[class*=xspull-].pull-12,[class*=push-].pull-12{right:100%}[class*=pull-].push-12,[class*=mpush-].push-12,[class*=mpull-].push-12,[class*=spush-].push-12,[class*=spull-].push-12,[class*=xspush-].push-12,[class*=xspull-].push-12,[class*=push-].push-12{left:100%}[class*=off-].off-1{margin-left:8.333333333333334%}[class*=off-].off-2{margin-left:16.666666666666668%}[class*=off-].off-3{margin-left:25%}[class*=off-].off-4{margin-left:33.333333333333336%}[class*=off-].off-5{margin-left:41.666666666666664%}[class*=off-].off-6{margin-left:50%}[class*=off-].off-7{margin-left:58.333333333333336%}[class*=off-].off-8{margin-left:66.66666666666667%}[class*=off-].off-9{margin-left:75%}[class*=off-].off-10{margin-left:83.33333333333333%}[class*=off-].off-11{margin-left:91.66666666666667%}[class*=off-].off-12{margin-left:100%}@media screen and (max-width:720px){[class*="m"].m1{flex-basis:8.333333333333334%}[class*="m"].mpull-1{right:8.333333333333334%}[class*="m"].mpush-1{left:8.333333333333334%}[class*="m"].moff-1{margin-left:8.333333333333334%}[class*="m"].m2{flex-basis:16.666666666666668%}[class*="m"].mpull-2{right:16.666666666666668%}[class*="m"].mpush-2{left:16.666666666666668%}[class*="m"].moff-2{margin-left:16.666666666666668%}[class*="m"].m3{flex-basis:25%}[class*="m"].mpull-3{right:25%}[class*="m"].mpush-3{left:25%}[class*="m"].moff-3{margin-left:25%}[class*="m"].m4{flex-basis:33.333333333333336%}[class*="m"].mpull-4{right:33.333333333333336%}[class*="m"].mpush-4{left:33.333333333333336%}[class*="m"].moff-4{margin-left:33.333333333333336%}[class*="m"].m5{flex-basis:41.666666666666664%}[class*="m"].mpull-5{right:41.666666666666664%}[class*="m"].mpush-5{left:41.666666666666664%}[class*="m"].moff-5{margin-left:41.666666666666664%}[class*="m"].m6{flex-basis:50%}[class*="m"].mpull-6{right:50%}[class*="m"].mpush-6{left:50%}[class*="m"].moff-6{margin-left:50%}[class*="m"].m7{flex-basis:58.333333333333336%}[class*="m"].mpull-7{right:58.333333333333336%}[class*="m"].mpush-7{left:58.333333333333336%}[class*="m"].moff-7{margin-left:58.333333333333336%}[class*="m"].m8{flex-basis:66.66666666666667%}[class*="m"].mpull-8{right:66.66666666666667%}[class*="m"].mpush-8{left:66.66666666666667%}[class*="m"].moff-8{margin-left:66.66666666666667%}[class*="m"].m9{flex-basis:75%}[class*="m"].mpull-9{right:75%}[class*="m"].mpush-9{left:75%}[class*="m"].moff-9{margin-left:75%}[class*="m"].m10{flex-basis:83.33333333333333%}[class*="m"].mpull-10{right:83.33333333333333%}[class*="m"].mpush-10{left:83.33333333333333%}[class*="m"].moff-10{margin-left:83.33333333333333%}[class*="m"].m11{flex-basis:91.66666666666667%}[class*="m"].mpull-11{right:91.66666666666667%}[class*="m"].mpush-11{left:91.66666666666667%}[class*="m"].moff-11{margin-left:91.66666666666667%}[class*="m"].m12{flex-basis:100%}[class*="m"].m-h{display:none!important}[class*="m"].m-s{display:block!important}[class*="m"].mpull-12{right:100%}[class*="m"].mpush-12{left:100%}[class*="m"].moff-12{margin-left:100%}}@media screen and (max-width:480px){[class*="s"].s1{flex-basis:8.333333333333334%}[class*="s"].spull-1{right:8.333333333333334%}[class*="s"].spush-1{left:8.333333333333334%}[class*="s"].soff-1{margin-left:8.333333333333334%}[class*="s"].s2{flex-basis:16.666666666666668%}[class*="s"].spull-2{right:16.666666666666668%}[class*="s"].spush-2{left:16.666666666666668%}[class*="s"].soff-2{margin-left:16.666666666666668%}[class*="s"].s3{flex-basis:25%}[class*="s"].spull-3{right:25%}[class*="s"].spush-3{left:25%}[class*="s"].soff-3{margin-left:25%}[class*="s"].s4{flex-basis:33.333333333333336%}[class*="s"].spull-4{right:33.333333333333336%}[class*="s"].spush-4{left:33.333333333333336%}[class*="s"].soff-4{margin-left:33.333333333333336%}[class*="s"].s5{flex-basis:41.666666666666664%}[class*="s"].spull-5{right:41.666666666666664%}[class*="s"].spush-5{left:41.666666666666664%}[class*="s"].soff-5{margin-left:41.666666666666664%}[class*="s"].s6{flex-basis:50%}[class*="s"].spull-6{right:50%}[class*="s"].spush-6{left:50%}[class*="s"].soff-6{margin-left:50%}[class*="s"].s7{flex-basis:58.333333333333336%}[class*="s"].spull-7{right:58.333333333333336%}[class*="s"].spush-7{left:58.333333333333336%}[class*="s"].soff-7{margin-left:58.333333333333336%}[class*="s"].s8{flex-basis:66.66666666666667%}[class*="s"].spull-8{right:66.66666666666667%}[class*="s"].spush-8{left:66.66666666666667%}[class*="s"].soff-8{margin-left:66.66666666666667%}[class*="s"].s9{flex-basis:75%}[class*="s"].spull-9{right:75%}[class*="s"].spush-9{left:75%}[class*="s"].soff-9{margin-left:75%}[class*="s"].s10{flex-basis:83.33333333333333%}[class*="s"].spull-10{right:83.33333333333333%}[class*="s"].spush-10{left:83.33333333333333%}[class*="s"].soff-10{margin-left:83.33333333333333%}[class*="s"].s11{flex-basis:91.66666666666667%}[class*="s"].spull-11{right:91.66666666666667%}[class*="s"].spush-11{left:91.66666666666667%}[class*="s"].soff-11{margin-left:91.66666666666667%}[class*="s"].s12{flex-basis:100%}[class*="s"].s-h{display:none!important}[class*="s"].s-s{display:block!important}[class*="s"].spull-12{right:100%}[class*="s"].spush-12{left:100%}[class*="s"].soff-12{margin-left:100%}}@media screen and (max-width:320px){[class*=xs].xs1{flex-basis:8.333333333333334%}[class*=xs].xspull-1{right:8.333333333333334%}[class*=xs].xspush-1{left:8.333333333333334%}[class*=xs].xsoff-1{margin-left:8.333333333333334%}[class*=xs].xs2{flex-basis:16.666666666666668%}[class*=xs].xspull-2{right:16.666666666666668%}[class*=xs].xspush-2{left:16.666666666666668%}[class*=xs].xsoff-2{margin-left:16.666666666666668%}[class*=xs].xs3{flex-basis:25%}[class*=xs].xspull-3{right:25%}[class*=xs].xspush-3{left:25%}[class*=xs].xsoff-3{margin-left:25%}[class*=xs].xs4{flex-basis:33.333333333333336%}[class*=xs].xspull-4{right:33.333333333333336%}[class*=xs].xspush-4{left:33.333333333333336%}[class*=xs].xsoff-4{margin-left:33.333333333333336%}[class*=xs].xs5{flex-basis:41.666666666666664%}[class*=xs].xspull-5{right:41.666666666666664%}[class*=xs].xspush-5{left:41.666666666666664%}[class*=xs].xsoff-5{margin-left:41.666666666666664%}[class*=xs].xs6{flex-basis:50%}[class*=xs].xspull-6{right:50%}[class*=xs].xspush-6{left:50%}[class*=xs].xsoff-6{margin-left:50%}[class*=xs].xs7{flex-basis:58.333333333333336%}[class*=xs].xspull-7{right:58.333333333333336%}[class*=xs].xspush-7{left:58.333333333333336%}[class*=xs].xsoff-7{margin-left:58.333333333333336%}[class*=xs].xs8{flex-basis:66.66666666666667%}[class*=xs].xspull-8{right:66.66666666666667%}[class*=xs].xspush-8{left:66.66666666666667%}[class*=xs].xsoff-8{margin-left:66.66666666666667%}[class*=xs].xs9{flex-basis:75%}[class*=xs].xspull-9{right:75%}[class*=xs].xspush-9{left:75%}[class*=xs].xsoff-9{margin-left:75%}[class*=xs].xs10{flex-basis:83.33333333333333%}[class*=xs].xspull-10{right:83.33333333333333%}[class*=xs].xspush-10{left:83.33333333333333%}[class*=xs].xsoff-10{margin-left:83.33333333333333%}[class*=xs].xs11{flex-basis:91.66666666666667%}[class*=xs].xspull-11{right:91.66666666666667%}[class*=xs].xspush-11{left:91.66666666666667%}[class*=xs].xsoff-11{margin-left:91.66666666666667%}[class*=xs].xs12{flex-basis:100%}[class*=xs].xs-h{display:none!important}[class*=xs].xs-s{display:block!important}[class*=xs].xspull-12{right:100%}[class*=xs].xspush-12{left:100%}[class*=xs].xsoff-12{margin-left:100%}}
    .row,.column{
        padding:0.5em; border:1px solid while; color:white; border-radius:5px;
    }
    aside[class^="col-"] {padding:0.5em; border:1px solid while; color:white; border-radius:5px; }
    table,thead,tbody,tr{width:100%}
  </style>
   <section  class="row" style="background:purple">This is a row</section>    
   <aside  class="row">
        <aside class="column" style="background:blue">These are</aside>
        <aside class="column" style="background:red">Equal Sized</aside>
        <aside class="column" style="background:green">Columns</aside>
        <aside class="column" style="background:goldenrod">Neat, right?</aside>
    </aside>
  </code>
</pre>


Note: When you use **row** but all your elements inside are 100% width, the container it's gonna act like a **column**

## Col-n ##
These classes are basically to set the width lenght. This is for the main screen resolution. It's important to know that, if you don't use any break point, the elements always gonna occupy the same value. As it's mentioned previously, there are 12 differents column sizes.

For instance:
<pre>
  <code>
      <aside class="row">
        <aside class="col-1" style="background:blue">Col 1</aside>
        <aside class="col-2" style="background:red">Col 2</aside>
        <aside class="col-3" style="background:green">Col 3</aside>
      </aside>
      <p>And so on... </p>
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



## Aligments ##

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
