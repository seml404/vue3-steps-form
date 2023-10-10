import type { Steps } from '@/types/index'

export namespace StepsMock {
  export const URL: string = 'https://jsonplaceholder.typicode.com/posts/'
  export const mock_code = 1234

  export const mock_terms: Steps.Term[] = [
    { type: 'currency', title: 'Сумма займа', value: 23000 },
    { type: 'currency', title: 'Сумма возврата', value: 25500 },
    { type: 'currency', title: 'Плата за заем', value: 300 },
    { type: 'rate', title: 'Ставка', value: 0.9 },
    { type: 'date', title: 'ПСК', value: '30.04.2020' }
  ]
}
