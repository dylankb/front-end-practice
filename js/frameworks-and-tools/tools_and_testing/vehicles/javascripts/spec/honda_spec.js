describe('Honda', function() {
  beforeEach(function() {
    this.honda = new Honda('CR-V');

  });

  it('inherits the Vehicle prototype', function() {
    expect(this.honda.toString()).toEqual('Honda CR-V');
  });

  it('throws an error if an invalid model is passed in', function() {
    function fake() { new Honda('Fake'); }
    expect(fake).toThrowError('Model Fake does not exist');
  });

  it('returns a list of valid models', function() {
    expect(Honda.getModels().length).toBeDefined();
    expect(Honda.getModels()).toContain('CR-V');
  });

  it('calls getPrice when a new car is created', function() {
    spyOn(Honda, 'getPrice');
    var crv = new Honda('CR-V');
    expect(Honda.getPrice).toHaveBeenCalled();
    expect(Honda.getPrice).toHaveBeenCalledWith('CR-V');
  });

  it('returns a price for the passed in model', function() {
    // debugger;
    // function CRVPrice() { return Honda.getPrice('CR-V'); }
    expect(Honda.getPrice('CR-V')).toBeGreaterThan(0);
  });

  it ('returns a price less than 15000 when a Civic is created', function() {
    expect(Honda.getPrice('Civic')).toBeLessThan(15000);
  });

  it ("returns a price greater than 10000 when a CR-Z is created", function() {
    expect(Honda.getPrice('CR-V')).toBeGreaterThan(10000);
  });
});
