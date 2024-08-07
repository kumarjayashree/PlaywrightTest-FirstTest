import {test} from '@playwright/test';
test('Calculate youtube playlist duration', async({page}) => {
    const url = "https://www.youtube.com/playlist?list=PL699Xf-_ilW7EyC6lMuU4jelKemmS6KgD";
    await page.goto(url);
   // const videos = await page.$$("ytd-thumbnail-overlay-time-status-renderer span");
    const videos = await page.$$("ytd-thumbnail-overlay-time-status-renderer");
    console.log(videos.length);
    let totalMinutes = 0;
   
    await Promise.all(
        videos.map(async ele => {
            const duration = await ele.innerText();
            
            if (duration ) {
                const timeSlices =  duration?.trim().split(":");
                let minutes = 0;
                let seconds = 0;
                let hours = 0;
            if(timeSlices.length == 2) {
                minutes = Number(timeSlices[0]);
                seconds = Number(timeSlices[1]);
                minutes+=seconds/60;
          
                
            } else if (timeSlices.length ==3 ) {
                // there is an issue with the duration being '20:53 \n 20:53'
                // so the 0th element is 20 and 2nd element is 53. Hence the 
                // following calculation. 
             //   if (timeSlices[0].trim())
               //     hours = Number(timeSlices[0]);
                minutes = Number(timeSlices[0]);
                seconds = Number(timeSlices[2]);
                minutes+= seconds /60;
          
            } 
                
            totalMinutes+=minutes;
            }
            
        })
       
    )
   
    console.log("totalMinutes = " + totalMinutes);
    const playHours = Math.floor(totalMinutes / 60);
    const playminutes = Math.trunc(totalMinutes %60);
    const playseconds = Math.trunc(totalMinutes - (Math.trunc(totalMinutes) * 60));

    console.log ("Total play list time: " + playHours + " hours " + playminutes + " minutes " + playseconds + " seconds");

})