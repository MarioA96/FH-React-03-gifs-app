# Temas Puntuales

## Seccion 3 - Gifs App

En esta sección comenzaremos a trabajar de una forma estructurada React, que nos
permita escalar proyectos y empezar a dejar el pensamiento de que necesitamos la
separación en componentes pequeños fáciles de reutilizar y probar.

Puntualmente veremos:

- Peticiones HTTP
- Debounce
- Manejo de estado
- Comunicación entre componentes
- useEffect
- Variables de entorno
- Fuentes personalizadas
- Entre otras cosas.

La idea principal es dejar las bases de cómo podemos trabajar aplicaciones en
React que nos permitan crecer y reutilizar su contenido a futuro.

---

## Seccion 4 - Optimizacion y despliegue

En esta sección aprenderemos mucho sobre cómo funciona React.

Puntualmente veremos:

- Custom Hooks - Hooks personalizados
- DevTools de React
- useRef - Hook propio de React
- Generar versión de producción
- Separación de responsabilidades

Esta es una sección muy importante porque marca el antes y el después de cómo
trabajar en React, ya que los custom hooks son lo que usaremos de aquí en
adelante para evitar aglomerar los componentes con demasiada lógica.

---

## Seccion 5 - Testing

Esta es una sección grande sobre pruebas automáticas, donde cubriremos
fuertemente la aplicación de Gifs que hicimos en la sección anterior.

Puntualmente aprenderemos sobre:

- Pruebas sobre hooks
- Pruebas sobre custom hooks
- Pruebas con tareas asíncronas
- Pruebas con tareas que involucran timeouts
- Pruebas sobre axios
- Integrar testing en el proceso de construcción
- Espías
- Sobre escribir funciones para el testing
- Manejo de excepciones

### Cuestionario con respuestas

1. ¿Cuál es el principal beneficio de integrar la ejecución de pruebas automáticas directamente en el script de build de una aplicación?

   **Respuesta:** Para actuar como un "guardian" que impide la construccion y despliegue de la aplicacionsi alguna prueba falla, asegurando la calidad del codigo. Esta es la practica estandar en Integracion Continua/Despliegue Continuo (CI/CD).

2. Al probar un componente que utiliza un custom hook complejo, ¿cuál es la principal ventaja de crear una simulación (mock) del hook en lugar de usar su implementación real?

   **Respuesta:** Permite aislar el componente y centrarse en probar su comportamiento sin depender de la lógica interna del hook, lo que facilita la identificación de problemas específicos del componente. Facilitando la prueba de como el componente reacciona a diferentes estados o errores sin depender de la logica interna del hook.

3. ¿Por qué es fundamental envolver en la función **act()** las acciones que provocan una actualización de estado en un componente de React durante una prueba?

    **Respuesta:** Para asegurarse de que la prueba espere a que React procese todas las actualizaciones de estado y del DOM antes de realizar las aserciones sobre el resultado final.

4. Al probar una funcionalidad con un retardo de tiempo (ej. un debounce con setTimeout), ¿por qué se prefiere usar **waitFor** de Testing Library en lugar de una espera con tiempo fijo? (ej. new Promise con un setTimeout)

   **Respuesta:** Porque **waitFor** desvincula la prueba de la duración exacta del setTimeout, haciendo la prueba más robusta y menos frágil ante cambios en el tiempo del debounce.

5. ¿Cuál es un beneficio clave de usar una librería como **axios-mock-adapter** al probar funciones que realizan peticiones HTTP?

    **Respuesta:** Permite simular y controlar las respuestas de la API (tanto de éxito como de error) sin depender de una red o de la disponibilidad del servicio externo, haciendo las pruebas rápidas y fiables.

6. Verdadero o Falso: Cuando se utiliza una herramienta como Vitest, es una buena práctica aislar el estado de cada prueba para evitar que el resultado de una afecte a la siguiente, lo cual se puede lograr usando el hook de ciclo de vida **beforeEach**.

   **Respuesta:** Verdadero. Aislar el estado de cada prueba asegura que las pruebas sean independientes y no se vean afectadas por cambios en el estado global o compartido.

7. ¿Cuál es el propósito principal de usar un "espía" (vi.spyOn) sobre un método existente, como console.error?

   **Respuesta:** Permitir monitorear y verificar si el método fue llamado, cuántas veces y con qué argumentos, sin alterar su comportamiento original.

8. Verdadero o Falso: Un reporte de cobertura de pruebas del 100% significa que la aplicación está libre de errores lógicos.

   **Respuesta:** Falso. Un 100% de cobertura indica que todas las líneas de código han sido ejecutadas durante las pruebas, pero no garantiza que todas las posibles combinaciones de entradas y estados hayan sido probadas, ni que el código esté libre de errores lógicos.

9. Al configurar un pipeline de CI/CD, ¿por qué se utiliza el comando vitest run en lugar de simplemente vitest?

   **Respuesta:** **vitest** inicia en modo watch u "observador", esperando cambios y nunca finaliza por si solo.
    **vitest run** ejecuta las pruebas una sola vez y luego finaliza, lo cual es adecuado para entornos de CI/CD donde se espera que el proceso termine después de la ejecución de las pruebas, lo cual es necesraio para un script automaizado.

10. Cuando se intenta verificar que un elemento no está presente en el DOM, ¿por qué una consulta como screen.getByRole('dialog') no es adecuada y cuál es una alternativa común?

    **Respuesta:** **getByRole** no funciona en el entorno de **jsdom**; la alternativa es usar **container.querySelector**. Porque screen.getByRole lanzará un error si el elemento no se encuentra, lo que no es deseable cuando queremos verificar su ausencia. Una alternativa común es usar screen.queryByRole('dialog'), que devuelve null si el elemento no está presente, permitiendo así realizar aserciones sobre su ausencia sin lanzar errores.

---
