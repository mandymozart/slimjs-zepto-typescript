/**
 * Grab templates from server-side rendered DOM
 */

export default class TemplatesService {
    public templates = []

    constructor(){
        let _templates = $('.has--template')
        $.each(_templates,(_template):any =>{
            this.templates[$(this).prop('tagName')] = $(this).html(); 
        })
    }
}