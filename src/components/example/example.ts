import TemplatesService from './../../services/templates'
import {Slim} from "slim-js";
import {tag, useShadow, template} from "slim-js/Decorators";

@tag('sws-example')
@useShadow(true)
// Templates can be defined inline here or captured via the TemplateService
// @template(`
// <h2 bind>I am [[name]]</h1>
// <slim-content></slim-content>
// <ol>
//     <li slim-repeat="items" slim-repeat-as="item">
//         <sws-item bind click="selectItem" id="[[item.id]]">[[item.name]]</sws-item>
//     </li>
// </ol>
// `)
@template(new TemplatesService().templates['sws-example'])
export default class ExampleComponent extends Slim {

    name: string;
    items: any[]
    public onBeforeCreated(): void {
        this.name = "example";
        this.items = [
            {name: 'Apple', id: 1},
            {name: 'Orange', id: 2},
            {name: 'Banana', id: 3}
        ];
    }

    public selectItem(event: Event): void {
        // invoked!
        let itemId = $(event.target).attr('id');
        alert('Selected item '+itemId);
    }
    
}

@tag('sws-item')
@useShadow(true)
@template(`
<button><slim-content></slim-content></button>
`)
export class ChildComponent extends Slim {

}
