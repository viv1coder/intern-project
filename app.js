const msg = document.querySelector(".msg");
const downloadbtn = document.querySelector("#download")
const searchbtn = document.querySelector("#search")
const videolink = document.querySelector("#videolink")



searchbtn.addEventListener("click",()=>{

	
	
    ytlink = videolink.value


	if(ytlink == ""){
		msg.innerHTML = "enter valid link"
	}else{

		msg.innerHTML = " Getting Video......"


	const videoId = ytlink.split('/').pop().split('?')[0];

	console.log(videoId);
	
	const url = `https://youtube-data8.p.rapidapi.com/video/streaming-data/?id=${videoId}`;
	const options = {
		method: 'GET',
		headers: {
			'x-rapidapi-key': 'efdc9dead0msh3d6b04344364212p1e7029jsn40fd6cc8da39',
			'x-rapidapi-host': 'youtube-data8.p.rapidapi.com'
		}
	};
	
	
	fetch(url,options).then((res)=>{
		return res.json()
	}).then((data)=>{
	console.log(data)
	let vidurl = data.formats[0].url
	
	downloadbtn.setAttribute("href",vidurl)
	downloadbtn.style.display = "block"
	
	
	}).catch((err)=>{
	
		msg.innerHTML = "SERVER DOWN"
	})



	}

})


