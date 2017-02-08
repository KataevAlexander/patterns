// class Widget {
//
// 	protected position
//
// 	constructor(position) {
// 		this.position = position
// 	}
//
// 	draw() {
// 		throw new Error("draw need to be overridden")
// 	}
//
// }
//
// class LineWidget extends Widget {
//
// 	private start:any
// 	private end:any
//
// 	constructor(start, end) {
// 		this.start = start
// 		this.end = end
// 	}
//
// 	draw() {
// 		console.log(`draw line from {${this.start.x}, ${this.start.y}} to {${this.end.x}, ${this.end.y}}`)
// 	}
//
// }
//
// class PictureWidget extends Widget {
//
// 	private src:string
// 	private border:any
//
// 	constructor(src, border = false) {
// 		this.src = src
//
// 		if (border) {
// 			this.border = {
// 				top: new LineWidget({x: 0, y: 0}, {x: 100, y: 0}),
// 				right: new LineWidget({x: 100, y: 0}, {x: 100, y: 100}),
// 				bottom: new LineWidget({x: 100, y: 100}, {x: 0, y: 100}),
// 				left: new LineWidget({x: 0, y: 100}, {x: 0, y: 0})
// 			}
// 		}
// 	}
//
// 	draw() {
// 		console.log('draw picture with source "' + this.src + '"')
//
// 		if (this.border) {
// 			for (var i in this.border) {
// 				this.border[i].draw()
// 			}
// 		}
// 	}
//
// }
//
// var line = new LineWidget({x: 50, y: 50}, {x: 125, y: 80})
// var picture = new PictureWidget('source without border')
// var border = new PictureWidget('source with border', true)
//
// line.draw()
// picture.draw()
// border.draw()