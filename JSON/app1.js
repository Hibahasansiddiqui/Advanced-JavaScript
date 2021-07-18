let Usrdata = document.querySelector('.box');

let userDetail = [
    {name:"Hiba",age:"27",place:"Karachi",country:"Pakistan"},
    {name:"Sheikh",age:"22",place:"Mumbai",country:"India"},
    {name:"Jonathan",age:"26",place:"London",country:"UK"},
    {name:"Wong-ho",age:"20",place:"Bejing",country:"China"},
]

//Sample

userDetail.map(user=>{
    console.log (
        user.name,
        user.age,
        user.place,
        user.country,
    )
})

document.getElementById('test1').innerHTML = userDetail.map(user =>
    <div>
        <div> name: ${user.name} </div>
        <div> age: ${user.age} </div>
        <div> place: ${user.place} </div>
        <div> country: ${user.country} </div>
    </div>
    ) .join('')
