// DTO types for SRAG module - use type (no export) and Dto suffix

type SragMetricsDto = {
  caseIncreaseRate: number;
  mortalityRate: number;
  icuOccupancyRate: number;
  vaccinationRate: number;
  period: string;
  region: string;
};

type SragChartDataDto = {
  date: string | Date;
  cases: number;
  deaths: number;
  icuOccupancy: number;
  vaccinations: number;
  region: string;
};

type SragListItemDto = {
  uuid: string;
  nuNotific: string | null;
  dtNotific: string | Date | null;
  dtSinPri: string | Date | null;
  sgUf: string | null;
  coMunRes: string | null;
  csSexo: string | null;
  idadeNumerica: number | null;
  evolucao: number | null;
  uti: number | null;
  dtEntUti: string | Date | null;
  dtSaiUti: string | Date | null;
  vacinaCov: number | null;
  dose1Cov: string | Date | null;
  dose2Cov: string | Date | null;
  doseRef: string | Date | null;
  createdAt: string | Date;
};

type SragListResponseDto = {
  data: SragListItemDto[];
  pagination: {
    page: number;
    itemsPerPage: number;
    total: number;
    totalPages: number;
    hasNext: boolean;
    hasPrev: boolean;
  };
};
