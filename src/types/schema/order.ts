import { z } from 'zod';

export const subCategoriesSchema = z.array(z.object({ id: z.string() })).default([{ id: '1' }]);
