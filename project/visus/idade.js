var yourV5Spec = {
  "$schema": "https://vega.github.io/schema/vega-lite/v4.json",
  "data": {
    "url": "https://raw.githubusercontent.com/elasComputacao/raio-x-dados/main/data/dados-processados/mulheres.csv"
  },
  "mark": {"type": "bar",  "color": "#F1C40F","tooltip": true},
  "title": {
    "text": "Idade de ingresso das ingressantes, de 2000.1 até 2020.1",
    "fontSize": 15
  },
  "transform": [{"filter": "datum.periodo_ingresso >= 2000.1"}],
  "width": 700,
  "height": 200,
  "encoding": {
    "x": {"field": "idade_ingresso", "title": "Idade de ingresso"},
    "y": {"aggregate": "count", "title": "Quantidade"}
  }
};
vegaEmbed("#vis5", yourV5Spec);
  