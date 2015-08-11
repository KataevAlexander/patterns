interface IEnvBuilder {
	buildShape():void
	buildPicture():void

	getWidgets():any[]
}

class EnvBuilder implements IEnvBuilder {

	protected widgets:any[]

	constructor() {
		this.widgets = []
	}

	buildShape():void {
	}

	buildPicture():void {
	}

	getWidgets():any[] {
		return this.widgets;
	}

}

class CanvasBuilder extends EnvBuilder {

	buildShape() {
		this.widgets.push(new CanvasShapeWidget())
	}

	buildPicture() {
		this.widgets.push(new CanvasPictureWidget())
	}

}

class Widget {

	log() {
		console.log((<any>this.constructor).name)
	}

}

class CanvasShapeWidget extends Widget {
}

class CanvasPictureWidget extends Widget {
}

class HtmlBuilder extends EnvBuilder {

	buildShape() {
		this.widgets.push(new HtmlShapeWidget())
	}

	buildPicture() {
		this.widgets.push(new HtmlPictureWidget())
	}

}

class HtmlShapeWidget extends Widget {
}

class HtmlPictureWidget extends Widget {
}

//=======================

class Scope {

	static createView(builder:IEnvBuilder) {
		builder.buildShape()
		builder.buildPicture()

		return builder.getWidgets()
	}

}

//=======================

Scope.createView(new HtmlBuilder()).forEach((widget) => {
	widget.log()
})

Scope.createView(new CanvasBuilder()).forEach((widget) => {
	widget.log()
})
