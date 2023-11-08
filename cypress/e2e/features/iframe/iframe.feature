Feature: Tests de Iframe

    Scenario: Verificar funcionalidad del buscador
        Given que un usuario está en la página de "internet"
        When se verifica que el iframe es visible
        Then se elimina el texto y se escribe "Hola Mundo"

    @focus
    Scenario:
        Given que un usuario está en la página de "internet"
        Then el usuario elimina el texto y escribe "Hola"

