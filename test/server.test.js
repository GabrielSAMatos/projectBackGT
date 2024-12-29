test('Server test run', async () => {
    const response = await fetch('http://localhost:3000');
    expect(response.status).toBe(200);
});