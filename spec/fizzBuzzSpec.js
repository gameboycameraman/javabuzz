describe('Javabuzz', function() {
  var javabuzz;
  beforeEach(function() {
    javabuzz = new Javabuzz();
  });

  describe('Know when a number is', function() {

    it('divisible by 3', function() {
      expect(javabuzz.isDivisibleByThree(3)).toBe(true);

    });
  });

  describe('Knows when a number is NOT', function() {

    it('divisible by 3', function() {
      expect(javabuzz.isDivisibleByThree(1)).toBe(false);

    });
  });

  describe('Know when a number is', function(){

    it('divisible by 5', function(){
      expect(javabuzz.isDivisibleByFive(5)).toBe(true);

    });
  });

  describe('Know when a number is NOT', function(){

    it('divisible by 5', function(){
      expect(javabuzz.isDivisibleByFive(6)).toBe(false);

    });
  });

  describe('Know when a number is', function(){

    it('divisible by 15', function(){
      expect(javabuzz.isDivisibleByFifteen(15)).toBe(true);

    });
  });

  describe('Know when a number is NOT', function(){

    it('divisible by 15', function(){
      expect(javabuzz.isDivisibleByFifteen(18)).toBe(false);

    });
  });

  describe('when playing, says', function(){

    it('"Java" when a number is divisible by 3', function(){
      expect(javabuzz.says(3)).toEqual("Java");

    });
  });
});
