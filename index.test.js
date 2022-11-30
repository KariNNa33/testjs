describe("POST /todos", () => {
	// 1
	it("should create a new todo", (done) => {
		let text = "Test todo text"; // 2
		done();
	});
});

describe("DELETE /todos", () => {
it('should return 404 for non-object ids', (done) => {
    request(server)
      .delete('/todos/1421')
      .expect(404)
      .end(done)
    });
}); 