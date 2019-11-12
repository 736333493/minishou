$(function() {



	//基础路径
	var baseUrl = '../images/';

	function getWeatherData(city) {

		var data = {
			appid: '78522691',
			appsecret: '19ATNk99',
			version: 'v9',
		};

		if (city !== undefined) {
			data.city = city;
		}

		$.ajax({
			type: 'GET',
			url: 'https://www.tianqiapi.com/api',
			data: data,
			dataType: 'jsonp',
			success: function(data) {
				console.log(data)
				// 获取定位位置
				$('.location-city').text(data.city);

				//绑定实况天气数据
				var weatherData = ['date', 'tem', 'wea', 'win_speed', 'win', ];
				var datas = data.data[0];
				console.log('dsda ata ==> ', datas);
				$(' .city').text(data.city);
				for (var i = 0; i < weatherData.length; i++) {

					if (weatherData[i] === 'win') {
						$('.' + weatherData[i]).text(datas[weatherData[i]][0]);
					} else {

						$('.' + weatherData[i]).text(weatherData[i] === 'tem' ? datas[weatherData[i]] + '℃' : datas[weatherData[i]]);
					}

				}
				var WeatherData = data.data.slice(1);
				$.each(WeatherData, function(i, v) {
					var $ul = $(
						`<ul class="day">
								<li class="breath">${v.day.replace(/（星期[一二三四五六日]）/, '')}</li>
								<li class="breath">${v.wea}</li>
								<li class="breath">${v.tem2 + '℃ ~' + v.tem1 + '℃'}</li>
								<li class="breath">${v.win[1]}</li>
							</ul>`
					);

					$('.uls').append($ul);
				})

			}
		})
	}

	getWeatherData();


	$('.icon').click(function() {
		var city = $('.ipt').val();
		if (city == undefined || city.trim() == "") {
			return;

		}
		$('.uls').empty();
		getWeatherData(city);
	})
})
