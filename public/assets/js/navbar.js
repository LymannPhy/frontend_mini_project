const menubtn = document.getElementById('menu-button');
        const menu = document.getElementById('menu');
        menubtn.addEventListener('click', () => {
            menu.classList.toggle('hidden');
        })
        const drpbtn = document.getElementById('drp-btn');
        const drpList = document.getElementById('drp-list');
        drpbtn.addEventListener('click', () => {
            drpList.classList.toggle('hidden');
        })
