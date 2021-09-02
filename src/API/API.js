import { URL } from "../URL/URL";
const axios = require("axios");

export const getUsers = (setData) =>
	axios
		.get(`${URL}/users`)
		.then(function (response) {
			setData(response.data.data);
		})
		.catch(function (error) {
			console.log(error);
		})
		.then(function () {});

export const addUser = (data) =>
	axios
		.post(`${URL}/users`, data)
		.then(function (response) {
			if (response.status === 201) {
				window.location.replace("/");
			} else {
				console.log("error");
			}
		})
		.catch(function (error) {
			console.log(error);
		});

export const deleteUser = (id, imageUrl) => {
	axios
		.delete(`${URL}/users/${id}`, {
			data: {
				imageUrl: imageUrl,
			},
		})
		.then(function (response) {
			if (response.status === 207) {
				window.location.replace("/");
			} else {
				console.log("error");
			}
		})
		.catch(function (error) {
			console.log(error);
		})
		.then(function () {});
};
