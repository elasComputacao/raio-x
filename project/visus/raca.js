var yourV2Spec = {
    "$schema": "https://vega.github.io/schema/vega-lite/v4.json",
    "title": "Tipo de cor das mulheres por periodo",
    "width": 700,
    "height": 250,
    "data": {"url": "https://raw.githubusercontent.com/elasComputacao/raio-x-dados/main/data/dados-processados/raca.csv"},
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
        "title": "Periodos",
        "axis": {"grid": false}
      },

      "y": {
        "field": "nome_cor", 
        "type": "nominal",
        "title": "Tipos de raças",
        "axis": {"title": ""}
      },

      "size": {
        "field": "nome_cor",
        "type": "quantitative",
        "aggregate":"count",
        "title": "Quantidade",
        "legend": {"clipHeight": 30},
        "scale": {"rangeMax": 500}
      },

      "color": {
        "field": "nome_cor", 
        "type": "nominal", 
        "legend": null
      }
    }
};
vegaEmbed('#vis2', yourV2Spec);