let my = document.getElementById("hello");
let search = document.getElementById("search");
let keywords = document.getElementById("key");
let sum=0;
my.addEventListener("submit", function(event) {
    event.preventDefault();
    const api_key = "AIzaSyDo71lUqhSgVmznFMIZ-w6NUnT5UjXcj3Q";
    const keyword = keywords.value;
    console.log(keyword)
    const today=new Date()
    const start=new Date(today)
    start.setFullYear(start.getFullYear()-1)
    const end=new Date(today)
    end.setFullYear(end.getFullYear()-1)
    for(let i=0;i<12;i++){
        if(start.getMonth===11){
            end.setMonth(0);
            end.setFullYear(start.getFullYear()+1)
        }
        else if (start.getMonth===12){
            start.setMonth(0);
            start.setFullYear(start.getFullYear()+1)
        }
        else{
            end.setMonth(start.getMonth()+1)
        }
    let startingyear=start.getFullYear()
    let startingmonth=start.getMonth()
    let startingdate=start.getDate()
    let startdate=`${startingyear}-${startingmonth+1}-${startingdate}`
    let endingyear=end.getFullYear()
    let endingmonth=end.getMonth()
    let endingdate=end.getDate()
    let enddate=`${endingyear}-${endingmonth+1}-${endingdate}`
    fetch(`https://www.googleapis.com/youtube/v3/search?q=${encodeURIComponent(keyword)}&publishedAfter=${startdate}T00:00:00Z&publishedBefore=${enddate}T23:59:59Z&key=${api_key}`)
        .then(response => response.json())
        .then(data => {
            console.log(data)
            let appear = data.pageInfo.totalResults;
            const days=Math.floor((new Date(enddate)-new Date(startdate))/(1000*60*60*24))+1
            const average=appear/days
            sum+=average
            start.setMonth(start.getMonth()+1)
        })
    }
    const avg=sum/12;
    search.innerHTML = `<p>"${keyword}" appeared <i>${avg.toFixed(2)}`
})
