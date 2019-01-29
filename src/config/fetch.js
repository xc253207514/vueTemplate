import {
	baseUrl
} from './env'

export default async(url = '', data = {}, type = 'GET', method = 'fetch') => {
	type = type.toUpperCase();
	url = baseUrl + url;

	if (type == 'GET') {
		let dataStr = ''; //数据拼接字符串
		Object.keys(data).forEach(key => {
			dataStr += key + '=' + data[key] + '&';
		})

		if (dataStr !== '') {
			dataStr = dataStr.substr(0, dataStr.lastIndexOf('&'));
			url = url + '?' + dataStr;
		}
	}

	if (window.fetch && method == 'fetch') {
		let requestConfig = {
			// credentials: 'include',
			method: type,
			headers: {
				'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Request-Method': 'GET, PUT, DELETE, OPTIONS, POST',
			},
			mode: "cors",
			cache: "force-cache"
		}

		if (type == 'POST') {
			requestConfig.headers = {
				'Content-Type': 'application/x-www-form-urlencoded',
				'Access-Control-Allow-Origin': '*',
                'Access-Control-Request-Method': 'GET, PUT, DELETE, OPTIONS, POST',
			}
			let dtStr = '';
			Object.keys(data).forEach(key => {
				dtStr += key + '=' + data[key] + '&';
			})
			Object.defineProperty(requestConfig, 'body', {
				value: dtStr.substr(0,dtStr.lastIndexOf('&'))
			})
		}
		
		try {
			const response = await fetch(url, requestConfig);
			const responseJson = await response.json();
			return responseJson
		} catch (error) {
			throw new Error(error)
		}
	} else {
		return new Promise((resolve, reject) => {
			let requestObj;
			if (window.XMLHttpRequest) {
				requestObj = new XMLHttpRequest();
			} else {
				requestObj = new ActiveXObject;
			}

			let sendData = '';
			if (type == 'POST') {
				sendData = JSON.stringify(data);
			}
			requestObj.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
			requestObj.setRequestHeader("Access-Control-Allow-Origin", "*");
            requestObj.setRequestHeader("Access-Control-Request-Methods", " GET, PUT, DELETE,OPTIONS, POST");

			requestObj.onreadystatechange = () => {
				if (requestObj.readyState == 4) {
					if (requestObj.status == 200) {
						let obj = requestObj.response
						if (typeof obj !== 'object') {
							obj = JSON.parse(obj);
						}
						resolve(obj)
					} else {
						reject(requestObj)
					}
				}
			}
			requestObj.send(sendData);			
		})
	}
}