var yourV3Spec = {
    "$schema": "https://vega.github.io/schema/vega-lite/v4.json",
    "title":"Relação da nota média geral e a noa das mulheres que ingressam no curso",
    "data": {"url": "https://raw.githubusercontent.com/elasComputacao/raio-x-dados/main/data/dados-processados/notas.csv"},
    "mark": {
      "type": "line",
      "tooltip": true,
      "point": {
        "filled": false,
        "fill": "white"
      }
    },
    "encoding": {
      "x": {"field": "periodo_ingresso", "type": "nominal", "title": "Periodos"},
      "y": {"field": "media","type": "quantitative", "title": "Nota média"},
      "color": {"field": "classe", "type": "nominal", "title": "Legenda"}
    }
  };
  vegaEmbed('#vis3', yourV3Spec);
  