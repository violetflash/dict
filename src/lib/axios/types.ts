// Базовый тип для ответа API
export interface ApiResponse<T = unknown> {
  data: T;
  message?: string;
  status: number;
}

// Тип для ошибки API
export interface ApiError {
  message: string;
  status: number;
  errors?: Record<string, string[]>;
}

// Тип для ответа с пагинацией
export interface PaginatedResponse<T> extends ApiResponse {
  data: {
    items: T[];
    total: number;
    page: number;
    limit: number;
  };
}

// Тип для ответа с токеном
export interface AuthResponse extends ApiResponse {
  data: {
    token: string;
    user: {
      id: number;
      email: string;
      name: string;
    };
  };
}
