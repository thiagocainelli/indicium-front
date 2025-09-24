import { useEffect, useMemo, useState } from "react";
import { Card, Col, DatePicker, Row, Select, Space, Typography } from "antd";
import dayjs, { Dayjs } from "dayjs";
import { getSragChartData, getSragMetrics } from "../../services/srag.service";
import { MetricsCards } from "../../components/Srag/MetricsCards.tsx";
import { SragChart } from "../../components/Srag/SragChart.tsx";
import { SragTable } from "../../components/Srag/SragTable.tsx";

const { Title } = Typography;
const { RangePicker } = DatePicker;

function Dashboard() {
  const [region, setRegion] = useState<string | undefined>();
  const [groupBy, setGroupBy] = useState<"state" | "city">("state");
  const [periodKind, setPeriodKind] = useState<"daily" | "monthly" | "yearly">(
    "monthly"
  );
  const [period, setPeriod] = useState<string | undefined>(
    dayjs().format("YYYY-MM")
  );
  const [range, setRange] = useState<[Dayjs, Dayjs] | null>(null);

  const [metrics, setMetrics] = useState<SragMetricsDto | null>(null);
  const [chartData, setChartData] = useState<SragChartDataDto[]>([]);

  const [tableFilters, setTableFilters] = useState<{
    page: number;
    itemsPerPage: number;
    sgUf?: string;
    coMunRes?: string;
    startDate?: string;
    endDate?: string;
    evolucao?: number;
    uti?: number;
    vacinaCov?: number;
  }>({ page: 1, itemsPerPage: 10 });

  const rangeISO = useMemo(() => {
    if (!range) return { start: undefined, end: undefined };
    return {
      start: range[0].startOf("day").toISOString(),
      end: range[1].endOf("day").toISOString(),
    };
  }, [range]);

  // Load metrics
  useEffect(() => {
    (async () => {
      const response = await getSragMetrics({ region, period });
      setMetrics(response);
    })();
  }, [region, period]);

  // Load chart
  useEffect(() => {
    (async () => {
      const response = await getSragChartData({
        period: periodKind,
        region,
        startDate: rangeISO.start,
        endDate: rangeISO.end,
        groupBy,
      });
      setChartData(
        response.map((d) => ({
          ...d,
          date: typeof d.date === "string" ? d.date : (d.date as Date),
        }))
      );
    })();
  }, [periodKind, region, rangeISO.start, rangeISO.end, groupBy]);

  // Table filters are controlled inside table; keep region/date in sync
  useEffect(() => {
    setTableFilters((prev) => ({
      ...prev,
      sgUf: groupBy === "state" ? region : undefined,
      coMunRes: groupBy === "city" ? region : undefined,
      startDate: rangeISO.start,
      endDate: rangeISO.end,
    }));
  }, [region, rangeISO.start, rangeISO.end, groupBy]);

  return (
    <Space direction="vertical" size="large" style={{ width: "100%" }}>
      <Title level={3}>Dashboard SRAG</Title>

      <Card>
        <Row gutter={[12, 12]} align="middle">
          <Col xs={24} md={8}>
            <Space direction="vertical" style={{ width: "100%" }}>
              <label>Período (YYYY-MM)</label>
              <Select
                value={period}
                onChange={(val) => setPeriod(val)}
                placeholder="Ex.: 2024-01"
                options={Array.from({ length: 24 }).map((_, i) => {
                  const d = dayjs().subtract(i, "month");
                  const v = d.format("YYYY-MM");
                  return { label: v, value: v };
                })}
              />
            </Space>
          </Col>
          <Col xs={24} md={8}>
            <Space direction="vertical" style={{ width: "100%" }}>
              <label>Região (UF ou Município)</label>
              <Select
                allowClear
                value={region}
                onChange={(val) => setRegion(val)}
                placeholder="Ex.: SP ou 3550308"
                options={[]}
              />
            </Space>
          </Col>
          <Col xs={24} md={8}>
            <Space direction="vertical" style={{ width: "100%" }}>
              <label>Janela para o gráfico</label>
              <RangePicker
                onChange={(vals) => setRange(vals as [Dayjs, Dayjs] | null)}
              />
            </Space>
          </Col>
          <Col xs={24} md={8}>
            <Space direction="vertical" style={{ width: "100%" }}>
              <label>Agregação temporal</label>
              <Select
                value={periodKind}
                onChange={(val) => setPeriodKind(val)}
                options={[
                  { label: "Diário", value: "daily" },
                  { label: "Mensal", value: "monthly" },
                  { label: "Anual", value: "yearly" },
                ]}
              />
            </Space>
          </Col>
          <Col xs={24} md={8}>
            <Space direction="vertical" style={{ width: "100%" }}>
              <label>Agrupar por</label>
              <Select
                value={groupBy}
                onChange={(val) => setGroupBy(val)}
                options={[
                  { label: "Estado", value: "state" },
                  { label: "Cidade", value: "city" },
                ]}
              />
            </Space>
          </Col>
        </Row>
      </Card>

      <MetricsCards metrics={metrics || undefined} />

      <SragChart data={chartData} />

      <SragTable filters={tableFilters} onChangeFilters={setTableFilters} />
    </Space>
  );
}

export default Dashboard;
