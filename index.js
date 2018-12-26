function produceDrivingRange(blockRange) {
	return function(a, b) {
		let x = Math.abs(parseInt(a.slice(0,-2), 10) - parseInt(b.slice(0,-2),10))
		if (x <= blockRange) {
			return `within range by ` + (blockRange - x)
		}
		else {
			return (x - blockRange) + ` blocks out of range`
		}
	}
} 


function produceTipCalculator(percent) {
	return function(fare) {
		return percent * fare;
	}
}

function createDriver() {
	let driverId = 0
	return class Driver {
		constructor(name) {
			this.id = ++driverId
			this.name = name
		}
	}
}
