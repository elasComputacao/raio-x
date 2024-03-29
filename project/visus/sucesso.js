var yourV11Spec = {
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "description": "A ranged dot plot that uses 'layer' to convey changing life expectancy for the five most populous countries (between 1955 and 2000).",
  "data": {
    "url": "https://raw.githubusercontent.com/elasComputacao/raio-x-dados/dados-sucesso-insucesso/data/dados-processados/sucesso_insucesso.csv"
  },
  "title": {
    "text": "Taxa de sucesso das top 20 disciplinas",
    "fontSize": 15,
    "anchor": "middle"
  },
  "width": 450,
  "height": 250,
  "encoding": {
    "x": {
      "field": "value",
      "type": "quantitative",
      "title": "Percentual de sucesso",
      "scale": {"domain": [0.37, 0.8]}
    },
    "y": {
      "field": "nome_disciplina",
      "type": "nominal",
      "title": "Disciplinas",
      "axis": {"offset": 5, "ticks": false, "minExtent": 70, "domain": false}
    },
    "tooltip": [
      {"field": "nome_disciplina", "type": "nominal", "title": "Disciplina"},
      {"field": "sexo", "type": "nominal", "title": "Sexo"},
      {"field": "value", "type": "quantitative", "title": "Sucesso(%)"}
    ]
  },
  "layer": [
    {
      "mark": "line",
      "encoding": {
        "detail": {"field": "nome_disciplina", "type": "nominal"},
        "color": {"value": "#000000"}
      }
    },
    {
      "mark": {"type": "point", "filled": true},
      "encoding": {
        "color": {
          "scale": {"range": ["#d95f02", "#1b9e77"]},
          "field": "sexo",
          "type": "nominal",
          "title": "Gênero"
        },
        "size": {"value": 40},
        "opacity": {"value": 1}
      }
    }
  ]
};

vegaEmbed("#vis11", yourV11Spec);