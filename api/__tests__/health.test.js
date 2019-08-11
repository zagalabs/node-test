describe('/health', () => {
  describe('GET /', () => {
    it('returns OK', async () => {
      await global.api.get('/health').expect(200, null);
    });
  });
});
