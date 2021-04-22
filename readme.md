# ESM `delay`

This repository provides an implementation of a `delay` function compatible with
ESM.

## Installation & Usage

### Browser

```javascript
import delay from 'https://github.com/tomashubelbauer/esm-delay/index.js';

await delay(100);
```

### Node

**Prefer Node native asynchronous timers!**
[Node `timers/promisers`](https://nodejs.org/dist/v16.0.0/docs/api/timers.html#timers_timers_promises_api)

```bash
git submodule add https://github.com/tomashubelbauer/esm-delay vendor/esm-delay
```

```javascript
import delay from './vendor/esm-delay/index.js';

await delay(100);
```
