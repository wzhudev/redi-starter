import { IPlatformService } from 'src/services/platform.service'

export class PcPlatformService implements IPlatformService {
  getCurrentPlatform(): string {
    return 'pc'
  }
}
