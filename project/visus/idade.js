var yourV5Spec = {
    "$schema": "https://vega.github.io/schema/vega-lite/v4.json",
    "data": {"url": "https://raw.githubusercontent.com/elasComputacao/raio-x-dados/main/data/dados-brutos/alunos_raiox.csv"},
    "mark": {"type":"bar", "tooltip": true},
    "transform": [
      {
        "filter": "datum.idade_ingresso > 0",
        "filter": "datum.periodo_ingresso >= 2000.1"
      }
    ],
    "width": 700,
    "height": 200,
    "encoding": {
      "x": {
        "bin": {"maxbins": 25},
        "field": "idade_ingresso",
        "title": "Idade de ingresso"
      },
      "y": {
        "aggregate": "count",
        "title": "Contagem"
      },
      "color": {
         "scale": {
          "range": ["#F1C40F"]
        }
      },
    }
  }
  ;
  vegaEmbed("#vis5", yourV5Spec);
  