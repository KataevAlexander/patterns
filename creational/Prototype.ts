enum ApplicationType {
	CANVAS, HTML
}

class Application {

	private static _shape
	private static _picture

	static setType(type:ApplicationType) {
		switch (type) {
			case ApplicationType.CANVAS:
				this._shape = new CanvasShape()
				this._picture = new CanvasPicture()
				break

			case ApplicationType.HTML:
				this._shape = new HtmlShape()
				this._picture = new HtmlPicture()
				break
		}
	}

	static makeShape() {
		return this._shape.clone()
	}

	static makePicture() {
		return this._picture.clone()
	}

}

class Widget {

	clone() {
		console.log('clone completed', (<any>this.constructor).name)
	}

}

class CanvasShape extends Widget {

}

class HtmlShape extends Widget  {

}

class CanvasPicture extends Widget  {

}

class HtmlPicture extends Widget  {

}

//=================

Application.setType(ApplicationType.CANVAS)
Application.makeShape()
Application.makePicture()

Application.setType(ApplicationType.HTML)
Application.makeShape()
Application.makePicture()