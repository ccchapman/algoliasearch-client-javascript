// This file is generated, manual changes will be lost - read more on https://github.com/algolia/api-clients-automation.

import type { ClientOptions } from '@algolia/client-common';
import {
  DEFAULT_CONNECT_TIMEOUT_NODE,
  DEFAULT_READ_TIMEOUT_NODE,
  DEFAULT_WRITE_TIMEOUT_NODE,
  createMemoryCache,
  createNullCache,
} from '@algolia/client-common';
import { createHttpRequester } from '@algolia/requester-node-http';

import { createSearchClient } from '../src/searchClient';
import type { SearchClient } from '../src/searchClient';

export { apiClientVersion, SearchClient } from '../src/searchClient';
export * from '../model';

export function searchClient(
  appId: string,
  apiKey: string,
  options?: ClientOptions
): SearchClient {
  if (!appId || typeof appId !== 'string') {
    throw new Error('`appId` is missing.');
  }

  if (!apiKey || typeof apiKey !== 'string') {
    throw new Error('`apiKey` is missing.');
  }

  return createSearchClient({
    appId,
    apiKey,
    timeouts: {
      connect: DEFAULT_CONNECT_TIMEOUT_NODE,
      read: DEFAULT_READ_TIMEOUT_NODE,
      write: DEFAULT_WRITE_TIMEOUT_NODE,
    },
    requester: createHttpRequester(),
    algoliaAgents: [{ segment: 'Node.js', version: process.versions.node }],
    responsesCache: createNullCache(),
    requestsCache: createNullCache(),
    hostsCache: createMemoryCache(),
    ...options,
  });
}
