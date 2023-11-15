@regresion @yvytu @accesibilidad
Feature: Home Yvytu

    Scenario: Verificar accesibilidad con Lighthouse en la página de Yvytu
        Given que un usuario está en la página de "Yvytu"
        Then se ejecuta lighthouse
