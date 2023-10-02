Feature: Tests de la página de Store Automation

    Background: Entrar a Store & Login
        Given que un usuario está en la página de "Store"
        When el usuario presiona "Login or register" en el menu principal
        And completa usuario y password "1"
        Then se verifica que el título principal es "My Account"

    Scenario: Realizar Login
        When el usuario realiza hover en "Welcome back"
        And clickea la opción "Logoff"
        Then se verifica que el título principal es "Account Logout"

    Scenario: Realizar Login & LOgout - Ejemplo 2
        When el usuario realiza logout
        Then se verifica que el título principal es "Account Logout"

    Scenario: Test visual del header
        Given que un usuario está en la página de "Store"
        Then se verifica que el elemento ".headerstrip" posee los atributos
            | css-attribute    | valor            | log                    |
            | background-color | rgb(0, 161, 203) | fondo de color celeste |
