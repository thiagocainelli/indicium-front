import { useState } from "react";
import { Button, DatePicker, Drawer, Select, Space, Typography } from "antd";
import dayjs, { Dayjs } from "dayjs";

const { Text } = Typography;
const { RangePicker } = DatePicker;

type FilterDrawerProps = {
  open: boolean;
  onClose: () => void;
  onApply: (filters: {
    region?: string;
    groupBy: "state" | "city";
    periodKind: "daily" | "monthly" | "yearly";
    period?: string;
    range: [Dayjs, Dayjs] | null;
  }) => void;
  initialFilters: {
    region?: string;
    groupBy: "state" | "city";
    periodKind: "daily" | "monthly" | "yearly";
    period?: string;
    range: [Dayjs, Dayjs] | null;
  };
};

const stateOptions = [
  { label: "Acre (AC)", value: "AC" },
  { label: "Alagoas (AL)", value: "AL" },
  { label: "Amapá (AP)", value: "AP" },
  { label: "Amazonas (AM)", value: "AM" },
  { label: "Bahia (BA)", value: "BA" },
  { label: "Ceará (CE)", value: "CE" },
  { label: "Distrito Federal (DF)", value: "DF" },
  { label: "Espírito Santo (ES)", value: "ES" },
  { label: "Goiás (GO)", value: "GO" },
  { label: "Maranhão (MA)", value: "MA" },
  { label: "Mato Grosso (MT)", value: "MT" },
  { label: "Mato Grosso do Sul (MS)", value: "MS" },
  { label: "Minas Gerais (MG)", value: "MG" },
  { label: "Pará (PA)", value: "PA" },
  { label: "Paraíba (PB)", value: "PB" },
  { label: "Paraná (PR)", value: "PR" },
  { label: "Pernambuco (PE)", value: "PE" },
  { label: "Piauí (PI)", value: "PI" },
  { label: "Rio de Janeiro (RJ)", value: "RJ" },
  { label: "Rio Grande do Norte (RN)", value: "RN" },
  { label: "Rio Grande do Sul (RS)", value: "RS" },
  { label: "Rondônia (RO)", value: "RO" },
  { label: "Roraima (RR)", value: "RR" },
  { label: "Santa Catarina (SC)", value: "SC" },
  { label: "São Paulo (SP)", value: "SP" },
  { label: "Sergipe (SE)", value: "SE" },
  { label: "Tocantins (TO)", value: "TO" },
];

export function FilterDrawer({
  open,
  onClose,
  onApply,
  initialFilters,
}: FilterDrawerProps) {
  const [region, setRegion] = useState<string | undefined>(
    initialFilters.region
  );
  const [groupBy, setGroupBy] = useState<"state" | "city">(
    initialFilters.groupBy
  );
  const [periodKind, setPeriodKind] = useState<"daily" | "monthly" | "yearly">(
    initialFilters.periodKind
  );
  const [period, setPeriod] = useState<string | undefined>(
    initialFilters.period
  );
  const [range, setRange] = useState<[Dayjs, Dayjs] | null>(
    initialFilters.range
  );

  const handleApply = () => {
    onApply({
      region,
      groupBy,
      periodKind,
      period,
      range,
    });
    onClose();
  };

  const handleReset = () => {
    setRegion(undefined);
    setGroupBy("state");
    setPeriodKind("monthly");
    setPeriod(dayjs().format("YYYY-MM"));
    setRange(null);
  };

  return (
    <Drawer
      title="Filtros do Dashboard"
      placement="right"
      onClose={onClose}
      open={open}
      width={400}
      footer={
        <Space style={{ width: "100%", justifyContent: "space-between" }}>
          <Button onClick={handleReset}>Limpar</Button>
          <Space>
            <Button onClick={onClose}>Cancelar</Button>
            <Button type="primary" onClick={handleApply}>
              Aplicar
            </Button>
          </Space>
        </Space>
      }
    >
      <Space direction="vertical" size="large" style={{ width: "100%" }}>
        <div>
          <Text>Período para Métricas</Text>
          <Select
            value={period}
            onChange={(val) => setPeriod(val)}
            placeholder="Ex.: 2024-01"
            style={{ width: "100%" }}
            options={Array.from({ length: 84 }).map((_, i) => {
              const d = dayjs().subtract(i, "month");
              const v = d.format("YYYY-MM");
              return { label: v, value: v };
            })}
          />
        </div>

        <div>
          <Text>Região</Text>
          <Select
            allowClear
            value={region}
            onChange={(val) => setRegion(val)}
            placeholder="Ex.: SP ou 3550308"
            style={{ width: "100%" }}
            options={stateOptions}
          />
        </div>

        <div>
          <Text>Janela para o Gráfico</Text>
          <RangePicker
            value={range}
            onChange={(vals) => setRange(vals as [Dayjs, Dayjs] | null)}
            style={{ width: "100%" }}
            placeholder={["Início", "Fim"]}
          />
        </div>

        <div>
          <Text>Agregação Temporal</Text>
          <Select
            value={periodKind}
            onChange={(val) => setPeriodKind(val)}
            style={{ width: "100%" }}
            options={[
              { label: "Diário", value: "daily" },
              { label: "Mensal", value: "monthly" },
              { label: "Anual", value: "yearly" },
            ]}
          />
        </div>

        <div>
          <Text>Agrupar por</Text>
          <Select
            value={groupBy}
            onChange={(val) => setGroupBy(val)}
            style={{ width: "100%" }}
            options={[
              { label: "Estado", value: "state" },
              { label: "Cidade", value: "city" },
            ]}
          />
        </div>
      </Space>
    </Drawer>
  );
}
