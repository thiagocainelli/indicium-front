import { Card, Col, Row, Statistic, Tooltip } from "antd";

type MetricsCardsProps = {
  metrics?: SragMetricsDto;
};

export function MetricsCards({ metrics }: MetricsCardsProps) {
  return (
    <Row gutter={[12, 12]}>
      <Col xs={24} md={6}>
        <Card className="themed-card">
          <Tooltip title="Variação percentual de casos em relação ao período anterior.">
            <Statistic
              title="Aumento de Casos"
              value={metrics?.caseIncreaseRate ?? 0}
              precision={2}
              suffix="%"
            />
          </Tooltip>
        </Card>
      </Col>
      <Col xs={24} md={6}>
        <Card className="themed-card">
          <Tooltip title="Proporção de óbitos entre os casos no período.">
            <Statistic
              title="Taxa de Mortalidade"
              value={metrics?.mortalityRate ?? 0}
              precision={2}
              suffix="%"
            />
          </Tooltip>
        </Card>
      </Col>
      <Col xs={24} md={6}>
        <Card className="themed-card">
          <Tooltip title="Proporção de internações em UTI entre os casos.">
            <Statistic
              title="Ocupação de UTI"
              value={metrics?.icuOccupancyRate ?? 0}
              precision={2}
              suffix="%"
            />
          </Tooltip>
        </Card>
      </Col>
      <Col xs={24} md={6}>
        <Card className="themed-card">
          <Tooltip title="Proporção de vacinados entre os casos registrados.">
            <Statistic
              title="Taxa de Vacinação"
              value={metrics?.vaccinationRate ?? 0}
              precision={2}
              suffix="%"
            />
          </Tooltip>
        </Card>
      </Col>
    </Row>
  );
}
