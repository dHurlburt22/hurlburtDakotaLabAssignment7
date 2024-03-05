window.onload = function() {

    const nameArray = ['Dakota', 'Isabella', 'Dacota', 'Napolian', 'Jojo', 'Gyro', 'Johnny', 'MrSmalls', 'Laxus', 'Gojo'];
    let chosenName = nameArray[Math.floor(Math.random() * nameArray.length)];

    const click = document.getElementById('click');
    click.addEventListener("click", (event) => {
      buttonClick(chosenName);
      chosenName = nameArray[Math.floor(Math.random() * nameArray.length)]
  });
};


function buttonClick(name){
    alert(name);
};
