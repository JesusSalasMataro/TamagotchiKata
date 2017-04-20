function Tamagotchi(timeSystem) {
	this.hungriness = 100;
	this.fullness = 100;
	this.happiness = 100;
	this.tiredness = 100;
	this.timeSystem = timeSystem;

	this.feed = function() {
		this.hungriness--;
		this.fullness++;
	};

	this.play = function() {
		this.happiness++;
		this.tiredness--;
	};

	this.update = function() {
		if (timeSystem.timeHasPassed()) {
			this.tiredness++;
			this.hungriness++;
			this.happiness--;			
		}
	};
};
 
