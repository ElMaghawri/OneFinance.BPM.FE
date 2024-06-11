import { RestService, Rest } from '@abp/ng.core';
import { Injectable } from '@angular/core';
import type { FaqDto } from '../dto/models';

@Injectable({
  providedIn: 'root',
})
export class LookupsService {
  apiName = 'Default';
  

  createFaq = (input: FaqDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, FaqDto>({
      method: 'POST',
      url: '/api/app/lookups/faq',
      body: input,
    },
    { apiName: this.apiName,...config });
  

  deleteFaq = (id: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, void>({
      method: 'DELETE',
      url: `/api/app/lookups/${id}/faq`,
    },
    { apiName: this.apiName,...config });
  

  getFaqList = (config?: Partial<Rest.Config>) =>
    this.restService.request<any, FaqDto[]>({
      method: 'GET',
      url: '/api/app/lookups/faq-list',
    },
    { apiName: this.apiName,...config });

  constructor(private restService: RestService) {}
}
