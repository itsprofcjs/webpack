import './Heading.scss';

class Header {
    body = document.querySelector('body');

    render() {
        const header = document.createElement('header');

        const h1Element = document.createElement('h1');

        h1Element.innerHTML = 'CJS === Webpack is Cool :) )';

        header.appendChild(h1Element);

        header.classList.add('header-container');

        this.body.appendChild(header);
    }
}

export default Header;
