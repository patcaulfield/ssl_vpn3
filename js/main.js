
const bodyNode = document.querySelector('body');

const agent = window.navigator.userAgent.toLowerCase();
    let browserName;
    switch (true) {
        case agent.indexOf("edge") > -1:
            browserName = "MS Edge"; // MS 엣지
            break;
        case agent.indexOf("edg/") > -1:
            browserName = "Edge (chromium based)"; // 크롬 기반 엣지
            break;
        case agent.indexOf("opr") > -1 && !!window.opr:
            browserName = "Opera"; // 오페라
            break;
        case agent.indexOf("chrome") > -1 && !!window.chrome:
            browserName = "Chrome"; // 크롬
            break;
        case agent.indexOf("trident") > -1:
            browserName = "MS IE"; // 익스플로러
            break;
        case agent.indexOf("firefox") > -1:
            browserName = "Mozilla Firefox"; // 파이어 폭스
            break;
        case agent.indexOf("safari") > -1:
            browserName = "Safari"; // 사파리
            break;
        default:
            browserName = "other"; // 기타
    }
    bodyNode.classList.add(browserName);
	
	if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
		// true for mobile device
		bodyNode.classList.add('tway_m');
	}else{
		// false for not mobile device
		bodyNode.classList.remove('tway_m');
	}
	
	