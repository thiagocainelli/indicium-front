import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Button, message, Typography } from "antd";
import { FilterOutlined, DashboardOutlined } from "@ant-design/icons";
import dayjs, { Dayjs } from "dayjs";
import { getSragChartData, getSragMetrics } from "../../services/srag.service";
import { MetricsCards } from "../../components/Srag/MetricsCards.tsx";
import { SragChart } from "../../components/Srag/SragChart.tsx";
import { SragTable } from "../../components/Srag/SragTable.tsx";
import { FilterDrawer } from "../../components/Srag/FilterDrawer.tsx";
import LayoutBase from "../../layout";

const { Title } = Typography;

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
  const [drawerOpen, setDrawerOpen] = useState<boolean>(false);

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

  const handleFetchMetrics = async () => {
    try {
      const response = await getSragMetrics({ region, period });
      setMetrics(response);
    } catch (error) {
      message.error("Erro ao buscar métricas.");
    }
  };

  const handleFetchChartData = async () => {
    try {
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
    } catch (error) {
      message.error("Erro ao buscar dados do gráfico.");
    }
  };

  const handleApplyFilters = (filters: {
    region?: string;
    groupBy: "state" | "city";
    periodKind: "daily" | "monthly" | "yearly";
    period?: string;
    range: [Dayjs, Dayjs] | null;
  }) => {
    setRegion(filters.region);
    setGroupBy(filters.groupBy);
    setPeriodKind(filters.periodKind);
    setPeriod(filters.period);
    setRange(filters.range);
  };

  const currentFilters = {
    region,
    groupBy,
    periodKind,
    period,
    range,
  };

  useEffect(() => {
    handleFetchMetrics();
  }, [region, period]);

  useEffect(() => {
    handleFetchChartData();
  }, [periodKind, region, rangeISO.start, rangeISO.end, groupBy]);

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
    <LayoutBase>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="space-y-8"
      >
        {/* Header */}
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.1, duration: 0.5 }}
          className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4"
        >
          <div className="flex items-center space-x-3">
            <div className="flex items-center justify-center min-w-10 h-10 bg-gradient-to-br from-teal-500 to-blue-600 rounded-xl shadow-lg">
              <DashboardOutlined className="text-white text-lg" />
            </div>
            <div>
              <Title
                level={2}
                className="!text-3xl !font-bold !mb-0 bg-gradient-to-r from-teal-600 to-blue-600 bg-clip-text text-transparent"
              >
                Dashboard SRAG
              </Title>
              <p className="text-gray-600 text-sm">
                Monitoramento de Síndrome Respiratória Aguda Grave
              </p>
            </div>
          </div>
          <Button
            type="primary"
            icon={<FilterOutlined />}
            onClick={() => setDrawerOpen(true)}
            className="shadow-lg w-full md:w-auto"
            size="large"
          >
            Filtros
          </Button>
        </motion.div>

        {/* Metrics Cards */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <MetricsCards metrics={metrics || undefined} />
        </motion.div>

        {/* Chart */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <SragChart data={chartData} />
        </motion.div>

        {/* Table */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          <div className="w-full overflow-x-auto">
            <SragTable
              filters={tableFilters}
              onChangeFilters={setTableFilters}
            />
          </div>
        </motion.div>

        {/* Filter Drawer */}
        <FilterDrawer
          open={drawerOpen}
          onClose={() => setDrawerOpen(false)}
          onApply={handleApplyFilters}
          initialFilters={currentFilters}
        />
      </motion.div>
    </LayoutBase>
  );
}

export default Dashboard;
