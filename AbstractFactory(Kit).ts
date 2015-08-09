enum WidgetType {
	A, B
}

interface IWidgetKit {
	setType(widgetType:WidgetType)

	makeShape()
	makePicture()
}

interface IWidget {
	log()
}

class WidgetKit implements IWidgetKit {

	private kit:IWidgetKit

	makeShape():IWidget {
		return this.kit.makeShape()
	}

	makePicture():IWidget {
		return this.kit.makePicture()
	}

	setType(type:WidgetType) {
		switch (type) {
			case WidgetType.A:
				this.kit = new WidgetKitA()
				break

			case WidgetType.B:
				this.kit = new WidgetKitB()
				break
		}

		return this
	}

}

//private
class WidgetKitA extends WidgetKit {

	makeShape() {
		return new ShapeA()
	}

	makePicture() {
		return new PictureA()
	}

}

//private
class WidgetKitB extends WidgetKit {

	makeShape() {
		return new ShapeB()
	}

	makePicture() {
		return new PictureB()
	}

}

class ShapeA implements IWidget {
	log() {
		console.log('shape A')
	}
}

class ShapeB implements IWidget {
	log() {
		console.log('shape B')
	}
}

class PictureA implements IWidget {
	log() {
		console.log('picture A')
	}
}

class PictureB implements IWidget {
	log() {
		console.log('picture B')
	}
}

var kit = new WidgetKit().setType(WidgetType.A)

kit.makeShape().log()
kit.makePicture().log()
kit.setType(WidgetType.B)
kit.makeShape().log()
kit.makePicture().log()