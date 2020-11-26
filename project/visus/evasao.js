var yourV8Spec = {
  "$schema": "https://vega.github.io/schema/vega/v5.json",
  "title": {
    "text": "Tipo de evasão das mulheres desde 2000.1",
    "fontSize": 15,
    "subtitle": " ",
    "subtitlePadding": 60
  },
  "width": 600,
  "height": 600,
  "padding": {"left": 125, "top": 170, "right": 140},
  "autosize": {"type": "none", "contains": "padding"},
  "signals": [{"name": "radius", "update": "width / 2"}],
  "data": [
    {
      "name": "table",
      "values": [
        {"key": "ABANDONO", "value": 63, "category": 0},
        {"key": "REPROVAÇÃO POR FALTAS", "value": 45, "category": 0},
        {"key": "3 REPROVAÇÕES MESMA DISCIPLINA", "value": 43, "category": 0},
        {"key": "CANCELAMENTO", "value": 28, "category": 0},
        {"key": "INGRESSO OUTRO CURSO", "value": 6, "category": 0},
        {"key": "MUDANÇA CURSO", "value": 2, "category": 0},
        {"key": "DECISÃO JUDICIAL", "value": 1, "category": 0},
        {"key": "MUDANÇA INSTITUIÇÃO", "value": 1, "category": 0}
      ]
    },
    {
      "name": "keys",
      "source": "table",
      "transform": [{"type": "aggregate", "groupby": ["key"]}]
    }
  ],
  "scales": [
    {
      "name": "angular",
      "type": "point",
      "range": {"signal": "[-PI, PI]"},
      "padding": 0.5,
      "domain": {"data": "table", "field": "key"}
    },
    {
      "name": "radial",
      "type": "linear",
      "range": {"signal": "[0, radius]"},
      "zero": true,
      "nice": false,
      "domain": {"data": "table", "field": "value"},
      "domainMin": 0
    },
    {
      "name": "color",
      "type": "ordinal",
      "domain": {"data": "table", "field": "category"},
      "range": {"scheme": "set2"}
    }
  ],
  "encode": {"enter": {"x": {"signal": "radius"}, "y": {"signal": "radius"}}},
  "marks": [
    {
      "type": "group",
      "name": "categories",
      "zindex": 1,
      "from": {
        "facet": {"data": "table", "name": "facet", "groupby": ["category"]}
      },
      "marks": [
        {
          "type": "line",
          "name": "category-line",
          "from": {"data": "facet"},
          "encode": {
            "enter": {
              "interpolate": {"value": "linear-closed"},
              "x": {
                "signal": "scale('radial', datum.value) * cos(scale('angular', datum.key))"
              },
              "y": {
                "signal": "scale('radial', datum.value) * sin(scale('angular', datum.key))"
              },
              "stroke": {"scale": "color", "field": "category"},
              "strokeWidth": {"value": 1},
              "fill": {"scale": "color", "field": "category"},
              "fillOpacity": {"value": 0.1}
            }
          }
        },
        {
          "type": "text",
          "name": "value-text",
          "from": {"data": "category-line"},
          "encode": {
            "enter": {
              "x": {"signal": "datum.x"},
              "y": {"signal": "datum.y"},
              "text": {"signal": "datum.datum.value"},
              "align": {"value": "center"},
              "baseline": {"value": "middle"},
              "fill": {"value": "black"}
            }
          }
        }
      ]
    },
    {
      "type": "rule",
      "name": "radial-grid",
      "from": {"data": "keys"},
      "zindex": 0,
      "encode": {
        "enter": {
          "x": {"value": 0},
          "y": {"value": 0},
          "x2": {"signal": "radius * cos(scale('angular', datum.key))"},
          "y2": {"signal": "radius * sin(scale('angular', datum.key))"},
          "stroke": {"value": "lightgray"},
          "strokeWidth": {"value": 1}
        }
      }
    },
    {
      "type": "text",
      "name": "key-label",
      "from": {"data": "keys"},
      "zindex": 1,
      "encode": {
        "enter": {
          "x": {"signal": "(radius + 5) * cos(scale('angular', datum.key))"},
          "y": {"signal": "(radius + 5) * sin(scale('angular', datum.key))"},
          "text": {"field": "key"},
          "align": [
            {
              "test": "abs(scale('angular', datum.key)) > PI / 2",
              "value": "right"
            },
            {"value": "left"}
          ],
          "baseline": [
            {"test": "scale('angular', datum.key) > 0", "value": "top"},
            {"test": "scale('angular', datum.key) == 0", "value": "middle"},
            {"value": "bottom"}
          ],
          "fill": {"value": "black"},
          "fontWeight": {"value": "bold"}
        }
      }
    },
    {
      "type": "line",
      "name": "outer-line",
      "from": {"data": "radial-grid"},
      "encode": {
        "enter": {
          "interpolate": {"value": "linear-closed"},
          "x": {"field": "x2"},
          "y": {"field": "y2"},
          "stroke": {"value": "lightgray"},
          "strokeWidth": {"value": 1}
        }
      }
    }
  ]
};
vegaEmbed('#vis8', yourV8Spec);