module FactoryMethod {

	enum Environment {
		DESKTOP,
		MOBILE
	}

	class ImageWidget {

		static create(env:Environment) {
			switch (env) {
				case Environment.DESKTOP:
					break

				case Environment.MOBILE:
					break
			}
		}

	}

	class DesktopImageWidget extends ImageWidget {

	}

	class MobileImageWidget extends ImageWidget {

	}

	//Client

	let image = ImageWidget.create(Environment.DESKTOP)
}