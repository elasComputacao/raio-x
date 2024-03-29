var yourV4Spec = {
  "$schema": "https://vega.github.io/schema/vega-lite/v4.json",
  "data": {
    "url": "https://raw.githubusercontent.com/elasComputacao/raio-x-dados/main/data/dados-processados/cotas.csv"
  },
  "transform": [
    {
      "aggregate": [
        {"op": "count", 
        "field": "forma_reserva_vagas",
        "as": "count_cota"}
      ],
      "groupby": ["forma_reserva_vagas", "periodo_ingresso"]
    }
  ],
  "title": {
    "text": "Tipos de cota utilizadas pelas ingressantes",
    "fontSize": 15
  },
  "width": 700,
  "height": 250,
  "mark": {"type": "bar", "tooltip": true},
  "encoding": {
    "y": {
      "field": "periodo_ingresso",
      "type": "nominal",
      "title": "Periodo",
      "sort": "-y"
    },
    "x": {
      "field": "count_cota",
      "type": "quantitative",
      "title": "Quantidade de vagas utilizadas"
    },
    "tooltip": [
      {"field": "periodo_ingresso", "type": "ordinal", "title": "Período"},
      {"field": "forma_reserva_vagas", "type": "ordinal", "title": "Cota"},
      {"field": "count_cota", "type": "quantitative", "title": "Quantidade"}
    ],
    "order": {"field": "forma_reserva_vagas"},
    "color": {
      "field": "forma_reserva_vagas",
      "type": "nominal",
      "scale": {
        "domain": [
          "Escola",
          "Escola Cor",
          "Escola Cor Deficiencia",
          "Escola Renda",
          "Escola Renda Cor",
          "Escola Renda Cor Deficiencia",
          "Escola Renda Deficiencia"
        ],
        "scheme": "set2"
      },
      "title": "Cota"
    }
  }
};
vegaEmbed('#vis4', yourV4Spec);