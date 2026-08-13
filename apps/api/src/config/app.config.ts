/**
 * Configuración de la aplicación NestJS.
 * Valores no sensibles, centralizados aquí.
 * Origen: variables de entorno con defaults locales.
 * La validación es estricta: ante un valor inválido se lanza un
 * error claro (sin datos sensibles) para fallar en el arranque.
 */

export interface AppConfig {
  name: string;
  port: number;
  corsOrigins: string[];
}

const DEFAULT_PORT = 4000;
const DEFAULT_CORS_ORIGINS = ["http://localhost:3000"];

const PORT_VARIABLE = "PORT";
const CORS_ORIGINS_VARIABLE = "CORS_ORIGINS";

class ConfigError extends Error {
  constructor(message: string) {
    super(`Configuración inválida: ${message}`);
    this.name = "ConfigError";
  }
}

function parsePort(raw: string | undefined): number {
  if (raw === undefined || raw.trim() === "") {
    return DEFAULT_PORT;
  }
  const value = Number(raw);
  if (!Number.isInteger(value) || value < 1 || value > 65535) {
    throw new ConfigError(
      `La variable ${PORT_VARIABLE} debe ser un entero entre 1 y 65535.`,
    );
  }
  return value;
}

function parseCorsOrigins(raw: string | undefined): string[] {
  if (raw === undefined || raw.trim() === "") {
    return [...DEFAULT_CORS_ORIGINS];
  }

  const seen = new Set<string>();
  const origins: string[] = [];

  for (const part of raw.split(",")) {
    const origin = part.trim();
    if (!origin) {
      continue;
    }

    let url: URL;
    try {
      url = new URL(origin);
    } catch {
      throw new ConfigError(
        `La variable ${CORS_ORIGINS_VARIABLE} contiene un origen inválido: "${origin}".`,
      );
    }

    if (url.protocol !== "http:" && url.protocol !== "https:") {
      throw new ConfigError(
        `La variable ${CORS_ORIGINS_VARIABLE} contiene un origen con protocolo no permitido: "${origin}".`,
      );
    }

    const normalized = url.origin;
    if (!seen.has(normalized)) {
      seen.add(normalized);
      origins.push(normalized);
    }
  }

  return origins.length > 0 ? origins : [...DEFAULT_CORS_ORIGINS];
}

export function getAppConfig(): AppConfig {
  return {
    name: "zonecanal-api",
    port: parsePort(process.env.PORT),
    corsOrigins: parseCorsOrigins(process.env.CORS_ORIGINS),
  };
}
