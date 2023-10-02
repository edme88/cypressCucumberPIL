Feature: Tests de la página de Tienca Claro

    Scenario: Verificar funcionalidad del buscador
        Given que un usuario está en la página de "Claro"
        When posiciona el mouse sobre "Celulares"
        Then se visualizan las opciones "Samsung, Motorola, Celulares Liberados"

    Scenario: Verificar orden de elementos en plp
        Given que un usuario está en la página de "Claro"
        When se selecciona la opción "Ver catálogo completo"
        And se cambia el filtro a "Menor precio"
        Then los precios están ordenados de menor a mayor

    Scenario: Test visual del header
        Given que un usuario está en la página de "Claro"
        Then se verifica que el elemento "[data-test=\"main_menu_tienda\"]" posee los atributos
            | css-attribute | valor              | log                    |
            | background    | rgb(239, 56, 41)   | fondo de color rojo    |
            | color         | rgb(255, 255, 255) | letras de color blanco |