const url = "https://dummyapi.io/data/v1/user";
const header = {
	method: "get",
	headers: {
		"app-id": "65ebf376510e8071d664c2c6",
	},
};

function api() {
	fetch(url, header)
		.then((response) => response.json())
		.then((data) => {
			proses(data.data);
		});

	function proses(data) {
		data.map((x) => {
			const appendimage = document.getElementById("images");
			const pictelement = document.createElement("img");
			const pictdata = x.picture;
			pictelement.src = pictdata;
			// appendimage.appendChild(pictelement);
		});
	}
}

function barMobile() {}

// api();
