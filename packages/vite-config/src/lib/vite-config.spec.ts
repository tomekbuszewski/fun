import { viteConfig } from './vite-config';

describe('viteConfig', () => {
  it('should work', () => {
    expect(viteConfig()).toEqual('vite-config');
  });
});
