

$('#open').on('click',function(){
    $('#open').animate( {paddingLeft:'200px'}   ,200)
})

$('.btn-close').on('click',function(){
    $('#open').animate( {paddingLeft:'10px'}   ,200)
})

$(document).ready(function() {
    function updateCountdown() {
        const targetDate = new Date('2024-12-31T23:59:00');
        const now = new Date();
        const diff = targetDate - now;

        if (diff <= 0) {
            $('#countdown').text("Countdown finished!");
            clearInterval(intervalId);
            return;
        }

        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((diff % (1000 * 60)) / 1000);

        $('.day').text(` ${days} D`);
        $('.hour').text(`${hours} H`);
        $('.minute').text(`${minutes}M `);
        $('.second').text(`${seconds} S`)
    }

    const intervalId = setInterval(updateCountdown, 1000); // Update every second
    updateCountdown(); // Initial call to display immediately
});
