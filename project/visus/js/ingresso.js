var yourV1Spec = {
    $schema: "https://vega.github.io/schema/vega-lite/v4.json",
    data: {url: "https://raw.githubusercontent.com/elasComputacao/raio-x-dados/main/data/dados-processados/ingresso.csv"},
    mark: {type:"bar", tooltip: true},
    title: "Quantidade de ingressantes no curso ao longo dos períodos",
    encoding: {
      x: {
        field: "periodo_ingresso",
        type: "ordinal",
        title: "Periodo do ingresso"
      },
      y: {
        field: "contagem",
        title: "Quantidade de alunos(as)"
      },
      color: {
        field: "sexo",
        type: "nominal",
        scale: {
          domain: ["Feminino", "Masculino"],
          range: ["#e7ba52", "#1f77b4"]
        },
        title: "Sexo"
      }
    }
  };
  vegaEmbed('#vis1', yourV1Spec);
  