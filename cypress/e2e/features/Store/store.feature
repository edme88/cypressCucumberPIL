Feature: Tests de la página de Store Automation

    Scenario: Realizar Login
        Given que un usuario está en la página de "Store"
        When el usuario presiona "Login or register" en el menu principal
        And completa usuario y password "1"
        Then se verifica que el título principal es "My Account"
