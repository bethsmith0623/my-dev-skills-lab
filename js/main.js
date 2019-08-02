/* <-----    Constants    ----->  */
//references to HTML elements
let skillsInput = $('.skills')

/* <----- Event Functions ----->  */
$('.addSkill').on('click', function(e){
    let newSkills = skillsInput.val()
    let skillArr = new Object ({
        btn: 'X',
        desc: newSkills
    })
    displayTbl(skillArr);
    $('div').children('input').val('')
});


/* <----- Render Functions -----> */

function displayTbl(skill) {
    $('div').append(`
        ${skill.desc}
    `)
}