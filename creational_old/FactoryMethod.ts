interface IApplication {
	makeShape()
	makePicture()

	createWidgets(config)
}

class Application implements IApplication {

	makeShape() {
	}

	makePicture() {
	}

	createWidgets(config = []) {
		config.forEach((type) => {
			switch (type) {
				case 'shape':
					this.makeShape()
					break

				case 'picture':
					this.makePicture()
					break
			}
		})
	}

}

class CanvasApplication extends Application {

	makeShape() {
		console.log('canvas shape')
	}

	makePicture() {
		console.log('canvas picture')
	}

}

class HtmlApplication extends Application {

	makeShape() {
		console.log('html shape')
	}

	makePicture() {
		console.log('html picture')
	}

}

//=====================

var widgets = ['picture', 'picture', 'shape', 'picture']

new CanvasApplication().createWidgets(widgets)
new HtmlApplication().createWidgets(widgets)