import { transaction } from 'service/prismaClient';

export const novelUseCase = {
  // スクレイピング
  scrape: (aozoraUrl: string): Promise<string> =>
    transaction('RepeatableRead', async (tx) => {
      return aozoraUrl;
    }),
};
