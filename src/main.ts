import { Provider, ProviderConfig } from './provider';
import { Loader } from './loader';
import { Runner } from './runner';

interface CommandLineArgs {
  workers: number;
}

async function main() {
  // Simulating command line args (you might want to use a package like 'yargs' for better CLI handling)
  const args: CommandLineArgs = {
    workers: process.env.WORKERS ? parseInt(process.env.WORKERS) : 4
  };

  const config: ProviderConfig = {
    url: 'http://localhost:7545',
    origin: 'http://localhost/'
  };

  const provider = new Provider(config);
  const loader = new Loader('pathToMyJson.json');
  
  const runner = new Runner(provider, loader);
  await runner.start(args.workers);

  console.log('Success:', runner.successCount);
  console.log('Failure:', runner.failureCount);

  // Delegate result to UI package
}

// Execute main and handle any errors
main().catch(error => {
  console.error('Error:', error);
  process.exit(1);
}); 