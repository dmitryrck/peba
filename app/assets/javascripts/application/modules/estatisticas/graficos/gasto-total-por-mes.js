Module('Peba.Graficos.GastoTotalPorMes', $.extend(true, {
  chart: { renderTo: 'gasto-total-por-mes' },
  title: {
    enabled: true,
    text: 'Gastos Anuais Registrados'
  }
}, Peba.Graficos.RecursosPorMes));