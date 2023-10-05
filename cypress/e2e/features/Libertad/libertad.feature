Feature: Tests de la página de HiperLIbertad
    Scenario: Seleccionar tipo de tienda
        Given que un usuario está en la página de "HiperLibertad"
        When el usuario selecciona "Por domicilio"
        And completa como dirección "General Paz, Cordoba"
        Then se visualiza el listado de sugerencias de dirección
        When el usuario selecciona la primera suggerencia que contenga "General Paz"
        And completa el número de la calle con "50"
        And clickea el botón "Aceptar"
        Then se verifica el mensaje "Listo"


