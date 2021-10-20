{
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "description": "Two vertically concatenated charts that show a histogram of precipitation in Seattle and the relationship between min and max temperature.",
  "title": {
    "text": "Situação acadêmica entre homens e mulheres",
    "anchor": "middle"
  },
  "data": {
    "url": "https://raw.githubusercontent.com/elasComputacao/raio-x-dados/5688192f0ef41ffc80f848db51de0d0c7e513ce4/data/dados-processados/situacao_academica.csv"
  },
  "vconcat": [
    {
      "mark": "bar",
      "width": 500,
      "height": 250,
      "encoding": {
        "y": {
          "field": "forma_saida",
          "title": "Situação acadêmica"
        },
        "x": {
          "field": "count",
          "type": "quantitative",
          "title": "Quantidade de estudantes"
        },
        "tooltip": {"field": "count", "type": "quantitative"},
        "color": {
          "field": "sexo",
          "title": "Gênero",
          "scale": {
          "domain": ["Masculino","Feminino"],
          "scheme": "set2"
          }
        }
      }
    }
  ]
}

