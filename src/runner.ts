import { Provider } from './provider';
import { Loader } from './loader';

export class Runner {
  public successCount: number = 0;
  public failureCount: number = 0;

  constructor(
    private provider: Provider,
    private loader: Loader
  ) {}

  async start(workers: number): Promise<void> {
    // Implement runner logic here
  }
} 