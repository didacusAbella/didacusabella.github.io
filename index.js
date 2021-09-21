import DB from './db.js'


/**
 * @param {string} tpl the template
 * @param {string} container the container
 * @param {Object} obj the object
 * @param {Function} cb the callback
 */ 
function render(tpl, container, obj, cb) {
    const tem = document.getElementById(tpl)
    const tplCnt = tem.content.cloneNode(true)
    cb(tplCnt, obj);
    const cont = document.getElementById(container);
    cont.appendChild(tplCnt);
}


const { education, experience, skills, hobbies } = DB

for(let index in education) {
    render('education_tpl', 'education', education[index], function(elem, obj){
        const year = elem.querySelector('.timeline__year')
        const desc = elem.querySelector('.timeline__desc')
        const title = elem.querySelector('.timeline__title')
        year.textContent = obj.year
        title.textContent = obj.title
        desc.appendChild(document.createTextNode(obj.details))
    })
}

for(let index in experience) {
    render('experience_tpl', 'experience', experience[index], function(elem, obj){
        const year = elem.querySelector('.timeline__year')
        const desc = elem.querySelector('.timeline__desc')
        const title = elem.querySelector('.timeline__title')
        const org = elem.querySelector('.timeline__org');
        year.textContent = obj.year
        title.textContent = obj.job
        org.textContent = obj.org
        desc.appendChild(document.createTextNode(obj.details))
    })
}

for(let index in skills) {
    render('skills_tpl', 'skills', skills[index], function(elem, obj){
        const title = elem.querySelector('.sublist__title');
        const list = elem.querySelector('.sublist__elements');
        title.textContent = index
        list.textContent = obj.join(',\n')
    })
}

render('passion_tpl', 'passions', hobbies, function(elem, obj){
    const list = elem.querySelector('.passion__elements')
    list.textContent = obj
})