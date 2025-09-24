import { apiRequest } from "../utils/apiRequest";

const BASE_URL = "/srag";

export async function getSragMetrics(params?: {
  region?: string;
  period?: string;
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
  startDate?: string;
  endDate?: string;
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
  startDate?: string;
  endDate?: string;
  evolucao?: number;
  uti?: number;
  vacinaCov?: number;
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
