@regresion @yvytu
Feature: Home Yvytu

    @menu
    Scenario: Verificar elementos del menú superior
        Given que un usuario está en la página de "Yvytu"
        Then visualiza en el header los botones "LA RESERVA, CABAÑAS, COMO LLEGAR, CONTACTO, DONÁ"
        And se toma una captura de pantalla de "PaginaDeYvytu"
        And se toma una captura de pantalla del elemento "[class=\"w-full h-600 bg-black bg-opacity-40\"]"

    Scenario: Verificar Imágenes del Banner Principal
        Given que un usuario está en la página de "Yvytu"
        Then se visualizan las imágenes "01, 02, 03, 04" en el banner

    Scenario: Verificar comportamiento del botón Ir Arriba
        Given que un usuario está en la página de "Yvytu"
        Then el botón "Ir arriba" no se visualiza
        When el usuario hace scroll hasta "Conocé una historia mágica."
        Then el botón "Ir arriba" se visualiza
        When el usuario presiona el botón "Ir arriba"
        Then visualiza en el header los botones "LA RESERVA, CABAÑAS, COMO LLEGAR, CONTACTO, DONÁ"
        And el botón "Ir arriba" no se visualiza

    Scenario: Verificar comportamiento del botón /reserva_yvytu
        Given que un usuario está en la página de "Yvytu"
        Then visualiza el link "XXReservar" redirecciona a "https://wa.me/5493757454400"
        And visualiza el link "reserva_yvytu" redirecciona a "https://www.instagram.com/reserva_yvytu/"
        And visualiza el link "Enviar mensaje" redirecciona a "https://wa.me/5493757454400"

    Scenario: Verificar cabañas
        Given que un usuario está en la página de "Yvytu"
        When el usuario hace scroll hasta "Nuestras cabañas"
        Then se verifica que la cabaña "1" llamada "Yaguareté" posee las siguientes caracteristicas "Para 4 personas, 2 habitaciones, Baño con ducha, Ropa de cama, Wi-fi, Aire acondicionado"
        And se verifica que la cabaña "2" llamada "Arasari" posee las siguientes caracteristicas "Para 4 personas, 2 habitaciones, Baño con ducha, Ropa de cama, Wi-fi"

    @ignore
    Scenario Outline: Verificar cabaña <num>: <nombreCab>
        Given que un usuario está en la página de "Yvytu"
        When el usuario hace scroll hasta "Nuestras cabañas"
        Then se verifica que la cabaña "<num>" llamada "<nombreCab>" posee las siguientes caracteristicas "<item>"
        Examples:
            | num | nombreCab | item                                                                                     |
            | 1   | Yaguareté | Para 4 personas, 2 habitaciones, Baño con ducha, Ropa de cama, Wi-fi, Aire acondicionado |
            | 2   | Arasari   | Para 4 personas, 2 habitaciones, Baño con ducha, Ropa de cama, Wi-fi                     |

    Scenario: Visual Tetsing con cypress-image-diff
        Given que un usuario está en la página de "Yvytu"
        Then se compara "home-page-yvytu" con la imagen base