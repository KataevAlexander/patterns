// class Decorator {
//
// 	protected widget:Widget
//
// 	constructor(widget:Widget) {
// 		this.widget = widget
// 	}
//
// 	draw() {
//
// 	}
//
// }
//
// class BorderDecorator extends Decorator {
//
// 	draw() {
// 		var widget = this.widget
// 		var start = widget.position
// 		var end = {x: start.x + widget.width, y: start.y + widget.height}
//
// 		console.log(`draw border from {${start.x}, ${start.y}} to {${end.x}, ${end.y}}`)
// 	}
//
// }
//
// class BlurDecorator extends Decorator {
//
// 	draw() {
// 		var widget = this.widget
// 		var start = widget.position
// 		var end = {x: start.x + widget.width, y: start.y + widget.height}
//
// 		console.log(`draw blur filter {${start.x}, ${start.y}} to {${end.x}, ${end.y}}`)
// 	}
//
// }
//
// class Widget {
//
// 	protected decorators:Decorator[] = []
//
// 	width:number
// 	height:number
// 	position:{x:number, y:number}
//
// 	constructor(position, width, height) {
// 		this.position = position
// 		this.width = width
// 		this.height = height
// 	}
//
// 	addDecorator(decorator:Decorator) {
// 		this.decorators.push(decorator)
// 	}
//
// 	draw() {
// 		console.log('draw picture')
//
// 		this.decorators.forEach((decorator) => decorator.draw())
// 	}
//
// }
//
// var widget = new Widget({x: 100, y: 100}, 200, 150)
//
// widget.addDecorator(new BorderDecorator(widget))
// widget.addDecorator(new BlurDecorator(widget))
//
// widget.draw()