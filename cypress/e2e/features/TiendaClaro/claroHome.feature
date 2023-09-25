Feature: Tests de la página de Tienca Claro

    Scenario: Verificar funcionalidad del buscador
        Given que un usuario está en la página de "Claro"
        When posiciona el mouse sobre "Celulares"
        Then se visualizan las opciones "Samsung, Motorola, Celulares Liberados"

    @focus
    Scenario: Verificar orden de elementos en plp
        Given que un usuario está en la página de "Claro"
        When se selecciona la opción "Ver catálogo completo"
        And se cambia el filtro a "Menor precio"
        Then los precios están ordenados de menor a mayor
