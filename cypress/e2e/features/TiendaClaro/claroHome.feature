Feature: Tests de la página de Tienca Claro

    Scenario: Verificar funcionalidad del buscador
        Given que un usuario está en la página de "Claro"
        When posiciona el mouse sobre "Celulares"
        Then se visualizan las opciones "Samsung, Motorola, Celulares Liberados"
