var yourV4Spec = {
  "$schema": "https://vega.github.io/schema/vega-lite/v4.json",
  "title": "Tipo de cota das mulheres por periodo",
  "width": 500,
  "height": 300,
  "data": {"url": "https://raw.githubusercontent.com/elasComputacao/raio-x-dados/main/data/dados-processados/cotas.csv"},
  "mark": {"type":"area", "tooltip": true},
  
  "encoding": {
    
    "x": {
      "field": "periodo_ingresso", 
      "type": "nominal", 
      "title": "Periodos"
    },

    "y": {
      "field": "forma_reserva_vagas", 
      "type": "quantitative",
      "aggregate":"count",
      "stack": "zero",
      "title": "Quantidade de vagas"
    },
      
    "color": {
      "field": "forma_reserva_vagas", 
      "type": "nominal", 
      "title": "Tipo de vaga"
    }
  }
};
vegaEmbed('#vis4', yourV4Spec);