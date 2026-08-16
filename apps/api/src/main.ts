import "reflect-metadata";
import { existsSync } from "node:fs";
import { loadEnvFile } from "node:process";
import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { getAppConfig } from "./config";

if (existsSync(".env")) {
  loadEnvFile(".env");
}

async function bootstrap(): Promise<void> {
  const config = getAppConfig();
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    origin: config.corsOrigins,
    methods: ["GET", "HEAD", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
  });

  await app.listen(config.port);
}

bootstrap().catch((error: unknown) => {
  const message =
    error instanceof Error
      ? error.message
      : "Error desconocido al iniciar la API.";
  console.error(`[zonecanal-api] Error al iniciar: ${message}`);
  process.exit(1);
});