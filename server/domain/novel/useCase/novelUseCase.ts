import { transaction } from 'service/prismaClient';
import { aO } from 'vitest/dist/reporters-yx5ZTtEV';

export const novelUseCase = {
  // スクレイピング
  scrape: (aozoraUrl: string): Promise<string> =>
    transaction('RepeatableRead', async (tx) => {
      return aozoraUrl;
    }),
};
