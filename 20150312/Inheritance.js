//exercise01a
//define a Door constructor function. 
//A door instance exposes the two methods open and close that 
//chage the values of a state property respectively to open and closed.

function Door () {
	this.state="open";
};

Door.prototype.open= function () {
	if (this.state!=="lock")
		this.state="open";
};

Door.prototype.closed= function () {
	this.state="closed";
};

//exercise01b
//define a SecurityDoor constructor function that inherits the 
//bhehaviour from Door but once closed a security_door instance 
//can be locked via the lock method. Invoking the unlock method, 
//bring the security_door back to the close state.

function SecurityDoor (){
	Door.call(this);
};

SecurityDoor.prototype.lock = function () {
	if (this.state==="closed")
		this.state="lock";
};

SecurityDoor.prototype.unlock = function () {
	if (this.state==="lock")
		this.state="closed";
};

SecurityDoor.prototype = Object.create(Door.prototype);
SecurityDoor.prototype.constructor = SecurityDoor;