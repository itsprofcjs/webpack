import './Button.scss';

class Button {
    body = document.querySelector('body');

    constructor() {}

    onClick = () => {
        console.log('Clicked');

        const p = document.createElement('p');

        p.innerHTML = 'This is shown when button is clicked ';
        p.classList.add('text-bold');

        this.body.appendChild(p);
    };

    render() {
        const button = document.createElement('button');

        button.innerHTML = 'Click me';

        button.onclick = this.onClick;

        button.classList.add('btn');
        button.classList.add('btn-round');

        this.body.appendChild(button);
    }
}

export default Button;
