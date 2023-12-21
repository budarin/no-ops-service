# no-ops-service

A universal service where any called methods perform noop.

It is convenient as a stub for services during testing or for stub services that are not needed in any environment.

## Installation

```bash
yarn add @budarin/no-ops-service
```

## Usage

```ts
import { logger } from 'some-logger';
import { noOpsService } from '@budarin/no-ops-service';

const logger = __TEST__ ? noOpsService : logger;

logger.log('hello'); // do nothing in test env and log in else
```

## License

MIT
