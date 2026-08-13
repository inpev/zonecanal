import { Controller, Get } from "@nestjs/common";
import type { HealthStatus } from "@zonecanal/contracts";

@Controller("health")
export class HealthController {
  @Get()
  getHealth(): HealthStatus {
    return { status: "ok", service: "zonecanal-api" };
  }
}