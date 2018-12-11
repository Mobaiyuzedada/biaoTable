; (function () {
    'use strict';

    window.biaoTable = {
        boot,
    };

    let table, thead, tbody, structure, list;


    /**
     * 
     * @param {string} tableSelector 
     * @param {Object} struct 
     * @param {Array} data 
     */
    function boot(tableSelector, struct, data) {
        structure = struct; list = data;
        table = document.querySelector(tableSelector);
        table.classList.add('my-table');
        // thead=table.tHead;//or thead=table.querySelector('thead')
        tbody = table.tBodies[0];
        render();
    }

    function render() {
        renderHead();
        renderBody();
    }

    function renderHead() {
        let html = '';

        for (let key in structure) {
            html+=`<th>${structure[key]}</th>`
        }
        thead = document.createElement('thead');
        thead.innerHTML =html;

            table.appendChild(thead);

    }

    /**
     * biao style
     */

    function renderBody() {
        tbody = document.createElement('tbody');
        table.appendChild(tbody);
        list.forEach(it=>{
            let tr=document.createElement('tr');
            for(let key in structure){      
                tr.innerHTML+=`<td>${it[key]||'-'}</td>`;
            }
            tbody.appendChild(tr);
        });
    }

    /**
     * 自己写的
     */

    // function renderBody() {
    //     let html='';
    //     let result='';
    //     tbody = document.createElement('tbody');
    //     list.forEach(it=>{
    //         // for(let key in structure){
    //         //     console.log( key);
    //         //     console.log(it[key] );
    //         // }


    //         html='';
    //         for(let key in structure){
    //             html+=`<td>${it[key]}</td>`;
    //         }
    //         console.log( html);
    //         result+=`<tr>${html}</tr>`
    //         console.log(result);
    //     })
        
    //     tbody.innerHTML=result;
    //     table.appendChild(tbody);
    // }

})();





