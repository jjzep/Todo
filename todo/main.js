window.onload = function() {

    /* Remove and marker icons in SVG */

    var removeSVG = '<svg width="14px" height="18px" viewBox="0 0 14 18" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><!-- Generator: Sketch 46.1 (44463) - http://www.bohemiancoding.com/sketch --><title>ic_delete</title><desc>Created with Sketch.</desc><defs></defs><g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="Action" transform="translate(-53.000000, -291.000000)"><g id="ic_delete" transform="translate(48.000000, 288.000000)"><polygon id="Bounds" points="0 0 24 0 24 24 0 24"></polygon><path class="fill" d="M6,19 C6,20.1 6.9,21 8,21 L16,21 C17.1,21 18,20.1 18,19 L18,7 L6,7 L6,19 L6,19 Z M19,4 L15.5,4 L14.5,3 L9.5,3 L8.5,4 L5,4 L5,6 L19,6 L19,4 L19,4 Z" id="Icon" fill="#000000"></path></g></g></g></svg>';
    var completeSVG = '<svg class="unmarked" width="18px" height="18px" viewBox="0 0 18 18" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><!-- Generator: Sketch 46.1 (44463) - http://www.bohemiancoding.com/sketch --><title>ic_check_box_outline_blank</title><desc>Created with Sketch.</desc><defs></defs><g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="Toggle" transform="translate(-99.000000, -51.000000)"><g id="ic_check_box_outline_blank" transform="translate(96.000000, 48.000000)"><polygon id="Bounds" points="0 0 24 0 24 24 0 24"></polygon><path class="fill" d="M19,5 L19,19 L5,19 L5,5 L19,5 L19,5 Z M19,3 L5,3 C3.9,3 3,3.9 3,5 L3,19 C3,20.1 3.9,21 5,21 L19,21 C20.1,21 21,20.1 21,19 L21,5 C21,3.9 20.1,3 19,3 L19,3 Z" id="Icon" fill="#000000"></path></g></g></g></svg>';
    var markedSVG = '<svg class="marked" width="18px" height="18px" viewBox="0 0 18 18" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"> <title>ic_check_box</title> <desc>Created with Sketch.</desc> <defs></defs> <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <g id="Toggle" transform="translate(-51.000000, -51.000000)"> <g id="ic_check_box" transform="translate(48.000000, 48.000000)"> <polygon id="Bounds" points="0 0 24 0 24 24 0 24"></polygon> <path class="fill" d="M19,3 L5,3 C3.89,3 3,3.9 3,5 L3,19 C3,20.1 3.89,21 5,21 L19,21 C20.11,21 21,20.1 21,19 L21,5 C21,3.9 20.11,3 19,3 L19,3 Z M10,17 L5,12 L6.41,10.59 L10,14.17 L17.59,6.58 L19,8 L10,17 L10,17 Z" id="Icon" fill="#000000"></path> </g> </g> </g></svg>';
    
    function buttonClick() {
        var value = document.getElementById('item').value;
        if (value) {
            addItemTodo(value);
            document.getElementById('item').value = '';
        }
    };
     /* User clicked Add button. Text in the item field is added to a list. */
    document.getElementById('add').addEventListener('click', buttonClick);

    function removeItem() {
        var item = this.parentNode.parentNode;
        var parent = item.parentNode;

        parent.removeChild(item);
        target.insertBefore(item, target.childNodes[0]);
    }

    function completeItem() {
        var item = this.parentNode.parentNode;
        var parent = item.parentNode;
        var id = parent.id;

        //Check if item should be added to completed or to todo ID list.
        var target;
        if (id === 'todo')  {
            //If the item is not completed
            target = document.getElementById('completed');
        } else {
            //It is completed
            target = document.getElementById('todo');

        }

        parent.removeChild(item);
        target.insertBefore(item, target.childNodes[0]);
    }

    /* Adds new item to Todo List */
    function addItemTodo(text) {
        var list = document.getElementById('todo');

        var item = document.createElement('li');
        item.innerText = text;

        var buttons = document.createElement('div');
        buttons.classList.add('buttons');

        var remove = document.createElement('button');
        remove.classList.add('remove');
        remove.innerHTML = removeSVG;

        //Click event for removing an item.
        remove.addEventListener('click', removeItem);


        var complete = document.createElement('button');
        complete.classList.add('complete');
        complete.innerHTML = completeSVG;

        //Click event to complete an item.
        complete.addEventListener('click', completeItem);

        buttons.appendChild(remove);
        buttons.appendChild(complete);
        item.appendChild(buttons);

        list.insertBefore(item, list.childNodes[0]);
    }

}
