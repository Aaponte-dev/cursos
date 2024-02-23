import multer from 'multer';

class MulterModule {
	private readonly multerModule;

	constructor(dir: string) {
		this.multerModule = multer({
			storage: this.buildStorage(dir),
		});
	}

	private buildStorage(dir: string) {
		return multer.diskStorage({
			destination: (_req, _file, cb) => {
				cb(null, dir);
			},
			filename: (_req, file, cb) => {
				const uniqueSuffix = `${Date.now()}-${
					Math.round(Math.random()) * 1e9
				} `;
				cb(null, `${uniqueSuffix}-${file.originalname}`);
			},
		});
	}

	build() {
		return this.multerModule;
	}
}

export default MulterModule;
