$(document).ready(function(){
    $('#profile_ripple').ripples({
        resolution: 512,
        dropRadius:10
    })

    const bars = document.querySelectorAll('.progress_bar');

    bars.forEach(function(bar){
        let percentage = bar.dataset.percent;
        let per = bar.children[0];
        per.innerText = percentage + '%';
        bar.style.width = percentage + '%';
        console.log(percentage);
    })
})

function printDiv(divName) {
    var printContents = document.getElementById('printablearea').innerHTML;
    var originalContents = document.body.innerHTML;

    document.body.innerHTML = printContents;

    window.print();

    document.body.innerHTML = originalContents;
}