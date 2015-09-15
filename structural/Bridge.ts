class WidgetFactory {

	private impl

	setFactory(implementation) {
		this.impl = implementation
	}

	makeShape() {
		return this.impl.makeShape()
	}

	makePicture() {
		return this.impl.makePicture()
	}

}

class WidgetCanvasFactory {

	makeShape() {
		return new CanvasShapeWidget()
	}

	makePicture() {
		return new CanvasPictureWidget()
	}

}

class WidgetHtmlFactory {

	makeShape() {
		return new HtmlShapeWidget()
	}

	makePicture() {
		return new HtmlPictureWidget()
	}

}

//abstract

class Widget {

	protected position

	getName() {
		return  (<any>this.constructor).name
	}

	draw() {
		throw new Error("draw need to be overridden")
	}

	size() {
		throw new Error("draw need to be overridden")
	}

}

class ShapeWidget extends Widget {

	protected radius:number

}

class PictureWidget extends Widget {

	protected src:string

}

//impl canvas

class CanvasShapeWidget extends ShapeWidget {

	draw() {
		return 'draw canvas shape'
	}

}

class CanvasPictureWidget extends PictureWidget {

	draw() {
		return 'draw canvas picture'
	}

}

//impl html

class HtmlShapeWidget extends ShapeWidget {

	draw() {
		return 'draw html shape'
	}

}

class HtmlPictureWidget extends PictureWidget {

	draw() {
		return 'draw html picture'
	}

}

var picture, shape
var factory = new WidgetFactory()
factory.setFactory(new WidgetHtmlFactory())

picture = factory.makePicture()
shape = factory.makeShape()

console.log('picture', picture.getName(), picture.draw())
console.log('shape', shape.getName(), shape.draw())

//===

factory.setFactory(new WidgetCanvasFactory())

picture = factory.makePicture()
shape = factory.makeShape()

console.log('picture', picture.getName(), picture.draw())
console.log('shape', shape.getName(), shape.draw())