const tabItems = document.querySelectorAll('.tab-item');
const tabContentItems = document.querySelectorAll('.tab-content-item');

//select tab content item
function selectItem(e){
    removeBorder();
    removeShow();

    //add border to curent tab
    this.classList.add('tab-border');

    //Grab content item from DOM
    const tabConetentItem = document.querySelector(`#${this.id}-content`);
    console.log(this.id);
    // //add show class to make it apper
    tabConetentItem.classList.add('show');
}

//Remove border
function removeBorder(){
    tabItems.forEach(item => item.classList.remove('tab-border'));
}

//Remove show class to disapper every tab
function removeShow() {
    tabContentItems.forEach(item => item.classList.remove('show'));
}

//Listen for tab click 
tabItems.forEach(item => item.addEventListener('click' , selectItem));