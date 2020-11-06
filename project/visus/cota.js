var yourV4Spec = {
  "$schema": "https://vega.github.io/schema/vega-lite/v4.json",
  "data": {"url": "https://raw.githubusercontent.com/elasComputacao/raio-x-dados/main/data/dados-processados/cotas.csv"},
  "width": 700,
  "height": 250,
  "mark": {"type":"bar", "tooltip": true},
  "encoding": {
    "y": {
      "field": "periodo_ingresso", 
      "type": "nominal", 
      "title": "Periodo",
      "sort": "-y"
    },
    "x": {
      "field": "forma_reserva_vagas",
      "aggregate": "count",
      "type": "quantitative",
      "title": ""
    },
    "order": {
      "field": "forma_reserva_vagas"
    },
    "color": {
      "field": "forma_reserva_vagas",
      "type": "nominal",
      "scale": {
        "domain": ["Escola", "Escola Cor", "Escola Cor Deficiencia", "Escola Renda", "Escola Renda Cor", "Escola Renda Cor Deficiencia", "Escola Renda Deficiencia"],
      "scheme": "set2"
      },
      "title": "Cota"
    }
  }
};
vegaEmbed('#vis4', yourV4Spec);