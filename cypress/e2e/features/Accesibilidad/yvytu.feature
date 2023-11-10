@regresion @yvytu @accesibilidad
Feature: Home Yvytu

    Scenario: Verificar accesibilidad en la página de Yvytu
        Given que un usuario está en la página de "Yvytu"
        When se desea testear accesibilidad en la página
        Then se genera un listado de los errores de accesibilidad

    Scenario: Verificar accesibilidad el slider de imágenes en la página de Yvytu
        Given que un usuario está en la página de "Yvytu"
        When se desea testear accesibilidad en la página
        Then se genera un listado de los errores de accesibilidad del elemento ".slider-reserva"

    Scenario: Verificar accesibilidad en TODA la página de Yvytu menos en el slider
        Given que un usuario está en la página de "Yvytu"
        When se desea testear accesibilidad en la página
        Then se genera un listado de los errores de accesibilidad de toda la página excepto del elemento ".slider-reserva"

    Scenario: Verificar errores de accesibilidad CRITICOS en la página de Yvytu
        Given que un usuario está en la página de "Yvytu"
        When se desea testear accesibilidad en la página
        Then se genera un listado de los errores "critical" de accesibilidad

    @focus
    Scenario: Verificar accesibilidad en la página de Yvytu y generar reporte
        Given que un usuario está en la página de "Yvytu"
        When se desea testear accesibilidad en la página
        Then se genera un listado de los errores de accesibilidad y se imprime reporte