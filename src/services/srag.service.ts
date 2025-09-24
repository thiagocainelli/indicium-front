import { apiRequest } from "../utils/apiRequest";

const BASE_URL = "/srag";

export async function getSragMetrics(params?: {
  region?: string;
  period?: string; // format: YYYY-MM
}) {
  const query: string[] = [];
  if (params?.region) query.push(`region=${encodeURIComponent(params.region)}`);
  if (params?.period) query.push(`period=${encodeURIComponent(params.period)}`);
  const qs = query.length ? `?${query.join("&")}` : "";

  return apiRequest<SragMetricsDto>("get", `${BASE_URL}/metrics${qs}`);
}

export async function getSragChartData(params: {
  period: "daily" | "monthly" | "yearly";
  region?: string;
  startDate?: string; // ISO date
  endDate?: string; // ISO date
  groupBy?: "state" | "city";
}) {
  const query: string[] = [];
  if (params.period) query.push(`period=${params.period}`);
  if (params.region) query.push(`region=${encodeURIComponent(params.region)}`);
  if (params.startDate)
    query.push(`startDate=${encodeURIComponent(params.startDate)}`);
  if (params.endDate)
    query.push(`endDate=${encodeURIComponent(params.endDate)}`);
  if (params.groupBy) query.push(`groupBy=${params.groupBy}`);
  const qs = query.length ? `?${query.join("&")}` : "";

  return apiRequest<SragChartDataDto[]>("get", `${BASE_URL}/chart${qs}`);
}

export async function getSragList(params?: {
  page?: number;
  itemsPerPage?: number;
  sgUf?: string;
  coMunRes?: string;
  startDate?: string; // ISO date
  endDate?: string; // ISO date
  evolucao?: number; // 1=Cura, 2=Óbito, 3=Óbito outras causas
  uti?: number; // 1=Sim, 2=Não, 9=Ignorado
  vacinaCov?: number; // 1=Sim, 2=Não, 9=Ignorado
}) {
  const query: string[] = [];
  if (params?.page !== undefined) query.push(`page=${params.page}`);
  if (params?.itemsPerPage !== undefined)
    query.push(`itemsPerPage=${params.itemsPerPage}`);
  if (params?.sgUf) query.push(`sgUf=${encodeURIComponent(params.sgUf)}`);
  if (params?.coMunRes)
    query.push(`coMunRes=${encodeURIComponent(params.coMunRes)}`);
  if (params?.startDate)
    query.push(`startDate=${encodeURIComponent(params.startDate)}`);
  if (params?.endDate)
    query.push(`endDate=${encodeURIComponent(params.endDate)}`);
  if (params?.evolucao !== undefined) query.push(`evolucao=${params.evolucao}`);
  if (params?.uti !== undefined) query.push(`uti=${params.uti}`);
  if (params?.vacinaCov !== undefined)
    query.push(`vacinaCov=${params.vacinaCov}`);
  const qs = query.length ? `?${query.join("&")}` : "";

  return apiRequest<SragListResponseDto>("get", `${BASE_URL}/list${qs}`);
}
