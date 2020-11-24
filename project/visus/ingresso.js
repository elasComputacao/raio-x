var yourV1Spec = {
  "$schema": "https://vega.github.io/schema/vega-lite/v4.json",
  "title": {
    "text":"Quantidade de ingressantes no curso",
    "fontSize": 15
  },
  "data": {"url": "https://raw.githubusercontent.com/elasComputacao/raio-x-dados/main/data/dados-processados/ingresso.csv"},
  "mark": {"type":"bar", "tooltip": true},
  "encoding": {
    "x": {
      "field": "periodo_ingresso",
      "type": "ordinal",
      "title": "Periodo de ingresso"
    },
    "y": {
      "field": "contagem", 
      "type": "quantitative",
      "aggregate": "sum",
      "title": "Quantidade de alunos"
    },
    "color": {
      "field": "sexo",
      "type": "nominal",
      "scale": {
        "domain": ["Masculino","Feminino"],
        "scheme": "set2"
      },
      "title": "Sexo"
    },
    "order": {
      "aggregate": "sum", 
      "field": "contagem"
    }
  }};

  vegaEmbed("#vis1", yourV1Spec);
  