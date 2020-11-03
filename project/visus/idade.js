var yourV5Spec = {
  "$schema": "https://vega.github.io/schema/vega-lite/v4.json",
  "data": {"url": "https://raw.githubusercontent.com/elasComputacao/raio-x-dados/main/data/dados-processados/idade.csv"},
  "mark": {"type":"bar", "tooltip": true},
  "title": "Idade média das meninas ao ingressarem no curso, por período",
  "encoding": {
    "x": {
      "field": "periodo_ingresso",
      "type": "nominal",
      "title": "Periodo do ingresso"
    },
    "y": {
      "field": "idade_ingresso", 
      "aggregate": "sum",
      "title": "Idade ao ingressar"
    }
  }
  };
  vegaEmbed("#vis5", yourV5Spec);
  