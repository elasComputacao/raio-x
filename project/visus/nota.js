var yourV3Spec = {
  "$schema": "https://vega.github.io/schema/vega-lite/v4.json",
  "title": {
    "text":"Distribuição da média de ingresso das mulheres e a média geral",
    "fontSize": 15
  },
  "data": {"url": "https://raw.githubusercontent.com/elasComputacao/raio-x-dados/main/data/dados-processados/notas.csv"},
  "encoding": {
      "x": {
          "field": "periodo_ingresso", 
          "type": "nominal", 
          "title": "Período"
      }
  },
  "layer": [
    {
      "encoding": {
        "color": {
            "field": "classe", 
            "type": "nominal", 
            "title": "Média",
            "scale": {
              "domain": ["geral", "mulheres"],
              "scheme": "pastel1"
            },
          },
        "y": {
            "field": "media", 
            "type": "quantitative", 
            "title": "Nota média"
          }
      },
      "layer": [
        {"mark": "line"},
        {"transform": [{"filter": {"selection": "hover"}}], "mark": "point"}
      ],

    },
    {
      "transform": [{"pivot": "classe", "value": "media", "groupby": ["periodo_ingresso"]}],
      "mark": "rule",
      "encoding": {
        "opacity": {
          "condition": {"value": 0.3, "selection": "hover"},
          "value": 0
        },
        "tooltip": [
          {"field": "periodo_ingresso", "type": "nominal", "title": "Período"},
          {"field": "geral", "type": "quantitative", "title": "Média geral"},
          {"field": "mulheres", "type": "quantitative", "title": "Média mulheres"}
        ]
      },
      "selection": {
        "hover": {
          "type": "single",
          "fields": ["periodo_ingresso"],
          "nearest": true,
          "on": "mouseover",
          "empty": "none",
          "clear": "mouseout"
        }
      }
    }
  ]
};
vegaEmbed('#vis3', yourV3Spec);
