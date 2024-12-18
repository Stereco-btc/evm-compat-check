export interface ProviderConfig {
  url: string;
  origin: string;
}

export class Provider {
  constructor(private config: ProviderConfig) {}
  
  // Add provider methods here
} 