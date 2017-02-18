module AbstractFactory {

	interface IAbstractFactory {
		createText(x:number, y:number, text:string):ITextWidget
		createImage(x:number, y:number, url:string):IImageWidget
	}

	interface ITextWidget {
	}

	interface IImageWidget {
	}

	abstract class AbstractFactory implements IAbstractFactory {
		abstract createText(x:number, y:number, text:string)
		abstract createImage(x:number, y:number, url:string)
	}

	class DesktopFactory extends AbstractFactory {

		createText(x:number, y:number, text:string):ITextWidget {
			return new DesktopTextWidget()
		}

		createImage(x:number, y:number, url:string):IImageWidget {
			return new DesktopImageWidget()
		}

	}

	class MobileFactory implements IAbstractFactory {

		createText(x:number, y:number, text:string):ITextWidget {
			return new MobileTextWidget()
		}

		createImage(x:number, y:number, url:string):IImageWidget {
			return new MobileImageWidget()
		}

	}

	class DesktopTextWidget implements ITextWidget {

		constructor() {
			console.log('create "DesktopTextWidget"')
		}

	}

	class DesktopImageWidget implements IImageWidget {

		constructor() {
			console.log('create "DesktopImageWidget"')
		}

	}

	class MobileTextWidget implements ITextWidget  {

		constructor() {
			console.log('create "MobileTextWidget"')
		}

	}

	class MobileImageWidget implements IImageWidget  {

		constructor() {
			console.log('create "MobileImageWidget"')
		}

	}

	//Client

	let factory:IAbstractFactory

	function make() {
		return new DesktopFactory()
	}

	function swap() {
		return new MobileFactory()
	}

	factory = make()
	factory.createText(100, 100, 'message')
	factory.createImage(100, 100, 'example.com')

	//произошло событие, вызвавшее смену инстанса
	factory = swap()
	factory.createText(300, 300, 'message')
	factory.createImage(450, 270, 'example.com')

}