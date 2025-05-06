# Herramientas de VUE
Vamos a ver un conjunto de herramientas que suelen estar presentens en los frameworks, para qué sirven y cómo se usan. 

## Props
Un prop es información que se pasa de padre a hijo. 

Ya vimos que hay una forma de hacer esto mediante slots, pero... ¿y si no quiero que esa información aparezca en el HTML? ¿Y si quiero que sea el hijo quien gestione cómo aparece? 
Los props nos dan más control que los slots y son tremendamente útiles. 
Para comprobar cómo funciona, echa un vistazo al componente PropsComponent.vue

## Events
### Events basics
Los eventos (o eventos predefinidos) de vue ya los hemos visto. Son aquellos que llevan el @ dentro del tag. Por ejemplo el @click. 

Este @click es un evento. En concreto, el evento click, pero hay muchos más. [Aquí una lista completa](https://www.w3schools.com/jsref/dom_obj_event.asp)

¿Qué eventos debemos conocer nosotros? Con que conozcamos el más usado, @click, vamos a poder resolver la mayoría de los problemas que se nos plantean. 

## Events mods
Los eventos se pueden modificar. Por ejemplo, si quieres enviar un formulario (@submit) la página se recargará automáticamente. 

A este comportamiento se le llama "comportamiento por defecto". Pues bien, igual que en JavaScript usamos una función llamada preventDefault para evitar este comportamiento, en vue utilizamos el modificador prevent para lo mismo. 

Así el submit quedaría como: submit.prevent="llamadaALaFuncion";

[Aquí una lista completa de modificadores](https://vuejs.org/guide/essentials/event-handling)

Para nosotros el más importante va a ser este modificador de "prevent", así que con recordar este vamos bien. 

## Custom Events
Ya hemos visto cómo hacer que un bloque de código se ejecute cuando hacemos click. Pero... ¿y si quiero poner otra condición? ¿Y si quiero poner una condición que no esté por defecto en VUE?

Pues eso es un Custom Event. Básicamente es decirle a un bloque de código "oye, ejecútate cuando esta condición se cumpla". Imagínatelo como si ese código estuviese metido en un "if" gigante, un "if" que continuamente está revisando si se cumple o no. A grandes rasgos ese es el comportamiento de un Custom Event.

Para ver cómo hacer custom events ve a CustomEventsComponent.vue porque es más fácil verlo que describirlo.

A estos Custom Events se les llama también Emit y es la forma en la que podemos pasar información de hijo a padre.

## Watchers
Un watcher es, literalmente, un vigilante. También se podría traducir como "observador", pero "vigilante" es una palabra más precisa. 

Un watcher vigila a una o más variables y, cuando esas variables cambian, ejecuta un bloque de código. Por ejemplo, si un usuario cambia en tiempo real su edad puedes querer que el watcher le restrinja el acceso a determinadas partes de la web. 

También puedes querer un watcher para un contador (por ejemplo, para el precio total del carrito de la compra) para que si el usuario supera un límite le puedas mandar un aviso. 

Echa un vistazo a WatchersComponent.vue para ver cómo se ejecuta este código. 

## Computed Properties
Una computes property es una variable cuyo valor se está calculando constantemente. 

Imagínate que tienes una variable que representará el color de las letras de la web y que, para adaptarla para daltónicos quieres que el propio usuario pueda elegir los colores de la web. Pues esto se haría con una computed property, tal y como te mostramos en el ejemplo de código. 

En esencia, una computed es una variable cuyo valor siempre se está actualizando, tomando como parámetros aquellos datos que tú le quieras dar. Vamos, es una variable a la que se le aplica (en un sentido muy genérico) un watcher.




