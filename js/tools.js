(function() {
				var styelNode = document.createElement("style");
				var w = document.documentElement.clientWidth / 16;
				styelNode.innerHTML = "html{font-size:" + w + "px!important}";
				document.head.appendChild(styelNode);
			})