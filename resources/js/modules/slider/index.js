import $$ from '@utilities/selectors'

const homeHeroSlider = function homeHeroSlider(){
    if(!$$.homeHeroSlider) return

    const slider = $$.homeHeroSlider;

    jQuery(slider).slick({
        arrows: true,
        dots: false,
        infinite: true,
        fade: true,
        cssEase: 'linear',
        nextArrow: jQuery(".slider-container .nextArrow"),
        prevArrow: jQuery(".slider-container .prevArrow"),
    });
}()

export default homeHeroSlider