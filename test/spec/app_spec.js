describe("the application", function() {
  it("will square a number", function() {
    expect(App.square(4)).toBe(16);
  });

  it('will cube a number',function(){
    expect(App.cube(4)).toBe(64);
  });

  it('will greet you like a good boy',function(){
    expect(App.greet('Jason')).toBe('Hello Jason');
    expect(App.greet()).toBe('Hello World');
  });
});

