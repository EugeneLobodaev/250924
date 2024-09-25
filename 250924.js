//Задача 1 
const update = (list) => {
    let $newList = list.slice();
    list.push('e');              
    $newList.push('f');          
    return [list, $newList];   
}

let x = ['a', 'b', 'c', 'd'];
console.log(update(x));
console.log(x);


//Задача 2

const replaceLinksInContent = (newsContent) => {
    newsContent.querySelectorAll('a').forEach(link => {
        if (link.textContent.trim() && link.href) {
            link.outerHTML = `[${link.textContent}|${link.href}]`;
        }
    });
}

const replaceLinks = () => {
    const newsContent = document.querySelector('.news-content');
    newsContent ? replaceLinksInContent(newsContent) : console.log('0 dom elements found');
}

replaceLinks();
//Задача 3
const compareLinks = () => {
    const currentHostname = window.location.hostname;
    const links = document.querySelectorAll('a');

    links.forEach(link => {
        const url = new URL(link.href);
        url.hostname === currentHostname ? console.log(`Внутренняя ссылка: ${link.href}`) : console.log(`Внешняя ссылка: ${link.href}`);
    });
}
compareLinks();


//Задача 4
const timeCounter = (seconds) => {
    let result = '';
    const days = Math.floor(seconds / (24 * 3600));
    seconds %= (24 * 3600);
    const hours = Math.floor(seconds / 3600);
    seconds %= 3600;
    const minutes = Math.floor(seconds / 60);
    seconds %= 60;

   if (seconds === 0) {
        console.log('0 seconds');
        return '0 seconds';
    }

    if (days === 1) {
        result += `${days} day `;
    } 
    if (days > 1) {
        result += `${days} days `;
    }

    if (hours === 1) {
        result += `${hours} hour `;
    } 
    if (hours > 1) {
        result += `${hours} hours `;
    }

    if (minutes === 1) {
        result += `${minutes} minute `;
    }
    if (minutes > 1) {
        result += `${minutes} minutes `;
    }

    if (seconds === 1) {
        result += `${seconds} second`;
    }

   if (seconds > 1) {
        result += `${seconds} seconds`;
    }
    console.log(result)
    return result
}
