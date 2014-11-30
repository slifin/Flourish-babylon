function Camera2D(FreeCamera){
	FreeCamera.attachControl = function(element, noPreventDefault){
		var _this = this;
		var previousPosition;
		var engine = this.getEngine();
		if (this._attachedElement) {
			return;
		}
		this._attachedElement = element;
		if (this._onMouseDown === undefined) {
			this._onMouseDown = function (evt) {
				previousPosition = {
					x: evt.clientX,
					y: evt.clientY
				};
				if (!noPreventDefault) {
					evt.preventDefault();
				}
			};
			this._onMouseUp = function (evt) {
				previousPosition = null;
				if (!noPreventDefault) {
					evt.preventDefault();
				}
			};
			this._onMouseOut = function (evt) {
				previousPosition = null;
				_this._keys = [];
				if (!noPreventDefault) {
					evt.preventDefault();
				}
			};
			this._onMouseMove = function (evt) {
				if (!previousPosition && !engine.isPointerLock) {
					return;
				}
				var offsetX;
				var offsetY;
				if (!engine.isPointerLock) {
					offsetX = evt.clientX - previousPosition.x;
					offsetY = evt.clientY - previousPosition.y;
				} else {
					offsetX = evt.movementX || evt.mozMovementX || evt.webkitMovementX || evt.msMovementX || 0;
					offsetY = evt.movementY || evt.mozMovementY || evt.webkitMovementY || evt.msMovementY || 0;
				}
				offsetY = offsetY - (offsetY * 2);
				_this.position.y += offsetY / _this.angularSensibility;
				_this.position.x += offsetX / _this.angularSensibility;
				previousPosition = {
					x: evt.clientX,
					y: evt.clientY
				};
				if (!noPreventDefault) {
					evt.preventDefault();
				}
			};
			this._onKeyDown = function (evt) {
				if (_this.keysUp.indexOf(evt.keyCode) !== -1 || _this.keysDown.indexOf(evt.keyCode) !== -1 || _this.keysLeft.indexOf(evt.keyCode) !== -1 || _this.keysRight.indexOf(evt.keyCode) !== -1) {
					var index = _this._keys.indexOf(evt.keyCode);
					if (index === -1) {
						_this._keys.push(evt.keyCode);
					}
					if (!noPreventDefault) {
						evt.preventDefault();
					}
				}
			};
			this._onKeyUp = function (evt) {
				if (_this.keysUp.indexOf(evt.keyCode) !== -1 || _this.keysDown.indexOf(evt.keyCode) !== -1 || _this.keysLeft.indexOf(evt.keyCode) !== -1 || _this.keysRight.indexOf(evt.keyCode) !== -1) {
					var index = _this._keys.indexOf(evt.keyCode);
					if (index >= 0) {
						_this._keys.splice(index, 1);
					}
					if (!noPreventDefault) {
						evt.preventDefault();
					}
				}
			};
			this._onLostFocus = function () {
				_this._keys = [];
			};
			this._reset = function () {
				_this._keys = [];
				previousPosition = null;
				_this.cameraDirection = new BABYLON.Vector3(0, 0, 0);
				_this.cameraRotation = new BABYLON.Vector2(0, 0);
			};
		}
		element.addEventListener("mousedown", this._onMouseDown, false);
		element.addEventListener("mouseup", this._onMouseUp, false);
		element.addEventListener("mouseout", this._onMouseOut, false);
		element.addEventListener("mousemove", this._onMouseMove, false);
		BABYLON.Tools.RegisterTopRootEvents([
			{ name: "keydown", handler: this._onKeyDown },
			{ name: "keyup", handler: this._onKeyUp },
			{ name: "blur", handler: this._onLostFocus }
			]);
	};
	return FreeCamera;
}