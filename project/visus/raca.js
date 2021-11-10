var yourV2Spec = {
  "$schema": "https://vega.github.io/schema/vega-lite/v4.json",
  "title": {"text": "Distribuição da raça das mulheres", "fontSize": 15},
  "width": 900,
  "height": 300,
  "autosize": {"resize": true, "type": "fit", "contains": "width"},
  "data": {
    "url": "https://raw.githubusercontent.com/elasComputacao/raio-x-dados/main/data/dados-processados/raca.csv"
  },
  "transform": [
    {
      "aggregate": [{
       "op": "count",
       "field": "nome_cor",
       "as": "count_nome_cor"
      }],
      "groupby": ["nome_cor", "periodo_ingresso"]
    }
  ],
  "mark": {
    "type": "circle",
    "opacity": 0.8,
    "stroke": "black",
    "strokeWidth": 1,
    "tooltip": true
  },
  "encoding": {
    "x": {
      "field": "periodo_ingresso",
      "type": "nominal",
      "title": "Período",
      "axis": {"grid": false}
    },
    "y": {
      "field": "nome_cor", 
      "type": "nominal", 
      "title": "Tipos de raças"
    },
    "size": {
      "field": "count_nome_cor",
      "type": "quantitative",
      "title": "Quantidade",
      "legend": {"clipHeight": 30},
      "scale": {"rangeMax": 500}
    },
    "tooltip": [
          {"field": "periodo_ingresso", "type": "ordinal", "title": "Período"},
          {"field": "nome_cor", "type": "ordinal", "title": "Raça"},
          {"field": "count_nome_cor", "type": "quantitative", "title": "Quantidade"}
        ],
    "color": {
      "field": "nome_cor",
      "type": "nominal",
      "scale": {
        "domain": ["Amarela", "Branca", "Não declarada", "Parda", "Preta"],
        "scheme": "category20"
      },
      "legend": null
    }
  }
};
vegaEmbed('#vis2', yourV2Spec);