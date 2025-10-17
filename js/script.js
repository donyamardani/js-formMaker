'use strict'


let formEl=document.querySelector('#formMaker')
let textEL=document.querySelector('#txt')
let styleEl=document.querySelector('#style')
let attEl=document.querySelector('#att')
let classEl=document.querySelector('#class')
let selectEl=document.querySelector('#tag-name')
let placeEl=[...document.querySelectorAll('#radio-box input')]
let divEl=[...document.querySelectorAll('#show div')]
let addBtnEl=document.querySelector('#add-element')
let removeBtnEl=document.querySelector('#remove-element')
let changeBtnEl=document.querySelector('#chengh-theme')
const htmlTags=[
    "a",
    "abbr",
    "acronym",
    "address",
    "applet",
    "area",
    "article",
    "aside",
    "audio",
    "b",
    "base",
    "basefont",
    "bdi",
    "bdo",
    "big",
    "blockquote",
    "body",
    "br",
    "button",
    "canvas",
    "caption",
    "center",
    "cite",
    "code",
    "col",
    "colgroup",
    "data",
    "datalist",
    "dd",
    "del",
    "details",
    "dfn",
    "dialog",
    "dir",
    "div",
    "dl",
    "dt",
    "em",
    "embed",
    "fieldset",
    "figcaption",
    "figure",
    "font",
    "footer",
    "form",
    "frame",
    "frameset",
    "h1",
    "h2",
    "h3",
    "h4",
    "h5",
    "h6",
    "head",
    "header",
    "hr",
    "html",
    "i",
    "iframe",
    "img",
    "input",
    "ins",
    "kbd",
    "label",
    "legend",
    "li",
    "link",
    "main",
    "map",
    "mark",
    "menu",
    "menuitem",
    "meta",
    "meter",
    "nav",
    "noframes",
    "noscript",
    "object",
    "ol",
    "optgroup",
    "option",
    "output",
    "p",
    "param",
    "picture",
    "pre",
    "progress",
    "q",
    "rp",
    "rt",
    "ruby",
    "s",
    "samp",
    "script",
    "section",
    "select",
    "small",
    "source",
    "span",
    "strike",
    "strong",
    "style",
    "sub",
    "summary",
    "sup",
    "table",
    "tbody",
    "td",
    "template",
    "textarea",
    "tfoot",
    "th",
    "thead",
    "time",
    "title",
    "tr",
    "track",
    "tt",
    "u",
    "ul",
    "var",
    "video",
    "wbr",]
    for(let x of htmlTags){
        selectEl.innerHTML += `<option value='${x}'>${x}</option>`
    }
    placeEl.map(e=>{
        e.addEventListener('click',()=>{
            placeEl.value=e.value;
        })
    })

    let tagEl;
    formEl.addEventListener('submit',(e)=>{
        e.preventDefault()
        let arrStyle=(styleEl.value).split(';').map(e=>{e.split('=')});
        let arrClass=(classEl.value).split(',');
        let arrAtt=(attEl.value).split(',').map(e=>{e.split('=')});

        tagEl=document.createElement(selectEl.value);
        tagEl.texContent()=textEL.value;

        if(styleEl.value!=''){
            arrStyle.map(e=>{
                tagEl.style.setProperty(e[0],e[1])
            })
        }
        if(attEl.value!=''){
            arrAtt.map(e=>{
                tagEl.style.setProperty(e[0],e[1])
            })
        }
        if(classEl.value!=''){
            arrClass.map(e=>{
                tagEl.classList.add(e)
            })
        }
    })


    