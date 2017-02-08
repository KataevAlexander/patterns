module AdapterClass {

	interface IPoint {
		x:number
		y:number
	}

	module Library {

		export interface IWidget {
			drawLibraryCircle:(position:IPoint, radios:number) => void
			drawLibraryRectangle:(position:IPoint, width:number, height:number) => void
		}

		export class Widget implements IWidget {

			drawLibraryCircle(position:IPoint, radios:number) {
				console.log(`Draw Library Circle in (${position.x}, ${position.y}) with "${radios}" radius`)
			}

			drawLibraryRectangle(position:IPoint, width:number, height:number) {
				console.log(`Draw Library Rectangle in (${position.x}, ${position.y}) with "${width}" width and "${height}" height`)
			}

		}

	}

	module Application {

		export interface IWidget {
			drawCircle:(position:IPoint, radios:number) => void
			drawRectangle:(from:IPoint, to:IPoint) => void
		}

		export class Widget implements IWidget {

			private libraryWidget:Library.IWidget

			constructor() {
				this.libraryWidget = new Library.Widget()
			}

			drawCircle(position:IPoint, radios:number) {
				this.libraryWidget.drawLibraryCircle(position, radios)
			}

			drawRectangle(start:IPoint, end:IPoint) {
				let width = Math.abs(end.x - start.x)
				let height = Math.abs(end.y - start.y)

				this.libraryWidget.drawLibraryRectangle(start, width, height)
			}

		}

	}

	//Интерфейм можно не определять, объект library имплементирован
	let widget = new Application.Widget()
	let start = {x: 100, y: 100}
	let end = {x: 200, y: 200}

	widget.drawCircle(start, 25)
	widget.drawRectangle(start, end)
}