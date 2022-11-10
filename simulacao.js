function atualizaSimulador(valorDoRange) {
  const tarifaComImposto = 760.08;
  const tarifaComDesconto = 623.26;
  const tCO2xMWh = 0.06870; // tCO2 / MWh
  const arvoreMWh = 0.000550481; // Fator de emissão médio de CO2 do SIN (Kg CO2 / MWh) / (Remoção média anual de CO2 * Tempo de contrato)

  const kwhMes = valorDoRange / (tarifaComImposto / 1000)
  const economiaMes = valorDoRange - (kwhMes * (tarifaComDesconto / 1000))
  const economiaAno = economiaMes * 12
  const tCO2Mes = (kwhMes / 1000) * tCO2xMWh
  const arvoresSalvas = kwhMes * arvoreMWh

  document.getElementById('valor-fatura-mensal').innerHTML = Number(valorDoRange).toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })
  document.getElementById('kwh-mes').innerHTML = kwhMes.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })
  document.getElementById('economia-mensal-estimada').innerHTML = economiaMes.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })
  document.getElementById('economia-anual-estimada').innerHTML = economiaAno.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })
  document.getElementById('toneladas-emissao-evitadas').innerHTML = tCO2Mes.toFixed(3)
  document.getElementById('arvores-salvas').innerHTML = arvoresSalvas.toFixed(2)
}