export default function swDev() {
	let swDev = `${process.env.PUBLIC_URL}/sw.js`;
	navigator.serviceWorker
		.register(swDev)
		.then()
		.catch((err) => console.log('err', err));
}
