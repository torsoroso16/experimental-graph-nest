import { plainToInstance } from 'class-transformer';

export function loadJsonAsInstances<T>(cls: new () => T, data: unknown): T[] {
  return plainToInstance(cls, (data ?? []) as object[]);
}
