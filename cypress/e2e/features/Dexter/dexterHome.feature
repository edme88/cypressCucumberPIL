Feature: Tests de la página de Dexter

    Scenario: Verificar la pagina de le-coq-sportif
        Given que un usuario está en la página de "Dexter"
        When clickea la opción "Por ahora no quiero, gracias."
        And realiza scroll hasta "Navegá por marcas"
        And selecciona la opción de "le-coq-sportif"
        Then se verifica que la url contiene "/le-coq-sportif"
