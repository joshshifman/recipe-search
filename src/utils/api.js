import axios from 'axios'

/**
We use a proxy for two reasons:
	1. The app is deployed on Heroku and served over HTTPS. However,
		 the RecipePuppy api only supports HTTP and we can therefore not
		 make the request directly.
	2. When developing locally, we violate the Same Origin Policy when
	   sending the external api requests. Therefore, we send our requests
	   through a proxy, which will return the Access-Control-Allow-Origin
	   header.
**/

const proxy = "https://cors-anywhere.herokuapp.com/"
const base = "http://www.recipepuppy.com/api/"

export default function fetchRecipes(query) {

	return axios.get(proxy + base, {
		params : {
			q: query
		}
	}).then(response => response.data.results)
		.catch(error => console.warn(error))
}
