import { apiRequest } from "../utils/apiRequest";

const BASE_URL = "/movies";

export async function createMovie(movie: CreateMovieDto) {
  return apiRequest<CreateMovieDto>("post", `${BASE_URL}/create`, movie);
}

export async function updateMovie(uuid: string, movie: UpdateMovieDto) {
  return apiRequest<UpdateMovieDto>(
    "put",
    `${BASE_URL}/update?uuid=${uuid}`,
    movie
  );
}

export async function getMovieByUuid(uuid: string) {
  return apiRequest<ReadMovieDto>(
    "get",
    `${BASE_URL}/view-by-uuid?uuid=${uuid}`
  );
}

export async function getMoviesListAndSearch(
  page: number,
  itemsPerPage: number,
  search?: string,
  situation?: MovieSituation,
  genre?: string,
  startDuration?: number,
  endDuration?: number
) {
  let apiQuery = "?";
  if (page) {
    apiQuery += `page=${page}`;
  }
  if (itemsPerPage) {
    apiQuery += `&itemsPerPage=${itemsPerPage}`;
  }
  if (search) {
    apiQuery += `&search=${search}`;
  }

  if (situation) {
    apiQuery += `&situation=${situation}`;
  }
  if (genre) {
    apiQuery += `&genre=${genre}`;
  }

  if (startDuration) {
    apiQuery += `&startDuration=${startDuration}`;
  }
  if (endDuration) {
    apiQuery += `&endDuration=${endDuration}`;
  }

  return apiRequest<ListMoviesDto>("get", `${BASE_URL}/list${apiQuery}`);
}

export async function deleteMovie(uuid: string) {
  return apiRequest<void>("delete", `${BASE_URL}/delete?uuid=${uuid}`);
}
