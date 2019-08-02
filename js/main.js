/* <-----    Constants    ----->  */
//references to HTML elements
let skillsInput = $('.newSkill')

/* <----- Event Functions ----->  */
$('.addSkill').on('click', function(e){
    e.preventDefault();
    let newSkills = skillsInput.val()
    let skillArr = new Object ({
        desc: newSkills
    })
    render(skillArr);
    $('div s').children('input').val('')
});



/* <----- Render Functions -----> */

function render(skill) {
    $('div').append(` ${skill.desc}
    `)
}