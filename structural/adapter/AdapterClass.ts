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

		export class Widget extends Library.Widget implements IWidget {

			drawCircle(position:IPoint, radios:number) {
				this.drawLibraryCircle(position, radios)
			}

			drawRectangle(start:IPoint, end:IPoint) {
				let width = Math.abs(end.x - start.x)
				let height = Math.abs(end.y - start.y)

				this.drawLibraryRectangle(start, width, height)
			}

		}

	}

	//Явно определяем интерфейс, иначе будет виден метод drawLibraryRectangle
	let widget:Application.IWidget = new Application.Widget()
	let start = {x: 100, y: 100}
	let end = {x: 200, y: 200}

	widget.drawCircle(start, 25)
	widget.drawRectangle(start, end)
}