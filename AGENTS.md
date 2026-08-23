# AGENTS.md — ZoneCanal

Reglas globales para agentes que trabajen en este repositorio.

## Contexto

- Monorepo pnpm workspaces + Turborepo.
- Apps: `apps/web` (Next.js + TypeScript), `apps/api` (NestJS + TypeScript), `apps/mobile` (React Native + TypeScript).
- Paquetes compartidos en `packages/*` (`contracts`, `schemas`, `types`, `config`, `security`, `observability`).
- Web y Mobile consumen el mismo backend NestJS (`apps/api`).

## Reglas de arquitectura

- Mantener el flujo frontend unidireccional: Page → Components → Hooks → Services → API → Backend.
- No colocar URLs de API en componentes: la comunicación con APIs vive en `services` / `shared/api`.
- No poner lógica de negocio en páginas: las páginas deben ser delgadas.
- Usar `features/` y `modules/` por dominio; nunca arquitectura plana.
- Mantener tipado estricto (TypeScript strict).
- No usar `eslint-disable` salvo caso absolutamente excepcional y documentado.
- No usar `any` salvo caso absolutamente excepcional y documentado.
- El backend es la autoridad de las reglas de negocio.
- Server State y Client State deben estar separados.
- Feature Flags para funcionalidades progresivas.
- Mensajes globales administrables desde backend.
- Seguridad, validaciones y auditoría desde el principio.
- No duplicar contratos entre frontend, backend y mobile: usar `packages/contracts`, `packages/schemas`, `packages/types`.
- Mantener bajo acoplamiento y alta cohesión.
- Preferir composición sobre duplicación.
- No crear abstracciones innecesarias.
- Crear nuevos dominios únicamente cuando tengan responsabilidad real.
- Mobile First.

## Reglas de UI

- Design Tokens y variables globales son la única fuente de verdad para colores, temas, tipografías, tamaños de texto, spacing, radius, sombras, motion y demás valores visuales reutilizables (`apps/web/src/styles/tokens`).
- No hardcodear valores visuales reutilizables dentro de componentes.
- La arquitectura visual debe permitir cambiar temas, identidad temporal, festividades o campañas comerciales globalmente sin modificar los componentes.
- Centralizar textos reutilizables de interfaz cuando corresponda y mantener la estructura preparada para futura internacionalización.
- Componentes pequeños, cohesivos y reutilizables; hooks encapsulan comportamiento reutilizable; services encapsulan la comunicación con APIs.
- Accesibilidad como requisito en toda la interfaz.

## Workspace

- El workspace principal vive en la raíz (`pnpm-workspace.yaml`).
- No crear `pnpm-workspace.yaml` ni `pnpm-lock.yaml` duplicados dentro de apps/packages.
- No instalar dependencias innecesarias.
- No eliminar archivos existentes válidos sin justificarlo.

## Configuración de entorno y validación runtime

- La configuración de entorno se valida en runtime de forma centralizada por app (no en `packages/config`, que queda como placeholder):
  - Web: `apps/web/src/config/environment.config.ts` (`getEnvironment()`). `NEXT_PUBLIC_API_URL` es obligatoria y debe ser URL http(s); `NEXT_PUBLIC_APP_ENVIRONMENT` acepta `development | test | staging | production`.
  - API: `apps/api/src/config/app.config.ts` (`getAppConfig()`). `PORT` entero 1–65535; `CORS_ORIGINS` CSV de URLs http(s) normalizadas con trim/dedupe.
- Config inválida lanza `ConfigError` con mensaje claro (nombre de variable y motivo), sin valores sensibles ni stack traces.
- En la API, el arranque envuelve el bootstrap con catch: `console.error` + `process.exit(1)` (ver `apps/api/src/main.ts`).
- Las variables `NEXT_PUBLIC_*` de Next.js solo se inyectan al bundle cliente con acceso estático (`process.env.NEXT_PUBLIC_X`), nunca con acceso dinámico por índice.
- `.env.example` documenta requeridas/opcionales/formato; los `.env*` están gitignored (con `!.env.example`).
- Contratos compartidos entre frontend/backend/mobile viven en `packages/contracts` (tipo-only, exportado desde source, imports internos con extensión `.js`).

## Herramientas

- Gestor de paquetes: pnpm.
- Orquestador de tareas: Turborepo.

## Verificación live (Windows / PowerShell 5.1)

- `Start-Process` no soporta `-Environment`: exportar con `$env:VARIABLE` antes de lanzar; usar `node.exe` con ruta completa (`C:\Program Files\nodejs\node.exe`), nunca `node.cmd`.
- Verificar HTTP con `Get-NetTCPConnection -State Listen -LocalPort <puerto>` en lugar de `Invoke-WebRequest` (más rápido y evita reintentos).
- Web prod: `node apps\web\node_modules\next\dist\bin\next start -p 3000` (el binario `next` no está en PATH).
- Verificación de UI: `"C:\Program Files\Google\Chrome\Application\chrome.exe" --headless=new --disable-gpu --no-sandbox --virtual-time-budget=8000 --user-data-dir=<tmp> --dump-dom http://localhost:3000`.
- Puertos de uso común: web 3000, API 4000; limpiar procesos node de `zonecanal` al terminar.
