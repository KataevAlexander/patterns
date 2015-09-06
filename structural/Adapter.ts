class ExternalImage {

	getSource() {
		console.log('external source')
	}

	getSize() {
		console.log('external size')
	}

}

interface ImageWidget {
	src:string
	size:{width:number, height:number}
}

class MyImageWidget extends ExternalImage implements ImageWidget{

	get src() {
		return this.getSource()
	}

	get size() {
		return this.getSize()
	}

}

var image:ImageWidget = new MyImageWidget()

image.size
image.src