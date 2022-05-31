let listinfo= document.querySelector('.listinfo')
const addClass = (e) => {
    e.closest('h4').classList.toggle('show')

}
window.addEventListener('scroll', () => {
    let scrollDistance= window.scrollY

    document.querySelectorAll('.section').forEach((el,i) => {
        if(el.offsetTop - document.querySelector('.nav').clientHeight <= scrollDistance){
            document.querySelectorAll('.navbar a').forEach(elem  => {
                if(elem.classList.contains('active')){
                    elem.classList.remove('active')
                }
            })
            document.querySelectorAll('.navbar li')[i].querySelector('a').classList.add('active')
        }
        
    })
})

$('.openlist').on('click', function(){
    $(this).closest('.listinfo').find('.closelist').css('display', 'inline-block')
    $(this).closest('.listinfo').find('.openlist').css('display', 'none')
    $(this).closest('.listinfo').addClass('show')
})

$('.closelist').on('click', function(){
    $(this).closest('.listinfo').find('.closelist').css('display', 'none')
    $(this).closest('.listinfo').find('.openlist').css('display', 'inline-block')
    $(this).closest('.listinfo').removeClass('show')
})