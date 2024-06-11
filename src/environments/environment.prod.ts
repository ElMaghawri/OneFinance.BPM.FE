import { Environment } from '@abp/ng.core';

const baseUrl = 'https://one-finance-bpm-fe.vercel.app';

export const environment = {
  production: true,
  application: {
    baseUrl,
    name: 'BPM',
    logoUrl: '',
  },
  oAuthConfig: {
    issuer: 'https://localhost:44351/',
    redirectUri: baseUrl,
    clientId: 'BPM_App',
    responseType: 'code',
    scope: 'offline_access BPM',
    requireHttps: true
  },
  apis: {
    default: {
      url: 'https://localhost:44351',
      rootNamespace: 'One.BPM',
    },
  },
} as Environment;
