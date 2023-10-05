Feature: Tests de la página de Dexter

    Scenario: Verificar la pagina de le-coq-sportif
        Given que un usuario está en la página de "Dexter"
        When clickea la opción "Por ahora no quiero, gracias."
        And realiza scroll hasta "Navegá por marcas"
        And selecciona la opción de "le-coq-sportif"
        Then se verifica que la url contiene "/le-coq-sportif"
        When cuando el usuario presiona la flecha de "back" en el navegador
        Then se verifica que la url es "https://www.dexter.com.ar/"
