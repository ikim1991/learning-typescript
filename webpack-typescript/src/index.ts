import { formData } from './form';

const form = document.querySelector("form")!;

form.addEventListener('click', (e) => {
    e.preventDefault();
    const data = formData(form)
    console.log(data)
})

const person: any = {};
console.log(person.speak())