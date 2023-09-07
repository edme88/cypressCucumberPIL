Feature: Home Yvytu

    Scenario: Verificar elementos del menú superior
        Given que un usuario está en la página de "Yvytu"
        Then visualiza en el header los botones "LA RESERVA, CABAÑAS, COMO LLEGAR, CONTACTO, DONÁ"

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

    @focus
    Scenario: Verificar comportamiento del botón /reserva_yvytu
        Given que un usuario está en la página de "Yvytu"
        Then visualiza el link "Reservar" redirecciona a "https://wa.me/5493757454400"
        And visualiza el link "reserva_yvytu" redirecciona a "https://www.instagram.com/reserva_yvytu/"
        And visualiza el link "Enviar mensaje" redirecciona a "https://wa.me/5493757454400"