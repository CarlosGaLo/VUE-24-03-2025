# Router
## ¿Qué es el router en vue?
Es la herramienta que nos permite "cambiar de página". 

Realmente en vue no vamos a cambiar de página de la manera normal, cargando por completo otro archivo y destruyendo el que ya tenemos. Lo que haremos realmente es cargar unos componentes u otros en función a la url en la que estamos. 

Para poder hacer esto debemos programar en varios archivos distintos. 

1. Las views. -> Son un componente que llaman a un conjunto de componentes. La homeView será la página principal, la userView será el panel del usuario y así...
2. App.vue -> En App.vue debemos tener al menos un router-view. El Router-view es donde view pondrá los componentes que hay que cargar. Es decir, el homeView se cargará donde esté el router-view
3. index.js -> Dentro de la carpeta router tendremos el index.js, que son las instrucciones de qué página hay que cargar cuando entremos en una URL determinada.

Para estudiarlo te recomiendo que empieces por index.js, para que veas cómo se seleccionan las rutas y luego que analices el router-view de app.vue, con eso entenderás cómo funcionan los routers.

En esencia: 
router.js -> Dice qué componente cargar o mostrar
router-view -> Dice dónde hay que mostrar el componente
componente-view -> Es el componente que se cargará

# Store
## ¿Qué es una store?
Es un lugar donde almacenamos todo tipo de datos. 

Podemos almacenar: 
1. Funciones
2. Variables
3. Constantes
4. ComputedProperties

## ¿Qué ventajas tiene respecto a otros sistemas?
Las stores pueden ser consultadas y modificadas desde cualquier parte del código. Esto simplifica la transmisión de información a lo largo de la página.

## ¿Cómo hacer una store?
Tras instalar Pinia (que es quien gestionará nuestras stores) debemos ir a la carpeta "stores". Allí te he preparado un archivo data.js para que lo estudies :)

### ¿Qué es VUEX y por qué lo veo recomendado a veces?
Antes de tener Pinia (nuestro actual gestor de stores) estaba VUEX. Básicamente es la forma antigua en la que se usaban las stores. Nosotros nos centraremos en Pinia porque es mejor, por eso actualmente se usa Pinia y no VUEX.


## Qué son los LifeCycle Methods o LifeCycle Hooks
Son "watchers" que están atentos al estado del componente. 

Es decir, que puedes ejecutar un bloque de código cuando algo le sucede al componente. 

Por ejemplo, mostrar un mensaje de "cargando" antes de que aparezca, "componente listo" cuando ya ha cargado, "actualizando" cuando lo vayas a actualizar y así con todos los estados. 

Tienes un ejemplo de cómo se ejecuta en la view LifeCycleHooks