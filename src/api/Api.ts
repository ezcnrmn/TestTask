class Api {
	async request(url: string, method: 'GET' | 'POST' | 'PUT' | 'DELETE', body?: object) {
		const init: any = { method };
		if (body) init.body = body;

		const response = await fetch(url, init);
		const json = await response.json();
		return json;
	}

	async get(url: string) {
		return await this.request(url, 'GET');
	}
	async post(url: string, body: object) {
		return await this.request(url, 'POST', body);
	}
	async put(url: string, body: object) {
		return await this.request(url, 'PUT', body);
	}
	async delete(url: string) {
		return await this.request(url, 'DELETE');
	}
}

export default new Api();
