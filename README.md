# cypressCucumberPIL

Ejemplo basico de uso de cypress con cucumber

## Reporte

Para que se genere el reporte con el comando "gerenate:report" se debe tener el archivo "cucumber-json-formatter.exe" en la carpeta raiz.
El mismo puede ser descargado de https://github.com/cucumber/json-formatter/releases/tag/v19.0.0

- [x] llamadas xhr
- [x] Tienda: Hover en accesorio, audio (real-events), filtros de precios
- [x] Locadores que "desaparecen" (investigar)
- [x] Dexter: scroll y llegar al le coq sport (marcas) y hacer click ahí
- [x] Commands parametrizado para el login y logout
- [x] Se repite varias veces una acción, volver atrás (investigar) y cy.reload()
- [x] HiperLibertad: Ventanas tipoPopUp
- Comportamineto de mobile a veces es diferente

## Flags de Configuración

- hideXHRInCommandLog: En **true** permite NO isualizar las llamadas al servicio de tipo XHR. En **false**..

## Next Steps

Instalación de npm i @cypress-audit/lighthouse
https://mfrachet.github.io/cypress-audit/guides/lighthouse/installation.html#the-server-configuration
