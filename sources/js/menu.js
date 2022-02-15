

function activateFn(e){
    const el = e.currentTarget;
    
    if (![...el.classList].find(c => c === 'activated')) {
        el.classList.add("activated"); 

    } else {
        el.classList.remove("activated"); 
    }
}

function focusOut(e) {
    const el = e.currentTarget;
    setTimeout(() => {
        el.classList.remove("activated");
    }, 100);
}

function activateTab(e){
    const el = e.currentTarget;
    const tabs = [...document.querySelectorAll('#tabItem')];

    tabs.forEach(it => it.classList.remove('activated'));

    if (![...el.classList].find(c => c === 'activated')) {
        el.classList.add("activated"); 

    }
}
