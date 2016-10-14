### Work in progress

My idea is to ensure that promise rejections are made visible no matter what library or sublibrary is being used. Will try to add support and patches for all of them.

## Important

My purpose is not to run this package in production and it's not built for it. I just want to stop chasing swallowed errors throughout my codebase

And folks, remember to add those catches

|                         | Node.js | WebWorkers | Modern browsers
|-------------------------|---------|------------|----------------
| Bluebird                | ✓       | wip          | wip            
| Native                  | ✓       | wip        | wip             
| Q                       | ✓       | wip          | wip               
| Yaku                    | ✓       | wip          | wip               
| then/promise (>7.1.1)   | ✓       | wip          | wip               
| WhenJS                  | ✓       | wip         | wip             
| es6-promise             | wip       | wip          | wip               

| Symbol | Meaning                                      |
|--------|----------------------------------------------|
| ✓      | Implemented and supported.                   |
| ✗      | Not implemented - library does not support global rejection events in this environment. |
| wip    | Work is in progress |
