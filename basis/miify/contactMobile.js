const lenis = new Lenis()
  
// ScrollTrigger.normalizeScroll(true);

function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)


var host = {
    debug: false,
    settings: {
 
        
         'connection.web.trust_login': 'https://basispanel.ir/apicms',
        'connection.web.basiscore': 'https://basispanel.ir/apicms',
        'connection.web.media': 'https://basispanel.ir/apicms',
        'default.dbsource.verb': 'post',
        'default.call.verb': 'get',
        'default.viewCommand.groupColumn': 'prpid',
        'default.dmnid': '4864',
        'default.binding.regex': '\\{##([^#]*)##\\}'

    }
}




function onSource2(args) { 
  const captcha = document.querySelector("input[name='captcha']").value; 
  const captchaid = document.querySelector("input[name='captchaid']").value; 
  console.log(captcha);
  const stringJson = JSON.stringify(args.source?.rows[0]); 
  $bc.setSource('edit.object2', { 
      value: stringJson, 
      captcha: captcha, 
      captchaid: captchaid ,

  }) 
  console.log('sourcd',stringJson);
} 

function renderFn3(params) {
            let questions = document.querySelectorAll(
                ".homeForm3 div[data-bc-question]"
            );

            questions.forEach((element) => {
                let title = element.querySelector(
                    ".homeForm3 [data-bc-question-title]"
                );
                let qInput = element.querySelector(".homeForm3 input");
                let qTxtArea = element.querySelector(".homeForm3 ______textarea");
                if (title) {
                    title = element.querySelector(
                        ".homeForm3 [data-bc-question-title]"
                    ).innerHTML;
                    if (qInput) {
                        qInput.setAttribute("placeholder", title);
                    } else if (qTxtArea) {
                        qTxtArea.setAttribute("placeholder", title);
                    }
                }
                console.log("q", qInput);
            });
        }
