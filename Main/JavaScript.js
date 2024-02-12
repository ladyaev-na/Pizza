//карта
function init(){
    let map = new ymaps.Map('map-test', {
        center: [56.51623759836746,85.03274213083367],
        zoom: 17
    });
    map.controls.remove('geolocationControl');
    map.controls.remove('searchControl');
    map.controls.remove('trafficControl');
    map.controls.remove('zoomControl');
    map.controls.remove('rulerControl');
}
ymaps.ready(init);

const btone = document.getElementById('.btone');
//



const slides = document.querySelectorAll('.slide')

for(const slide of slides){
    slide.addEventListener('click', () => {
        clearActiveClass()

        slide.classList.add('active')
    })
}

function clearActiveClass(){
    slides.forEach((slide) =>{
        slide.classList.remove('active')
    })
}



//проверка номера на буквы
function proverka(input) {
    var value = input.value;
    var rep = /[-\./+_;,№?!@#$%^&*()":'a-zA-Zа-яА-Я]/;
    if (rep.test(value)) {
        value = value.replace(rep, '');
        input.value = value;
    }
}
//
//проверка номера на заказ
let tracking = document.getElementById('.tracking');
let ok = document.getElementById('.ok');
let again = document.getElementById('.again');
function qw(){
    this.tracking.textContent='К сожалению мы не нашли заказ по этому номеру .';
    let bt = this.ok.textContent= 'Попробывать еще раз';
    this.ok.style.fontSize = '16px';
    this.again.classList.remove('again');
}
//








const arizona1 = document.getElementById('arizona1');
const arizona2 = document.getElementById('arizona2');
const pricee1 = document.getElementById('pricee1');
function gram1_1_1(){
    this.arizona2.style.background='none';
    this.arizona2.style.color='slategray';
    this.arizona1.style.color='#000000';
    this.arizona1.style.background = '#fff';
    this.pricee1.innerHTML = '520 ₽';
}
function gram1_1_2() {
    this.arizona2.style.background = '#fff';
    this.arizona2.style.color = '#000000';
    this.arizona1.style.color = 'slategray';
    this.arizona1.style.background = 'none';
    this.pricee1.innerHTML = '945 ₽';
}

const chesh1 = document.getElementById('chesh1');
const chesh2 = document.getElementById('chesh2');
const pricee2 = document.getElementById('pricee2');
function gram1_2_1(){
    this.chesh2.style.background='none';
    this.chesh2.style.color='slategray';
    this.chesh1.style.color='#000000';
    this.chesh1.style.background = '#fff';
    this.pricee2.innerHTML = '585 ₽';
}
function gram1_2_2(){
    this.chesh2.style.background = '#fff';
    this.chesh2.style.color = '#000000';
    this.chesh1.style.color = 'slategray';
    this.chesh1.style.background = 'none';
    this.pricee2.innerHTML = '958 ₽';
}

const arcanzas1 = document.getElementById('arcanzas1');
const arcanzas2 = document.getElementById('arcanzas2');
const pricee3 = document.getElementById('pricee3');
function gram1_3_1(){
    this.arcanzas2.style.background='none';
    this.arcanzas2.style.color='slategray';
    this.arcanzas1.style.color='#000000';
    this.arcanzas1.style.background = '#fff';
    this.pricee3.innerHTML = '585 ₽';
}
function gram1_3_2(){
    this.arcanzas2.style.background = '#fff';
    this.arcanzas2.style.color = '#000000';
    this.arcanzas1.style.color = 'slategray';
    this.arcanzas1.style.background = 'none';
    this.pricee3.innerHTML = '958 ₽';
}

const dzord1 = document.getElementById('dzord1');
const dzord2 = document.getElementById('dzord2');
const pricee4 = document.getElementById('pricee4');
function gram2_1_1(){
    this.dzord2.style.background='none';
    this.dzord2.style.color='slategray';
    this.dzord1.style.color='#000000';
    this.dzord1.style.background = '#fff';
    this.pricee4.innerHTML = '585 ₽';
}
function gram2_1_2(){
    this.dzord2.style.background = '#fff';
    this.dzord2.style.color = '#000000';
    this.dzord1.style.color = 'slategray';
    this.dzord1.style.background = 'none';
    this.pricee4.innerHTML = '958 ₽';
}

const michigan1 = document.getElementById('michigan1');
const michigan2 = document.getElementById('michigan2');
const pricee5 = document.getElementById('pricee5');
function gram2_2_1(){
    this.michigan2.style.background='none';
    this.michigan2.style.color='slategray';
    this.michigan1.style.color='#000000';
    this.michigan1.style.background = '#fff';
    this.pricee5.innerHTML = '585 ₽';
}
function gram2_2_2(){
    this.michigan2.style.background = '#fff';
    this.michigan2.style.color = '#000000';
    this.michigan1.style.color = 'slategray';
    this.michigan1.style.background = 'none';
    this.pricee5.innerHTML = '958 ₽';
}

const peperoni1 = document.getElementById('peperoni1');
const peperoni2 = document.getElementById('peperoni2');
const pricee6 = document.getElementById('pricee6');
function gram2_3_1(){
    this.peperoni2.style.background='none';
    this.peperoni2.style.color='slategray';
    this.peperoni1.style.color='#000000';
    this.peperoni1.style.background = '#fff';
    this.pricee6.innerHTML = '554 ₽';
}
function gram2_3_2(){
    this.peperoni2.style.background = '#fff';
    this.peperoni2.style.color = '#000000';
    this.peperoni1.style.color = 'slategray';
    this.peperoni1.style.background = 'none';
    this.pricee6.innerHTML = '958 ₽';
}

const manxetan1 = document.getElementById('peperoni1');
const manxetan2 = document.getElementById('manxetan2');
const pricee7 = document.getElementById('pricee7');
function gram3_1_1(){
    this.manxetan2.style.background='none';
    this.manxetan2.style.color='slategray';
    this.manxetan1.style.color='#000000';
    this.manxetan1.style.background = '#fff';
    this.pricee7.innerHTML = '550 ₽';
}
function gram3_1_2(){
    this.manxetan2.style.background = '#fff';
    this.manxetan2.style.color = '#000000';
    this.manxetan1.style.color = 'slategray';
    this.manxetan1.style.background = 'none';
    this.pricee7.innerHTML = '995 ₽';
}

const gavayu1 = document.getElementById('peperoni1');
const gavayu2 = document.getElementById('manxetan2');
const pricee8 = document.getElementById('pricee8');
function gram3_2_1(){
    this.gavayu2.style.background='none';
    this.gavayu2.style.color='slategray';
    this.gavayu1.style.color='#000000';
    this.gavayu1.style.background = '#fff';
    this.pricee8.innerHTML = '510 ₽';
}
function gram3_2_2(){
    this.gavayu2.style.background = '#fff';
    this.gavayu2.style.color = '#000000';
    this.gavayu1.style.color = 'slategray';
    this.gavayu1.style.background = 'none';
    this.pricee8.innerHTML = '925 ₽';
}

const venesualla1 = document.getElementById('peperoni1');
const venesualla2 = document.getElementById('manxetan2');
const pricee9 = document.getElementById('pricee9');
function gram3_3_1(){
    this.venesualla2.style.background='none';
    this.venesualla2.style.color='slategray';
    this.venesualla1.style.color='#000000';
    this.venesualla1.style.background = '#fff';
    this.pricee9.innerHTML = '520 ₽';
}
function gram3_3_2(){
    this.venesualla2.style.background = '#fff';
    this.venesualla2.style.color = '#000000';
    this.venesualla1.style.color = 'slategray';
    this.venesualla1.style.background = 'none';
    this.pricee9.innerHTML = '945 ₽';
}

const new1 = document.getElementById('peperoni1');
const new2 = document.getElementById('manxetan2');
const pricee10 = document.getElementById('pricee10');
function gram4_1_1(){
    this.new2.style.background='none';
    this.new2.style.color='slategray';
    this.new1.style.color='#000000';
    this.new1.style.background = '#fff';
    this.pricee10.innerHTML = '550 ₽';
}
function gram4_1_2(){
    this.new2.style.background = '#fff';
    this.new2.style.color = '#000000';
    this.new1.style.color = 'slategray';
    this.new1.style.background = 'none';
    this.pricee10.innerHTML = '995 ₽';
}

const cantri1 = document.getElementById('peperoni1');
const cantri2 = document.getElementById('manxetan2');
const pricee11 = document.getElementById('pricee11');
function gram4_2_1(){
    this.cantri2.style.background='none';
    this.cantri2.style.color='slategray';
    this.cantri1.style.color='#000000';
    this.cantri1.style.background = '#fff';
    this.pricee11.innerHTML = '565 ₽';
}
function gram4_2_2(){
    this.cantri2.style.background = '#fff';
    this.cantri2.style.color = '#000000';
    this.cantri1.style.color = 'slategray';
    this.cantri1.style.background = 'none';
    this.pricee11.innerHTML = '976 ₽';
}

const texas1 = document.getElementById('peperoni1');
const texas2 = document.getElementById('manxetan2');
const pricee12 = document.getElementById('pricee12');
function gram4_3_1(){
    this.texas2.style.background='none';
    this.texas2.style.color='slategray';
    this.texas1.style.color='#000000';
    this.texas1.style.background = '#fff';
    this.pricee12.innerHTML = '585 ₽';
}
function gram4_3_2(){
    this.texas2.style.background = '#fff';
    this.texas2.style.color = '#000000';
    this.texas1.style.color = 'slategray';
    this.texas1.style.background = 'none';
    this.pricee12.innerHTML = '880 ₽';
}

const chipotle1 = document.getElementById('chipotle1');
const chipotle2 = document.getElementById('chipotle2');
const pricee13 = document.getElementById('pricee13');
function gram5_1_1(){
    this.chipotle2.style.background='none';
    this.chipotle2.style.color='slategray';
    this.chipotle1.style.color='#000000';
    this.chipotle1.style.background = '#fff';
    this.pricee13.innerHTML = '25 ₽';
}
function gram5_1_2(){
    this.chipotle2.style.background = '#fff';
    this.chipotle2.style.color = '#000000';
    this.chipotle1.style.color = 'slategray';
    this.chipotle1.style.background = 'none';
    this.pricee13.innerHTML = '35 ₽';
}

const chis1 = document.getElementById('chis1');
const chis2 = document.getElementById('chis2');
const pricee14 = document.getElementById('pricee14');
function gram5_2_1(){
    this.chis2.style.background='none';
    this.chis2.style.color='slategray';
    this.chis1.style.color='#000000';
    this.chis1.style.background = '#fff';
    this.pricee14.innerHTML = '25 ₽';
}
function gram5_2_2(){
    this.chis2.style.background = '#fff';
    this.chis2.style.color = '#000000';
    this.chis1.style.color = 'slategray';
    this.chis1.style.background = 'none';
    this.pricee14.innerHTML = '35 ₽';
}

const salse1 = document.getElementById('salse1');
const salse2 = document.getElementById('salse2');
const pricee15 = document.getElementById('pricee15');
function gram6_1_1(){
    this.salse2.style.background='none';
    this.salse2.style.color='slategray';
    this.salse1.style.color='#000000';
    this.salse1.style.background = '#fff';
    this.pricee15.innerHTML = '25 ₽';
}
function gram6_1_2(){
    this.salse2.style.background = '#fff';
    this.salse2.style.color = '#000000';
    this.salse1.style.color = 'slategray';
    this.salse1.style.background = 'none';
    this.pricee15.innerHTML = '35 ₽';
}

const clasic1 = document.getElementById('clasic1');
const clasic2 = document.getElementById('clasic2');
const pricee16 = document.getElementById('pricee16');
function gram6_2_1(){
    this.clasic2.style.background='none';
    this.clasic2.style.color='slategray';
    this.clasic1.style.color='#000000';
    this.clasic1.style.background = '#fff';
    this.pricee16.innerHTML = '25 ₽';
}
function gram6_2_2(){
    this.clasic2.style.background = '#fff';
    this.clasic2.style.color = '#000000';
    this.clasic1.style.color = 'slategray';
    this.clasic1.style.background = 'none';
    this.pricee16.innerHTML = '35 ₽';
}

const tartar1 = document.getElementById('tartar1');
const tartar2 = document.getElementById('tartar2');
const pricee17 = document.getElementById('pricee17');
function gram6_3_1(){
    this.tartar2.style.background='none';
    this.tartar2.style.color='slategray';
    this.tartar1.style.color='#000000';
    this.tartar1.style.background = '#fff';
    this.pricee17.innerHTML = '25 ₽';
}
function gram6_3_2(){
    this.tartar2.style.background = '#fff';
    this.tartar2.style.color = '#000000';
    this.tartar1.style.color = 'slategray';
    this.tartar1.style.background = 'none';
    this.pricee17.innerHTML = '35 ₽';
}

const general1 = document.getElementById('general1');
const general2 = document.getElementById('general2');
const pricee18 = document.getElementById('pricee18');
function gram7_1_1(){
    this.general2.style.background='none';
    this.general2.style.color='slategray';
    this.general1.style.color='#000000';
    this.general1.style.background = '#fff';
    this.pricee18.innerHTML = '60 ₽';
}
function gram7_1_2(){
    this.general2.style.background = '#fff';
    this.general2.style.color = '#000000';
    this.general1.style.color = 'slategray';
    this.general1.style.background = 'none';
    this.pricee18.innerHTML = '80 ₽';
}

const vetcena1 = document.getElementById('vetcena1');
const vetcena2 = document.getElementById('vetcena2');
const pricee19 = document.getElementById('pricee19');
function gram8_3_1(){
    this.vetcena2.style.background='none';
    this.vetcena2.style.color='slategray';
    this.vetcena1.style.color='#000000';
    this.vetcena1.style.background = '#fff';
    this.pricee19.innerHTML = '227 ₽';
}
function gram8_3_2(){
    this.vetcena2.style.background = '#fff';
    this.vetcena2.style.color = '#000000';
    this.vetcena1.style.color = 'slategray';
    this.vetcena1.style.background = 'none';
    this.pricee19.innerHTML = '147 ₽';
}
