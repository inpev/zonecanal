/**
 * Manejo centralizado de variables de entorno de la app web.
 * Lectura tipada, sin URLs hardcodeadas y con validación runtime
 * estricta sobre configuración pública.
 *
 * Nota: Next.js inyecta NEXT_PUBLIC_* en el cliente solo con acceso
 * estático (process.env.NEXT_PUBLIC_X), por eso se leen por propiedad.
 */

export type AppEnvironment = "development" | "test" | "staging" | "production";

export interface PublicEnvironment {
  environment: AppEnvironment;
  apiUrl: string;
}

const APP_ENVIRONMENT_VALUES: readonly string[] = [
  "development",
  "test",
  "staging",
  "production",
];

const API_URL_VARIABLE = "NEXT_PUBLIC_API_URL";
const ENVIRONMENT_VARIABLE = "NEXT_PUBLIC_APP_ENVIRONMENT";

class ConfigError extends Error {
  constructor(message: string) {
    super(`Configuración inválida: ${message}`);
    this.name = "ConfigError";
  }
}

function normalizeEnvironment(raw: string | undefined): AppEnvironment {
  if (!raw) {
    return "development";
  }
  if (APP_ENVIRONMENT_VALUES.includes(raw)) {
    return raw as AppEnvironment;
  }
  throw new ConfigError(
    `La variable ${ENVIRONMENT_VARIABLE} tiene un valor no permitido. ` +
      `Valores válidos: ${APP_ENVIRONMENT_VALUES.join(", ")}.`,
  );
}

function validateHttpUrl(raw: string | undefined, variable: string): string {
  if (!raw || raw.trim() === "") {
    throw new ConfigError(`La variable ${variable} es obligatoria.`);
  }

  let url: URL;
  try {
    url = new URL(raw);
  } catch {
    throw new ConfigError(`La variable ${variable} no es una URL válida.`);
  }

  if (url.protocol !== "http:" && url.protocol !== "https:") {
    throw new ConfigError(
      `La variable ${variable} debe usar el protocolo http o https.`,
    );
  }

  return url.toString();
}

export function getEnvironment(): PublicEnvironment {
  return {
    environment: normalizeEnvironment(process.env.NEXT_PUBLIC_APP_ENVIRONMENT),
    apiUrl: validateHttpUrl(process.env.NEXT_PUBLIC_API_URL, API_URL_VARIABLE),
  };
}
