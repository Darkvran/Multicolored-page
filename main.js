	let time = 7;
	async function color_dancing(color) {
		return new Promise(function(resolve) {
			$("html").css({"background": color});
			setTimeout( function() {
				resolve(true);
			}, time);
		});
	}

let b = 0;
let g= 0;
let r=255;

	async function RtY (){
		return new Promise(async function(resolve){
			for (g=0; g<=255; g++){
		 		await color_dancing(`rgb(${r}, ${g}, ${b})`)

			}
		resolve (true);
		});
	}



	async function YtG (){
		return new Promise(async function(resolve){
			for (r=255; r>=0; r--){
		 		await color_dancing(`rgb(${r}, ${g}, ${b})`)

			}
		resolve (true);
		});
	}

	async function GtB (){
		return new Promise(async function (resolve){
			for (g=255; g>=0; g--){
				await color_dancing(`rgb(${r}, ${g}, ${b})`)
				b++;
			}
		resolve (true);

		})
	}

	async function BtF (){
		return new Promise(async function (resolve){
			for (r=0; r<=139; r++){
				await color_dancing(`rgb(${r}, ${g}, ${b})`)
			}
		resolve (true);


		})
	}

	async function FtR (){
		return new Promise(async function (resolve){
			for (b=255; b>=0; b--){
				await color_dancing(`rgb(${r}, ${g}, ${b})`)
				r++;
			}
		resolve (true);


		})
	}




	async function rainbow(){
		return new Promise(async function(resolve) {
		while (true){
			await RtY();
			await YtG();
			await GtB();
			await BtF();
			await FtR();
		}
			resolve (true);
		
		})
	}

rainbow();
