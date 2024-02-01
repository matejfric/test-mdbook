// https://github.com/rust-lang/mdBook/issues/1996
// open closed details elements for printing
window.addEventListener('beforeprint',() =>
{
    const allDetails = document.body.querySelectorAll('details');
    for(let i=0; i<allDetails.length; i++)
    {
        if(allDetails[i].open)
        {
            allDetails[i].dataset.open = '1';
        }
        else
        {
            allDetails[i].setAttribute('open', '');
        }
    }
});

// after printing close details elements not opened before
window.addEventListener('afterprint',() =>
{
    const allDetails = document.body.querySelectorAll('details');
    for(let i=0; i<allDetails.length; i++)
    {
        if(allDetails[i].dataset.open)
        {
            allDetails[i].dataset.open = '';
        }
        else
        {
            allDetails[i].removeAttribute('open');
        }
    }
});