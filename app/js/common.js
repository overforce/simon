$( document ).ready(function() {

	var start = $('.start')

	var button = $('.button')
	var elements = [$('.red'), $('.green'), $('.yellow'), $('.blue')]
	var reset = $('.reset')
	var score = 0

	var line = []
	var picked = []


	var rnd


	start.click(function(){

		$('.back , .blur, .start').removeClass('vis')

		picked = []


		rnd = Math.floor(Math.random()*4)

		line.push(elements[rnd])

		for(var i = 0; i < line.length; i++){

			if(line.length == 1){
				show(line[i], 1000)
			}else{
				show(line[i], i*1500)
			}



		}

		$('.game').addClass('waiting')

		setTimeout(() => {
			$('.game').removeClass('waiting')

		}, line.length * 1500 - 1500);


	})

	function show(n,t){
		setTimeout(() => {
			if(n != undefined){
				n.addClass('active')
			}
		}, t);
		setTimeout(() => {
			if(n != undefined){
				n.removeClass('active')
			}
		}, t + 500);
	}





	button.click(function(){

		if(!$('.game').hasClass('waiting')){

		picked.push($(this))

		if(picked.length > line.length){
			$('.lose').addClass('vis')
			line = []
		}


		for(var i = 0; i < line.length; i++){


			if(picked[i] != undefined){

				if(line[i].attr('class') == picked[i].attr('class')){

				}else{
					score = -1
					$('.back , .blur, .start').addClass('vis')
					line = []
					break
				}
			}

		}

		score = score + 1

		$('.score').html('Ваш счет:' + ' ' + score)

		if(picked.length == line.length){
			start.click()
		}

		}



	})



});
