const isTheInputEmpty = (selector) => {
    const checkedInput = document.querySelector(selector);
    let status = true;
    
    if (checkedInput.value !== '') {
        status = false;
    }
        
    return status;
}

export default isTheInputEmpty;
