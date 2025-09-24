import { useEffect, useState } from "react";
import { Card, message, Spin, Table, Tag } from "antd";
import { getSragList } from "../../services/srag.service";

type SragTableProps = {
  filters: {
    page: number;
    itemsPerPage: number;
    sgUf?: string;
    coMunRes?: string;
    startDate?: string;
    endDate?: string;
    evolucao?: number;
    uti?: number;
    vacinaCov?: number;
  };
  onChangeFilters: (f: SragTableProps["filters"]) => void;
};

export function SragTable({ filters, onChangeFilters }: SragTableProps) {
  const [loading, setLoading] = useState<boolean>(false);
  const [data, setData] = useState<SragListItemDto[]>([]);
  const [total, setTotal] = useState<number>(0);

  const handleFetchData = async () => {
    try {
      setLoading(true);

      const response = await getSragList(filters);
      setData(response.data);
      setTotal(response.pagination.total);
    } catch (error) {
      message.error("Erro ao buscar dados da listagem.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    handleFetchData();
  }, [
    filters.page,
    filters.itemsPerPage,
    filters.sgUf,
    filters.coMunRes,
    filters.startDate,
    filters.endDate,
    filters.evolucao,
    filters.uti,
    filters.vacinaCov,
  ]);

  return (
    <Spin spinning={loading}>
      <Card className="themed-card ">
        <Table<SragListItemDto>
          rowKey={(r) => r.uuid}
          dataSource={data}
          pagination={{
            current: filters.page,
            pageSize: filters.itemsPerPage,
            total,
            onChange: (page, pageSize) =>
              onChangeFilters({
                ...filters,
                page,
                itemsPerPage: pageSize || filters.itemsPerPage,
              }),
            showSizeChanger: true,
          }}
          scroll={{ x: 1000 }}
          columns={[
            {
              title: "Data Sintoma",
              dataIndex: "dtSinPri",
              key: "dtSinPri",
              render: (v) => (v ? new Date(v).toLocaleDateString() : "-"),
            },
            { title: "UF", dataIndex: "sgUf", key: "sgUf" },
            { title: "Município", dataIndex: "coMunRes", key: "coMunRes" },
            { title: "Sexo", dataIndex: "csSexo", key: "csSexo" },
            {
              title: "Idade",
              dataIndex: "idadeNumerica",
              key: "idadeNumerica",
            },
            {
              title: "Evolução",
              dataIndex: "evolucao",
              key: "evolucao",
              render: (v) =>
                v === 2 ? (
                  <Tag color="red">Óbito</Tag>
                ) : v === 1 ? (
                  <Tag color="green">Cura</Tag>
                ) : v === 3 ? (
                  <Tag color="orange">Óbito outras causas</Tag>
                ) : v === 9 ? (
                  <Tag>Ignorado</Tag>
                ) : (
                  "-"
                ),
            },
            {
              title: "UTI",
              dataIndex: "uti",
              key: "uti",
              render: (v) =>
                v === 1 ? (
                  <Tag color="geekblue">Sim</Tag>
                ) : v === 2 ? (
                  <Tag>Não</Tag>
                ) : v === 9 ? (
                  <Tag>Ignorado</Tag>
                ) : (
                  "-"
                ),
            },
            {
              title: "Vacinação",
              dataIndex: "vacinaCov",
              key: "vacinaCov",
              render: (v) =>
                v === 1 ? (
                  <Tag color="green">Sim</Tag>
                ) : v === 2 ? (
                  <Tag>Não</Tag>
                ) : v === 9 ? (
                  <Tag>Ignorado</Tag>
                ) : (
                  "-"
                ),
            },
          ]}
        />
      </Card>
    </Spin>
  );
}
