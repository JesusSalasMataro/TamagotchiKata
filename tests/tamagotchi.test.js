describe("feed", function() {
    var tamagotchi;
    var timeSystem;

    beforeEach(function(){
        timeSystem = jasmine.createSpyObj('timeSystem', ['timeHasPassed']);
        timeSystem.timeHasPassed.and.callFake(function() {
            return true;
        });
        
        tamagotchi = new Tamagotchi(timeSystem);
    });
 
    it("feed should decrease Tamagotchi hungriness", function() {
        tamagotchi.hungriness = 100;
        tamagotchi.feed();
        expect(tamagotchi.hungriness).toBe(99);
    });
 
    it("feed should increase Tamagotchi fullness", function() {
        tamagotchi.fullness = 100;
        tamagotchi.feed();
        expect(tamagotchi.fullness).toBe(101);
    });

    it("play should increase Tamagotchi happiness", function() {
        tamagotchi.happiness = 100;
        tamagotchi.play();
        expect(tamagotchi.happiness).toBe(101);
    });
 
    it("feed should decrease Tamagotchi tiredness", function() {
        tamagotchi.tiredness = 100;
        tamagotchi.play();
        expect(tamagotchi.tiredness).toBe(99);
    });  

    it("update should increase Tamagotchi tiredness if time has passed", function() {
        tamagotchi.tiredness = 100;
        tamagotchi.update();
        expect(tamagotchi.tiredness).toBe(101); 
    });

    it("update should increase Tamagotchi hungriness if time has passed", function() {
        tamagotchi.hungriness = 100;
        tamagotchi.update();
        expect(tamagotchi.hungriness).toBe(101);
    });
 
    it("update should decrease Tamagotchi happiness if time has passed", function() {
        tamagotchi.happiness = 100;
        tamagotchi.update();
        expect(tamagotchi.happiness).toBe(99);
    });

});